// Nav Bar
// import navHome from "./navHome.js"
// document.getElementById("navHome").innerHTML = navHome;

// Toggle responsive menu
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
  });

// AOS
    AOS.init({
      duration: 1000,
       once: false
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