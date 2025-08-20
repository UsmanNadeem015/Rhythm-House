
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
        <li><a href="bookmag.html">Books & Magazines</a></li>
        <li><a href="events.html">Live Events</a></li>
        <li><a href="discounts.html">Discounts</a></li>
        <li><a href="about.html">About Us</a></li>
      </ul>
    `;
// PC view
  } else {
    menuContent.innerHTML = `
      <ul>
        <li><a href="discounts.html">Discounts</a></li>
        <li><a href="events.html">Live Events</a></li>
        <li><a href="about.html">About Us</a></li>
      </ul>
    `;
  }
}

// Toggle menu open/close
menuToggle.addEventListener("click", () => {
  menuContent.classList.toggle("active");
});

// Update menu on load or resize
updateMenuItems();
window.addEventListener("resize", updateMenuItems);


// AOS
    AOS.init({
      duration: 1000
    });

// Chart.js
const ctx = document.getElementById('salesChart').getContext('2d');

const salesChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Records Sales',
        data: [120, 150, 170, 140, 180, 200, 220, 210, 230, 250, 240, 260],
        borderColor: '#4caf50',
        pointBackgroundColor: '#4caf50',
        tension: 0.3,
        fill: false
      },
      {
        label: 'Movies Sales',
        data: [100, 130, 160, 120, 150, 170, 200, 190, 210, 230, 220, 240],
        borderColor: '#2196f3',
        pointBackgroundColor: '#2196f3',
        tension: 0.3,
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sales (in units)'
        },
        grid: {
          color: 'rgb(102, 102, 102)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Month'
        },
        grid: {
          color: 'rgb(102, 102, 102)'
        }
      }
    }
  }
});

// Contact
document.getElementById("contact-submit").addEventListener("click", function(event) {
  event.preventDefault(); // stop form refresh

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Validation
  if (name == "") {
    alert("Full Name is required");
    return;
  }

  if (email.includes("@") == false || email.includes(".") == false) {
    alert("Please enter a valid email address");
    return;
  }

  if (message.length < 10) {
    alert("Message must be at least 10 characters long");
    return;
  }

  // Save to Local Storage
  localStorage.setItem("contactName", name);
  localStorage.setItem("contactEmail", email);
  localStorage.setItem("contactMessage", message);

  alert("✅ Thank you! Your message has been saved.");

  // Clear form
  document.getElementById("contact-form").reset();
});


// ONLY UN COMMENT " // " COMMENTS DO NOT UN COMMENT " */ " COMMENTS

/* ================================
   View Saved Data
   (ONLY UN COMMENT WHEN NEEDED)
================================= */
// let savedName = localStorage.getItem("contactName");
// let savedEmail = localStorage.getItem("contactEmail");
// let savedMessage = localStorage.getItem("contactMessage");

// if (savedName || savedEmail || savedMessage) {
//   console.log("===== Saved Contact Message =====");
//   console.log("Name:", savedName);
//   console.log("Email:", savedEmail);
//   console.log("Message:", savedMessage);
//   console.log("==============================");
// } else {
//   console.log("No data saved yet.");
// }


/* ================================
   Clear Saved Data
   (ONLY UN COMMENT WHEN NEEDED)
================================= */

// localStorage.removeItem("contactName");
// localStorage.removeItem("contactEmail");
// localStorage.removeItem("contactMessage");
// console.log("Contact form data cleared!");



// Contact End
