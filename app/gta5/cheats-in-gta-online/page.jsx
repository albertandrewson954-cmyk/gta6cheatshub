import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import AdBanner from '@/components/AdBanner';

export const metadata = {
  title: 'Can You Use Cheats in GTA Online? (No — Here\'s Why)',
  description: 'Cheat codes do NOT work in GTA Online. Learn why Rockstar disabled cheats in online mode and what happens if you try to use them.',
  alternates: { canonical: 'https://gta6cheatshub.com/gta5/cheats-in-gta-online' },
};

const faqs = [
  { question: 'Do cheat codes work in GTA Online?', answer: 'No, cheat codes are completely disabled in GTA Online. They only work in single-player story mode.' },
  { question: 'What happens if I try to enter a cheat in GTA Online?', answer: 'Nothing happens. The game simply ignores the button combination. You will not see any confirmation or error message.' },
  { question: 'Can I get banned for trying to use cheats online?', answer: 'Simply entering button combinations will not get you banned. However, using third-party mod menus or hacking tools will result in a permanent ban.' },
  { question: 'Are there any legitimate shortcuts in GTA Online?', answer: 'Rockstar offers Shark Cards for real money and runs regular double/triple money events on certain activities. Playing heists and businesses are the fastest legitimate methods.' },
  { question: 'Will GTA 6 Online have cheats?', answer: 'It is extremely unlikely. Rockstar has consistently kept cheats out of online modes to maintain competitive fairness.' },
];

export default function CheatsOnlinePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'GTA 5', href: '/gta5' }, { label: 'Cheats in GTA Online' }]} />
      <h1 className="font-heading text-3xl md:text-5xl mb-4">Can You Use Cheats in GTA Online?</h1>
      <p className="text-text-secondary text-lg mb-8"><span className="text-primary font-bold">No — cheat codes do not work in GTA Online.</span> They are completely disabled in all online modes.</p>

      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
        <h2 className="font-heading text-xl text-red-400 mb-2">🚫 Cheats Are Disabled Online</h2>
        <p className="text-sm text-red-200/80">Rockstar Games has completely disabled all cheat codes in GTA Online. No button combinations, phone numbers, or console commands will work in any online mode.</p>
      </div>

      <section className="mb-8 space-y-4 text-text-secondary">
        <h2 className="font-heading text-2xl text-white">Why Rockstar Disabled Cheats Online</h2>
        <p>GTA Online is a competitive multiplayer environment where players interact with each other. Allowing cheat codes would create an extremely unfair playing field — imagine one player being invincible while others are not.</p>
        <p>The online economy is also a core part of the GTA Online experience. Rockstar sells Shark Cards (in-game currency purchased with real money) and has built an entire business model around players earning or purchasing in-game money. Cheat codes would undermine this entirely.</p>
        <p>Rockstar actively monitors GTA Online for cheating and modding. Players caught using unauthorized tools face temporary or permanent bans.</p>
      </section>

      <AdBanner size="rectangle" />

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-4">What Happens If You Try</h2>
        <div className="space-y-3 text-text-secondary">
          <p>If you enter a cheat code button combination while playing GTA Online, absolutely nothing happens. The game silently ignores the input. You will not receive any error message or warning.</p>
          <p>The in-game phone in GTA Online does not have a dial pad for entering phone number cheats. The phone interface is different from story mode.</p>
          <p>The PC console command window (tilde ~ key) does not function in GTA Online either.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-4">Legitimate Ways to Get Ahead in GTA Online</h2>
        <div className="space-y-3">
          {['Complete Heists with a skilled team for maximum payouts', 'Run businesses: MC, CEO, Nightclub, and Agency', 'Participate in double and triple money event weeks', 'Complete daily objectives for bonus cash', 'Sell vehicles through Import/Export missions', 'Take advantage of new DLC content at launch'].map((tip, i) => (
            <div key={i} className="flex gap-3 bg-bg-card border border-border-color rounded-lg p-4">
              <span className="text-success">✓</span>
              <span className="text-sm text-text-secondary">{tip}</span>
            </div>
          ))}
        </div>
      </section>

      <AdBanner size="infeed" />

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-6">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />
      </section>

      <AdBanner size="leaderboard" />
    </div>
  );
}
