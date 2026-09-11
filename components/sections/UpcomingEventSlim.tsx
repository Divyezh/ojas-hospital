'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, Clock, MapPin, Phone, ArrowRight, X, ZoomIn } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export function UpcomingEventSlim() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <section 
        aria-label="Upcoming Free Health Camp Announcement"
        className="relative w-full bg-[#1C0609] text-white border-y border-gold/30 shadow-lg overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3.5 xl:gap-6">
            
            {/* Left: Thumbnail & Details */}
            <div className="flex items-start sm:items-center gap-3.5 sm:gap-5 w-full min-w-0 flex-1">
              
              {/* Poster Thumbnail */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border border-gold/50 shadow-md shrink-0 bg-maroon-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="View official camp flyer"
              >
                <Image
                  src="/diabetes2.jpeg"
                  alt="Free Diabetes & BP Checkup Camp Flyer"
                  fill
                  sizes="(max-width: 640px) 70px, 90px"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="h-5 w-5 text-gold" />
                </div>
                <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[9px] font-bold text-gold text-center py-0.5 tracking-wider uppercase">
                  Flyer
                </span>
              </button>

              {/* Title & Schedule Info */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/25">
                    Free Health Camp
                  </span>
                  <span className="text-[11px] text-white/50 hidden sm:inline">•</span>
                  <span className="text-xs text-white/80 font-medium truncate">
                    Ojas Hospital &amp; Defeat Diabetese
                  </span>
                </div>

                <h2 
                  onClick={() => setIsModalOpen(true)}
                  className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-tight cursor-pointer hover:text-gold transition-colors leading-snug"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  Free Diabetes &amp; BP <span className="text-gold">Checkup Camp</span>
                </h2>

                <p className="text-xs sm:text-sm text-white/75 mt-0.5 leading-normal">
                  નિ:શુલ્ક ડાયાબિટીસ અને બ્લડ પ્રેશર તપાસ કેમ્પ — સ્વસ્થ પોલીસ, સુરક્ષિત સમાજ
                </p>

                {/* Inline Date / Time / Venue */}
                <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 mt-1.5 text-[11px] sm:text-xs text-white/75">
                  <span className="inline-flex items-center gap-1.5 shrink-0">
                    <CalendarDays className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span>09 Sept 2026</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 shrink-0">
                    <Clock className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span>03:30 PM – 05:30 PM</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 min-w-0">
                    <MapPin className="h-3.5 w-3.5 text-gold shrink-0" />
                    <span className="truncate">Rakhial Police Station, Ahmedabad</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Right: CTA Actions - Guaranteed 100% responsive on mobile and desktop */}
            <div className="w-full xl:w-auto grid grid-cols-3 sm:flex sm:items-center gap-2 sm:gap-2.5 pt-2 xl:pt-0 border-t xl:border-t-0 border-white/10 shrink-0">
              <a
                href="tel:8238221169"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-[11px] sm:text-xs font-semibold transition-colors border border-white/15 text-center truncate"
                title="Call Helpline: 8238221169"
              >
                <Phone className="h-3.5 w-3.5 text-gold shrink-0" />
                <span className="truncate">8238221169</span>
              </a>

              <a
                href="https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20I%20want%20information%20about%20the%20Free%20Diabetes%20and%20BP%20Camp%20at%20Rakhial%20Police%20Station."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] sm:text-xs font-bold transition-all shadow-sm text-center truncate"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">WhatsApp</span>
              </a>

              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-1 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gold hover:bg-amber-400 text-maroon-950 text-[11px] sm:text-xs font-bold transition-all shadow-sm text-center shrink-0"
              >
                <span>All Events</span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 hidden sm:inline" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-2xl w-full max-h-[92vh] bg-maroon-950 rounded-2xl overflow-hidden shadow-2xl border border-gold/40 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-maroon-900 border-b border-white/10">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  Free Diabetes &amp; BP Camp — Official Flyer
                </h3>
                <p className="text-[11px] text-gold">નિ:શુલ્ક ડાયાબિટીસ અને બ્લડ પ્રેશર ચેક-અપ કેમ્પ</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close flyer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Poster */}
            <div className="relative w-full h-[58vh] sm:h-[66vh] bg-black">
              <Image 
                src="/diabetes2.jpeg" 
                alt="Free Diabetes and Blood Pressure Checkup Camp - Rakhial Police Station" 
                fill 
                sizes="(max-width: 768px) 100vw, 680px" 
                className="object-contain p-2" 
                priority
              />
            </div>

            {/* Footer */}
            <div className="p-3.5 sm:p-4 bg-maroon-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-white/80 text-center sm:text-left">
                <p className="font-semibold text-gold">📍 રખિયાલ પોલીસ સ્ટેશન, રખિયાલ ક્રોસ રોડ પાસે, અમદાવાદ - 380021</p>
                <p className="text-white/60 text-[11px] mt-0.5">09 સપ્ટેમ્બર 2026 | બપોરે 3:30 થી સાંજે 5:30 સુધી</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="tel:8238221169"
                  className="px-3.5 py-2 rounded-lg bg-gold text-maroon-950 font-bold hover:bg-amber-400 transition-colors text-xs"
                >
                  Call 8238221169
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
