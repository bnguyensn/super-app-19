import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ title = 'Super App #19 🎇', children }) {
  return (
    <div>
      <Head key="head">
        <title>{title}</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
