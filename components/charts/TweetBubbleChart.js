import React from 'react';
import Chart from './Chart';

export default function TweetBubbleChart({
  id,
  width,
  height,
  data,
  chartOpts,
}) {
  return (
    <Chart
      id={id}
      width={width}
      height={height}
      chartOpts={{
        type: 'bubble',
        data,
        options: chartOpts,
      }}
    />
  );
}
