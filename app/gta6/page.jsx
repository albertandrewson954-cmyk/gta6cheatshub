import Link from 'next/link';
import CheatCard from '@/components/CheatCard';
import CategoryGrid from '@/components/CategoryGrid';
import AdBanner from '@/components/AdBanner';
import Breadcrumb from '@/components/Breadcrumb';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import CountdownTimer from '@/components/CountdownTimer';
import HeroSlideshow from '@/components/HeroSlideshow';
import gta6Cheats from '@/data/gta6-cheats.json';

export const metadata = {
  title: 'GTA 6 Cheat Codes — Expected Cheats for Grand Theft Auto VI',
  description: 'Expected GTA 6 cheat codes based on GTA 5 patterns. Invincibility, weapons, vehicles and more. Updated when GTA 6 releases November 19, 2026.',
  alternates: { canonical: 'https://gta6cheatshub.com/gta6' },
};

export default function GTA6Hub() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[40vh] flex items-end pb-10">
        <HeroSlideshow />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'GTA 6 Cheats' }]} />
          <DisclaimerBanner />
          <h1 className="font-heading text-4xl md:text-6xl mb-4" style={{ background: 'linear-gradient(135deg, #ff6b35, #ff006e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GTA 6 Expected Cheat Codes</h1>
          <p className="text-text-secondary max-w-2xl text-lg mb-6">These are predicted cheats based on GTA 5 patterns. We will update this page with confirmed cheats when GTA 6 launches.</p>
          <div className="mb-4">
            <p className="text-sm text-text-secondary mb-3">Release Countdown</p>
            <CountdownTimer />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

      <AdBanner size="leaderboard" />

      <section className="my-12">
        <h2 className="font-heading text-2xl mb-6">Expected Cheats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gta6Cheats.map(c => <CheatCard key={c.id} cheat={c} game="gta6" />)}
        </div>
      </section>

      <AdBanner size="leaderboard" />

      <section className="text-center py-12">
        <h2 className="font-heading text-2xl mb-4">Want to be notified when GTA 6 cheats are confirmed?</h2>
        <button className="px-6 py-3 border border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-colors min-h-[44px]">🔔 Notify Me</button>
      </section>
      </div>
    </div>
  );
}
