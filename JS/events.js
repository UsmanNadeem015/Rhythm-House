//Footer
import foot from "./footer.js";
document.getElementById("foot").innerHTML = foot

const menuToggle = document.getElementById("menu-toggle");
const menuContent = document.getElementById("menu-content");

function updateMenuItems() {
// mobiile view
  if (window.innerWidth <= 768) {
    menuContent.innerHTML = `
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="records.html">Records</a></li>
        <li><a href="movies.html">Movies</a></li>
        <li><a href="#">Membership</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    `;
// PC view
  } else {
    menuContent.innerHTML = `
      <ul>
        <li><a href="membership.html">Membership</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    `;
  }
}

// Toggle menu open/close
menuToggle.addEventListener("click", () => {
  menuContent.classList.toggle("active");
});

// Update menu on load + resize
updateMenuItems();
window.addEventListener("resize", updateMenuItems);


let allEvents = [];

fetch("./json/events.json")
  .then(res => res.json())
  .then(data => {
    allEvents = data;
    renderEvents(data);
  });

function renderEvents(data) {
  let output = "";

  data.forEach(event => {
    const title = event.title;
    const performer = event.performer;
    const date = event.date;
    const timing = event.timing;
    const location = event.location;
    const price = event.entryfee;
    const thumb = `./images/Event/${event.thumbnail}`;

    output += `
      <div class="card" style="width: 22rem;" data-aos="fade-up">
        <img src="${thumb}" class="card-img-top" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">
            ${performer} <br>
            ${date} <br>
            ${timing} <br>
            ${location}
          </p>
          <div class="price-btn">
            <a href="#" class="btn">${price}</a>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector("#event-cards").innerHTML = output;
}
