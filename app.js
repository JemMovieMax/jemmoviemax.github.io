/* ==========================================
   CINEMAX — MOVIE CATALOGUE
   100 released movies + upcoming movies
========================================== */

// 1. ORIGINAL 12 MOVIES
const originalMovies = [
  {
    id:1,title:"Dune: Part Two",year:2024,rating:8.5,duration:"2h 46m",
    genre:"Sci-Fi",genres:["Sci-Fi","Adventure"],
    description:"Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    poster:"https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop:"https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    trailer:"Way of the Water"
  },
  {
    id:2,title:"Oppenheimer",year:2023,rating:8.3,duration:"3h 00m",
    genre:"Drama",genres:["Drama","Thriller"],
    description:"The story of J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    poster:"https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    backdrop:"https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    trailer:"uYPbbksJxIg"
  },
  {
    id:3,title:"Spider-Man: No Way Home",year:2021,rating:8.2,duration:"2h 28m",
    genre:"Action",genres:["Action","Adventure"],
    description:"Peter Parker asks Doctor Strange for help after his identity is revealed, but the spell goes wrong.",
    poster:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    backdrop:"https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    trailer:"JfVOs4VSpmA"
  },
  {
    id:4,title:"The Batman",year:2022,rating:7.8,duration:"2h 56m",
    genre:"Action",genres:["Action","Thriller"],
    description:"Batman investigates a series of clues left by a sadistic killer in Gotham City.",
    poster:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop:"https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpa1mtDei.jpg",
    trailer:"mqqft2x_Aa4"
  },
  {
    id:5,title:"Interstellar",year:2014,rating:8.7,duration:"2h 49m",
    genre:"Sci-Fi",genres:["Sci-Fi","Adventure"],
    description:"A team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars.",
    poster:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop:"https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    trailer:"zSWdZVtXT7E"
  },
  {
    id:6,title:"Joker",year:2019,rating:8.1,duration:"2h 02m",
    genre:"Drama",genres:["Drama","Thriller"],
    description:"A struggling comedian descends into madness and becomes a symbol of a city pushed to the edge.",
    poster:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    backdrop:"https://image.tmdb.org/t/p/original/n6bUiwev9ZBz4v2g2bY8wq8m1Qm.jpg",
    trailer:"zAGVQLHvwOY"
  },
  {
    id:7,title:"The Dark Knight",year:2008,rating:9.0,duration:"2h 32m",
    genre:"Action",genres:["Action","Drama"],
    description:"Batman faces his greatest psychological and physical test when the Joker unleashes chaos on Gotham.",
    poster:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop:"https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
    trailer:"EXeTwQWrcwY"
  },
  {
    id:8,title:"Barbie",year:2023,rating:7.0,duration:"1h 54m",
    genre:"Comedy",genres:["Comedy","Adventure"],
    description:"Barbie and Ken leave Barbie Land for a journey into the real world.",
    poster:"https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    backdrop:"https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    trailer:"pBk4NYhWNMM"
  },
  {
    id:9,title:"Spider-Man: Into the Spider-Verse",year:2018,rating:8.4,duration:"1h 57m",
    genre:"Animation",genres:["Animation","Action"],
    description:"Miles Morales becomes Spider-Man and joins heroes from other dimensions to save the multiverse.",
    poster:"https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    backdrop:"https://image.tmdb.org/t/p/original/7d6EY00g1c39SGawikl9ZBwC9pO.jpg",
    trailer:"g4Hbz2jLxvQ"
  },
  {
    id:10,title:"Top Gun: Maverick",year:2022,rating:8.2,duration:"2h 11m",
    genre:"Action",genres:["Action","Drama"],
    description:"Maverick trains a new generation of pilots for a dangerous mission.",
    poster:"https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    backdrop:"https://image.tmdb.org/t/p/original/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    trailer:"giXco2jaZ_4"
  },
  {
    id:11,title:"A Quiet Place",year:2018,rating:7.5,duration:"1h 30m",
    genre:"Thriller",genres:["Thriller","Drama"],
    description:"A family must live in silence while hiding from creatures that hunt by sound.",
    poster:"https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    backdrop:"https://image.tmdb.org/t/p/original/roYyPiQDQKmIKUEhO912693tSja.jpg",
    trailer:"WR7cc5t7tv8"
  },
  {
    id:12,title:"Coco",year:2017,rating:8.4,duration:"1h 45m",
    genre:"Animation",genres:["Animation","Adventure"],
    description:"A young musician enters the Land of the Dead and discovers the truth behind his family's history.",
    poster:"https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    backdrop:"https://image.tmdb.org/t/p/original/placeholder.jpg",
    trailer:"Rvr68u6k5sI"
  }
];

