import { notFound } from 'next/navigation';
import CheatCard from '@/components/CheatCard';
import AdBanner from '@/components/AdBanner';
import Breadcrumb from '@/components/Breadcrumb';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import categories from '@/data/categories.json';
import gta6Cheats from '@/data/gta6-cheats.json';

export async function generateStaticParams() {
  return categories.map(c => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = categories.find(c => c.slug === category);
  if (!cat) return {};
  return {
    title: `GTA 6 ${cat.name} Cheats — Expected Cheat Codes`,
    description: `Expected GTA 6 ${cat.name} cheat codes based on GTA 5 patterns. Not yet confirmed by Rockstar Games.`,
    alternates: { canonical: `https://gta6cheatshub.com/gta6/${category}` },
  };
}

export default async function GTA6CategoryPage({ params }) {
  const { category } = await params;
  const cat = categories.find(c => c.slug === category);
  if (!cat) notFound();
  const cheats = gta6Cheats.filter(c => c.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'GTA 6', href: '/gta6' }, { label: cat.name }]} />
      <DisclaimerBanner />
      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">{cat.icon}</span>
        <h1 className="font-heading text-4xl md:text-5xl">GTA 6 {cat.name} Cheats</h1>
      </div>
      <p className="text-text-secondary max-w-2xl mb-8">Expected {cat.name.toLowerCase()} cheats for GTA 6 based on previous GTA games.</p>
      {cheats.length === 0 ? (
        <div className="bg-bg-card border border-border-color rounded-xl p-8 text-center">
          <p className="text-text-secondary">No expected cheats in this category yet. Check back after GTA 6 launches.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cheats.map(c => <CheatCard key={c.id} cheat={c} game="gta6" />)}
        </div>
      )}
      <AdBanner size="leaderboard" />
    </div>
  );
}
