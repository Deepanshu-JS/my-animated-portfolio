import React from 'react';

const ConnectingLines: React.FC = () => {
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Dashed connecting lines */}
      <path
        d="M 20 20 Q 35 30, 50 35"
        fill="none"
        stroke="hsl(var(--muted-foreground) / 0.4)"
        strokeWidth="0.3"
        className="dashed-line"
      />
      <path
        d="M 80 25 Q 65 35, 55 40"
        fill="none"
        stroke="hsl(var(--muted-foreground) / 0.4)"
        strokeWidth="0.3"
        className="dashed-line"
      />
      <path
        d="M 15 70 Q 30 65, 45 60"
        fill="none"
        stroke="hsl(var(--muted-foreground) / 0.4)"
        strokeWidth="0.3"
        className="dashed-line"
      />
      <path
        d="M 85 75 Q 70 70, 55 65"
        fill="none"
        stroke="hsl(var(--muted-foreground) / 0.4)"
        strokeWidth="0.3"
        className="dashed-line"
      />
      
      {/* Red thread connections */}
      <path
        d="M 75 20 C 70 25, 65 30, 60 35"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="0.4"
        opacity="0.6"
      />
      <path
        d="M 25 25 C 30 30, 40 35, 45 40"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="0.4"
        opacity="0.6"
      />
    </svg>
  );
};

export default ConnectingLines;
