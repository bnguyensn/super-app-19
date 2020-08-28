import React from 'react';
import Link from 'next/link';

const NavLinkDesktop = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="m-4 no-underline">{children}</a>
    </Link>
  );
};

export default function Header() {
  return (
    <header>
      <nav className="flex items-center">
        <NavLinkDesktop href="/">Home</NavLinkDesktop>
        <NavLinkDesktop href="/about">About</NavLinkDesktop>
      </nav>
    </header>
  );
}
