import React from 'react';
import { Sparkles, Star, Zap } from 'lucide-react';

const sparkleColors = [
  { bg: 'bg-amber-300', shadow: 'rgba(251, 191, 36, 0.6)', glow: 'rgba(251, 191, 36, 0.8)' },
  { bg: 'bg-yellow-200', shadow: 'rgba(253, 224, 71, 0.6)', glow: 'rgba(253, 224, 71, 0.8)' },
  { bg: 'bg-pink-300', shadow: 'rgba(249, 168, 212, 0.6)', glow: 'rgba(249, 168, 212, 0.8)' },
  { bg: 'bg-purple-300', shadow: 'rgba(216, 180, 254, 0.6)', glow: 'rgba(216, 180, 254, 0.8)' },
  { bg: 'bg-cyan-300', shadow: 'rgba(103, 232, 249, 0.6)', glow: 'rgba(103, 232, 249, 0.8)' },
  { bg: 'bg-emerald-300', shadow: 'rgba(110, 231, 183, 0.6)', glow: 'rgba(110, 231, 183, 0.8)' },
];

const MagicWand: React.FC = () => {
  return (
    <>
      {/* Main floating wand */}
      <div className="fixed pointer-events-none z-30 animate-wand-float">
        <div className="relative">
          <div className="text-amber-400 animate-wand-glow">
            <Sparkles size={28} className="drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
          </div>
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-amber-300 rounded-full animate-sparkle-1 opacity-80" />
          <div className="absolute top-0 -right-2 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-sparkle-2 opacity-70" />
          <div className="absolute -bottom-1 left-0 w-1 h-1 bg-pink-300 rounded-full animate-sparkle-3 opacity-60" />
        </div>
      </div>

      {/* Secondary floating wand with star */}
      <div className="fixed pointer-events-none z-30 animate-wand-float-2">
        <div className="relative">
          <div className="text-pink-300 animate-wand-glow-slow">
            <Star size={20} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(249,168,212,0.7)]" />
          </div>
          <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-purple-200 rounded-full animate-sparkle-2 opacity-70" />
        </div>
      </div>

      {/* Third floating element with zap */}
      <div className="fixed pointer-events-none z-30 animate-wand-float-3">
        <div className="relative">
          <div className="text-cyan-300 animate-wand-glow">
            <Zap size={22} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(103,232,249,0.7)]" />
          </div>
          <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-200 rounded-full animate-sparkle-1 opacity-60" />
        </div>
      </div>

      {/* Small floating sparkles icon */}
      <div className="fixed pointer-events-none z-30 animate-wand-float-4">
        <div className="text-purple-300 animate-wand-glow-slow">
          <Sparkles size={16} className="drop-shadow-[0_0_6px_rgba(216,180,254,0.7)]" />
        </div>
      </div>

      {/* Scattered sparkle particles - multiple colors and sizes */}
      {sparkleColors.map((color, colorIndex) =>
        [...Array(3)].map((_, i) => {
          const particleIndex = colorIndex * 3 + i;
          const size = [1, 1.5, 2, 2.5, 3][particleIndex % 5];
          const duration = 4 + (particleIndex % 4) * 1.5;
          const delay = particleIndex * 0.4;
          
          return (
            <div
              key={`${colorIndex}-${i}`}
              className="fixed pointer-events-none z-20"
              style={{
                animation: `sparkle-particle-${(particleIndex % 3) + 1} ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            >
              <div 
                className={`${color.bg} rounded-full opacity-70`}
                style={{
                  width: `${size * 4}px`,
                  height: `${size * 4}px`,
                  boxShadow: `0 0 ${size * 4}px ${color.shadow}, 0 0 ${size * 8}px ${color.glow}`,
                }}
              />
            </div>
          );
        })
      )}

      {/* Larger glowing orbs */}
      <div 
        className="fixed pointer-events-none z-20 animate-orb-float-1"
        style={{ top: '30%', left: '20%' }}
      >
        <div 
          className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 opacity-40"
          style={{ boxShadow: '0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(251, 191, 36, 0.3)' }}
        />
      </div>
      
      <div 
        className="fixed pointer-events-none z-20 animate-orb-float-2"
        style={{ top: '60%', right: '25%' }}
      >
        <div 
          className="w-3 h-3 rounded-full bg-gradient-to-br from-pink-200 to-purple-400 opacity-50"
          style={{ boxShadow: '0 0 15px rgba(216, 180, 254, 0.5), 0 0 30px rgba(249, 168, 212, 0.3)' }}
        />
      </div>

      <div 
        className="fixed pointer-events-none z-20 animate-orb-float-3"
        style={{ top: '45%', left: '70%' }}
      >
        <div 
          className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-cyan-200 to-emerald-400 opacity-45"
          style={{ boxShadow: '0 0 12px rgba(103, 232, 249, 0.5), 0 0 25px rgba(110, 231, 183, 0.3)' }}
        />
      </div>
    </>
  );
};

export default MagicWand;
