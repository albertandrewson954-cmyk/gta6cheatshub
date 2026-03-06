'use client';

export default function GTAHeroBackground({ variant = 'gta5' }) {
  const isGTA6 = variant === 'gta6';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className={`absolute inset-0 ${isGTA6 ? 'bg-gradient-to-br from-[#0a0a2e] via-[#1a0a2e] to-[#0a1a2e]' : 'bg-gradient-to-br from-[#0a0a0a] via-[#1a0a1a] to-[#0a1a0a]'}`} />

      {/* Animated neon sun/moon */}
      <div className={`absolute ${isGTA6 ? 'top-8 right-[10%]' : 'top-12 right-[15%]'} w-32 h-32 md:w-48 md:h-48 rounded-full opacity-20 animate-pulse`}
        style={{
          background: isGTA6
            ? 'radial-gradient(circle, #ff6b35 0%, #ff006e 40%, transparent 70%)'
            : 'radial-gradient(circle, #00f5ff 0%, #ff006e 40%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Horizontal neon light streaks */}
      <div className="absolute top-[30%] left-0 w-full h-[1px] opacity-10"
        style={{ background: 'linear-gradient(90deg, transparent, #ff006e, transparent)', animation: 'streakMove 8s ease-in-out infinite' }} />
      <div className="absolute top-[50%] left-0 w-full h-[1px] opacity-10"
        style={{ background: `linear-gradient(90deg, transparent, ${isGTA6 ? '#ff6b35' : '#00f5ff'}, transparent)`, animation: 'streakMove 12s ease-in-out infinite reverse' }} />

      {/* City skyline SVG silhouette */}
      <svg className="absolute bottom-0 left-0 w-full h-[40%] md:h-[50%] opacity-[0.08]" viewBox="0 0 1400 400" preserveAspectRatio="xMidYMax slice" fill="currentColor">
        {isGTA6 ? (
          /* Vice City / Miami style skyline with palm trees */
          <g className="text-secondary">
            {/* Palm tree left */}
            <path d="M80,400 L85,280 L90,400 M85,280 Q60,250 40,260 Q65,255 85,280 Q70,240 50,235 Q72,243 85,280 Q100,250 120,260 Q100,258 85,280 Q110,240 130,240 Q105,248 85,280" />
            {/* Buildings */}
            <rect x="150" y="200" width="40" height="200" rx="2" />
            <rect x="200" y="250" width="35" height="150" rx="2" />
            <rect x="245" y="180" width="50" height="220" rx="2" />
            <rect x="305" y="220" width="30" height="180" rx="2" />
            <rect x="345" y="150" width="60" height="250" rx="2" />
            <rect x="415" y="190" width="45" height="210" rx="2" />
            <rect x="470" y="100" width="55" height="300" rx="2" />
            <rect x="535" y="160" width="40" height="240" rx="2" />
            <rect x="585" y="120" width="70" height="280" rx="2" />
            <rect x="665" y="170" width="50" height="230" rx="2" />
            {/* Tall tower center */}
            <rect x="725" y="60" width="45" height="340" rx="2" />
            <polygon points="725,60 747,20 770,60" />
            <rect x="780" y="180" width="55" height="220" rx="2" />
            <rect x="845" y="140" width="40" height="260" rx="2" />
            <rect x="895" y="200" width="60" height="200" rx="2" />
            <rect x="965" y="160" width="45" height="240" rx="2" />
            <rect x="1020" y="110" width="50" height="290" rx="2" />
            <rect x="1080" y="190" width="35" height="210" rx="2" />
            <rect x="1125" y="230" width="45" height="170" rx="2" />
            {/* Palm tree right */}
            <path d="M1250,400 L1255,290 L1260,400 M1255,290 Q1230,260 1210,270 Q1235,265 1255,290 Q1240,250 1220,245 Q1242,253 1255,290 Q1270,260 1290,270 Q1270,268 1255,290 Q1280,250 1300,250 Q1275,258 1255,290" />
            {/* Water reflection line */}
            <rect x="0" y="395" width="1400" height="5" opacity="0.3" />
          </g>
        ) : (
          /* Los Santos / LA style skyline */
          <g className="text-primary">
            {/* Mountains background */}
            <polygon points="0,300 100,200 200,250 350,150 500,220 600,180 750,250 900,170 1000,230 1100,190 1200,240 1400,200 1400,400 0,400" opacity="0.3" />
            {/* Buildings */}
            <rect x="100" y="220" width="50" height="180" rx="2" />
            <rect x="160" y="260" width="35" height="140" rx="2" />
            <rect x="210" y="180" width="60" height="220" rx="2" />
            <rect x="280" y="230" width="40" height="170" rx="2" />
            <rect x="330" y="160" width="55" height="240" rx="2" />
            <rect x="400" y="200" width="45" height="200" rx="2" />
            {/* Maze Bank Tower (tall center) */}
            <rect x="460" y="50" width="50" height="350" rx="2" />
            <polygon points="460,50 485,10 510,50" />
            <rect x="520" y="140" width="60" height="260" rx="2" />
            <rect x="590" y="190" width="45" height="210" rx="2" />
            <rect x="645" y="120" width="55" height="280" rx="2" />
            <rect x="710" y="170" width="40" height="230" rx="2" />
            <rect x="760" y="100" width="65" height="300" rx="2" />
            <rect x="835" y="200" width="50" height="200" rx="2" />
            <rect x="895" y="240" width="35" height="160" rx="2" />
            <rect x="940" y="180" width="55" height="220" rx="2" />
            <rect x="1010" y="210" width="40" height="190" rx="2" />
            <rect x="1060" y="150" width="50" height="250" rx="2" />
            <rect x="1120" y="230" width="45" height="170" rx="2" />
            <rect x="1180" y="260" width="60" height="140" rx="2" />
            <rect x="1260" y="280" width="40" height="120" rx="2" />
            {/* Vinewood sign hint */}
            <text x="1100" y="145" fontSize="16" opacity="0.5" fontFamily="sans-serif" fontWeight="bold">VINEWOOD</text>
          </g>
        )}
      </svg>

      {/* Animated floating particles - car headlights effect */}
      <div className="absolute bottom-[15%] left-0 w-full">
        <div className="h-[2px] w-16 rounded-full absolute opacity-30"
          style={{ background: '#ffffff', animation: 'carLight 6s linear infinite', left: '-64px', bottom: '0' }} />
        <div className="h-[2px] w-16 rounded-full absolute opacity-20"
          style={{ background: '#ff4444', animation: 'carLight 8s linear infinite', animationDelay: '3s', left: '-64px', bottom: '20px' }} />
        <div className="h-[2px] w-12 rounded-full absolute opacity-25"
          style={{ background: '#ffffff', animation: 'carLight 10s linear infinite', animationDelay: '1s', left: '-48px', bottom: '40px' }} />
      </div>

      {/* Neon sign glow effects */}
      <div className={`absolute top-[25%] left-[5%] w-20 h-8 rounded opacity-10 ${isGTA6 ? 'bg-orange-500' : 'bg-primary'}`}
        style={{ filter: 'blur(15px)', animation: 'neonFlicker 4s ease-in-out infinite' }} />
      <div className={`absolute top-[35%] right-[8%] w-16 h-6 rounded opacity-10 ${isGTA6 ? 'bg-pink-500' : 'bg-secondary'}`}
        style={{ filter: 'blur(12px)', animation: 'neonFlicker 3s ease-in-out infinite', animationDelay: '1.5s' }} />
      <div className={`absolute top-[20%] left-[40%] w-24 h-4 rounded opacity-[0.07] ${isGTA6 ? 'bg-cyan-400' : 'bg-primary'}`}
        style={{ filter: 'blur(10px)', animation: 'neonFlicker 5s ease-in-out infinite', animationDelay: '0.8s' }} />

      {/* Moving stars / helicopter lights */}
      <div className="absolute w-2 h-2 rounded-full bg-white opacity-20"
        style={{ animation: 'heliMove 20s linear infinite', top: '15%' }} />
      <div className="absolute w-1 h-1 rounded-full bg-red-500 opacity-30"
        style={{ animation: 'heliMove 20s linear infinite', top: '15%', animationDelay: '0.3s' }} />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <style jsx>{`
        @keyframes streakMove {
          0%, 100% { transform: translateX(-30%); opacity: 0.05; }
          50% { transform: translateX(30%); opacity: 0.15; }
        }
        @keyframes carLight {
          0% { transform: translateX(0); }
          100% { transform: translateX(1500px); }
        }
        @keyframes neonFlicker {
          0%, 100% { opacity: 0.08; }
          30% { opacity: 0.15; }
          50% { opacity: 0.05; }
          70% { opacity: 0.12; }
          90% { opacity: 0.03; }
        }
        @keyframes heliMove {
          0% { left: -2%; }
          100% { left: 102%; }
        }
      `}</style>
    </div>
  );
}
