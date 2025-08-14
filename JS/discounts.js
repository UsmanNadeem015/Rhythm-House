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
        <li><a href="bookmag.html">Books & Magzines</a></li>
        <li><a href="events.html">Live Events</a></li>
      </ul>
    `;
// PC view
  } else {
    menuContent.innerHTML = `
      <ul>
        <li><a href="events.html">Live Events</a></li>
        <li><a href="about.html">About</a></li>
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


