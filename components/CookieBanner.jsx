'use client';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShow(true);
  }, []);

  const handleChoice = (accepted) => {
    localStorage.setItem('cookie-consent', accepted ? 'accepted' : 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-20 md:bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-bg-card border border-border-color rounded-xl p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-center gap-4">
        <p className="text-sm text-text-secondary flex-1">We use cookies to improve your experience and show relevant ads.</p>
        <div className="flex gap-3 shrink-0">
          <button onClick={() => handleChoice(false)} className="px-4 py-2 text-sm text-text-secondary hover:text-white border border-border-color rounded-lg transition-colors min-h-[44px]">Decline</button>
          <button onClick={() => handleChoice(true)} className="px-6 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors min-h-[44px]">Accept</button>
        </div>
      </div>
    </div>
  );
}