// 2. ADDITIONAL 88 MOVIES
// These titles are added to bring the released catalogue to 100.

const additionalTitles = [
  // Tamil movies
  "Vikram",
  "Leo",
  "Jailer",
  "Master",
  "Kaithi",
  "Rangasthalam",
  "Pushpa: The Rise",
  "Ponniyin Selvan: Part II",
  "Salaar: Part 1 – Ceasefire",
  "Geetha Govindam",
  "RRR",
  "Karnan",
  "96",
  "Hanu-Man",
  "Ratsasan",
  "Thani Oruvan",
  "Mersal",
  "Thuppakki",
  "Ghajini",
  "Enthiran",
  "Sivaji",
  "Agent Sai Srinivasa Athreya",
  "Brochevarevarura",
  "Ayan",
  "Ante Sundaraniki",
  "Vinnaithaandi Varuvaayaa",
  "Sita Ramam",
  "Eega",
  "Kaala",
  "Kalki 2898 AD",
  "Baahubali: The Beginning",
  "Baahubali 2: The Conclusion",
  "Hi Nanna",
  "Super Deluxe",
  "Lucky Baskhar",
  "Don",
  "Love Today",
  "Devara: Part 1",
  "Magadheera",
  "Shyam Singha Roy",
  "Fidaa",
  "Maharaja",
  "Tholi Prema", 
  "Meiyazhagan",
  "Dragon",
  "Tourist Family",

  // English movies
  "Avengers: Endgame",
  "Avengers: Infinity War",
  "Guardians of the Galaxy",
  "Black Panther",
  "Doctor Strange",
  "Iron Man",
  "Captain America: Civil War",
  "Thor: Ragnarok",
  "The Matrix",
  "Inception",
  "The Prestige",
  "Gladiator",
  "Titanic",
  "Avatar",
  "Avatar: The Way of Water",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Harry Potter and the Philosopher's Stone",
  "Jurassic Park",
  "The Conjuring",
  "It",
  "The Shawshank Redemption",
  "Forrest Gump",
  "The Green Mile",
  "John Wick",
  "Mission: Impossible – Fallout",
  "Mad Max: Fury Road",
  "The Wolf of Wall Street",
  "La La Land",
  "Whiplash",
  "The Grand Budapest Hotel",
  "Toy Story",
  "Finding Nemo",
  "Inside Out",
  "Ratatouille",
  "How to Train Your Dragon",
  "The Lion King",
  "Shrek",
  "Kung Fu Panda",
  "Deadpool",
  "Logan",
   "The Amazing Spider-Man",
  "Spider-Man: Far From Home"
];

// 3. AUTOMATICALLY BUILD THE ADDITIONAL MOVIE OBJECTS

const genreOptions = [
  {genre:"Action",genres:["Action","Adventure"]},
  {genre:"Drama",genres:["Drama"]},
  {genre:"Thriller",genres:["Thriller","Drama"]},
  {genre:"Comedy",genres:["Comedy"]},
  {genre:"Sci-Fi",genres:["Sci-Fi","Adventure"]},
  {genre:"Animation",genres:["Animation","Adventure"]},
  {genre:"Adventure",genres:["Adventure","Action"]}
];

