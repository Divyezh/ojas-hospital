'use client';

import { useState, useEffect, useRef } from 'react';

export interface ParallaxOffset {
  x: number;
  y: number;
  rotateX: number;
  rotateY: number;
  isMobile: boolean;
  reducedMotion: boolean;
}

export function useMouseParallax(maxOffset: number = 16, easing: number = 0.08): ParallaxOffset {
  const [offset, setOffset] = useState<ParallaxOffset>({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    isMobile: false,
    reducedMotion: false,
  });

  const mouseRef = useRef({ targetX: 0, targetY: 0, currentX: 0, currentY: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Check mobile or prefers-reduced-motion
    const mediaQueryMobile = window.matchMedia('(max-width: 768px)');
    const mediaQueryReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    const isMobile = mediaQueryMobile.matches || 'ontouchstart' in window;
    const reducedMotion = mediaQueryReduced.matches;

    if (isMobile || reducedMotion) {
      setOffset((prev) => ({ ...prev, isMobile, reducedMotion }));
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalized between -1 and 1
      const normalizedX = (e.clientX / innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / innerHeight) * 2 - 1;

      mouseRef.current.targetX = normalizedX * maxOffset;
      mouseRef.current.targetY = normalizedY * maxOffset;
    };

    const animate = () => {
      const { targetX, targetY, currentX, currentY } = mouseRef.current;

      // Smooth lerp
      const newX = currentX + (targetX - currentX) * easing;
      const newY = currentY + (targetY - currentY) * easing;

      mouseRef.current.currentX = newX;
      mouseRef.current.currentY = newY;

      // Calculate 3D tilt angles (max ~6 degrees)
      const rotateX = -(newY / maxOffset) * 6;
      const rotateY = (newX / maxOffset) * 6;

      setOffset({
        x: Number(newX.toFixed(2)),
        y: Number(newY.toFixed(2)),
        rotateX: Number(rotateX.toFixed(2)),
        rotateY: Number(rotateY.toFixed(2)),
        isMobile,
        reducedMotion,
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [maxOffset, easing]);

  return offset;
}
