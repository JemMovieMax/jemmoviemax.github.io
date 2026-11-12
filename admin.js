(() => {
  const cfg = window.JEMMOVIEMAX_CONFIG || {};
  const $ = (s) => document.querySelector(s);
  const loginView = $("#loginView"), dashboardView = $("#dashboardView");
  let client = null, currentUser = null, movieCache = [];

  const configured = cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY &&
    !cfg.SUPABASE_URL.includes("PASTE_") && !cfg.SUPABASE_ANON_KEY.includes("PASTE_");

  function notice(message, type="good") {
    const box = $("#notice");
    box.textContent = message;
    box.className = `notice ${type}`;
    box.classList.remove("hidden");
    window.scrollTo({top:0,behavior:"smooth"});
  }
  function setError(message) { $("#loginError").textContent = message; }
  function showLogin(message="") {
    loginView.classList.remove("hidden");
    dashboardView.classList.add("hidden");
    setError(message);
  }
  function showDashboard() {
    loginView.classList.add("hidden");
    dashboardView.classList.remove("hidden");
    $("#adminEmail").textContent = currentUser?.email || "Administrator";
  }
  async function requireAdmin(user) {
    const {data,error} = await client.from("profiles").select("role").eq("id",user.id).single();
    if (error || data?.role !== "admin") {
      await client.auth.signOut();
      throw new Error("This account is not an administrator. Ask the project owner to grant the admin role.");
    }
  }
  async function start() {
    if (!configured) {
      showLogin("Setup needed: add your Supabase Project URL and publishable/anon key in admin-config.js, then reload.");
      return;
    }
    client = window.supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY);
    const {data:{session}} = await client.auth.getSession();
    if (!session) return showLogin();
    try {
      currentUser = session.user;
      await requireAdmin(currentUser);
      showDashboard();
      await refreshDashboard();
    } catch (e) { showLogin(e.message); }
    client.auth.onAuthStateChange((_event,session) => {
      if (!session) showLogin();
    });
  }
  $("#loginForm").addEventListener("submit",async e=>{
    e.preventDefault(); setError("");
    if (!configured) return start();
    const {data,error} = await client.auth.signInWithPassword({
      email:$("#email").value.trim(), password:$("#password").value
    });
    if (error) return setError(error.message);
    try {
      currentUser=data.user;
      await requireAdmin(currentUser);
      showDashboard(); await refreshDashboard();
    } catch(err) { showLogin(err.message); }
  });
  $("#logoutBtn").addEventListener("click",async()=>{if(client) await client.auth.signOut();currentUser=null;showLogin();});
  async function refreshDashboard() {
    await Promise.all([loadMovies(),loadNotifications()]);
  }
  async function loadMovies() {
    const {data,error}=await client.from("movies").select("*").order("created_at",{ascending:false});
    if(error) {notice(error.message,"bad");return;}
    movieCache=data||[];
    $("#movieCount").textContent=movieCache.length;
    $("#publishedCount").textContent=movieCache.filter(m=>m.is_published).length;
    const rows=movieCache.slice(0,6);
    const markup=tableMarkup(rows);
    $("#recentMovies").innerHTML=markup;
    $("#movieTable").innerHTML=tableMarkup(movieCache,true);
    $("#streamMovie").innerHTML='<option value="">Select a movie</option>'+movieCache.map(m=>`<option value="${escapeHtml(m.id)}">${escapeHtml(m.title)}</option>`).join("");
  }
  function tableMarkup(rows,editable=false) {
    if(!rows.length) return '<p class="muted">No movies yet. Add your first movie from the Upload movie section.</p>';
    return `<table><thead><tr><th>TITLE</th><th>YEAR</th><th>STATUS</th>${editable?'<th>VIDEO</th>':''}</tr></thead><tbody>${rows.map(m=>`<tr><td>${escapeHtml(m.title)}</td><td>${m.release_year||"—"}</td><td><span class="status ${m.is_published?"live":""}">${m.is_published?"Published":"Draft"}</span></td>${editable?`<td>${m.stream_uid?"Uploaded":"Not uploaded"}</td>`:""}</tr>`).join("")}</tbody></table>`;
  }
  function escapeHtml(v) { return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
  $("#movieForm").addEventListener("submit",async e=>{
    e.preventDefault(); const status=$("#movieFormStatus"); status.textContent="Saving…";
    const payload={title:$("#movieTitle").value.trim(),release_year:Number($("#movieYear").value),
      genre:$("#movieGenre").value.trim(),poster_url:$("#moviePoster").value.trim()||null,
      overview:$("#movieOverview").value.trim(),is_published:$("#moviePublished").checked,
      created_by:currentUser.id};
    const {error}=await client.from("movies").insert(payload);
    if(error){status.textContent=error.message;return;}
    status.textContent="Movie saved.";
    e.target.reset(); await loadMovies(); go("movies");
  });
  async function loadNotifications() {
    const {data,error}=await client.from("notifications").select("*").order("created_at",{ascending:false}).limit(20);
    if(error){$("#notificationList").innerHTML=`<p class="muted">${escapeHtml(error.message)}</p>`;return;}
    $("#notificationCount").textContent=data.length;
    $("#notificationList").innerHTML=data.length?`<h3 style="margin:28px 0 10px">Recent notifications</h3><table><thead><tr><th>TITLE</th><th>CREATED</th></tr></thead><tbody>${data.map(n=>`<tr><td>${escapeHtml(n.title)}</td><td>${new Date(n.created_at).toLocaleDateString()}</td></tr>`).join("")}</tbody></table>`:'<p class="muted">No notifications yet.</p>';
  }
  $("#notificationForm").addEventListener("submit",async e=>{
    e.preventDefault();const status=$("#notificationStatus");status.textContent="Publishing…";
    const {error}=await client.from("notifications").insert({
      title:$("#notificationTitle").value.trim(),body:$("#notificationBody").value.trim(),created_by:currentUser.id
    });
    if(error){status.textContent=error.message;return;}
    status.textContent="Notification published.";e.target.reset();await loadNotifications();
  });
  $("#streamForm").addEventListener("submit",async e=>{
    e.preventDefault();const file=$("#videoFile").files[0],movieId=$("#streamMovie").value,status=$("#streamStatus");
    if(!file||!movieId)return;
    status.textContent="Requesting secure upload…";
    try {
      const {data:{session}}=await client.auth.getSession();
      const response=await fetch(`${cfg.SUPABASE_URL}/functions/v1/create-stream-upload`,{
        method:"POST",headers:{Authorization:`Bearer ${session.access_token}`,"Content-Type":"application/json"},
        body:JSON.stringify({movie_id:movieId,file_name:file.name})
      });
      const result=await response.json();
      if(!response.ok)throw new Error(result.error||"Could not create upload.");
      status.textContent="Uploading video…";
      const upload=await fetch(result.uploadURL,{method:"POST",body:file});
      if(!upload.ok)throw new Error("Cloudflare upload failed. Check the file size and Stream settings.");
      const {error}=await client.from("movies").update({stream_uid:result.uid}).eq("id",movieId);
      if(error)throw error;
      status.textContent="Upload sent to Cloudflare Stream. Processing may take a few minutes.";
      await loadMovies();
    } catch(err){status.textContent=err.message;}
  });
  function go(panel) {
    document.querySelectorAll(".panel").forEach(p=>p.classList.add("hidden"));
    const target=$("#panel-"+panel);
    if(target)target.classList.remove("hidden");
    document.querySelectorAll(".side-link").forEach(b=>b.classList.toggle("active",b.dataset.panel===panel));
    $("#panelTitle").textContent=panel==="upload"?"Add movie":panel[0].toUpperCase()+panel.slice(1);
  }
  document.querySelectorAll("[data-panel]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.panel)));
  document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
  // Video upload has its own section, accessible from the Upload movie panel.
  const videoLink=document.createElement("button");
  videoLink.className="side-link";videoLink.dataset.panel="upload-video";videoLink.innerHTML='▷ <span>Video uploads</span>';
  $(".sidebar").insertBefore(videoLink,$(".side-bottom"));
  videoLink.addEventListener("click",()=>go("upload-video"));
  
  $("#forgotPassword").addEventListener("click", async () => {
    setError("");

    if (!configured) {
        return setError("Supabase is not configured.");
    }

    const email = $("#email").value.trim();

    if (!email) {
        return setError("Please enter your admin email first.");
    }

    const { error } = await client.auth.resetPasswordForEmail(email, {
        redirectTo: "https://jemmoviemax.github.io/reset-password.html"
    });

    if (error) {
        return setError(error.message);
    }

    setError("Password recovery email sent! Check your inbox.");
});
  
  start();
})();
