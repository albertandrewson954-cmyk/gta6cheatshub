import Link from 'next/link';
import NewsBadge from './NewsBadge';

export default function CheatCard({ cheat, game = 'gta5' }) {
  const isNew = cheat.dateAdded && (Date.now() - new Date(cheat.dateAdded).getTime()) < 7 * 24 * 60 * 60 * 1000;
  return (
    <Link href={`/${game}/${cheat.category}/${cheat.slug}`} className="group block bg-bg-card border border-border-color rounded-xl p-5 hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden">
      <div className="flex items-start justify-between mb-2">
        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium capitalize">{cheat.category.replace('-', ' ')}</span>
        {isNew && <NewsBadge />}
      </div>
      <h3 className="font-heading text-xl mt-2 group-hover:text-primary transition-colors">{cheat.title}</h3>
      <p className="text-text-secondary text-sm mt-2 line-clamp-2">{cheat.description}</p>
      <div className="flex items-center gap-2 mt-3 text-xs text-text-secondary">
        <span>🎮 PS</span><span>🟢 Xbox</span><span>💻 PC</span>
      </div>
      <div className="mt-4 text-sm text-primary font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
        View Cheat <span>→</span>
      </div>
    </Link>
  );
}
