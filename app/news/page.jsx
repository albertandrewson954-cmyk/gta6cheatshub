import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import AdBanner from '@/components/AdBanner';
import news from '@/data/news.json';

export const metadata = {
  title: 'GTA News — Latest GTA 6 and GTA 5 Updates',
  description: 'Stay up to date with the latest GTA 6 news, GTA 5 updates, and cheat code announcements. Breaking news from the world of Grand Theft Auto.',
  alternates: { canonical: 'https://gta6cheatshub.com/news' },
};

export default function NewsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'News' }]} />
      <h1 className="font-heading text-4xl md:text-5xl mb-4">Latest GTA News</h1>
      <p className="text-text-secondary mb-8">Breaking news and updates about GTA 6, GTA 5, and cheat codes.</p>

      <div className="space-y-6">
        {news.map((article, i) => (
          <div key={article.slug}>
            <Link href={`/news/${article.slug}`} className="group flex flex-col md:flex-row gap-4 bg-bg-card border border-border-color rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
              <div className="md:w-48 h-40 md:h-auto bg-bg-secondary flex items-center justify-center text-5xl shrink-0">{article.thumbnailPlaceholder}</div>
              <div className="p-5 flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  {article.tags.map(t => <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{t}</span>)}
                </div>
                <h2 className="font-heading text-xl group-hover:text-primary transition-colors">{article.title}</h2>
                <p className="text-sm text-text-secondary mt-2 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-text-secondary">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.author}</span>
                </div>
              </div>
            </Link>
            {(i + 1) % 3 === 0 && <AdBanner size="infeed" />}
          </div>
        ))}
      </div>

      <AdBanner size="leaderboard" />
    </div>
  );
}
