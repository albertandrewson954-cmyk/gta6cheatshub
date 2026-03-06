import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import AdBanner from '@/components/AdBanner';
import Link from 'next/link';

export const metadata = {
  title: 'How to Enter Cheats in GTA 5 on Xbox Series X & Xbox One — Guide',
  description: 'Step by step guide to entering cheat codes in GTA 5 on Xbox Series X, Xbox One, and Xbox 360. Controller button combos and in-game phone methods explained.',
  alternates: { canonical: 'https://gta6cheatshub.com/gta5/how-to-enter-cheats-xbox' },
};

const faqs = [
  { question: 'Do GTA 5 cheats work on Xbox Series X?', answer: 'Yes, all cheats work on Xbox Series X. The button combinations are the same as Xbox One.' },
  { question: 'Are Xbox 360 cheats different?', answer: 'The button combinations are the same across all Xbox platforms. However, some cheats like Duke O Death and Kraken are not available on Xbox 360.' },
  { question: 'Why are my cheats not working?', answer: 'Ensure you are in Story Mode, not GTA Online. Do not pause the game. Enter the combination quickly. Try multiple times if needed.' },
  { question: 'Can I use cheats during missions on Xbox?', answer: 'Yes, most cheats work during missions. Some scripted events may temporarily override them.' },
  { question: 'Do cheats disable achievements on Xbox?', answer: 'Yes, using any cheat disables Xbox achievements for your current session. Reload a save to restore achievement tracking.' },
];

export default function XboxCheatGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'GTA 5', href: '/gta5' }, { label: 'How to Enter Cheats on Xbox' }]} />
      <h1 className="font-heading text-3xl md:text-5xl mb-4">How to Enter Cheats in GTA 5 on Xbox</h1>
      <p className="text-text-secondary text-lg mb-8">Works on Xbox Series X, Xbox Series S, Xbox One, and Xbox 360. Two easy methods explained below.</p>

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-4">Method 1: Controller Button Combination</h2>
        <div className="space-y-3">
          {['Be in single-player Story Mode (NOT GTA Online)', 'Do NOT pause the game — enter cheats during live gameplay', 'Enter the button combination using D-pad and face buttons (A, B, X, Y)', 'Example: Invincibility is Right, A, Right, Left, Right, RB, Right, Left, A, Y', 'Look for a notification confirming the cheat activated', 'Try again quickly if it does not work the first time'].map((step, i) => (
            <div key={i} className="flex gap-3 bg-bg-card border border-border-color rounded-lg p-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">{i + 1}</span>
              <span className="text-sm text-text-secondary">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <AdBanner size="rectangle" />

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-4">Method 2: In-Game Phone</h2>
        <div className="space-y-3">
          {['Press UP on the D-pad to open the phone', 'Go to the Dial Pad', 'Enter the cheat phone number (e.g., 1-999-724-654-5537)', 'Press A to call the number', 'Cheat activates immediately', 'The number saves to contacts for easy redial'].map((step, i) => (
            <div key={i} className="flex gap-3 bg-bg-card border border-border-color rounded-lg p-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold text-sm">{i + 1}</span>
              <span className="text-sm text-text-secondary">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-4">Xbox Button Reference</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[{ btn: 'A', color: 'bg-green-500/20 text-green-400' }, { btn: 'B', color: 'bg-red-500/20 text-red-400' }, { btn: 'X', color: 'bg-blue-500/20 text-blue-400' }, { btn: 'Y', color: 'bg-yellow-500/20 text-yellow-400' }, { btn: 'LB', color: 'bg-white/10 text-white' }, { btn: 'RB', color: 'bg-white/10 text-white' }, { btn: 'LT', color: 'bg-white/10 text-white' }, { btn: 'RT', color: 'bg-white/10 text-white' }].map(b => (
            <div key={b.btn} className={`${b.color} rounded-lg p-3 text-center font-mono font-bold`}>{b.btn}</div>
          ))}
        </div>
      </section>

      <AdBanner size="infeed" />

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-6">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />
      </section>

      <div className="bg-bg-card border border-border-color rounded-xl p-6">
        <h2 className="font-heading text-xl mb-3">Browse All Xbox Cheats</h2>
        <Link href="/gta5/all-cheats" className="text-primary hover:underline text-sm">View All GTA 5 Cheats →</Link>
      </div>
      <AdBanner size="leaderboard" />
    </div>
  );
}
