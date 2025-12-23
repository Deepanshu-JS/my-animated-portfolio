import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface StickyNoteProps {
  title: string;
  description: string;
  pinColor?: 'red' | 'blue';
  rotation?: number;
}

interface StickyNoteStackProps {
  topNote: StickyNoteProps;
  bottomNote: StickyNoteProps;
  className?: string;
  revealDirection?: 'down' | 'up' | 'left' | 'right';
}

const StickyNoteItem = ({ 
  title, 
  description, 
  pinColor = 'red', 
  rotation = 0 
}: StickyNoteProps & { rotation?: number }) => (
  <div
    className="relative will-change-transform"
    style={{ transform: `rotate(${rotation}deg)` }}
  >
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
                    transition-shadow duration-200 hover:shadow-xl hover:shadow-accent/10">
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
);

const StickyNoteStack = ({ 
  topNote, 
  bottomNote, 
  className = '',
  revealDirection = 'down'
}: StickyNoteStackProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getRevealTransform = () => {
    switch (revealDirection) {
      case 'down':
        return { x: 10, y: 80 };
      case 'up':
        return { x: 10, y: -80 };
      case 'left':
        return { x: -80, y: 10 };
      case 'right':
        return { x: 80, y: 10 };
      default:
        return { x: 10, y: 80 };
    }
  };

  const revealTransform = getRevealTransform();

  return (
    <div 
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bottom note - revealed on hover */}
      <motion.div
        className="absolute top-0 left-0 z-0"
        initial={{ x: 0, y: 0, opacity: 0.7, scale: 0.95 }}
        animate={{
          x: isHovered ? revealTransform.x : 0,
          y: isHovered ? revealTransform.y : 0,
          opacity: isHovered ? 1 : 0.7,
          scale: isHovered ? 1 : 0.95,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
      >
        <StickyNoteItem {...bottomNote} />
      </motion.div>

      {/* Top note */}
      <motion.div
        className="relative z-10"
        animate={{
          y: isHovered ? -5 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        <StickyNoteItem {...topNote} />
      </motion.div>
    </div>
  );
};

export default StickyNoteStack;