const additionalMovies = additionalTitles.map((title,index) => {
  const selectedGenre = genreOptions[index % genreOptions.length];

  return {
    id:index+13,
    title,
    year:2010 + (index % 16),
    rating:Number((7.0 + ((index * 7) % 20) / 10).toFixed(1)),
    duration:"2h 10m",
    genre:selectedGenre.genre,
    genres:selectedGenre.genres,
    description:`Discover ${title}, a movie selected for the JemMovieMax collection. Explore its story, genre and trailer.`,
    poster:`https://placehold.co/500x750/171720/ffffff?text=${encodeURIComponent(title)}`,
    backdrop:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=85",
    trailer:null
  };
});

// 4. UPCOMING MOVIES
// Dates are planned dates and may change by country or distributor.

const upcomingMovies = [
  {
    id:1001,
    title:"Avengers: Doomsday",
    year:2026,
    releaseDate:"2026-12-18",
    genre:"Action",
    genres:["Action","Sci-Fi"],
    rating:0,
    duration:"Coming soon",
    description:"The next chapter in the Marvel Cinematic Universe.",
    poster:"https://image.tmdb.org/t/p/w500/placeholder.jpg",
    backdrop:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600&q=85",
    trailer:null
  },
  {
    id:1002,
    title:"Avengers: Secret Wars",
    year:2027,
    releaseDate:"2027-12-17",
    genre:"Action",
    genres:["Action","Sci-Fi"],
    rating:0,
    duration:"Coming soon",
    description:"A future Avengers adventure.",
    poster:"https://placehold.co/500x750/171720/ffffff?text=Secret+Wars",
    backdrop:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600&q=85",
    trailer:null
  },
  {
    id:1003,
    title:"Frozen 3",
    year:2027,
    releaseDate:"2027-11-24",
    genre:"Animation",
    genres:["Animation","Adventure"],
    rating:0,
    duration:"Coming soon",
    description:"A new adventure in the Frozen universe.",
    poster:"https://placehold.co/500x750/171720/ffffff?text=Frozen+3",
    backdrop:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=85",
    trailer:null
  },  

  {
    id:1004,
    title:"Scene",
    year:2026,
    releaseDate:"2026-11-06",
    genre:"Action",
    genres:["Action","Comedy"],
    rating:0,
    duration:"Coming soon",
    description:"Upcoming Tamil action-comedy starring Suriya, Naslen and Nazriya Nazim.",
    poster:"https://placehold.co/500x750/171720/ffffff?text=Scene",
    backdrop:"https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=85",
    trailer:null
  },
  {
    id:1005,
    title:"Ramayana: Part 1",
    year:2026,
    releaseDate:"2026-11-05",
    genre:"Fantasy",
    genres:["Fantasy","Action","Drama"],
    rating:0,
    duration:"Coming soon",
    description:"A cinematic retelling of the Ramayana starring Ranbir Kapoor, Sai Pallavi and Yash.",
    poster:"https://placehold.co/500x750/171720/ffffff?text=Ramayana",
    backdrop:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&q=85",
    trailer:null
  },
  {
    id:1006,
    title:"Om",
    year:2026,
    releaseDate:"2026-11-20",
    genre:"Action",
    genres:["Action","Drama"],
    rating:0,
    duration:"Coming soon",
    description:"An upcoming action drama starring Dhanush, Mammootty, Sai Pallavi and Sreeleela.",
    poster:"https://placehold.co/500x750/171720/ffffff?text=OM",
    backdrop:"https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600&q=85",
    trailer:null
  }
];

// 5. DATE CHECK — UPCOMING MOVIES MOVE AUTOMATICALLY

function getLocalDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth()+1).padStart(2,"0");
  const day = String(now.getDate()).padStart(2,"0");
  return `${year}-${month}-${day}`;
}

const today = getLocalDateString();

const newlyReleasedMovies = upcomingMovies
  .filter(movie => movie.releaseDate <= today)
  .map(movie => ({
    ...movie,
    year:Number(movie.year),
    rating:7.5,
    duration:"Coming soon",
    description:movie.description
  }));

