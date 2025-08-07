// Nav Bar
import navBar from "./nav.js";
document.getElementById("navBar").innerHTML = navBar;

// Toggle menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

let allMovies = [];

// Fetch and render
fetch("./json/movies.json")
  .then(res => res.json())
  .then(data => {
    allMovies = data;
    renderMovies(data);
  });

function renderMovies(data) {
  let output = "";

  data.forEach(movie => {
    const title = movie.title;
    const thumb = `./images/Cards/${movie.thumbnail}`;
    const year = movie["release-year"];
    const genre = movie.genre;
    const price = movie.price;

    output += `
      <div class="products-cards-sub">
        <ul>
          <li><img src="${thumb}" alt="${title}"></li>
          <li class="green-txt"><b>${title}</b></li>
          <li class="green-txt">${year}</li>
          <li class="green-txt">${genre}</li>
          <li class="green-txt">${price}</li>
          <li><button class="products-cards-btn">Buy Now</button></li>
        </ul>
      </div>
    `;
  });

  document.querySelector(".products-cards-main").innerHTML = output;
}

//Search
document.getElementById("searchBar").addEventListener("input", function () {
  const query = this.value.toLowerCase();

  const filtered = allMovies.filter(movie => {
    const title = movie.title?.toLowerCase() || "";
    const year = movie["release-year"]?.toString() || "";

    return title.includes(query) || year.includes(query);
  });

  renderMovies(filtered);
});
