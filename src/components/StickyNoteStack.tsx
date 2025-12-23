import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

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
  parallaxIntensity?: number;
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

// Hook for mouse parallax
const useMouseParallax = (intensity: number = 1) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Normalize to -1 to 1 range
      const normalizedX = (clientX - centerX) / centerX;
      const normalizedY = (clientY - centerY) / centerY;
      
      mouseX.set(normalizedX * intensity * 15);
      mouseY.set(normalizedY * intensity * 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity, mouseX, mouseY]);

  return { x: smoothX, y: smoothY };
};

const StickyNoteStack = ({ 
  topNote, 
  bottomNote, 
  className = '',
  revealDirection = 'down',
  parallaxIntensity = 1
}: StickyNoteStackProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x: parallaxX, y: parallaxY } = useMouseParallax(parallaxIntensity);

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

  // Different parallax intensities for depth effect
  const topParallaxX = useTransform(parallaxX, (v) => v * 1.2);
  const topParallaxY = useTransform(parallaxY, (v) => v * 1.2);
  const bottomParallaxX = useTransform(parallaxX, (v) => v * 0.6);
  const bottomParallaxY = useTransform(parallaxY, (v) => v * 0.6);

  return (
    <div 
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Bottom note - revealed on hover with slower parallax */}
      <motion.div
        className="absolute top-0 left-0 z-0"
        style={{
          x: bottomParallaxX,
          y: bottomParallaxY,
        }}
        animate={{
          translateX: isHovered ? revealTransform.x : 0,
          translateY: isHovered ? revealTransform.y : 0,
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

      {/* Top note with faster parallax for depth */}
      <motion.div
        className="relative z-10"
        style={{
          x: topParallaxX,
          y: topParallaxY,
        }}
        animate={{
          translateY: isHovered ? -5 : 0,
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
