import { useRef, useCallback } from 'react';
import { useMotionValue, useSpring, MotionValue } from 'framer-motion';

interface MagneticConfig {
  strength?: number;
  radius?: number;
  damping?: number;
  stiffness?: number;
}

interface MagneticReturn {
  ref: React.RefObject<HTMLElement>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseLeave: () => void;
}

export const useMagneticEffect = ({
  strength = 0.3,
  radius = 100,
  damping = 20,
  stiffness = 300,
}: MagneticConfig = {}): MagneticReturn => {
  const ref = useRef<HTMLElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { damping, stiffness });
  const springY = useSpring(y, { damping, stiffness });

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
    }
  }, [strength, radius, x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return {
    ref,
    x: springX,
    y: springY,
    handleMouseMove,
    handleMouseLeave,
  };
};

export default useMagneticEffect;
