import React from 'react';
import Link from 'next/link';

const NavLinkDesktop = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="mx-4 no-underline">{children}</a>
    </Link>
  );
};

export default function Header() {
  return (
    <header>
      <nav className="mx-auto flex items-center p-4 max-w-screen-lg">
        <h4 className="font-display flex-grow text-pink-600">Super App #19</h4>

        <NavLinkDesktop href="/">Home</NavLinkDesktop>
        <NavLinkDesktop href="/about">About</NavLinkDesktop>
      </nav>
    </header>
  );
}
