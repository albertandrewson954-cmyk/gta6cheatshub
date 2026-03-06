export default function ChallengeUnlock({ instructions }) {
  if (!instructions || instructions.length === 0) return null;
  return (
    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-6">
      <h3 className="font-heading text-xl text-amber-400 flex items-center gap-2 mb-4">
        🔒 How to Unlock This Cheat
      </h3>
      <p className="text-sm text-amber-200/80 mb-4">This cheat requires completing a challenge before it becomes available. Follow these steps:</p>
      <ol className="space-y-2">
        {instructions.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm">
            <span className="shrink-0 w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold">{i + 1}</span>
            <span className="text-text-secondary">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
