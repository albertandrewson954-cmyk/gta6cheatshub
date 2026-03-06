import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import AdBanner from '@/components/AdBanner';

export const metadata = {
  title: 'Do Cheats Disable Achievements in GTA 5? Complete Guide',
  description: 'Yes, using cheat codes in GTA 5 disables achievements and trophies for your current session. Learn which cheats are affected and how to use cheats without losing progress.',
  alternates: { canonical: 'https://gta6cheatshub.com/gta5/do-cheats-disable-achievements' },
};

const faqs = [
  { question: 'Do cheats permanently disable achievements in GTA 5?', answer: 'No, cheats only disable achievements for your current game session. Reload a save from before you used cheats and achievements will work again.' },
  { question: 'Which cheats disable achievements?', answer: 'ALL cheat codes disable achievements when activated. There is no cheat that is safe to use if you want to earn achievements in that session.' },
  { question: 'Can I use cheats and still get 100% completion?', answer: 'Yes, as long as you reload a cheat-free save before attempting activities that count toward 100% completion.' },
  { question: 'Do cheats affect my save file permanently?', answer: 'No, cheats do not permanently affect your save file. The achievement block only lasts for the current session. Reload to clear it.' },
  { question: 'Can I earn achievements in GTA Online after using cheats in story mode?', answer: 'Yes, GTA Online achievements are completely separate. Story mode cheats have no effect on your online progress.' },
];

export default function AchievementsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'GTA 5', href: '/gta5' }, { label: 'Do Cheats Disable Achievements?' }]} />
      <h1 className="font-heading text-3xl md:text-5xl mb-4">Do Cheats Disable Achievements in GTA 5?</h1>
      <p className="text-text-secondary text-lg mb-8">Yes — <span className="text-primary font-bold">using any cheat code in GTA 5 will disable achievements and trophies</span> for your current game session. But it is not permanent.</p>

      <div className="warning-box mb-8">
        <h2 className="font-heading text-lg text-yellow-400 mb-2">⚠️ Key Fact</h2>
        <p className="text-sm text-yellow-200/80">Activating ANY cheat code immediately disables all achievements and trophies for your current play session. This includes all cheats — health, weapons, vehicles, weather, and fun cheats.</p>
      </div>

      <section className="mb-8 space-y-4 text-text-secondary">
        <h2 className="font-heading text-2xl text-white">How the Achievement Block Works</h2>
        <p>When you enter any cheat code in GTA 5, the game flags your current session as &quot;cheated.&quot; This flag prevents any achievements or trophies from unlocking until you reload a clean save file.</p>
        <p>The good news is that this block is <strong className="text-white">temporary and session-based</strong>. It does not permanently damage your save file or profile. Simply save before using cheats, then reload that save when you want to earn achievements.</p>
      </section>

      <AdBanner size="rectangle" />

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-4">How to Use Cheats Without Losing Achievements</h2>
        <div className="space-y-3">
          {['Create a manual save before using any cheats', 'Use cheats for fun, exploration, or testing', 'When done, reload your manual save', 'Achievements will work normally again after reload', 'Never save your game while cheats are active if you care about achievements'].map((step, i) => (
            <div key={i} className="flex gap-3 bg-bg-card border border-border-color rounded-lg p-4">
              <span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">{i + 1}</span>
              <span className="text-sm text-text-secondary">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-4">All Cheats Disable Achievements — No Exceptions</h2>
        <p className="text-text-secondary mb-4">Every single cheat code in GTA 5 triggers the achievement block, including seemingly harmless cheats like changing weather or spawning a vehicle. There is no &quot;safe&quot; cheat that lets you keep achievements.</p>
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
