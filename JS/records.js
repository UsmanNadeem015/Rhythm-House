// Nav Bar
import navBar from "./nav.js"
document.getElementById("navBar").innerHTML = navBar;

// Toggle responsive menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

// Store all records globally for search
let allRecords = [];

// Container where cards will be displayed
const container = document.querySelector(".products-cards-main");

// Function to render records (initial + filtered)
function renderRecords(records) {
  container.innerHTML = ""; // Clear previous cards

  records.forEach(item => {
    const card = document.createElement("div");
    card.className = "products-cards-sub";

    const title = item.title || "Unknown Album";
    const thumb = item.thumb || "./images/Cards/default.jpg";
    const year = item.year || "Unknown Year";
    const artist = item.title?.split(" - ")[0] || "Unknown Artist";
    const genre = item.genre?.join(', ') || "Genre not listed";
    const price = (Math.floor(Math.random() * 50) + 50) + "$";

    card.innerHTML = `
      <ul>
        <li><img src="${thumb}" alt="${title}"></li>
        <li class="green-txt"><b>${title}</b></li>
        <li class="green-txt">${artist}</li>
        <li class="green-txt">${year}</li>
        <li class="green-txt">${genre}</li>
        <li class="green-txt">${price}</li>
        <li><button class="products-cards-btn">Buy Now</button></li>
      </ul>
    `;

    container.appendChild(card);
  });
}

// Fetch from Discogs API and save to allRecords
const token = "yeSzMhUaxdAUtfEbFIULutdzssHnwCZTwocnhLlV";

fetch(`https://api.discogs.com/database/search?q=vinyl&type=release&token=${token}`)
  .then(res => res.json())
  .then(data => {
    // Save results to allRecords for search functionality
    allRecords = data.results.slice(0, 20);

    // Render initially
    renderRecords(allRecords);
  })
  .catch(error => {
    console.error("Error fetching records from Discogs:", error);
    container.innerHTML = "<p style='color:red;'>Failed to load records.</p>";
  });


// SEARCH FUNCTIONALITY
document.getElementById("searchBar").addEventListener("input", () => {
  // Current text entered in the search box
  const searchBar = document.getElementById("searchBar").value.toLowerCase();

  const filtered = allRecords.filter(item => {
    const title = item.title?.toLowerCase() || "";
    const artist = item.title?.split(" - ")[0].toLowerCase() || "";
    const year = item.year?.toString() || "";

    return (
      title.includes(searchBar) ||
      artist.includes(searchBar) ||
      year.includes(searchBar)
    );
  });

  // Render only filtered records
  renderRecords(filtered);
});
