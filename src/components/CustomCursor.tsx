import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorVariant = 'default' | 'hover' | 'click' | 'text';

const CustomCursor = () => {
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Check for interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElements = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'];
      const isInteractive = 
        interactiveElements.includes(target.tagName) ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer') ||
        target.getAttribute('role') === 'button';
      
      const isTextInput = 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('contenteditable') === 'true';

      if (isTextInput) {
        setVariant('text');
      } else if (isInteractive) {
        setVariant('hover');
      } else {
        setVariant('default');
      }
    };

    const handleMouseDown = () => setVariant('click');
    const handleMouseUp = () => setVariant('default');

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleElementHover);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: 'hsl(var(--primary))',
      mixBlendMode: 'difference' as const,
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: 'hsl(var(--primary) / 0.2)',
      mixBlendMode: 'normal' as const,
    },
    click: {
      width: 8,
      height: 8,
      backgroundColor: 'hsl(var(--primary))',
      mixBlendMode: 'difference' as const,
    },
    text: {
      width: 4,
      height: 24,
      backgroundColor: 'hsl(var(--primary))',
      borderRadius: 2,
      mixBlendMode: 'difference' as const,
    },
  };

  // Don't show on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-primary"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: variants[variant].width,
          height: variants[variant].height,
          opacity: isVisible ? 1 : 0,
          borderRadius: variant === 'text' ? 2 : '50%',
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
        }}
      />
      
      {/* Trailing cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: variants[variant].backgroundColor,
          mixBlendMode: variants[variant].mixBlendMode,
        }}
        animate={{
          width: variant === 'hover' ? 48 : variant === 'text' ? 4 : 8,
          height: variant === 'hover' ? 48 : variant === 'text' ? 24 : 8,
          opacity: isVisible ? (variant === 'hover' ? 0.3 : 0.6) : 0,
          borderRadius: variant === 'text' ? 2 : '50%',
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
        }}
      />
    </>
  );
};

export default CustomCursor;
