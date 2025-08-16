
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
        <li><a href="disconuts.html">Discounts</a></li>
        <li><a href="about.html">About Us</a></li>
      </ul>
    `;
// PC view
  } else {
    menuContent.innerHTML = `
      <ul>
        <li><a href="disconuts.html">Discounts</a></li>
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

// Update menu on load + resize
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
// Prevents loading on click on submit btn
document.getElementById("contact-submit").addEventListener("click", function(event) {
  event.preventDefault()  
})