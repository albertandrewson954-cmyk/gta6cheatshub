import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-color mt-16 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">GTA CHEATS HUB</Link>
            <p className="text-text-secondary text-sm mt-2">The #1 Source for GTA Cheat Codes</p>
          </div>
          <div>
            <h4 className="font-heading text-lg mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/gta5" className="hover:text-primary transition-colors">GTA 5 Cheats</Link></li>
              <li><Link href="/gta6" className="hover:text-primary transition-colors">GTA 6 Cheats</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors">News</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg mb-3">Platforms</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/gta5/how-to-enter-cheats-ps5" className="hover:text-primary transition-colors">PS Cheats</Link></li>
              <li><Link href="/gta5/how-to-enter-cheats-xbox" className="hover:text-primary transition-colors">Xbox Cheats</Link></li>
              <li><Link href="/gta5/how-to-enter-cheats-pc" className="hover:text-primary transition-colors">PC Cheats</Link></li>
              <li><Link href="/gta5/cheats-in-gta-online" className="hover:text-primary transition-colors">GTA Online Cheats</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg mb-3">Popular</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/gta5/all-cheats" className="hover:text-primary transition-colors">All GTA 5 Cheats</Link></li>
              <li><Link href="/gta5/best-cheats" className="hover:text-primary transition-colors">Best GTA 5 Cheats</Link></li>
              <li><Link href="/gta5/is-there-a-money-cheat" className="hover:text-primary transition-colors">Money Cheat?</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border-color text-center text-xs text-text-secondary">
          <p>&copy; {new Date().getFullYear()} GTA Cheats Hub. All rights reserved.</p>
          <p className="mt-1">GTA Cheats Hub is not affiliated with Rockstar Games or Take-Two Interactive. Grand Theft Auto is a registered trademark of Take-Two Interactive.</p>
        </div>
      </div>
    </footer>
  );
}
