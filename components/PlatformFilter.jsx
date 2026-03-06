'use client';

const platformOptions = ['All', 'PS', 'Xbox', 'PC'];

export default function PlatformFilter({ active, onChange }) {
  return (
    <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
      {platformOptions.map(p => (
        <button key={p} onClick={() => onChange(p)}
          className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${active === p ? 'bg-primary text-white' : 'bg-bg-card border border-border-color text-text-secondary hover:text-white'}`}>
          {p}
        </button>
      ))}
    </div>
  );
}
