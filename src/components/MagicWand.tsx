import React from 'react';
import { Sparkles } from 'lucide-react';

const MagicWand: React.FC = () => {
  return (
    <>
      {/* Main floating wand */}
      <div className="fixed pointer-events-none z-30 animate-wand-float">
        <div className="relative">
          {/* Wand icon */}
          <div className="text-amber-400 animate-wand-glow">
            <Sparkles size={28} className="drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
          </div>
          
          {/* Sparkle trail */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-amber-300 rounded-full animate-sparkle-1 opacity-80" />
          <div className="absolute top-0 -right-2 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-sparkle-2 opacity-70" />
          <div className="absolute -bottom-1 left-0 w-1 h-1 bg-amber-200 rounded-full animate-sparkle-3 opacity-60" />
        </div>
      </div>

      {/* Secondary smaller wand */}
      <div className="fixed pointer-events-none z-30 animate-wand-float-2">
        <div className="relative">
          <div className="text-yellow-300 animate-wand-glow-slow">
            <Sparkles size={18} className="drop-shadow-[0_0_8px_rgba(253,224,71,0.7)]" />
          </div>
          <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-yellow-200 rounded-full animate-sparkle-2 opacity-70" />
        </div>
      </div>

      {/* Scattered sparkle particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="fixed pointer-events-none z-20"
          style={{
            animation: `sparkle-particle ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          <div 
            className="w-1 h-1 bg-amber-300/60 rounded-full"
            style={{
              boxShadow: '0 0 6px rgba(251, 191, 36, 0.5)',
            }}
          />
        </div>
      ))}
    </>
  );
};

export default MagicWand;
