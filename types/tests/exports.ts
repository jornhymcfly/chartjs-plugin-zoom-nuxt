import { Chart } from 'chart.js';
import Zoom, {pan, zoom, resetZoom } from '../index';

Chart.register(Zoom);
Chart.unregister(Zoom);

const chart = new Chart('id', {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      data: []
    }]
  },
  options: {
    plugins: {
      zoom: {
        limits: {
          x: {
            min: 1,
            max: 2,
            minRange: 1
          },
          y: {
            min: 1,
            max: 2,
            minRange: 1
          }
        },
        pan: {
          enabled: true,
          mode: 'x'
        },
        zoom: {
          enabled: true,
          mode: 'x',

        }
      },
    }
  },
  plugins: [Zoom]
});

chart.resetZoom();
chart.zoom(1.1);
chart.zoom({ x: 1, y: 1.1, focalPoint: { x: 10, y: 10 } }, true);

chart.pan(10);
chart.pan({ x: 10, y: 20 }, [chart.scales.x]);

pan(chart, -42, undefined, 'zoom');
zoom(chart, { x: 1, y: 1.1, focalPoint: { x: 10, y: 10 } }, 'zoom');
resetZoom(chart, 'none');