const stillUpcomingMovies = upcomingMovies.filter(
  movie => movie.releaseDate > today
);

const movies = [
  ...originalMovies,
  ...additionalMovies,
  ...newlyReleasedMovies
];
const TMDB_API_KEY = "cbbfdbd0d77197501a310c3b403304ae";

async function fetchMovieArtwork(movie) {
  try {
    const url =
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movie.title)}`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error("TMDB error:", movie.title, response.status);
      return;
    }

    const data = await response.json();
    const result = data.results?.find(item =>
  item.poster_path &&
  item.title?.toLowerCase() === movie.title.toLowerCase()
) || data.results?.find(item => item.poster_path);

    if (result) {
        movie.tmdbId = result.id;


      movie.poster =
        `https://image.tmdb.org/t/p/w500${result.poster_path}`;

      if (result.backdrop_path) {
        movie.backdrop =
          `https://image.tmdb.org/t/p/original${result.backdrop_path}`;
      }
    }
  } catch (error) {
    console.error("Artwork error:", movie.title, error);
  }
}
async function fetchMovieTrailer(movie) {
  try {
    if (!movie.tmdbId) return;

    // Keep existing valid YouTube IDs
    if (movie.trailer && /^[a-zA-Z0-9_-]{11}$/.test(movie.trailer)) {
      return;
    }

    const url =
      `https://api.themoviedb.org/3/movie/${movie.tmdbId}/videos?api_key=${TMDB_API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) return;

    const data = await response.json();

    console.log("TRAILER CHECK:", movie.title, movie.tmdbId, data.results);

    const youtubeVideos = (data.results || []).filter(video =>
      video.site === "YouTube" &&
      video.key &&
      /^[a-zA-Z0-9_-]{11}$/.test(video.key)
    );

    const selectedVideo =
      youtubeVideos.find(video =>
        video.type === "Trailer" && video.official
      ) ||
      youtubeVideos.find(video =>
        video.type === "Trailer"
      ) ||
      youtubeVideos.find(video =>
        video.type === "Teaser" && video.official
      ) ||
      youtubeVideos.find(video =>
        video.type === "Teaser"
      ) ||
      youtubeVideos.find(video =>
        video.type === "Clip"
      );

    if (selectedVideo) {
      movie.trailer = selectedVideo.key;
    }

  } catch (error) {
    console.error("Trailer error:", movie.title, error);
  }
}
async function loadTMDBArtwork() {
  const artworkMovies = [...movies, ...stillUpcomingMovies];
  let index = 0;

  async function worker() {
    while (index < artworkMovies.length) {
      const movie = artworkMovies[index++];
      await fetchMovieArtwork(movie);
    }
  }

  await Promise.all(
    Array.from({ length: 5 }, () => worker())
  );

  // Fetch trailers after TMDB movie IDs are available
  index = 0;

  async function trailerWorker() {
    while (index < artworkMovies.length) {
      const movie = artworkMovies[index++];
      await fetchMovieTrailer(movie);
    }
  }

  await Promise.all(
    Array.from({ length: 5 }, () => trailerWorker())
  );

  render();
  showHeroSlide(currentHeroIndex);

  console.log("JemMovieMax artwork and trailers loaded!");
}
console.log("TOTAL MOVIES:", movies.length);
console.log("Original:", originalMovies.length);
console.log("Additional:", additionalMovies.length);
console.log("New releases:", newlyReleasedMovies.length);
console.log("TOTAL:", movies.length);

// 6. STORAGE AND APP STATE

const $ = selector => document.querySelector(selector);

const storage = {
  get(key,fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key,value) {
    localStorage.setItem(key,JSON.stringify(value));
  }
};

let activeCategory = "All";
let currentMovie = null;
let authMode = "login";
let user = storage.get("cinemaxUser",null);
let watchlist = storage.get("cinemaxWatchlist",[]);

const heroMovie = movies[0];

// 7. IMAGE FALLBACKS

function safeImage(url) {
  return url || "https://placehold.co/500x750/171720/ffffff?text=CineMax";
}

function handleImageError(img) {
  img.onerror = null;
  img.src = "https://placehold.co/500x750/171720/ffffff?text=CineMax";
}

// 8. MOVIE CARDS

function movieCard(movie) {
  const saved = watchlist.includes(movie.id);

  return `
    <article class="movie-card" data-id="${movie.id}">
      <div class="poster-wrap">
        <img loading="lazy"
          src="${safeImage(movie.poster)}"
          alt="${movie.title} poster"
          onerror="handleImageError(this)">

        <button class="save-btn ${saved?"saved":""}"
          data-save="${movie.id}"
          aria-label="${saved?"Remove from":"Add to"} watchlist">
          ${saved?"♥":"♡"}
        </button>

        <div class="poster-overlay">
          <span class="play-circle">▶</span>
        </div>
      </div>

      <div class="movie-info">
        <div class="movie-title-line">
          <span class="movie-title">${movie.title}</span>
          <span class="movie-rating">★ ${Number(movie.rating).toFixed(1)}</span>
        </div>

        <div class="movie-sub">
          ${movie.year}<span>•</span>${movie.genre}
        </div>
      </div>
    </article>
  `;
}

// 9. UPCOMING CARDS

function upcomingCard(movie) {
  const release = new Date(movie.releaseDate+"T00:00:00");

  const releaseText = release.toLocaleDateString("en-US",{
    day:"numeric",
    month:"short",
    year:"numeric"
  });

  return `
    <article class="movie-card upcoming-card">
      <div class="poster-wrap">
        <img loading="lazy"
          src="${safeImage(movie.poster)}"
          alt="${movie.title} poster"
          onerror="handleImageError(this)">
      </div>

      <div class="movie-info">
        <div class="movie-title-line">
          <span class="movie-title">${movie.title}</span>
        </div>

        <div class="movie-sub">${movie.year} • ${movie.genre}</div>
        <span class="release-date">Release: ${releaseText}</span>
      </div>
    </article>
  `;
}

// 10. RENDER RELEASED MOVIES, WATCHLIST AND UPCOMING

function render() {
  const searchInput = $("#searchInput");
  const query = searchInput.value.trim().toLowerCase();
  const sortValue = $("#sortSelect")?.value || "default";

  const filtered = movies.filter(movie => {
    const categoryMatch =
      activeCategory === "All" ||
      movie.genres.includes(activeCategory) ||
      movie.genre === activeCategory;

    const searchMatch =
      !query ||
      movie.title.toLowerCase().includes(query) ||
      movie.genres.join(" ").toLowerCase().includes(query);

    return categoryMatch && searchMatch;
  });

  // Sort movies
  if (sortValue === "rating") {
    filtered.sort((a, b) => Number(b.rating) - Number(a.rating));
  } else if (sortValue === "newest") {
    filtered.sort((a, b) => Number(b.year) - Number(a.year));
  } else if (sortValue === "oldest") {
    filtered.sort((a, b) => Number(a.year) - Number(b.year));
  } else if (sortValue === "title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  $("#movieGrid").innerHTML = filtered.map(movieCard).join("");
  $("#resultCount").textContent = `${filtered.length} titles`;

  $("#resultsTitle").textContent = query
    ? `Search results for “${searchInput.value.trim()}”`
    : activeCategory === "All"
      ? "Trending now"
      : `${activeCategory} movies`;

  $("#emptyState").classList.toggle("hidden", filtered.length > 0);

  const saved = movies.filter(movie => watchlist.includes(movie.id));

  $("#watchlistGrid").innerHTML = saved.map(movieCard).join("");
  $("#watchlistCount").textContent = saved.length;
  $("#watchlistEmpty").classList.toggle("hidden", saved.length > 0);

  $("#upcomingGrid").innerHTML = stillUpcomingMovies.map(upcomingCard).join("");
  $("#upcomingCount").textContent = stillUpcomingMovies.length;
}
$("#sortSelect").addEventListener("change", render);
// 11. TOAST MESSAGE

function toast(message) {
  const element = $("#toast");

  element.textContent = message;
  element.classList.add("show");

  clearTimeout(toast.timer);

  toast.timer = setTimeout(() => {
    element.classList.remove("show");
  },2200);
}

// 12. WATCHLIST

function setWatchlist(id) {
  watchlist = watchlist.includes(id)
    ? watchlist.filter(item => item!==id)
    : [...watchlist,id];

  storage.set("cinemaxWatchlist",watchlist);

  render();

  toast(
    watchlist.includes(id)
      ? "Added to your watchlist"
      : "Removed from your watchlist"
  );
}

// 13. MOVIE DETAILS

function openDetails(id) {
  currentMovie = movies.find(movie => movie.id===Number(id));

  if (!currentMovie) return;

  $("#detailCover").style.backgroundImage =
    `url("${currentMovie.backdrop || currentMovie.poster}")`;

  $("#detailTitle").textContent = currentMovie.title;

  $("#detailMeta").innerHTML = `
    <span class="rating">★ ${Number(currentMovie.rating).toFixed(1)}</span>
    <span>${currentMovie.year}</span>
    <span>${currentMovie.duration}</span>
    <span>${currentMovie.genres.join(" / ")}</span>
  `;

  $("#detailDescription").textContent = currentMovie.description;

  $("#detailSave").textContent =
    watchlist.includes(currentMovie.id)
      ? "♥ In your watchlist"
      : "♡ Add to watchlist";

  showModal("movieModal");
}

// 14. MODALS

function showModal(id) {
  $("#"+id).classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function hideModal(id) {
  $("#"+id).classList.add("hidden");

  if (!document.querySelector(".modal-backdrop:not(.hidden)")) {
    document.body.style.overflow = "";
  }
}

// 15. TRAILERS
// Known YouTube IDs are embedded.
// Movies without a verified ID open a YouTube search instead.

function playTrailer(movie) {
  if (!movie) return;

  $("#trailerTitle").textContent = movie.title+" — Trailer";

  const validYoutubeId =
    movie.trailer &&
    /^[a-zA-Z0-9_-]{11}$/.test(movie.trailer);

  if (validYoutubeId) {
    $("#videoFrame").innerHTML = `
      <iframe
        src="https://www.youtube-nocookie.com/embed/${movie.trailer}?autoplay=1&rel=0"
        title="${movie.title} trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    `;
  } else {
    const searchUrl =
      "https://www.youtube.com/results?search_query="+
      encodeURIComponent(movie.title+" official trailer");

    $("#videoFrame").innerHTML = `
      <div style="
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        padding:25px;
        text-align:center;
        color:white;
        background:#111;
      ">
        <h3>Trailer not embedded yet</h3>
        <p style="color:#aaa;font-size:13px">
          Search YouTube for the official ${movie.title} trailer.
        </p>
        <a href="${searchUrl}" target="_blank" rel="noopener"
          style="
            background:#e50914;
            color:white;
            padding:12px 20px;
            border-radius:5px;
            text-decoration:none;
            font-size:13px;
            font-weight:bold;
          ">
          Find trailer on YouTube
        </a>
      </div>
    `;
  }

  showModal("trailerModal");
}

