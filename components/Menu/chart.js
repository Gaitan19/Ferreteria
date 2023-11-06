import { CChart } from '@coreui/react-chartjs';
import React from 'react';

const Chart = () => {
  return (
    <CChart
      type="bar"
      data={{
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#fbcd8d',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
          },
        ],
      }}
      labels="months"
      options={{
        plugins: {
          legend: {
            labels: {
              color: 'rgba(44, 56, 74, 0.95)',
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(0, 0, 21, 0.175)',
            },
            ticks: {
              color: 'rgba(44, 56, 74, 0.95)',
            },
          },
          y: {
            grid: {
              color: 'rgba(0, 0, 21, 0.175)',
            },
            ticks: {
              color: 'rgba(44, 56, 74, 0.95)',
            },
          },
        },
      }}
      height={110}
      width={290}
      customTooltips={false}
    />
  );
};

export default Chart;
