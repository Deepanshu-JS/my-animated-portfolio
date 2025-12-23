import React, { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticWrapperProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
  as?: 'div' | 'button' | 'a' | 'span';
  onClick?: () => void;
  href?: string;
}

const MagneticWrapper = ({
  children,
  className = '',
  strength = 0.4,
  radius = 150,
  as = 'div',
  onClick,
  href,
}: MagneticWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springScale = useSpring(scale, springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < radius) {
      const factor = 1 - distance / radius;
      x.set(distanceX * strength * factor);
      y.set(distanceY * strength * factor);
      scale.set(1 + factor * 0.05);
    }
  }, [strength, radius, x, y, scale]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    scale.set(1);
  }, [x, y, scale]);

  const Component = motion.div;

  return (
    <Component
      ref={ref}
      className={`inline-block ${className}`}
      style={{
        x: springX,
        y: springY,
        scale: springScale,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {as === 'a' && href ? (
        <a href={href} className="block">
          {children}
        </a>
      ) : (
        children
      )}
    </Component>
  );
};

export default MagneticWrapper;
