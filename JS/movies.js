// Nav Bar
import navBar from "./nav.js";
document.getElementById("navBar").innerHTML = navBar;

// Toggle responsive menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

const apiKey = "c1f67c9e";
const movieList = [
  "Demon Slayer -Kimetsu no Yaiba- The Movie: Infinity Castle",
  "Fantastic Four: First Steps",
  "The Naked Gun",
  "F1",
  "Inception",
  "The Matrix",
  "Interstellar",
  "The Dark Knight",
  "Fight Club",
  "Pulp Fiction",
  "Forrest Gump",
  "The Godfather",
  "Gladiator",
  "The Shawshank Redemption",
  "Insidious",
  "The Conjuring",
  "Batman",
  "Moana",
  "Puss in Boots",
  "Avengers: Endgame",
  "Avengers: Infinity War",
  "Iron Man",
  "Thor: Ragnarok",
  "Captain America: Civil War",
  "Black Panther",
  "Doctor Strange",
  "Spider-Man: No Way Home",
  "Guardians of the Galaxy",
  "The Flash",
  "Joker",
  "Shazam!",
  "Aquaman",
  "Wonder Woman",
  "Deadpool",
  "Deadpool 2",
  "Logan",
  "X-Men: Days of Future Past",
  "The Wolverine",
  "Man of Steel",
  "Harry Potter and the Sorcerer's Stone",
  "Harry Potter and the Goblet of Fire",
  "Fantastic Beasts and Where to Find Them",
  "The Hunger Games",
  "Divergent",
  "The Maze Runner",
  "Avatar",
  "Avatar: The Way of Water",
  "Frozen",
  "Frozen II",
  "Zootopia",
  "Encanto",
  "Tangled",
  "Raya and the Last Dragon",
  "Big Hero 6",
  "Coco",
  "Soul",
  "Inside Out",
  "Up",
  "Toy Story",
  "Toy Story 2",
  "Toy Story 3",
  "Toy Story 4",
  "Finding Nemo",
  "Finding Dory",
  "WALL·E",
  "Cars",
  "Cars 2",
  "Monsters, Inc.",
  "The Incredibles",
  "The Incredibles 2"
];


const container = document.getElementById('movie-cards');
const searchInput = document.getElementById('searchBar');

let allMovies = []; // Cache of all loaded movies

async function fetchMovie(title) {
  const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`);
  const data = await res.json();
  return data;
}

function createCard(movie) {
  return `
    <div class="products-cards-sub">
      <ul>
        <li><img src="${movie.Poster !== "N/A" ? movie.Poster : './images/placeholder.jpg'}" alt="${movie.Title}"></li>
        <li class="green-txt"><b>${movie.Title}</b></li>
        <li class="green-txt">${movie.Director}</li>
        <li class="green-txt">${movie.Year}</li>
        <li class="green-txt">${movie.Genre}</li>
        <li class="green-txt">$99</li>
        <li>
          <button class="products-cards-btn">Buy Now</button>
        </li>
      </ul>
    </div>
  `;
}

function renderMovies(movieArray) {
  container.innerHTML = ""; // Clear existing
  movieArray.forEach(movie => {
    container.innerHTML += createCard(movie);
  });
}

async function loadMovies() {
  for (const title of movieList) {
    const data = await fetchMovie(title);
    if (data.Response === "True") {
      allMovies.push(data);
    } else {
      console.warn(`Movie not found: ${title}`);
    }
  }

  renderMovies(allMovies); // Show all movies initially
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const filtered = allMovies.filter(movie => {
    const title = movie.Title?.toLowerCase() || "";
    const director = movie.Director?.toLowerCase() || "";
    const year = movie.Year?.toString() || "";
    const genre = movie.Genre?.toLowerCase() || "";

    return (
      title.includes(query) ||
      director.includes(query) ||
      year.includes(query) ||
      genre.includes(query)
    );
  });

  renderMovies(filtered);
});

// Load on page start
loadMovies();
