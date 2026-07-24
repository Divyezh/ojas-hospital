'use client';

import { useState, useEffect, useRef } from 'react';

export function useFloatingAnimation(amplitude: number = 8, speed: number = 0.002, phaseOffset: number = 0) {
  const [floatY, setFloatY] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (time: number) => {
      const y = Math.sin(time * speed + phaseOffset) * amplitude;
      setFloatY(Number(y.toFixed(2)));
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [amplitude, speed, phaseOffset]);

  return floatY;
}
