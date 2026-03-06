import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import AdBanner from '@/components/AdBanner';
import SocialShare from '@/components/SocialShare';
import Link from 'next/link';
import news from '@/data/news.json';

export async function generateStaticParams() {
  return news.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = news.find(a => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `https://gta6cheatshub.com/news/${slug}` },
    openGraph: { title: article.title, description: article.excerpt, type: 'article' },
  };
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const article = news.find(a => a.slug === slug);
  if (!article) notFound();
  const otherArticles = news.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'News', href: '/news' }, { label: article.title }]} />

      <div className="flex flex-wrap gap-2 mb-3">
        {article.tags.map(t => <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{t}</span>)}
      </div>
      <h1 className="font-heading text-3xl md:text-5xl mb-4">{article.title}</h1>
      <div className="flex items-center gap-3 text-sm text-text-secondary mb-8">
        <span>{article.date}</span><span>•</span><span>By {article.author}</span>
      </div>

      <div className="h-64 bg-bg-secondary rounded-xl flex items-center justify-center text-7xl mb-8">{article.thumbnailPlaceholder}</div>

      <article className="prose-custom space-y-4 text-text-secondary leading-relaxed">
        {article.fullContent.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
      </article>

      <AdBanner size="rectangle" />

      <div className="my-8">
        <SocialShare title={article.title} url={`https://gta6cheatshub.com/news/${article.slug}`} />
      </div>

      {otherArticles.length > 0 && (
        <section className="my-8">
          <h2 className="font-heading text-2xl mb-4">More News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherArticles.map(a => (
              <Link key={a.slug} href={`/news/${a.slug}`} className="group bg-bg-card border border-border-color rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                <div className="h-32 bg-bg-secondary flex items-center justify-center text-4xl">{a.thumbnailPlaceholder}</div>
                <div className="p-4">
                  <p className="text-xs text-text-secondary mb-1">{a.date}</p>
                  <h3 className="font-heading text-sm group-hover:text-primary transition-colors">{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <AdBanner size="leaderboard" />
    </div>
  );
}
