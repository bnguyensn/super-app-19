import React, { useState, useEffect, useRef } from 'react';

import Layout from '../components/layout/Layout';

export default function Home() {
  const timerRef = useRef(null);
  const [dotsCount, setDotsCount] = useState(2);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDotsCount((prevDotsCount) => (prevDotsCount + 1) % 3);
    }, 750);

    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  let dotEls = [];
  for (let i = 0; i <= dotsCount; i++) {
    dotEls.push(<span key={i}>.</span>);
  }

  return (
    <Layout>
      <h3 className="text-center px-4">
        Something exciting is coming soon{dotEls}
      </h3>
    </Layout>
  );
}
