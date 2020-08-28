import React from 'react';

import Layout from '../components/layout/Layout';
import CreatorBlock from '../components/about/CreatorBlock';

export default function AboutPage() {
  return (
    <Layout>
      <div className="mx-auto w-full max-w-screen-lg px-4">
        <h3 className="text-center py-4">The Creators</h3>

        <div className="flex w-full py-4">
          <CreatorBlock
            name="Stephen 'Steve' Bowser"
            avatarSrc="/images/sbowser.jpg"
            description="I like running, like, a lot 🏃‍♂️."
            homepage="https://linkedin.com/in/stevewbowser"
          />
          <CreatorBlock
            name="Binh"
            avatarSrc="/images/bnguyen.jpg"
            description="Your neighbourhood coffee enthusiast ☕."
            homepage="https://twitter.com/bnguyensn"
            twitter="https://twitter.com/bnguyensn"
            github="https://github.com/bnguyensn"
          />
        </div>
      </div>
    </Layout>
  );
}
