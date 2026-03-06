import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'About GTA Cheats Hub',
  description: 'GTA Cheats Hub is the most complete database of GTA cheat codes on the internet. Learn about our mission to provide accurate cheat codes for every GTA game.',
  alternates: { canonical: 'https://gta6cheatshub.com/about' },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      <h1 className="font-heading text-4xl md:text-5xl mb-6">About GTA Cheats Hub</h1>

      <div className="space-y-6 text-text-secondary leading-relaxed">
        <p className="text-lg">GTA Cheats Hub is the most complete and accurate database of Grand Theft Auto cheat codes on the internet. Our mission is to provide every GTA player with instant access to every cheat code across all platforms.</p>

        <section>
          <h2 className="font-heading text-2xl text-white mb-3">Our Mission</h2>
          <p>We believe cheat codes are one of the best parts of GTA. They unlock endless fun, creativity, and replayability. Our goal is to be the single source of truth for every GTA cheat code — accurate, complete, and easy to use on any device.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-white mb-3">What We Cover</h2>
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-primary">•</span> Every GTA 5 cheat code for PS5, PS4, PS3, Xbox Series X, Xbox One, Xbox 360, and PC</li>
            <li className="flex gap-2"><span className="text-primary">•</span> All three activation methods: controller, phone, and PC console</li>
            <li className="flex gap-2"><span className="text-primary">•</span> Step-by-step instructions for every cheat</li>
            <li className="flex gap-2"><span className="text-primary">•</span> Expected GTA 6 cheats based on series patterns</li>
            <li className="flex gap-2"><span className="text-primary">•</span> Platform-specific guides for beginners</li>
            <li className="flex gap-2"><span className="text-primary">•</span> Latest GTA news and updates</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-white mb-3">Updated Daily</h2>
          <p>Our team reviews and updates the cheat database regularly to ensure accuracy. When GTA 6 launches on November 19, 2026, we will be among the first to document every new cheat code.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-white mb-3">Accuracy Guarantee</h2>
          <p>Every cheat code on our site has been personally tested and verified. We include exact button combinations, phone numbers, and console commands — no guesswork or outdated information.</p>
        </section>

        <div className="bg-bg-card border border-border-color rounded-xl p-6 mt-8">
          <h2 className="font-heading text-xl text-white mb-2">Disclaimer</h2>
          <p className="text-sm">GTA Cheats Hub is an independent fan site. We are not affiliated with, endorsed by, or connected to Rockstar Games, Take-Two Interactive, or any of their subsidiaries. Grand Theft Auto, GTA, and all related marks are registered trademarks of Take-Two Interactive.</p>
        </div>
      </div>
    </div>
  );
}
