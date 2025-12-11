import Chart from 'chart.js/auto';
import './style.css';

const ctx = document.getElementById('themesChart');

if (ctx) {
  new Chart(ctx, {
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
            text: 'Number of Mentions'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Distribution of Feedback Themes'
        }
      }
    }
  });
}
