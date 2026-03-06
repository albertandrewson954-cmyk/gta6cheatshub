import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import FAQAccordion from '@/components/FAQAccordion';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import AdBanner from '@/components/AdBanner';
import SocialShare from '@/components/SocialShare';
import categories from '@/data/categories.json';
import gta6Cheats from '@/data/gta6-cheats.json';

export async function generateStaticParams() {
  return gta6Cheats.map(c => ({ category: c.category, slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cheat = gta6Cheats.find(c => c.slug === slug);
  if (!cheat) return {};
  return {
    title: `${cheat.title} — GTA 6 Expected Cheat Code`,
    description: `Expected ${cheat.title} cheat for GTA 6. Based on GTA 5 patterns. Not yet confirmed by Rockstar Games.`,
    alternates: { canonical: `https://gta6cheatshub.com/gta6/${cheat.category}/${cheat.slug}` },
  };
}

export default async function GTA6CheatPage({ params }) {
  const { category, slug } = await params;
  const cheat = gta6Cheats.find(c => c.slug === slug && c.category === category);
  if (!cheat) notFound();
  const cat = categories.find(c => c.slug === category);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'GTA 6', href: '/gta6' }, { label: cat?.name || category, href: `/gta6/${category}` }, { label: cheat.title }]} />
      <DisclaimerBanner />
      <span className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium">Expected — Not Confirmed</span>
      <h1 className="font-heading text-3xl md:text-5xl mt-3 mb-4">{cheat.title}</h1>
      <p className="text-text-secondary text-lg mb-8">{cheat.description}</p>

      <div className="bg-bg-card border border-border-color rounded-xl p-6 mb-8">
        <h2 className="font-heading text-xl mb-4">Cheat Code Status</h2>
        <p className="text-text-secondary">This cheat code has not been confirmed yet. GTA 6 releases on <span className="text-secondary font-medium">November 19, 2026</span>. We will update this page with the exact cheat code as soon as it is discovered.</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-bg-secondary rounded-lg p-4 text-center">
            <p className="text-xs text-text-secondary mb-1">PS5</p>
            <p className="font-mono text-sm text-text-secondary">TBA</p>
          </div>
          <div className="bg-bg-secondary rounded-lg p-4 text-center">
            <p className="text-xs text-text-secondary mb-1">Xbox Series X</p>
            <p className="font-mono text-sm text-text-secondary">TBA</p>
          </div>
          <div className="bg-bg-secondary rounded-lg p-4 text-center">
            <p className="text-xs text-text-secondary mb-1">PC</p>
            <p className="font-mono text-sm text-text-secondary">TBA</p>
          </div>
        </div>
      </div>

      <AdBanner size="rectangle" />

      {cheat.faqs && cheat.faqs.length > 0 && (
        <section className="my-8">
          <h2 className="font-heading text-2xl mb-6">Frequently Asked Questions</h2>
          <FAQAccordion faqs={cheat.faqs} />
        </section>
      )}

      <SocialShare title={`${cheat.title} — GTA 6 Expected Cheat`} url={`https://gta6cheatshub.com/gta6/${cheat.category}/${cheat.slug}`} />
      <AdBanner size="leaderboard" />
    </div>
  );
}
