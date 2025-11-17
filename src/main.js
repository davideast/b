import Chart from 'chart.js/auto';
import data from './data.json';

const processData = (data) => {
  const runTypeCounts = {};

  data.forEach((entry) => {
    const runType = entry.RunType;
    if (runTypeCounts[runType]) {
      runTypeCounts[runType]++;
    } else {
      runTypeCounts[runType] = 1;
    }
  });

  return runTypeCounts;
};

const renderChart = () => {
  const counts = processData(data);
  const labels = Object.keys(counts);
  const values = Object.values(counts);

  const ctx = document.getElementById('runTypeChart').getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Run Type Distribution',
          data: values,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Run Type Distribution',
        },
      },
    },
  });
};

document.addEventListener('DOMContentLoaded', () => {
  renderChart();
});
