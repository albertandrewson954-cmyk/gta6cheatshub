import Link from 'next/link';

const guides = [
  {
    platform: 'PS5 / PS4',
    icon: '🎮',
    steps: ['During gameplay, do NOT pause', 'Enter button combo using D-pad and face buttons', 'Look for confirmation on screen'],
    link: '/gta5/how-to-enter-cheats-ps5',
  },
  {
    platform: 'Xbox Series X / One',
    icon: '🟢',
    steps: ['During gameplay, do NOT pause', 'Enter button combo using D-pad and face buttons', 'Look for confirmation on screen'],
    link: '/gta5/how-to-enter-cheats-xbox',
  },
  {
    platform: 'PC',
    icon: '💻',
    steps: ['Press ~ to open console', 'Type the cheat code word', 'Press Enter to activate'],
    link: '/gta5/how-to-enter-cheats-pc',
  },
];

export default function PlatformGuide() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {guides.map(g => (
        <div key={g.platform} className="bg-bg-card border border-border-color rounded-xl p-5">
          <div className="text-2xl mb-2">{g.icon}</div>
          <h3 className="font-heading text-lg mb-3">{g.platform}</h3>
          <ol className="space-y-2 mb-4">
            {g.steps.map((s, i) => (
              <li key={i} className="text-sm text-text-secondary flex gap-2">
                <span className="text-primary font-bold">{i + 1}.</span> {s}
              </li>
            ))}
          </ol>
          <Link href={g.link} className="text-sm text-primary hover:underline">Full Guide →</Link>
        </div>
      ))}
    </div>
  );
}