// 16. HERO
// HERO SLIDER
const heroSlides = movies.slice(0, 4);
let currentHeroIndex = 0;
let heroTimer;

function showHeroSlide(index) {
  currentHeroIndex = index;

  const movie = heroSlides[currentHeroIndex];
  setHero(movie);

  $("#heroPagination").innerHTML = heroSlides.map((_, i) => `
    <button class="${i === currentHeroIndex ? "pagination-active" : ""}"
      data-slide="${i}"
      aria-label="Show slide ${i + 1}">
    </button>
  `).join("");
}

function startHeroSlider() {
  clearInterval(heroTimer);

  heroTimer = setInterval(() => {
    const nextIndex = (currentHeroIndex + 1) % heroSlides.length;
    showHeroSlide(nextIndex);
  }, 6000);
}

$("#heroPagination").addEventListener("click", event => {
  const button = event.target.closest("[data-slide]");

  if (!button) return;

  showHeroSlide(Number(button.dataset.slide));
  startHeroSlider();
});
function setHero(movie) {
  const backdrop = $("#heroBackdrop");

  backdrop.style.opacity = "0";

  setTimeout(() => {
    backdrop.style.backgroundImage =
      `url("${movie.backdrop || movie.poster}")`;

    backdrop.style.opacity = "1";
  }, 250);

  $("#heroTitle").textContent = movie.title.toUpperCase();

  $("#heroMeta").innerHTML = `
    <span class="rating">★ ${Number(movie.rating).toFixed(1)}</span>
    <span>${movie.year}</span>
    <span>${movie.duration}</span>
    <span class="pill">${movie.genre}</span>
  `;

  $("#heroDescription").textContent = movie.description;

  $("#heroTrailer").onclick = () => playTrailer(movie);
  $("#heroDetails").onclick = () => openDetails(movie.id);
}

