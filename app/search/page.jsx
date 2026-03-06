'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import CheatCard from '@/components/CheatCard';
import Breadcrumb from '@/components/Breadcrumb';
import AdBanner from '@/components/AdBanner';
import SearchBar from '@/components/SearchBar';
import gta5Cheats from '@/data/gta5-cheats.json';
import gta6Cheats from '@/data/gta6-cheats.json';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const allCheats = [
    ...gta5Cheats.map(c => ({ ...c, game: 'gta5', gameLabel: 'GTA 5' })),
    ...gta6Cheats.map(c => ({ ...c, game: 'gta6', gameLabel: 'GTA 6' })),
  ];

  const results = query.length >= 2
    ? allCheats.filter(c => {
        const q = query.toLowerCase();
        return c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.tags.some(t => t.includes(q)) || c.category.toLowerCase().includes(q);
      })
    : [];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Search' }]} />
      <h1 className="font-heading text-3xl md:text-4xl mb-4">Search Results</h1>
      <div className="max-w-xl mb-8"><SearchBar /></div>

      {query && (
        <p className="text-text-secondary mb-6">
          {results.length} result{results.length !== 1 ? 's' : ''} for &quot;{query}&quot;
        </p>
      )}

      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((c, i) => (
            <div key={c.id}>
              <CheatCard cheat={c} game={c.game} />
              {(i + 1) % 9 === 0 && <div className="col-span-full"><AdBanner size="infeed" /></div>}
            </div>
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-12 bg-bg-card border border-border-color rounded-xl">
          <p className="text-4xl mb-4">🔍</p>
          <p className="text-text-secondary">No cheats found for &quot;{query}&quot;</p>
          <p className="text-sm text-text-secondary mt-2">Try searching for a cheat name, category, or keyword.</p>
        </div>
      ) : (
        <div className="text-center py-12 bg-bg-card border border-border-color rounded-xl">
          <p className="text-4xl mb-4">🎮</p>
          <p className="text-text-secondary">Enter a search term to find cheats</p>
        </div>
      )}

      <AdBanner size="leaderboard" />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="max-w-5xl mx-auto px-4 py-8"><p className="text-text-secondary">Loading...</p></div>}>
      <SearchResults />
    </Suspense>
  );
}
