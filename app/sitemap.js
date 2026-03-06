import gta5Cheats from '@/data/gta5-cheats.json';
import gta6Cheats from '@/data/gta6-cheats.json';
import categories from '@/data/categories.json';
import news from '@/data/news.json';

const BASE = 'https://gta6cheatshub.com';

export default function sitemap() {
  const staticPages = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/gta5`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/gta6`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/news`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/search`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE}/privacy-policy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${BASE}/gta5/is-there-a-money-cheat`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/gta5/do-cheats-disable-achievements`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/gta5/cheats-in-gta-online`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/gta5/how-to-enter-cheats-ps5`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/gta5/how-to-enter-cheats-xbox`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/gta5/how-to-enter-cheats-pc`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/gta5/best-cheats`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/gta5/all-cheats`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];

  const gta5CategoryPages = categories.map(cat => ({
    url: `${BASE}/gta5/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const gta6CategoryPages = categories.map(cat => ({
    url: `${BASE}/gta6/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const gta5CheatPages = gta5Cheats.map(cheat => ({
    url: `${BASE}/gta5/${cheat.category}/${cheat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const gta6CheatPages = gta6Cheats.map(cheat => ({
    url: `${BASE}/gta6/${cheat.category}/${cheat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const newsPages = news.map(article => ({
    url: `${BASE}/news/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...gta5CategoryPages, ...gta6CategoryPages, ...gta5CheatPages, ...gta6CheatPages, ...newsPages];
}
