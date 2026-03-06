'use client';
import { useState, useEffect } from 'react';

const TARGET = new Date('2026-11-19T00:00:00').getTime();

export default function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  const blocks = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <div className="flex gap-3 justify-center">
      {blocks.map(b => (
        <div key={b.label} className="text-center">
          <div className="bg-bg-card border border-border-color rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[80px]">
            <span className="font-heading text-2xl md:text-4xl text-secondary">{String(b.value).padStart(2, '0')}</span>
          </div>
          <span className="text-[10px] md:text-xs text-text-secondary mt-1 block">{b.label}</span>
        </div>
      ))}
    </div>
  );
}
