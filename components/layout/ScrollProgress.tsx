'use client';

import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function ScrollProgress() {
  const completion = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
      <div
        className="h-full bg-linear-to-r from-maroon-600 via-sky-500 to-emerald-400 transition-all duration-150 ease-out shadow-sm"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
}
