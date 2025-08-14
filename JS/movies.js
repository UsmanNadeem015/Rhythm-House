//Footer
import foot from "./footer.js";
document.getElementById("foot").innerHTML = foot

// Navbar elements
const menuToggle = document.getElementById("menu-toggle");
const menuContent = document.getElementById("menu-content");

// Update menu items based on screen size
function updateMenuItems() {
  if (window.innerWidth <= 768) {
    // Mobile view
    menuContent.innerHTML = `
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="records.html">Records</a></li>
        <li><a href="movies.html">Movies</a></li>
        <li><a href="bookmag.html">Books & Magazines</a></li>
        <li><a href="events.html">Live Events</a></li>
        <li><a href="membership.html">Membership</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    `;
  } else {
    // PC view
    menuContent.innerHTML = `
      <ul>
        <li><a href="events.html">Live Events</a></li>
        <li><a href="membership.html">Membership</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    `;
  }
}

// Toggle menu visibility
menuToggle.addEventListener("click", () => {
  menuContent.classList.toggle("active");
});

// Load correct menu pc or mob
updateMenuItems();
window.addEventListener("resize", updateMenuItems);
let allMovies = [];

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

// Filter
document.getElementById("movieGenreFilter").addEventListener("change", function () {
  const selectedGenre = this.value;

  if (!selectedGenre) {
    renderMovies(allMovies); // Agar kuch select nahi to sari movies dikhao
  } else {
    const filtered = allMovies.filter(movie => movie.genre === selectedGenre);
    renderMovies(filtered);
  }
});