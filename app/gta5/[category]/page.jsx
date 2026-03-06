import { notFound } from 'next/navigation';
import CheatCard from '@/components/CheatCard';
import AdBanner from '@/components/AdBanner';
import Breadcrumb from '@/components/Breadcrumb';
import categories from '@/data/categories.json';
import gta5Cheats from '@/data/gta5-cheats.json';

export async function generateStaticParams() {
  return categories.map(c => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = categories.find(c => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} Cheats — GTA 5 Cheat Codes`,
    description: `All GTA 5 ${cat.name} cheat codes for PS5, PS4, Xbox and PC. ${cat.description}`,
    alternates: { canonical: `https://gta6cheatshub.com/gta5/${category}` },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const cat = categories.find(c => c.slug === category);
  if (!cat) notFound();
  const cheats = gta5Cheats.filter(c => c.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'GTA 5', href: '/gta5' }, { label: cat.name }]} />
      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl">{cat.icon}</span>
        <h1 className="font-heading text-4xl md:text-5xl">{cat.name} Cheats</h1>
      </div>
      <p className="text-text-secondary max-w-2xl mb-8">{cat.description}</p>

      {cheats.length === 0 ? (
        <div className="bg-bg-card border border-border-color rounded-xl p-8 text-center">
          <p className="text-text-secondary">No cheats available in this category yet.</p>
          {cat.slug === 'money' && (
            <p className="mt-4 text-sm text-text-secondary">There is no money cheat in GTA 5. <a href="/gta5/is-there-a-money-cheat" className="text-primary hover:underline">Learn why →</a></p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cheats.map((c, i) => (
            <div key={c.id}>
              <CheatCard cheat={c} game="gta5" />
              {(i + 1) % 8 === 0 && <div className="col-span-full"><AdBanner size="infeed" /></div>}
            </div>
          ))}
        </div>
      )}

      <AdBanner size="leaderboard" />
    </div>
  );
}
