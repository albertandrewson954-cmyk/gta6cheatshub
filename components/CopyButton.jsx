'use client';
import { useState } from 'react';

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button onClick={handleCopy} className={`shrink-0 min-w-[44px] min-h-[44px] px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${copied ? 'bg-success/20 text-success border border-success/30' : 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20'}`}>
      {copied ? '✓ Copied!' : 'Copy Code'}
    </button>
  );
}
