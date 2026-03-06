const sizes = {
  leaderboard: { desktop: 'h-[90px]', mobile: 'h-[60px]', label: '728×90' },
  rectangle: { desktop: 'h-[250px]', mobile: 'h-[250px]', label: '300×250' },
  sidebar: { desktop: 'h-[600px]', mobile: 'h-[250px]', label: '300×600' },
  infeed: { desktop: 'h-[120px]', mobile: 'h-[100px]', label: 'In-Feed' },
  anchor: { desktop: 'hidden', mobile: 'h-[50px] fixed bottom-16 left-0 right-0 z-40', label: 'Anchor' },
};

export default function AdBanner({ size = 'leaderboard' }) {
  const s = sizes[size] || sizes.leaderboard;
  if (size === 'anchor') {
    return (
      <div className={`md:hidden ${s.mobile} ad-placeholder`}>
        <span className="text-text-secondary text-xs">Advertisement</span>
      </div>
    );
  }
  return (
    <div className="my-8 max-w-4xl mx-auto px-4">
      <p className="text-text-secondary text-xs mb-1 text-center">Advertisement</p>
      <div className={`ad-placeholder w-full ${s.mobile} md:${s.desktop}`}>
        <span className="text-text-secondary text-xs">{s.label} Ad Placeholder</span>
      </div>
    </div>
  );
}
