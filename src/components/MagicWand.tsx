import React, { memo, useMemo } from 'react';
import { Sparkles, Star, Zap } from 'lucide-react';

// Optimized sparkle colors - reduced for better performance
const sparkleColors = [
  { bg: 'bg-amber-300/80', glow: 'hsl(var(--accent) / 0.6)' },
  { bg: 'bg-pink-300/80', glow: 'hsl(var(--primary) / 0.5)' },
  { bg: 'bg-cyan-300/80', glow: 'hsl(var(--secondary) / 0.5)' },
];

// Memoized sparkle particle for performance
const SparkleParticle = memo(({ colorIndex, index }: { colorIndex: number; index: number }) => {
  const color = sparkleColors[colorIndex];
  const particleIndex = colorIndex * 2 + index;
  const size = [2, 3, 2.5][particleIndex % 3];
  const duration = 6 + (particleIndex % 3) * 2;
  const delay = particleIndex * 0.6;
  
  return (
    <div
      className="fixed pointer-events-none z-20 will-change-transform"
      style={{
        animation: `sparkle-particle-${(particleIndex % 3) + 1} ${duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div 
        className={`${color.bg} rounded-full`}
        style={{
          width: `${size * 3}px`,
          height: `${size * 3}px`,
          boxShadow: `0 0 ${size * 6}px ${color.glow}`,
        }}
      />
    </div>
  );
});

SparkleParticle.displayName = 'SparkleParticle';

// Memoized orb component
const FloatingOrb = memo(({ 
  position, 
  animClass, 
  gradient, 
  size 
}: { 
  position: { top: string; left?: string; right?: string }; 
  animClass: string;
  gradient: string;
  size: string;
}) => (
  <div 
    className={`fixed pointer-events-none z-20 ${animClass} will-change-transform`}
    style={position}
  >
    <div 
      className={`${size} rounded-full ${gradient} opacity-40 blur-[1px]`}
    />
  </div>
));

FloatingOrb.displayName = 'FloatingOrb';

const MagicWand: React.FC = () => {
  // Memoize particles to prevent re-creation on each render
  const particles = useMemo(() => 
    sparkleColors.flatMap((_, colorIndex) =>
      [...Array(2)].map((_, i) => (
        <SparkleParticle key={`${colorIndex}-${i}`} colorIndex={colorIndex} index={i} />
      ))
    ), []
  );

  return (
    <>
      {/* Main floating wand - optimized with will-change */}
      <div className="fixed pointer-events-none z-30 animate-wand-float will-change-transform">
        <div className="relative">
          <div className="text-amber-400 animate-wand-glow">
            <Sparkles size={24} className="drop-shadow-[0_0_8px_hsl(var(--accent)/0.7)]" />
          </div>
          <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-amber-300 rounded-full animate-sparkle-1" />
        </div>
      </div>

      {/* Secondary floating wand with star */}
      <div className="fixed pointer-events-none z-30 animate-wand-float-2 will-change-transform">
        <div className="relative">
          <div className="text-pink-300 animate-wand-glow-slow">
            <Star size={18} fill="currentColor" className="drop-shadow-[0_0_6px_hsl(var(--primary)/0.6)]" />
          </div>
        </div>
      </div>

      {/* Third floating element with zap */}
      <div className="fixed pointer-events-none z-30 animate-wand-float-3 will-change-transform">
        <div className="text-cyan-300 animate-wand-glow">
          <Zap size={20} fill="currentColor" className="drop-shadow-[0_0_6px_hsl(var(--secondary)/0.6)]" />
        </div>
      </div>

      {/* Small floating sparkles */}
      <div className="fixed pointer-events-none z-30 animate-wand-float-4 will-change-transform">
        <div className="text-purple-300 animate-wand-glow-slow">
          <Sparkles size={14} className="drop-shadow-[0_0_5px_hsl(var(--accent)/0.6)]" />
        </div>
      </div>

      {/* Optimized sparkle particles - reduced count */}
      {particles}

      {/* Floating orbs - simplified */}
      <FloatingOrb 
        position={{ top: '30%', left: '20%' }}
        animClass="animate-orb-float-1"
        gradient="bg-gradient-to-br from-amber-200/50 to-amber-400/30"
        size="w-3 h-3"
      />
      <FloatingOrb 
        position={{ top: '60%', right: '25%' }}
        animClass="animate-orb-float-2"
        gradient="bg-gradient-to-br from-pink-200/50 to-purple-400/30"
        size="w-2.5 h-2.5"
      />
      <FloatingOrb 
        position={{ top: '45%', left: '70%' }}
        animClass="animate-orb-float-3"
        gradient="bg-gradient-to-br from-cyan-200/50 to-emerald-400/30"
        size="w-2 h-2"
      />
    </>
  );
};

export default memo(MagicWand);
