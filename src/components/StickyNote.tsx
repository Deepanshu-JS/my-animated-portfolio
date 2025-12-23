import React, { forwardRef, memo } from 'react';

interface StickyNoteProps {
  title: string;
  description: string;
  pinColor?: 'red' | 'blue';
  rotation?: number;
  animationClass?: string;
  delay?: string;
  className?: string;
}

const StickyNote = forwardRef<HTMLDivElement, StickyNoteProps>(({
  title,
  description,
  pinColor = 'red',
  rotation = 0,
  animationClass = 'animate-float-slow',
  delay = '0s',
  className = '',
}, ref) => {
  return (
    <div
      ref={ref}
      className={`relative ${animationClass} ${className} z-20 hover:z-50 will-change-transform`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        animationDelay: delay,
      }}
    >
      {/* Hover wrapper */}
      <div className="transition-transform duration-200 ease-out hover:-translate-y-3 hover:scale-105 cursor-pointer group">
        {/* Pushpin */}
        <div
          className={`absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full z-10 ${
            pinColor === 'red' ? 'pushpin-red' : 'pushpin-blue'
          }`}
        />
        
        {/* String/Thread effect */}
        <div 
          className="absolute -top-8 left-1/2 w-px h-6 bg-gradient-to-b from-muted-foreground/50 to-transparent -translate-x-1/2"
        />
        
        {/* Sticky note */}
        <div className="sticky-note p-4 w-44 min-h-[100px] rounded-sm relative overflow-hidden 
                        transition-shadow duration-200 group-hover:shadow-xl group-hover:shadow-accent/10">
          {/* Folded corner effect */}
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-gradient-to-tl from-accent/20 to-transparent" />
          
          <h3 className="font-marker text-card-foreground text-sm mb-2 leading-tight">
            {title}
          </h3>
          <p className="font-handwritten text-card-foreground/80 text-base leading-tight">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
});

StickyNote.displayName = 'StickyNote';

export default memo(StickyNote);
