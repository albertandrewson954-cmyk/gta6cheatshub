'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

const images = [
  '/slides/slide1.jpg',
  '/slides/slide2.jpg',
  '/slides/slide3.jpg',
  '/slides/slide4.jpg',
  '/slides/slide5.jpg',
  '/slides/slide6.jpg',
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState(new Set());
  const timerRef = useRef(null);

  const validIndices = images.map((_, i) => i).filter(i => !failed.has(i));

  const advance = useCallback(() => {
    setActive(prev => {
      const currentValid = images.map((_, i) => i).filter(i => !failed.has(i));
      if (currentValid.length <= 1) return prev;
      const currentPos = currentValid.indexOf(prev);
      const nextPos = (currentPos + 1) % currentValid.length;
      return currentValid[nextPos];
    });
  }, [failed]);

  useEffect(() => {
    timerRef.current = setInterval(advance, 5000);
    return () => clearInterval(timerRef.current);
  }, [advance]);

  const handleError = useCallback((index) => {
    setFailed(prev => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
    setActive(prev => {
      if (prev === index) {
        const remaining = images.map((_, i) => i).filter(i => !failed.has(i) && i !== index);
        return remaining.length > 0 ? remaining[0] : 0;
      }
      return prev;
    });
  }, [failed]);

  const goTo = useCallback((index) => {
    setActive(index);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 5000);
  }, [advance]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {images.map((src, i) => (
        !failed.has(i) && (
          <img
            key={i}
            src={src}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            onError={() => handleError(i)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${active === i ? 'opacity-100' : 'opacity-0'}`}
          />
        )
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }} />

      {/* Dot indicators */}
      {validIndices.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[2] flex gap-2 pointer-events-auto">
          {validIndices.map(i => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${validIndices.indexOf(i) + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${active === i ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
