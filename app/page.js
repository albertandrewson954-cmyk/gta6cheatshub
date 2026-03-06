import Link from 'next/link';
import CountdownTimer from '@/components/CountdownTimer';
import SearchBar from '@/components/SearchBar';
import CheatCard from '@/components/CheatCard';
import CategoryGrid from '@/components/CategoryGrid';
import AdBanner from '@/components/AdBanner';
import PlatformGuide from '@/components/PlatformGuide';
import HeroSlideshow from '@/components/HeroSlideshow';
import gta5Cheats from '@/data/gta5-cheats.json';
import gta6Cheats from '@/data/gta6-cheats.json';
import news from '@/data/news.json';

export default function HomePage() {
  const popularCheats = gta5Cheats.filter(c => c.popular).slice(0, 6);
  const latestCheats = [...gta5Cheats].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)).slice(0, 5);
  const gta6Teasers = gta6Cheats.filter(c => c.popular).slice(0, 4);
  const latestNews = news.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center">
        <HeroSlideshow />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm">500+ Cheats Available</div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl neon-text-pink mb-4">GTA CHEAT CODES</h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8">The most complete GTA 5 &amp; GTA 6 cheat database. Updated daily.</p>
          <div className="max-w-xl mx-auto mb-8"><SearchBar /></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/gta5" className="px-8 py-4 bg-primary text-white font-bold rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 min-h-[44px]">GTA 5 Cheats</Link>
            <Link href="/gta6" className="px-8 py-4 border-2 border-secondary text-secondary font-bold rounded-lg text-lg transition-all hover:bg-secondary/10 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5 min-h-[44px]">GTA 6 Cheats</Link>
          </div>
          <div>
            <p className="text-text-secondary text-sm mb-3">GTA 6 Release Countdown</p>
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Game Selector */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/gta5" className="group relative bg-bg-card rounded-2xl p-8 border border-border-color overflow-hidden transition-all duration-300 hover:border-primary/50 gradient-border">
            <h2 className="font-heading text-3xl mb-2">GTA 5</h2>
            <p className="text-text-secondary text-sm mb-4">Grand Theft Auto V</p>
            <p className="text-3xl font-heading text-primary">{gta5Cheats.length}+ Cheats</p>
            <span className="inline-block mt-4 text-primary font-medium group-hover:translate-x-1 transition-transform">Browse Cheats →</span>
          </Link>
          <Link href="/gta6" className="group relative bg-bg-card rounded-2xl p-8 border border-border-color overflow-hidden transition-all duration-300 hover:border-secondary/50">
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-medium">Coming Nov 19, 2026</div>
            <h2 className="font-heading text-3xl mb-2">GTA 6</h2>
            <p className="text-text-secondary text-sm mb-4">Grand Theft Auto VI</p>
            <p className="text-3xl font-heading text-secondary">{gta6Cheats.length} Expected</p>
            <span className="inline-block mt-4 text-secondary font-medium group-hover:translate-x-1 transition-transform">View Expected Cheats →</span>
          </Link>
        </div>
      </section>

      <AdBanner size="leaderboard" />

      {/* Featured GTA 5 Cheats */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="font-heading text-3xl md:text-4xl mb-8 text-center">Most Popular GTA 5 Cheats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularCheats.map(c => <CheatCard key={c.id} cheat={c} game="gta5" />)}
        </div>
      </section>

      {/* Browse by Category */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="font-heading text-3xl md:text-4xl mb-8 text-center">Browse by Category</h2>
        <CategoryGrid game="gta5" />
      </section>

      <AdBanner size="infeed" />

      {/* Latest Cheats Added */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="font-heading text-3xl md:text-4xl mb-8 text-center">Latest Cheats Added</h2>
        <div className="space-y-3">
          {latestCheats.map(c => (
            <Link key={c.id} href={`/gta5/${c.category}/${c.slug}`} className="flex items-center justify-between bg-bg-card border border-border-color rounded-lg p-4 hover:border-primary/50 transition-colors">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{c.title}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-success/20 text-success font-bold">NEW</span>
                </div>
                <p className="text-xs text-text-secondary mt-1">GTA 5 • {c.category} • {c.dateAdded}</p>
              </div>
              <svg className="w-5 h-5 text-text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          ))}
        </div>
      </section>

      {/* GTA 6 Hype */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">GTA 6 is Coming — November 19, 2026</h2>
          <CountdownTimer />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {gta6Teasers.map(c => (
            <div key={c.id} className="bg-bg-card border border-border-color rounded-xl p-5 opacity-80">
              <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary">Expected</span>
              <h3 className="font-heading text-lg mt-2">{c.title}</h3>
              <p className="text-xs text-text-secondary mt-2">{c.disclaimer}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-3 border border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-colors min-h-[44px]">🔔 Notify Me When GTA 6 Cheats Drop</button>
        </div>
      </section>

      {/* Quick Platform Guide */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="font-heading text-3xl md:text-4xl mb-8 text-center">How to Enter GTA 5 Cheats</h2>
        <PlatformGuide />
      </section>

      {/* Latest News */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="font-heading text-3xl md:text-4xl mb-8 text-center">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestNews.map(a => (
            <Link key={a.slug} href={`/news/${a.slug}`} className="group bg-bg-card border border-border-color rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
              <div className="h-40 bg-bg-secondary flex items-center justify-center text-5xl">{a.thumbnailPlaceholder}</div>
              <div className="p-5">
                <p className="text-xs text-text-secondary mb-2">{a.date}</p>
                <h3 className="font-heading text-lg group-hover:text-primary transition-colors">{a.title}</h3>
                <p className="text-sm text-text-secondary mt-2 line-clamp-2">{a.excerpt}</p>
                <span className="inline-block mt-3 text-sm text-primary">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdBanner size="leaderboard" />
    </>
  );
}
