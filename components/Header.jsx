'use client';
import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { href: '/', label: 'Home' },
    { href: '/gta5', label: 'GTA 5 Cheats' },
    { href: '/gta6', label: 'GTA 6 Cheats' },
    { href: '/news', label: 'News' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border-color">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl md:text-3xl font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            GTA CHEATS HUB
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm text-text-secondary hover:text-primary transition-colors whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block w-48 xl:w-64">
          <SearchBar compact />
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-bg-secondary border-t border-border-color animate-fade-in">
          <div className="p-4"><SearchBar onNavigate={() => setMobileOpen(false)} /></div>
          <nav className="flex flex-col">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 text-text-secondary hover:text-primary hover:bg-bg-card transition-colors border-t border-border-color min-h-[44px] flex items-center">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
