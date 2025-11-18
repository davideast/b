import Chart from 'chart.js/auto';
import './style.css';

// --- Dark Mode Logic ---
const themeToggleBtn = document.getElementById('themeToggle');

// Note: Initial theme application is handled by an inline script in index.html to prevent FOUC.

themeToggleBtn.addEventListener('click', function() {
  // Toggle the class on the HTML element
  const isDark = document.documentElement.classList.toggle('dark');

  // Update local storage
  localStorage.theme = isDark ? 'dark' : 'light';

  // Update the chart theme
  updateChartTheme(isDark);
});


// --- Chart Logic ---
const ctx = document.getElementById('themesChart');
let myChart;

const lightThemeColors = {
  text: '#374151', // gray-700
  grid: '#e5e7eb'  // gray-200
};

const darkThemeColors = {
  text: '#9ca3af', // gray-400
  grid: '#374151'  // gray-700
};

function getChartConfig(isDark) {
  const colors = isDark ? darkThemeColors : lightThemeColors;

  return {
    type: 'bar',
    data: {
      labels: [
        'SDK Functionality & Improvements',
        'Code Generation & Refactoring',
        'Integrations & Workflows',
        'Prompt Engineering',
        'Documentation & Learning'
      ],
      datasets: [{
        label: 'Mentions',
        data: [13, 16, 11, 4, 6],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)', // blue-500
          'rgba(16, 185, 129, 0.7)', // emerald-500
          'rgba(249, 115, 22, 0.7)', // orange-500
          'rgba(168, 85, 247, 0.7)', // purple-500
          'rgba(236, 72, 153, 0.7)'  // pink-500
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(249, 115, 22)',
          'rgb(168, 85, 247)',
          'rgb(236, 72, 153)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y', // Horizontal bar chart
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Mentions',
            color: colors.text
          },
          ticks: {
            color: colors.text
          },
          grid: {
            color: colors.grid
          }
        },
        y: {
          ticks: {
            color: colors.text
          },
          grid: {
            color: colors.grid
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Distribution of Feedback Themes',
          color: colors.text
        }
      }
    }
  };
}

if (ctx) {
  const isDark = document.documentElement.classList.contains('dark');
  myChart = new Chart(ctx, getChartConfig(isDark));
}

function updateChartTheme(isDark) {
  if (myChart) {
    const newConfig = getChartConfig(isDark);
    myChart.options = newConfig.options;
    myChart.update();
  }
}
