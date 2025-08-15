// Footer
import foot from "./footer.js";
document.getElementById("foot").innerHTML = foot;

// Navbar elements
const menuToggle = document.getElementById("menu-toggle");
const menuContent = document.getElementById("menu-content");

// Update menu items based on screen size
function updateMenuItems() {
  // Mobile view
  if (window.innerWidth <= 768) {
    menuContent.innerHTML = `
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="records.html">Records</a></li>
        <li><a href="movies.html">Movies</a></li>
        <li><a href="bookmag.html">Books & Magazines</a></li>
        <li><a href="events.html">Live Events</a></li>
        <li><a href="discounts.html">Discounts</a></li>
        <li><a href="about.html">About</a></li>
      </ul>
    `;
  } 
  // PC view
  else {
    menuContent.innerHTML = `
      <ul>
        <li><a href="events.html">Live Events</a></li>
        <li><a href="discounts.html">Discounts</a></li>
        <li><a href="about.html">About</a></li>
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

let allData = [];

// Fetch from json
fetch("./json/records.json")
  .then(res => res.json())
  .then(data => {
    allData = data;
    renderCards(data);
  });

function renderCards(data) {
  let output = "";

  data.forEach(item => {
    const title = item.title;
    const thumb = `./images/Cards/${item.thumbnail}`;
    const year = item["release-year"];
    const artist = item.artist;
    const genre = item.catagory;
    const price = item.price;

    output += `
      <div class="products-cards-sub">
        <ul>
          <li><img src="${thumb}" alt="${title}"></li>
          <li class="green-txt"><b>${title}</b></li>
          <li class="green-txt">${artist}</li>
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

// Search
document.getElementById("searchBar").addEventListener("input", function () {
  const query = this.value.toLowerCase();

  const filtered = allData.filter(item => {
    const title = item.title?.toLowerCase() || "";
    const artist = item.artist?.toLowerCase() || "";
    const year = item["release-year"]?.toString() || "";

    return (
      title.includes(query) ||
      artist.includes(query) ||
      year.includes(query)
    );
  });

  renderCards(filtered);
});


// Filter
document.getElementById("genreFilter").addEventListener("change", function () {
  const selectedGenre = this.value;

  if (!selectedGenre) {
    renderCards(allData);
  } else {
    const filtered = allData.filter(item => item.catagory === selectedGenre);
    renderCards(filtered);
  }
});
