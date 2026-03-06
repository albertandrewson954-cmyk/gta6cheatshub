import Breadcrumb from '@/components/Breadcrumb';
import AdBanner from '@/components/AdBanner';
import Link from 'next/link';
import gta5Cheats from '@/data/gta5-cheats.json';
import categories from '@/data/categories.json';

export const metadata = {
  title: 'All GTA 5 Cheats — Complete Master List for Every Platform',
  description: 'Complete list of every GTA 5 cheat code organized by category. PS5, PS4, PS3, Xbox Series X, Xbox One, Xbox 360, and PC cheat codes all included.',
  alternates: { canonical: 'https://gta6cheatshub.com/gta5/all-cheats' },
};

export default function AllCheatsPage() {
  const grouped = categories.filter(c => c.slug !== 'money' && c.slug !== 'fun').map(cat => ({
    ...cat,
    cheats: gta5Cheats.filter(c => c.category === cat.slug),
  })).filter(g => g.cheats.length > 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'GTA 5', href: '/gta5' }, { label: 'All Cheats' }]} />
      <h1 className="font-heading text-3xl md:text-5xl mb-4">All GTA 5 Cheats — Complete List</h1>
      <p className="text-text-secondary text-lg mb-8">Every single GTA 5 cheat code organized by category. Quick reference table with all platform codes.</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {grouped.map(g => (
          <a key={g.slug} href={`#${g.slug}`} className="px-3 py-1 rounded-full bg-bg-card border border-border-color text-sm text-text-secondary hover:text-primary transition-colors">
            {g.icon} {g.name}
          </a>
        ))}
      </div>

      {grouped.map((group, gi) => (
        <section key={group.slug} id={group.slug} className="mb-10">
          <h2 className="font-heading text-2xl mb-4 flex items-center gap-2">
            <span>{group.icon}</span> {group.name} Cheats
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-color">
                  <th className="text-left py-3 px-2 text-text-secondary font-medium whitespace-nowrap">Cheat</th>
                  <th className="text-left py-3 px-2 text-text-secondary font-medium whitespace-nowrap">PS</th>
                  <th className="text-left py-3 px-2 text-text-secondary font-medium whitespace-nowrap">Xbox</th>
                  <th className="text-left py-3 px-2 text-text-secondary font-medium whitespace-nowrap">PC Console</th>
                  <th className="text-left py-3 px-2 text-text-secondary font-medium whitespace-nowrap">In-Game Phone</th>
                </tr>
              </thead>
              <tbody>
                {group.cheats.map(cheat => (
                  <tr key={cheat.id} className="border-b border-border-color/50 hover:bg-bg-card/50 transition-colors">
                    <td className="py-3 px-2 whitespace-nowrap">
                      <Link href={`/gta5/${cheat.category}/${cheat.slug}`} className="text-primary hover:underline font-medium">{cheat.title}</Link>
                    </td>
                    <td className="py-3 px-2 font-mono text-xs text-text-secondary max-w-[220px]">{cheat.platforms.ps5}</td>
                    <td className="py-3 px-2 font-mono text-xs text-text-secondary max-w-[220px]">{cheat.platforms.xboxSeriesX}</td>
                    <td className="py-3 px-2 font-mono text-xs text-secondary whitespace-nowrap">{cheat.platforms.pcConsole}</td>
                    <td className="py-3 px-2 font-mono text-xs text-text-secondary whitespace-nowrap">{cheat.platforms.inGamePhone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {gi % 2 === 0 && <AdBanner size="infeed" />}
        </section>
      ))}

      <AdBanner size="leaderboard" />
    </div>
  );
}
