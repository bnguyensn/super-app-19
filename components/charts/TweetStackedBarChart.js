import React from 'react';
import Chart from './Chart';

export default function TweetStackedBarChart({ id, width, height, data }) {
  const barPercentage = 0.9;

  return (
    <Chart
      id={id}
      width={width}
      height={height}
      chartOpts={{
        type: 'bar',
        data: {
          datasets: [
            {
              label: 'POSITIVE',
              backgroundColor: '#66bb6a',
              barPercentage,

              data: data.positive,
            },
            {
              label: 'NEUTRAL',
              backgroundColor: '#ffca28',
              barPercentage,

              data: data.neutral,
            },
            {
              label: 'NEGATIVE',
              backgroundColor: '#ef5350',
              barPercentage,

              data: data.negative,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
          },
          responsive: true,
          scales: {
            xAxes: [
              {
                type: 'time',
                offset: true,
                time: {
                  unit: 'hour',
                  displayFormats: {
                    hour: 'DD/MM/YYYY h:mm',
                  },
                },
                stacked: true,
              },
            ],
            yAxes: [{ stacked: true }],
          },
        },
      }}
    />
  );
}
