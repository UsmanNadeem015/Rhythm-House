// Nav Bar
import navBar from "./nav.js";
document.getElementById("navBar").innerHTML = navBar;
//Footer
import foot from "./footer.js";
document.getElementById("foot").innerHTML = foot

// Toggle menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

let allItems = [];

// Fetch and render from bookmag.json
fetch("./json/bookmag.json")
  .then(res => res.json())
  .then(data => {
    allItems = data;
    renderItems(data);
  })
  .catch(err => console.error("Error loading bookmag.json:", err));

function renderItems(data) {
  let output = "";

  data.forEach(item => {
    const title = item.title;
    const thumb = `./images/Cards/${item.thumbnail}`;
    const year = item["release-year"];
    const genre = item.genre; 
    const price = item.price;

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

// Search functionality
document.getElementById("searchBar")?.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  const filtered = allItems.filter(item => {
    const title = item.title?.toLowerCase() || "";
    const year = item["release-year"]?.toString() || "";
    return title.includes(query) || year.includes(query);
  });

  renderItems(filtered);
});
