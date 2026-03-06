'use client';
import { useState, useRef } from 'react';
import CopyButton from './CopyButton';

const platforms = [
  { key: 'ps5', label: 'PS' },
  { key: 'xboxSeriesX', label: 'Xbox' },
  { key: 'pcConsole', label: 'PC Console' },
  { key: 'inGamePhone', label: 'In-Game Phone' },
];

export default function PlatformTabs({ cheat }) {
  const [active, setActive] = useState('ps5');
  const scrollRef = useRef(null);
  const code = cheat.platforms?.[active] || 'N/A';

  return (
    <div className="bg-bg-card border border-border-color rounded-xl overflow-hidden">
      <div ref={scrollRef} className="flex overflow-x-auto scrollbar-none border-b border-border-color">
        {platforms.map(p => (
          <button key={p.key} onClick={() => setActive(p.key)}
            className={`shrink-0 px-4 py-3 text-sm font-medium transition-colors min-h-[44px] whitespace-nowrap ${active === p.key ? 'text-primary border-b-2 border-primary bg-primary/5' : 'text-text-secondary hover:text-white'}`}>
            {p.label}
          </button>
        ))}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs text-text-secondary mb-2 uppercase tracking-wider">{platforms.find(p => p.key === active)?.label} Cheat Code</p>
            <div className="bg-bg-secondary rounded-lg p-4 border border-border-color">
              <code className="font-mono text-lg text-secondary break-all">{code}</code>
            </div>
          </div>
          <CopyButton text={code} />
        </div>
      </div>
    </div>
  );
}
