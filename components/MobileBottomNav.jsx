'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/gta5', label: 'GTA 5', icon: '🎮' },
  { href: '/gta6', label: 'GTA 6', icon: '🔥' },
  { href: '/search', label: 'Search', icon: '🔍' },
  { href: '/news', label: 'News', icon: '📰' },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg-secondary/95 backdrop-blur-md border-t border-border-color pb-safe">
      <div className="flex items-center justify-around h-16">
        {navItems.map(item => {
          const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link key={item.href} href={item.href} className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] text-xs transition-colors ${active ? 'text-primary' : 'text-text-secondary'}`}>
              <span className="text-lg">{item.icon}</span>
              <span className="mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
