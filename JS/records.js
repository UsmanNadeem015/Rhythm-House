// Nav Bar
import navBar from "./nav.js"
document.getElementById("navBar").innerHTML = navBar;
//Footer
import foot from "./footer.js";
document.getElementById("foot").innerHTML = foot

// Toggle responsive menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});

let allData = [];

// Fetch and store full data
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

// Search bar
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


