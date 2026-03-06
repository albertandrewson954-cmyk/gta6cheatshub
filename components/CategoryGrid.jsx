import Link from 'next/link';
import categories from '@/data/categories.json';

export default function CategoryGrid({ game = 'gta5' }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map(cat => (
        <Link key={cat.slug} href={`/${game}/${cat.slug}`}
          className="group bg-bg-card border border-border-color rounded-xl p-4 text-center hover:border-primary/50 transition-all duration-200 hover:shadow-lg" style={{ '--cat-color': cat.accentColor }}>
          <div className="text-3xl mb-2">{cat.icon}</div>
          <h3 className="font-heading text-base md:text-lg">{cat.name}</h3>
          <p className="text-xs text-text-secondary mt-1 line-clamp-2 hidden md:block">{cat.description}</p>
          <span className="text-xs mt-2 inline-block px-2 py-0.5 rounded-full bg-white/5 text-text-secondary">{cat.cheatCount} cheats</span>
        </Link>
      ))}
    </div>
  );
}
