import Chart from 'chart.js/auto';
import './style.css';

// --- Dark Mode Logic ---
const themeToggleBtn = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

// Check for saved user preference, if any, on load of the website
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  sunIcon.classList.remove('hidden');
  moonIcon.classList.add('hidden');
} else {
  document.documentElement.classList.remove('dark');
  sunIcon.classList.add('hidden');
  moonIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function() {
  // toggle icons inside button
  sunIcon.classList.toggle('hidden');
  moonIcon.classList.toggle('hidden');

  // if set via local storage previously
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    updateChartTheme(false);
  } else {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    updateChartTheme(true);
  }

  // If not set via local storage previously (first time or respecting system)
  // But we've just clicked it, so we are setting it now.
  // The above logic covers it because we set localStorage.theme.
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
