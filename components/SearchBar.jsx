'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import gta5Cheats from '@/data/gta5-cheats.json';
import gta6Cheats from '@/data/gta6-cheats.json';

const allCheats = [
  ...gta5Cheats.map(c => ({ ...c, game: 'GTA 5' })),
  ...gta6Cheats.map(c => ({ ...c, game: 'GTA 6' })),
];

export default function SearchBar({ compact, onNavigate }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    if (query.length < 2) { setResults([]); setOpen(false); return; }
    const q = query.toLowerCase();
    const filtered = allCheats.filter(c => c.title.toLowerCase().includes(q) || c.tags.some(t => t.includes(q)) || c.category.toLowerCase().includes(q)).slice(0, 6);
    setResults(filtered);
    setOpen(filtered.length > 0);
  }, [query]);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (cheat) => {
    const game = cheat.game === 'GTA 5' ? 'gta5' : 'gta6';
    router.push(`/${game}/${cheat.category}/${cheat.slug}`);
    setQuery('');
    setOpen(false);
    onNavigate?.();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) { router.push(`/search?q=${encodeURIComponent(query.trim())}`); setOpen(false); onNavigate?.(); }
  };

  return (
    <div ref={ref} className="relative w-full">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search cheats..."
            className={`w-full bg-bg-card border border-border-color rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-primary transition-colors ${compact ? 'px-3 py-2 text-sm' : 'px-4 py-3'}`}
          />
          <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary transition-colors p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </form>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-bg-card border border-border-color rounded-lg shadow-xl z-50 overflow-hidden">
          {results.map(c => (
            <button key={c.id} onClick={() => handleSelect(c)} className="w-full px-4 py-3 text-left hover:bg-bg-secondary transition-colors flex items-center justify-between min-h-[44px]">
              <div>
                <p className="text-sm font-medium">{c.title}</p>
                <p className="text-xs text-text-secondary">{c.game} • {c.category}</p>
              </div>
              <svg className="w-4 h-4 text-text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          ))}
          <button onClick={handleSubmit} className="w-full px-4 py-3 text-left text-sm text-primary hover:bg-bg-secondary transition-colors border-t border-border-color min-h-[44px]">
            Search all results for &quot;{query}&quot;
          </button>
        </div>
      )}
    </div>
  );
}
