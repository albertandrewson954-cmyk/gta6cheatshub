'use client';
import { useEffect } from 'react';

export default function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) { const t = setTimeout(onClose, 2500); return () => clearTimeout(t); }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-50 bg-success/90 text-black px-6 py-3 rounded-lg font-medium text-sm shadow-lg animate-slide-up">
      {message}
    </div>
  );
}
