// Nav Bar
import navBar from "./nav.js"
document.getElementById("navBar").innerHTML = navBar;
// Toggle responsive menu
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
  });

