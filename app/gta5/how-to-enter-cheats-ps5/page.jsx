import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import AdBanner from '@/components/AdBanner';
import Link from 'next/link';

export const metadata = {
  title: 'How to Enter Cheats in GTA 5 on PS5 & PS4 — Complete Guide',
  description: 'Step by step guide on how to enter cheat codes in GTA 5 on PS5 and PS4. Two methods: controller button combos and in-game phone. Includes troubleshooting tips.',
  alternates: { canonical: 'https://gta6cheatshub.com/gta5/how-to-enter-cheats-ps5' },
};

const faqs = [
  { question: 'Do GTA 5 cheats work on PS5?', answer: 'Yes, all GTA 5 cheat codes work perfectly on PS5 including the Enhanced Edition. The button combinations are identical to PS4.' },
  { question: 'Why is my cheat not working on PS5?', answer: 'Make sure you are in single-player story mode, not GTA Online. Do not pause the game. Enter the buttons quickly and in the correct order. Try again if it fails the first time.' },
  { question: 'Can I use cheats during missions on PS5?', answer: 'Yes, most cheats can be activated during missions. Some scripted sequences may temporarily override certain cheats.' },
  { question: 'Do PS4 cheats work on PS5?', answer: 'Yes, PS4 and PS5 use exactly the same cheat codes. All button combinations are identical across both consoles.' },
  { question: 'Is there a way to save cheats on PS5?', answer: 'Cheats entered via phone are saved in your phone contacts for quick redial. For button combos, you need to re-enter them each session.' },
];

export default function PS5CheatGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'GTA 5', href: '/gta5' }, { label: 'How to Enter Cheats on PS5' }]} />
      <h1 className="font-heading text-3xl md:text-5xl mb-4">How to Enter Cheats in GTA 5 on PS5 & PS4</h1>
      <p className="text-text-secondary text-lg mb-8">Complete beginner-friendly guide to activating cheat codes on PlayStation. Two simple methods explained step by step.</p>

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-4">Method 1: Controller Button Combination</h2>
        <div className="space-y-3">
          {[
            'Make sure you are in single-player Story Mode (cheats do NOT work in GTA Online)',
            'Do NOT pause the game — cheats must be entered during live gameplay',
            'Using the D-pad and face buttons, enter the cheat code quickly',
            'Example: For Invincibility enter Right, X, Right, Left, Right, R1, Right, Left, X, Triangle',
            'If entered correctly you will see a small notification on screen',
            'If nothing happens, try entering the code again more quickly'
          ].map((step, i) => (
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
          {[
            'Press UP on the D-pad to pull out your in-game phone',
            'Navigate to the Contacts icon or open the Dial Pad',
            'Enter the phone number for the cheat you want (e.g., 1-999-724-654-5537 for Invincibility)',
            'Press the Call button (X on PlayStation)',
            'The cheat activates and you will see a confirmation on screen',
            'The number is saved in your contacts for quick redial'
          ].map((step, i) => (
            <div key={i} className="flex gap-3 bg-bg-card border border-border-color rounded-lg p-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold text-sm">{i + 1}</span>
              <span className="text-sm text-text-secondary">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-4">Common Mistakes Beginners Make</h2>
        <div className="space-y-2">
          {[
            'Trying to enter cheats while the game is paused — cheats only work during live gameplay',
            'Entering buttons too slowly — the combination needs to be entered quickly',
            'Trying to use cheats in GTA Online — cheats only work in Story Mode',
            'Forgetting that cheats disable achievements for the current session',
            'Not saving before using cheats — always create a manual save first'
          ].map((mistake, i) => (
            <div key={i} className="flex gap-2 text-sm text-text-secondary">
              <span className="text-red-400 shrink-0">✗</span>
              <span>{mistake}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-4">Troubleshooting</h2>
        <div className="space-y-4 text-text-secondary text-sm">
          <p><strong className="text-white">Cheat not activating?</strong> Make sure you are pressing the buttons in the exact order shown. Try entering the code 2-3 times if it does not work on the first attempt.</p>
          <p><strong className="text-white">No confirmation on screen?</strong> Some cheats have subtle confirmations. For vehicle spawns, the vehicle appears in front of you. For ability cheats, check your stats.</p>
          <p><strong className="text-white">Cheat stopped working?</strong> Some cheats like Invincibility are time-limited (5 minutes). You need to re-enter the code to reactivate them.</p>
        </div>
      </section>

      <AdBanner size="infeed" />

      <section className="mb-8">
        <h2 className="font-heading text-2xl mb-6">Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />
      </section>

      <div className="bg-bg-card border border-border-color rounded-xl p-6">
        <h2 className="font-heading text-xl mb-3">Ready to Use Cheats?</h2>
        <p className="text-sm text-text-secondary mb-4">Browse our complete collection of GTA 5 cheats with all PS5 button combinations.</p>
        <Link href="/gta5/all-cheats" className="text-primary hover:underline text-sm">View All GTA 5 Cheats →</Link>
      </div>

      <AdBanner size="leaderboard" />
    </div>
  );
}
