import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import AdBanner from '@/components/AdBanner';
import Link from 'next/link';

export const metadata = {
  title: 'How to Enter Cheats in GTA 5 on PC — Console Commands & Phone',
  description: 'Two methods to enter GTA 5 cheats on PC: tilde console commands and in-game phone numbers. Complete step by step guide with troubleshooting tips.',
  alternates: { canonical: 'https://gta6cheatshub.com/gta5/how-to-enter-cheats-pc' },
};

const faqs = [
  { question: 'How do I open the console in GTA 5 PC?', answer: 'Press the tilde key (~) located below the Escape key on most keyboards. The console window will appear at the top of the screen.' },
  { question: 'Are PC cheats different from console cheats?', answer: 'PC has two unique methods: console commands (text codes) and phone numbers. The phone numbers are the same as console versions.' },
  { question: 'Can I use a controller on PC for cheats?', answer: 'Yes, if you play GTA 5 PC with a controller, you can use the same button combinations as Xbox. You can also use the console and phone methods.' },
  { question: 'Do cheats work on the Epic Games and Steam versions?', answer: 'Yes, cheats work identically on all PC versions including Steam, Epic Games Store, and Rockstar Launcher.' },
  { question: 'Why is the console not opening?', answer: 'Make sure you are pressing the correct key (~). Some keyboard layouts have it in different locations. You must be in story mode, not GTA Online.' },
];

export default function PCCheatGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'GTA 5', href: '/gta5' }, { label: 'How to Enter Cheats on PC' }]} />
      <h1 className="font-heading text-3xl md:text-5xl mb-4">How to Enter Cheats in GTA 5 on PC</h1>
      <p className="text-text-secondary text-lg mb-8">PC players have two methods: the console command window and the in-game phone. Both are easy to use.</p>

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-4">Method 1: Console Commands (Recommended)</h2>
        <div className="space-y-3">
          {['Make sure you are in single-player Story Mode', 'Press the tilde key ~ (below Escape, left of 1)', 'A text input console appears at the top of your screen', 'Type the cheat code word (e.g., PAINKILLER for Invincibility)', 'Press Enter to activate the cheat', 'Press ~ again to close the console'].map((step, i) => (
            <div key={i} className="flex gap-3 bg-bg-card border border-border-color rounded-lg p-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-success/20 text-success flex items-center justify-center font-bold text-sm">{i + 1}</span>
              <span className="text-sm text-text-secondary">{step}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-bg-secondary rounded-lg p-4 border border-border-color">
          <p className="text-xs text-text-secondary mb-2">Common Console Commands:</p>
          <div className="grid grid-cols-2 gap-2 font-mono text-sm">
            <span className="text-secondary">PAINKILLER</span><span className="text-text-secondary">Invincibility</span>
            <span className="text-secondary">TURTLE</span><span className="text-text-secondary">Max Health</span>
            <span className="text-secondary">TOOLUP</span><span className="text-text-secondary">Weapons</span>
            <span className="text-secondary">LAWYERUP</span><span className="text-text-secondary">Clear Wanted</span>
            <span className="text-secondary">BUZZOFF</span><span className="text-text-secondary">Spawn Buzzard</span>
            <span className="text-secondary">HOPTOIT</span><span className="text-text-secondary">Super Jump</span>
          </div>
        </div>
      </section>

      <AdBanner size="rectangle" />

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-4">Method 2: In-Game Phone</h2>
        <div className="space-y-3">
          {['Press the Up arrow key to open the in-game phone', 'Click on the Dial Pad icon', 'Type the phone number using your number keys', 'Press Enter or click the call button', 'The cheat activates and the number saves to contacts'].map((step, i) => (
            <div key={i} className="flex gap-3 bg-bg-card border border-border-color rounded-lg p-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold text-sm">{i + 1}</span>
              <span className="text-sm text-text-secondary">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-4">Method 3: Xbox Controller on PC</h2>
        <p className="text-text-secondary text-sm mb-4">If you use an Xbox controller on PC, you can also enter the Xbox button combinations. These are identical to the Xbox console cheats. See our <Link href="/gta5/how-to-enter-cheats-xbox" className="text-primary hover:underline">Xbox cheat guide</Link> for all button combos.</p>
      </section>

      <AdBanner size="infeed" />

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-6">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />
      </section>

      <div className="bg-bg-card border border-border-color rounded-xl p-6">
        <h2 className="font-heading text-xl mb-3">Browse All PC Cheats</h2>
        <Link href="/gta5/all-cheats" className="text-primary hover:underline text-sm">View All GTA 5 Cheats with PC Console Commands →</Link>
      </div>
      <AdBanner size="leaderboard" />
    </div>
  );
}
