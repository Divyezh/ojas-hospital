'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, X, Maximize2, CalendarDays } from 'lucide-react';

export interface HospitalAward {
  id: string;
  title: string;
  issuingBody: string;
  year: string;
  recipient: string;
  description?: string;
  image: string;
}

function AwardCard({ award, onOpenModal }: { award: HospitalAward; onOpenModal: (award: HospitalAward) => void }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-maroon-100 shadow-soft-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col group">
      {/* Clickable Image Container */}
      <div 
        onClick={() => onOpenModal(award)}
        className="relative h-64 w-full cursor-pointer overflow-hidden bg-slate-50 border-b border-slate-100"
      >
        <Image 
          src={award.image} 
          alt={`Certificate of ${award.title}`} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/95 text-maroon-950 text-xs font-bold shadow-md">
            <Maximize2 className="h-3.5 w-3.5 text-maroon-700" />
            View Certificate
          </span>
        </div>
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-linear-to-r from-gold to-yellow-500 text-maroon-950 text-xs font-bold shadow-sm">
          {award.year}
        </span>
      </div>

      {/* Card Info */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-[11px] font-extrabold text-maroon-700 tracking-wider uppercase mb-1">
          {award.recipient}
        </span>
        <h3 
          onClick={() => onOpenModal(award)}
          className="text-base font-bold text-charcoal hover:text-maroon-700 transition-colors cursor-pointer mb-2 leading-snug"
        >
          {award.title}
        </h3>
        <p className="text-xs font-semibold text-charcoal/50 mb-3 flex items-start gap-1">
          <span className="text-gold shrink-0">🏛️</span>
          <span>{award.issuingBody}</span>
        </p>
        {award.description && (
          <p className="text-xs text-charcoal/70 leading-relaxed mt-auto pt-2 border-t border-maroon-50/50">
            {award.description}
          </p>
        )}
      </div>
    </div>
  );
}

export function AwardsClient({ awards }: { awards: HospitalAward[] }) {
  const [activeAward, setActiveAward] = useState<HospitalAward | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveAward(null);
    };
    if (activeAward) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeAward]);

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {awards.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gold/40 bg-cream p-16 text-center max-w-2xl mx-auto">
            <Award className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="text-xl font-bold text-charcoal mb-3">Awards listing coming soon</h2>
            <p className="text-sm text-charcoal/65 leading-relaxed mb-6">
              Ojas Hospital has been serving the Rakhial community for over 24 years. We are currently compiling our awards and certifications list.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award) => (
              <AwardCard key={award.id} award={award} onOpenModal={setActiveAward} />
            ))}
          </div>
        )}

      </div>

      {/* Lightbox Image Viewer Modal */}
      {activeAward && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveAward(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveAward(null)}
              className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg border border-white/10"
              aria-label="Close viewer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* High-res View */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] bg-black">
              <Image 
                src={activeAward.image} 
                alt={activeAward.title} 
                fill 
                sizes="100vw"
                className="object-contain p-2 sm:p-4" 
                priority
              />
            </div>

            {/* Modal Caption */}
            <div className="p-6 bg-maroon-950 text-white border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-gold text-maroon-950 text-[10px] font-extrabold tracking-wider uppercase">
                  {activeAward.year} • {activeAward.recipient}
                </span>
                <h3 className="text-base font-bold text-white mt-1.5">{activeAward.title}</h3>
                <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                  <span>🏛️ {activeAward.issuingBody}</span>
                </p>
              </div>
              <button
                onClick={() => setActiveAward(null)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors shrink-0"
              >
                Close Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
