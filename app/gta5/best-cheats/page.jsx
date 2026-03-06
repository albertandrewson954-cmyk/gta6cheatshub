import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import AdBanner from '@/components/AdBanner';
import Link from 'next/link';
import gta5Cheats from '@/data/gta5-cheats.json';

export const metadata = {
  title: 'Top 15 Best GTA 5 Cheats Ranked — Must-Try Cheat Codes',
  description: 'The 15 best GTA 5 cheats ranked by usefulness and fun factor. From Invincibility to Moon Gravity, these are the must-try cheat codes for every player.',
  alternates: { canonical: 'https://gta6cheatshub.com/gta5/best-cheats' },
};

const rankings = [
  { id: 'invincibility', rank: 1, reason: 'The ultimate cheat. Five minutes of complete invulnerability lets you survive anything. Essential for chaos runs and exploring dangerous areas.' },
  { id: 'spawn-buzzard', rank: 2, reason: 'Instant armed helicopter anywhere on the map. The fastest way to travel and the most versatile vehicle cheat. Armed with missiles and guns.' },
  { id: 'clear-wanted', rank: 3, reason: 'Instantly escape any police chase. Whether you have 1 star or 5, this cheat makes the cops disappear immediately. Endlessly useful.' },
  { id: 'max-health-armor', rank: 4, reason: 'Quick health restore whenever you need it. No cooldown, no timer. Use it as many times as you want during intense combat.' },
  { id: 'weapon-set-1', rank: 5, reason: 'Instant full arsenal of weapons including RPG. Use all three weapon sets together for the complete weapon collection.' },
  { id: 'super-jump', rank: 6, reason: 'Jump over buildings and reach rooftops instantly. Incredibly fun for exploration and discovering hidden areas.' },
  { id: 'moon-gravity', rank: 7, reason: 'Everything floats in low gravity. Vehicles launch off ramps spectacularly. Combine with Super Jump for insane heights.' },
  { id: 'explosive-melee', rank: 8, reason: 'Every punch creates an explosion. Hilariously fun and surprisingly useful for quick vehicle destruction.' },
  { id: 'infinite-ammo', rank: 9, reason: 'Never run out of bullets. Combine with weapon sets for unlimited firepower with every gun in the game.' },
  { id: 'skyfall', rank: 10, reason: 'Teleport to the sky and freefall. Amazing views and thrilling skydiving. Use with Invincibility for safe landings.' },
  { id: 'fast-run', rank: 11, reason: 'Sprint at superhuman speed. Makes on-foot travel actually viable and adds a fun challenge to navigation.' },
  { id: 'change-weather', rank: 12, reason: 'Cycle through all weather including rare snow. Great for screenshots, mood setting, and seeing Los Santos in different conditions.' },
  { id: 'slow-motion', rank: 13, reason: 'Three levels of time slowdown. Makes combat feel like an action movie and gives you a tactical edge.' },
  { id: 'explosive-bullets', rank: 14, reason: 'Every bullet explodes on impact. Devastatingly powerful with any weapon. Destroy vehicles in one shot.' },
  { id: 'spawn-stuntplane', rank: 15, reason: 'The most agile aircraft in the game. Perfect for loops, barrel rolls, and flying under bridges.' },
];

const faqs = [
  { question: 'What is the best cheat in GTA 5?', answer: 'The Invincibility cheat is widely considered the best overall cheat. It makes you immune to all damage for 5 minutes and is useful in almost every situation.' },
  { question: 'What are the most fun cheats?', answer: 'Moon Gravity, Super Jump, Explosive Melee, and Skyfall are the most fun cheats. Combining Moon Gravity with Super Jump is endlessly entertaining.' },
  { question: 'What cheats are best for combat?', answer: 'Invincibility, weapon sets, infinite ammo, and explosive bullets create the ultimate combat combination.' },
  { question: 'Can I use multiple cheats at once?', answer: 'Yes, most cheats can be stacked. Invincibility + weapon sets + infinite ammo + explosive bullets creates an unstoppable combination.' },
  { question: 'Do all these cheats work on all platforms?', answer: 'Yes, all 15 cheats listed work on PS5, PS4, PS3, Xbox Series X, Xbox One, Xbox 360, and PC.' },
];

export default function BestCheatsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'GTA 5', href: '/gta5' }, { label: 'Best Cheats' }]} />
      <h1 className="font-heading text-3xl md:text-5xl mb-4">Top 15 Best GTA 5 Cheats</h1>
      <p className="text-text-secondary text-lg mb-8">The definitive ranking of the most useful and fun cheat codes in Grand Theft Auto V. Every cheat works on all platforms.</p>

      <div className="space-y-4">
        {rankings.map((r, idx) => {
          const cheat = gta5Cheats.find(c => c.id === r.id);
          return (
            <div key={r.id}>
              <Link href={`/gta5/${cheat?.category}/${cheat?.slug}`} className="block bg-bg-card border border-border-color rounded-xl p-5 hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-heading text-xl">#{r.rank}</span>
                  <div className="flex-1">
                    <h2 className="font-heading text-xl">{cheat?.title || r.id}</h2>
                    <p className="text-sm text-text-secondary mt-1">{r.reason}</p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-text-secondary">
                      <span className="capitalize">{cheat?.category?.replace('-', ' ')}</span>
                      <span>•</span>
                      <span className="text-primary">View Cheat →</span>
                    </div>
                  </div>
                </div>
              </Link>
              {(idx + 1) % 5 === 0 && <AdBanner size="infeed" />}
            </div>
          );
        })}
      </div>

      <AdBanner size="rectangle" />

      <section className="my-8">
        <h2 className="font-heading text-2xl mb-6">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />
      </section>

      <AdBanner size="leaderboard" />
    </div>
  );
}
