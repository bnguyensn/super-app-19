import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';

export default function ChartComponent({
  id,
  width,
  height,
  chartOpts,
  children,
}) {
  const chartElRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // https://www.chartjs.org/docs/latest/developers/api.html#destroy
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(chartElRef.current, chartOpts);
  }, [chartOpts]);

  return (
    <canvas id={id} width={width} height={height} ref={chartElRef}>
      {children}
    </canvas>
  );
}