// 17. ACCOUNT DISPLAY

function updateAccount() {
  if (user) {
    $("#accountLabel").textContent = user.name || "Member";
    $(".profile-avatar").textContent =
      (user.name || "M")[0].toUpperCase();

    $("#signOut").classList.remove("hidden");
  } else {
    $("#accountLabel").textContent = "Guest";
    $(".profile-avatar").textContent = "G";
    $("#signOut").classList.add("hidden");
  }
}

// 18. ACCOUNT MODE

function setAuthMode(mode) {
  authMode = mode;

  $("#authTitle").textContent =
    mode==="login" ? "Welcome back" : "Create your account";

  $(".auth-subtitle").textContent =
    mode==="login"
      ? "Sign in to keep your watchlist close."
      : "Join JemMovieMax and save films for later.";

  $("#nameField").classList.toggle("hidden",mode==="login");
  $("#authName").required = mode==="register";

  $("#authSubmit").textContent =
    mode==="login" ? "Sign in" : "Create account";

  document.querySelectorAll(".auth-tab").forEach(button => {
    button.classList.toggle("active",button.dataset.auth===mode);
  });

  $("#authError").textContent = "";
}

// 19. MOVIE GRID CLICK EVENTS

$("#movieGrid").addEventListener("click",event => {
  const save = event.target.closest("[data-save]");

  if (save) {
    event.stopPropagation();
    setWatchlist(Number(save.dataset.save));
    return;
  }

  const card = event.target.closest(".movie-card");

  if (card) openDetails(card.dataset.id);
});

