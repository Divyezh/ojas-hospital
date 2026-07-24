'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HOSPITAL_STATS } from '@/constants/hospitalData';
import { useCounter } from '@/hooks/useCounter';

function StatItem({ label, value, prefix = '', suffix = '', description }: typeof HOSPITAL_STATS[0]) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCounter(value, 2000, isInView);

  return (
    <div ref={ref} className="text-center p-6 sm:p-8 rounded-3xl bg-maroon-800/40 backdrop-blur-md border border-white/10 hover:bg-maroon-800/60 transition-all">
      <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <h3 className="mt-2 text-base font-bold text-gold-soft">{label}</h3>
      <p className="mt-1 text-xs text-cream/70 leading-relaxed">{description}</p>
    </div>
  );
}

export function Statistics() {
  return (
    <section className="py-16 sm:py-20 bg-maroon-900 text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(var(--color-gold)_1.5px,transparent_1.5px)] bg-size-[32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">
            Empirical Proof of Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight">
            Proven Clinical Outcomes That Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOSPITAL_STATS.map((stat, idx) => (
            <StatItem key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
