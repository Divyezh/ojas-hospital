'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { HorizontalScrollCarousel } from '@/components/ui/horizontal-scroll-carousel';

interface DepartmentCardsProps {
  showHeader?: boolean;
}

export function DepartmentCards({ showHeader = false }: DepartmentCardsProps) {
  return (
    <section id="departments" className="bg-maroon-950 text-white relative">
      {showHeader && (
        <div className="pt-16 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="primary">Centers of Excellence</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Specialized <span className="text-gold">Clinical Departments</span>
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Multi-disciplinary medical wings powered by board-certified specialists, ultra-modern diagnostics, and patient-tailored care programs.
          </p>
        </div>
      )}

      {/* Scroll indicator pill */}
      <div className="pt-8 pb-2 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold bg-maroon-900/80 border border-gold/30 px-5 py-2 rounded-full shadow-lg backdrop-blur-md">
          <span>↓ Scroll down to horizontally explore departments ↓</span>
        </div>
      </div>

      {/* Horizontal Scroll Carousel */}
      <HorizontalScrollCarousel />
    </section>
  );
}