// 20. WATCHLIST CLICK EVENTS

$("#watchlistGrid").addEventListener("click",event => {
  const save = event.target.closest("[data-save]");

  if (save) {
    event.stopPropagation();
    setWatchlist(Number(save.dataset.save));
    return;
  }

  const card = event.target.closest(".movie-card");

  if (card) openDetails(card.dataset.id);
});

// 21. CATEGORY FILTER

$("#categoryList").addEventListener("click",event => {
  const button = event.target.closest("[data-category]");

  if (!button) return;

  activeCategory = button.dataset.category;

  document.querySelectorAll(".category-chip").forEach(item => {
    item.classList.toggle("selected",item===button);
  });

  render();
});

// 22. SEARCH

$("#searchInput").addEventListener("input",render);

$("#searchToggle").addEventListener("click",() => {
  $("#searchInput").focus();
  $("#browse").scrollIntoView({behavior:"smooth"});
});

// 23. KEYBOARD SHORTCUTS

document.addEventListener("keydown",event => {
  if (
    event.key==="/" &&
    !["INPUT","TEXTAREA"].includes(document.activeElement.tagName)
  ) {
    event.preventDefault();
    $("#searchInput").focus();
  }

  if (event.key==="Escape") {
    document.querySelectorAll(".modal-backdrop:not(.hidden)")
      .forEach(modal => hideModal(modal.id));
  }
});

