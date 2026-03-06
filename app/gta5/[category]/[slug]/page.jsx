import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import PlatformTabs from '@/components/PlatformTabs';
import FAQAccordion from '@/components/FAQAccordion';
import SocialShare from '@/components/SocialShare';
import ChallengeUnlock from '@/components/ChallengeUnlock';
import CheatCard from '@/components/CheatCard';
import AdBanner from '@/components/AdBanner';
import SEOHead from '@/components/SEOHead';
import categories from '@/data/categories.json';
import gta5Cheats from '@/data/gta5-cheats.json';

export async function generateStaticParams() {
  return gta5Cheats.map(c => ({ category: c.category, slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cheat = gta5Cheats.find(c => c.slug === slug);
  if (!cheat) return {};
  return {
    title: `${cheat.title} GTA 5 Cheat Code PS5 Xbox PC`,
    description: `How to use the ${cheat.title} cheat in GTA 5. All button combinations for PS5, PS4, PS3, Xbox and PC plus in-game phone numbers. Step by step instructions included.`,
    alternates: { canonical: `https://gta6cheatshub.com/gta5/${cheat.category}/${cheat.slug}` },
    openGraph: { title: `${cheat.title} — GTA 5 Cheat Code`, description: cheat.description, type: 'article' },
  };
}

export default async function CheatPage({ params }) {
  const { category, slug } = await params;
  const cheat = gta5Cheats.find(c => c.slug === slug && c.category === category);
  if (!cheat) notFound();
  const cat = categories.find(c => c.slug === category);
  const related = gta5Cheats.filter(c => c.id !== cheat.id && (c.category === category)).slice(0, 6);

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to use ${cheat.title} cheat in GTA 5`,
    description: cheat.description,
    step: (cheat.activationMethods?.controller || []).map((s, i) => ({ '@type': 'HowToStep', position: i + 1, text: s })),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SEOHead jsonLd={howToSchema} />
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'GTA 5', href: '/gta5' }, { label: cat?.name || category, href: `/gta5/${category}` }, { label: cheat.title }]} />

      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium capitalize">{cheat.category.replace('-', ' ')}</span>
        {cheat.popular && <span className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium">Popular</span>}
      </div>
      <h1 className="font-heading text-3xl md:text-5xl mb-4">{cheat.title}</h1>
      <p className="text-text-secondary text-lg mb-8">{cheat.description}</p>

      {/* Platform Tabs */}
      <PlatformTabs cheat={cheat} />

      {/* Challenge Unlock */}
      {cheat.challengeRequired && <ChallengeUnlock instructions={cheat.challengeInstructions} />}

      {/* Important Notes */}
      {cheat.notes && (
        <div className="warning-box my-6">
          <h3 className="font-heading text-lg text-yellow-400 mb-2">⚠️ Important Notes</h3>
          <p className="text-sm text-yellow-200/80">{cheat.notes}</p>
        </div>
      )}

      <AdBanner size="rectangle" />

      {/* Activation Methods */}
      <section className="my-8">
        <h2 className="font-heading text-2xl mb-6">How to Activate This Cheat</h2>

        <div className="space-y-6">
          {/* Controller Method */}
          <div className="bg-bg-card border border-border-color rounded-xl p-6">
            <h3 className="font-heading text-xl text-primary mb-4">🎮 Controller Method (PS/Xbox)</h3>
            <ol className="space-y-3">
              {(cheat.activationMethods?.controller || []).map((s, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">{i + 1}</span>
                  <span className="text-text-secondary">{s}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Phone Method */}
          <div className="bg-bg-card border border-border-color rounded-xl p-6">
            <h3 className="font-heading text-xl text-secondary mb-4">📱 In-Game Phone Method</h3>
            <ol className="space-y-3">
              {(cheat.activationMethods?.phone || []).map((s, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs font-bold">{i + 1}</span>
                  <span className="text-text-secondary">{s}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* PC Method */}
          <div className="bg-bg-card border border-border-color rounded-xl p-6">
            <h3 className="font-heading text-xl text-success mb-4">💻 PC Method</h3>
            <ol className="space-y-3">
              {(cheat.activationMethods?.pc || []).map((s, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-success/20 text-success flex items-center justify-center text-xs font-bold">{i + 1}</span>
                  <span className="text-text-secondary">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <AdBanner size="infeed" />

      {/* FAQ */}
      {cheat.faqs && cheat.faqs.length > 0 && (
        <section className="my-8">
          <h2 className="font-heading text-2xl mb-6">Frequently Asked Questions</h2>
          <FAQAccordion faqs={cheat.faqs} />
        </section>
      )}

      {/* Social Share */}
      <div className="my-8">
        <SocialShare title={`${cheat.title} — GTA 5 Cheat Code`} url={`https://gta6cheatshub.com/gta5/${cheat.category}/${cheat.slug}`} />
      </div>

      {/* Related Cheats */}
      {related.length > 0 && (
        <section className="my-8">
          <h2 className="font-heading text-2xl mb-6">Related Cheats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map(c => <CheatCard key={c.id} cheat={c} game="gta5" />)}
          </div>
        </section>
      )}

      <AdBanner size="leaderboard" />
    </div>
  );
}
