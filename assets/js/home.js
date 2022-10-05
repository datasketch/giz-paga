import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import chunk from 'lodash.chunk';

const appURLInput = document.getElementById('app-url');

Chart.register(...registerables);

async function run() {
  const appURL = appURLInput.value;
  if (!appURL) {
    // eslint-disable-next-line no-alert
    window.alert('No se ha establecido la url de la aplicación');
  }
  const { origin } = new URL(appURL);
  const apiURL = `${origin}/api/charts`;
  const { data } = await axios.get(apiURL);

  // eslint-disable-next-line no-new
  new Chart(
    document.getElementById('avances-general'),
    {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          {
            label: data.avance_general[0].etiquetas,
            data: [data.avance_general[0].avance],
            backgroundColor: 'rgb(253, 214, 14)',
          },
          {
            label: data.avance_general[1].etiquetas,
            data: [data.avance_general[1].avance],
            backgroundColor: 'rgb(255, 127, 0)',
          },
        ],
      },
      plugins: [ChartDataLabels],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderColor: '#cacaca',
            borderWidth: 1,
            bodyColor: 'rgb(0, 0, 0)',
            titleColor: 'rgb(0, 0, 0)',
            cornerRadius: 0,
            displayColors: false,
            titleFont: {
              weight: 'normal',
              family: 'IBM Plex Sans',
            },
            bodyFont: {
              family: 'IBM Plex Sans',
            },
            titleMarginBottom: 0,
            callbacks: {
              title([context]) {
                const { label } = context.dataset;
                return `${label}: ${context.raw.toFixed(2)}%`;
              },
              label() { return ''; },
            },
          },
          datalabels: {
            formatter(value, context) {
              if (context.datasetIndex === 0) {
                return `Cumplimiento: ${value.toFixed(2)}%`;
              }
              return `Por ejecutar: ${value.toFixed(2)}%`;
            },
            color: '#28333f',
            font: {
              family: 'IBM Plex Sans',
              size: 16,
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            stacked: true,
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    },
  );

  // eslint-disable-next-line no-new
  new Chart(
    document.getElementById('avances-por-compromiso'),
    {
      type: 'bar',
      data: {
        labels: '',
        datasets: [{
          label: '',
          data: data.avance_por_compromiso,
          backgroundColor: 'rgb(0, 118, 183)',
          hoverBackgroundColor: 'rgb(81 150 207)',
        }],
      },
      plugins: [ChartDataLabels],
      options: {
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            formatter(value) {
              return `${Math.round(value.avance)}%`;
            },
            anchor: 'end',
            align: 'top',
            color: '#28333f',
            font: {
              weight: 'semibold',
              family: 'IBM Plex Sans',
            },
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderColor: 'rgb(0, 118, 183)',
            borderWidth: 1,
            bodyColor: 'rgb(0, 0, 0)',
            titleColor: 'rgb(0, 0, 0)',
            cornerRadius: 0,
            displayColors: false,
            xAlign: 'center',
            yAlign: 'top',
            titleFont: {
              weight: 'normal',
              family: 'IBM Plex Sans',
            },
            bodyFont: {
              family: 'IBM Plex Sans',
            },
            callbacks: {
              title([context]) {
                const text = context.raw.compromiso;
                return chunk(text.split(' '), 10).map((c) => c.join(' '));
              },
              label(context) {
                return `Avance: ${context.raw.avance.toFixed(2)}%`;
              },
            },
          },
        },
        parsing: {
          xAxisKey: 'order',
          yAxisKey: 'avance',
        },
        scales: {
          x: {
            grid: {
              borderColor: 'rgba(208, 217, 219, 0.05)',
              borderDash: [1, 5],
              drawTicks: false,
            },
            ticks: {
              font: {
                family: 'IBM Plex Sans',
              },
            },
          },
          y: {
            suggestedMax: 100,
            suggestedMin: 0,
            beginAtZero: true,
            grid: {
              borderColor: 'rgba(208, 217, 219, 0.05)',
              borderDash: [1, 5],
              drawTicks: false,
            },
            ticks: {
              font: {
                family: 'IBM Plex Sans',
              },
              callback(val) {
                return `${val}%`;
              },
            },
          },
        },
      },
    },
  );
}

run().catch((error) => {
  console.error(error);
});