// 24. CLOSE MODALS

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click",() => {
    hideModal(button.closest(".modal-backdrop").id);
  });
});

document.querySelectorAll(".modal-backdrop").forEach(modal => {
  modal.addEventListener("click",event => {
    if (event.target===modal) hideModal(modal.id);
  });
});

// 25. DETAIL TRAILER BUTTON

$("#detailTrailer").addEventListener("click",() => {
  hideModal("movieModal");
  playTrailer(currentMovie);
});

// 26. DETAIL WATCHLIST BUTTON

$("#detailSave").addEventListener("click",() => {
  if (!currentMovie) return;

  setWatchlist(currentMovie.id);

  $("#detailSave").textContent =
    watchlist.includes(currentMovie.id)
      ? "♥ In your watchlist"
      : "♡ Add to watchlist";
});

// 27. CLEAR FILTERS

$("#clearFilters").addEventListener("click",() => {
  $("#searchInput").value = "";
  activeCategory = "All";

  document.querySelectorAll(".category-chip").forEach(button => {
    button.classList.toggle(
      "selected",
      button.dataset.category==="All"
    );
  });

  render();
});

// 28. ACCOUNT BUTTON

$("#accountButton").addEventListener("click",() => {
  setAuthMode("login");
  $("#authError").textContent = "";
  showModal("authModal");
});

// 29. LOGIN / REGISTER TABS

document.querySelectorAll(".auth-tab").forEach(button => {
  button.addEventListener("click",() => {
    setAuthMode(button.dataset.auth);
  });
});

// 30. ACCOUNT FORM

$("#authForm").addEventListener("submit",event => {
  event.preventDefault();

  const email = $("#authEmail").value.trim().toLowerCase();
  const password = $("#authPassword").value;
  const name = $("#authName").value.trim();

  if (password.length<6) {
    $("#authError").textContent =
      "Password must be at least 6 characters.";
    return;
  }

  let accounts = storage.get("cinemaxAccounts",{});

  if (authMode==="register") {
    if (!name) {
      $("#authError").textContent = "Please enter your name.";
      return;
    }

    if (accounts[email]) {
      $("#authError").textContent =
        "An account with this email already exists.";
      return;
    }

    accounts[email] = {name,password};
    storage.set("cinemaxAccounts",accounts);

    user = {name,email};
  } else {
    if (!accounts[email] || accounts[email].password!==password) {
      $("#authError").textContent =
        "Email or password is incorrect. Register first if this is your first visit.";
      return;
    }

    user = {
      name:accounts[email].name,
      email
    };
  }

  storage.set("cinemaxUser",user);

  updateAccount();
  hideModal("authModal");

  toast(
    authMode==="login"
      ? "Welcome back!"
      : "Your JemMovieMax account is ready!"
  );
});

// 31. SIGN OUT

$("#signOut").addEventListener("click",() => {
  user = null;
  localStorage.removeItem("cinemaxUser");

  updateAccount();
  hideModal("authModal");

  toast("You have signed out.");
});

// 32. MOBILE MENU

$("#mobileMenu").addEventListener("click",() => {
  $(".main-nav").classList.toggle("open");
});

$(".main-nav").addEventListener("click",event => {
  if (event.target.tagName==="A") {
    $(".main-nav").classList.remove("open");
  }
});

// 33. FOOTER YEAR

$("#year").textContent = new Date().getFullYear();

// 34. START THE WEBSITE

render();

showHeroSlide(0);
startHeroSlider();
updateAccount();
loadTMDBArtwork();

console.log("JemMovieMax loaded:",movies.length,"released movies");
console.log("Upcoming movies:",stillUpcomingMovies.length);
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loadingScreen");

  if (loadingScreen) {
    loadingScreen.classList.add("loading-hidden");
  }
});