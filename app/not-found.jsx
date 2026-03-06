'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Red overlay with fade-in */}
      <div className={`absolute inset-0 bg-red-900/40 transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`} />

      {/* Vignette effect */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.8) 100%)' }} />

      <div className={`relative z-10 text-center transition-all duration-1000 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
        {/* WASTED text */}
        <h1 className="font-heading text-7xl md:text-9xl text-red-500 tracking-widest mb-4" style={{ textShadow: '0 0 20px rgba(220,38,38,0.5), 0 0 40px rgba(220,38,38,0.3), 0 4px 8px rgba(0,0,0,0.8)' }}>
          WASTED
        </h1>

        <p className={`text-text-secondary text-lg md:text-xl mb-8 transition-opacity duration-1000 delay-500 ${show ? 'opacity-100' : 'opacity-0'}`}>
          Page Not Found
        </p>

        <p className={`text-text-secondary/60 text-sm mb-8 transition-opacity duration-1000 delay-700 ${show ? 'opacity-100' : 'opacity-0'}`}>
          The page you are looking for does not exist or has been moved.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-opacity duration-1000 delay-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
          <Link href="/" className="px-8 py-4 bg-red-600 text-white font-bold rounded-lg text-lg hover:bg-red-700 transition-colors min-h-[44px]">
            Go Home
          </Link>
          <Link href="/gta5/best-cheats" className="px-8 py-4 border-2 border-red-600 text-red-400 font-bold rounded-lg text-lg hover:bg-red-600/10 transition-colors min-h-[44px]">
            Browse Popular Cheats
          </Link>
        </div>
      </div>

      {/* Scan lines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
      }} />
    </div>
  );
}
