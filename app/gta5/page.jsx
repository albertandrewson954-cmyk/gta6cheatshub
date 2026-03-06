import Link from 'next/link';
import CheatCard from '@/components/CheatCard';
import CategoryGrid from '@/components/CategoryGrid';
import AdBanner from '@/components/AdBanner';
import Breadcrumb from '@/components/Breadcrumb';
import HeroSlideshow from '@/components/HeroSlideshow';
import gta5Cheats from '@/data/gta5-cheats.json';

export const metadata = {
  title: 'All GTA 5 Cheat Codes — PS5, PS4, Xbox, PC',
  description: 'Complete list of every GTA 5 cheat code for PS5, PS4, PS3, Xbox Series X, Xbox One, Xbox 360 and PC. Invincibility, weapons, vehicles and more.',
  alternates: { canonical: 'https://gta6cheatshub.com/gta5' },
};

export default function GTA5Hub() {
  const popular = gta5Cheats.filter(c => c.popular);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[40vh] flex items-end pb-10">
        <HeroSlideshow />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'GTA 5 Cheats' }]} />
          <h1 className="font-heading text-4xl md:text-6xl neon-text-pink mb-4">GTA 5 Cheat Codes</h1>
          <p className="text-text-secondary max-w-2xl text-lg">Every cheat code for Grand Theft Auto V across all platforms. Browse by category or find the cheat you need below.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

      <section className="mb-12">
        <h2 className="font-heading text-2xl mb-6">Browse by Category</h2>
        <CategoryGrid game="gta5" />
      </section>

      <AdBanner size="leaderboard" />

      <section className="mb-12">
        <h2 className="font-heading text-2xl mb-6">Most Popular Cheats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popular.map(c => <CheatCard key={c.id} cheat={c} game="gta5" />)}
        </div>
      </section>

      <AdBanner size="infeed" />

      <section>
        <h2 className="font-heading text-2xl mb-6">All GTA 5 Cheats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gta5Cheats.map(c => <CheatCard key={c.id} cheat={c} game="gta5" />)}
        </div>
      </section>

      <AdBanner size="leaderboard" />

      <section className="mt-12">
        <h2 className="font-heading text-2xl mb-6">Helpful Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { href: '/gta5/how-to-enter-cheats-ps5', title: 'How to Enter Cheats on PS5', desc: 'Complete guide for PlayStation' },
            { href: '/gta5/how-to-enter-cheats-xbox', title: 'How to Enter Cheats on Xbox', desc: 'Complete guide for Xbox' },
            { href: '/gta5/how-to-enter-cheats-pc', title: 'How to Enter Cheats on PC', desc: 'Console commands and phone codes' },
            { href: '/gta5/is-there-a-money-cheat', title: 'Is There a Money Cheat?', desc: 'The truth about GTA 5 money cheats' },
            { href: '/gta5/do-cheats-disable-achievements', title: 'Do Cheats Disable Achievements?', desc: 'What you need to know' },
            { href: '/gta5/best-cheats', title: 'Best GTA 5 Cheats', desc: 'Top 15 ranked' },
          ].map(g => (
            <Link key={g.href} href={g.href} className="bg-bg-card border border-border-color rounded-lg p-4 hover:border-primary/50 transition-colors">
              <h3 className="font-heading text-lg">{g.title}</h3>
              <p className="text-sm text-text-secondary mt-1">{g.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
