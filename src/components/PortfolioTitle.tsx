import React from 'react';

const PortfolioTitle: React.FC = () => {
  return (
    <div className="relative">
      {/* Main PORTFOLIO text */}
      <div className="relative flex flex-col items-center">
        <div className="flex items-center gap-1 md:gap-2">
          {/* P with character face */}
          <div className="relative">
            <span className="font-marker text-6xl md:text-8xl lg:text-9xl text-foreground tracking-tight drop-shadow-lg">
              P
            </span>
          </div>
          
          {/* O with glasses character */}
          <div className="relative">
            <span className="font-marker text-6xl md:text-8xl lg:text-9xl text-foreground tracking-tight drop-shadow-lg">
              O
            </span>
            {/* Glasses overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3">
              <svg width="40" height="20" viewBox="0 0 40 20" className="md:w-14 md:h-8">
                <circle cx="10" cy="10" r="8" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
                <circle cx="30" cy="10" r="8" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
                <line x1="18" y1="10" x2="22" y2="10" stroke="hsl(var(--foreground))" strokeWidth="2" />
              </svg>
            </div>
          </div>
          
          <span className="font-marker text-6xl md:text-8xl lg:text-9xl text-foreground tracking-tight drop-shadow-lg">
            R
          </span>
          <span className="font-marker text-6xl md:text-8xl lg:text-9xl text-foreground tracking-tight drop-shadow-lg">
            T
          </span>
        </div>
        
        <div className="flex items-center gap-1 md:gap-2 -mt-4 md:-mt-8">
          <span className="font-marker text-6xl md:text-8xl lg:text-9xl text-foreground tracking-tight drop-shadow-lg">
            F
          </span>
          
          {/* O with red dot (Japan-inspired) */}
          <div className="relative">
            <span className="font-marker text-6xl md:text-8xl lg:text-9xl text-foreground tracking-tight drop-shadow-lg">
              O
            </span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary animate-pulse-glow" />
          </div>
          
          <span className="font-marker text-6xl md:text-8xl lg:text-9xl text-foreground tracking-tight drop-shadow-lg">
            L
          </span>
          
          {/* I with character */}
          <div className="relative">
            <span className="font-marker text-6xl md:text-8xl lg:text-9xl text-foreground tracking-tight drop-shadow-lg">
              I
            </span>
          </div>
          
          {/* O with face silhouette */}
          <div className="relative">
            <span className="font-marker text-6xl md:text-8xl lg:text-9xl text-foreground tracking-tight drop-shadow-lg">
              O
            </span>
            {/* Hair silhouette */}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2">
              <svg width="30" height="15" viewBox="0 0 30 15" className="md:w-10 md:h-5">
                <path 
                  d="M5 15 Q8 5, 15 8 Q22 5, 25 15" 
                  fill="hsl(var(--foreground))" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Grid overlay effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default PortfolioTitle;
