// Nav Bar
import navHome from "./navHome.js"
document.getElementById("navHome").innerHTML = navHome;

// Toggle responsive menu
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
  });

// AOS
    AOS.init({
      duration: 1000,
       once: false
    });