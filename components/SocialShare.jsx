'use client';

export default function SocialShare({ title, url }) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url || (typeof window !== 'undefined' ? window.location.href : ''));

  const links = [
    { label: '𝕏 Twitter', href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, color: 'hover:bg-white/10' },
    { label: '🔗 Reddit', href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`, color: 'hover:bg-orange-500/10' },
    { label: '💬 WhatsApp', href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, color: 'hover:bg-green-500/10' },
  ];

  return (
    <div className="flex flex-col items-start gap-3">
      <span className="text-sm text-text-secondary">Share this cheat</span>
      <div className="flex gap-2 flex-wrap">
        {links.map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg border border-border-color text-sm text-text-secondary transition-colors min-h-[44px] flex items-center ${l.color}`}>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
