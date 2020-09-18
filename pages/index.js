import React from 'react';

import Layout from '../components/layout/Layout';
import TweetStackedBarChart from '../components/charts/TweetStackedBarChart';

import data from '../data/data.json';

const yScale = {
  POSITIVE: 3,
  NEUTRAL: 2,
  NEGATIVE: 1,
};

const dataByHour = {};

data.forEach((d) => {
  const { tweetdatehour, overallSentiment, count } = d;

  if (!dataByHour[tweetdatehour]) {
    dataByHour[tweetdatehour] = {};
  }

  dataByHour[tweetdatehour][overallSentiment.toLowerCase()] = count;
});

const dataBySentiment = {
  positive: [],
  neutral: [],
  negative: [],
};

Object.entries(dataByHour).forEach(
  ([dateStr, { positive, negative, neutral }]) => {
    const date = new Date(dateStr);

    dataBySentiment.positive.push({
      x: date,
      y: positive,
    });
    dataBySentiment.neutral.push({
      x: date,
      y: neutral,
    });
    dataBySentiment.negative.push({
      x: date,
      y: negative,
    });
  }
);

export default function Home() {
  return (
    <Layout>
      <h3 className="text-center px-4">Tweet analysis</h3>

      <div className="max-w-screen-lg mx-auto p-4">
        <TweetStackedBarChart
          id="tweet-chart"
          width={500}
          height={500}
          data={dataBySentiment}
        />
      </div>
    </Layout>
  );
}
