'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarDays,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  X,
  ZoomIn,
  Play,
  ChevronLeft,
  ChevronRight,
  Video,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

interface SlimEventItem {
  id: string;
  type: 'image' | 'video';
  badge: string;
  organizer: string;
  title: string;
  subtitleGujarati: string;
  date: string;
  time: string;
  location: string;
  image: string;
  video?: string;
  phone: string;
  phoneDisplay: string;
  whatsAppUrl: string;
  modalTitle: string;
  modalSubtitle: string;
  modalAddress: string;
  modalSchedule: string;
}

const SLIM_EVENTS: SlimEventItem[] = [
  {
    id: 'police-camp-upcoming-2026',
    type: 'image',
    badge: 'Free Health Camp',
    organizer: 'Ojas Hospital & Defeat Diabetes',
    title: 'Free Diabetes & BP Checkup Camp',
    subtitleGujarati: 'નિ:શુલ્ક ડાયાબિટીસ અને બ્લડ પ્રેશર તપાસ કેમ્પ — સ્વસ્થ પોલીસ, સુરક્ષિત સમાજ',
    date: '09 Sept 2026',
    time: '03:30 PM – 05:30 PM',
    location: 'Rakhial Police Station, Ahmedabad',
    image: '/diabetes2.jpeg',
    phone: '8238221169',
    phoneDisplay: '8238221169',
    whatsAppUrl:
      'https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20I%20want%20information%20about%20the%20Free%20Diabetes%20and%20BP%20Camp%20at%20Rakhial%20Police%20Station.',
    modalTitle: 'Free Diabetes & BP Camp — Official Flyer',
    modalSubtitle: 'નિ:શુલ્ક ડાયાબિટીસ અને બ્લડ પ્રેશર ચેક-અપ કેમ્પ',
    modalAddress: '📍 રખિયાલ પોલીસ સ્ટેશન, રખિયાલ ક્રોસ રોડ પાસે, અમદાવાદ - 380021',
    modalSchedule: '09 સપ્ટેમ્બર 2026 | બપોરે 3:30 થી સાંજે 5:30 સુધી',
  },
  {
    id: 'police-camp-video-2026',
    type: 'video',
    badge: 'Police Health Drive',
    organizer: 'Ahmedabad Police & Ojas Hospital',
    title: 'Free Health Camp — Rakhial Police Station',
    subtitleGujarati: 'સ્વસ્થ પોલીસ, સુરક્ષિત સમાજ — રખિયાલ પોલીસ સ્ટેશન કેમ્પ વિડિયો કવરેજ',
    date: 'Police Health Drive',
    time: 'Video Highlights',
    location: 'Rakhial Police Station, Ahmedabad',
    image: '/event-video-poster.jpg',
    video: '/event-video.mp4',
    phone: '8238221169',
    phoneDisplay: '8238221169',
    whatsAppUrl:
      'https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20I%20watched%20the%20Rakhial%20Police%20Station%20Health%20Camp%20video%20and%20want%20more%20details.',
    modalTitle: 'Rakhial Police Station Health Camp — Video Highlights',
    modalSubtitle: 'સ્વસ્થ પોલીસ, સુરક્ષિત સમાજ — ખાસ પોલીસ કેમ્પ વિડિયો કવરેજ',
    modalAddress: '📍 રખિયાલ પોલીસ સ્ટેશન, રખિયાલ ક્રોસ રોડ પાસે, અમદાવાદ - 380021',
    modalSchedule: 'સ્વસ્થ પોલીસ, સુરક્ષિત સમાજ અભિયાન હેઠળ નિ:શુલ્ક કેમ્પ કવરેજ',
  },
];

export function UpcomingEventSlim() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const touchStartXRef = useRef<number | null>(null);

  const currentEvent = SLIM_EVENTS[currentIndex];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIM_EVENTS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIM_EVENTS.length) % SLIM_EVENTS.length);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Automatic slide interval (5.5s), pauses on hover and during modal view
  useEffect(() => {
    if (isPaused || isModalOpen) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, isModalOpen, nextSlide, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'Escape') setIsModalOpen(false);
      } else {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, nextSlide, prevSlide]);

  // Body scroll lock on modal open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartXRef.current - touchEndX;
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <>
      <section
        aria-label="Events and Police Health Drives Announcement Slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full bg-[#180508] text-white border-y border-maroon-700/60 shadow-lg overflow-hidden group/section font-sans"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentEvent.id}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  opacity: 0,
                  x: dir > 0 ? 20 : -20,
                }),
                center: {
                  opacity: 1,
                  x: 0,
                },
                exit: (dir: number) => ({
                  opacity: 0,
                  x: dir > 0 ? -20 : 20,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="flex flex-col xl:flex-row xl:items-center justify-between gap-3.5 xl:gap-6"
            >
              {/* Left: Thumbnail & Details */}
              <div className="flex items-start sm:items-center gap-3.5 sm:gap-5 w-full min-w-0 flex-1">
                {/* Poster / Video Thumbnail */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border border-white/20 shadow-md shrink-0 bg-maroon-950 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/40"
                  aria-label={currentEvent.type === 'video' ? 'Play event video coverage' : 'View official camp flyer'}
                >
                  <Image
                    src={currentEvent.image}
                    alt={currentEvent.modalTitle}
                    fill
                    sizes="(max-width: 640px) 70px, 90px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    priority
                  />

                  {/* Thumbnail Overlay Indicator */}
                  {currentEvent.type === 'video' ? (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/25 transition-colors">
                      <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <Play className="h-4 w-4 fill-white ml-0.5" />
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="h-5 w-5 text-white" />
                    </div>
                  )}

                  <span
                    className={`absolute bottom-0 inset-x-0 text-[9px] font-bold text-center py-0.5 tracking-wider uppercase border-t ${
                      currentEvent.type === 'video'
                        ? 'bg-black/90 text-red-400 border-red-500/40'
                        : 'bg-black/85 text-white/90 border-white/20'
                    }`}
                  >
                    {currentEvent.type === 'video' ? 'Video' : 'Flyer'}
                  </span>
                </button>

                {/* Title & Schedule Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                    {/* Event Tag & Organizer */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-block text-[11px] font-semibold text-white/90 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                        {currentEvent.badge}
                      </span>
                      <span className="text-white/40 hidden sm:inline">•</span>
                      <span className="text-xs text-white/75 font-medium truncate">
                        {currentEvent.organizer}
                      </span>
                    </div>

                    {/* Clean Slider Controls */}
                    <div className="flex items-center gap-1.5 ml-auto shrink-0 bg-white/10 border border-white/15 rounded-full px-2 py-0.5 backdrop-blur-xs">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevSlide();
                        }}
                        className="h-5 w-5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                        aria-label="Previous slide"
                        title="Previous event"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </button>

                      <div className="flex items-center gap-1 px-1">
                        {SLIM_EVENTS.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              goToSlide(idx);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                              idx === currentIndex
                                ? 'w-5 bg-white shadow-xs'
                                : 'w-1.5 bg-white/30 hover:bg-white/60'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                            title={`Event ${idx + 1}`}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextSlide();
                        }}
                        className="h-5 w-5 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                        aria-label="Next slide"
                        title="Next event"
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>

                      <span className="text-[10px] text-white/50 font-mono pl-0.5 hidden xs:inline">
                        {currentIndex + 1}/{SLIM_EVENTS.length}
                      </span>
                    </div>
                  </div>

                  {/* Clean, Simple Solid White Title */}
                  <h2
                    onClick={() => setIsModalOpen(true)}
                    className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight cursor-pointer hover:text-white/85 transition-colors leading-snug font-sans"
                  >
                    {currentEvent.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-normal font-sans">
                    {currentEvent.subtitleGujarati}
                  </p>

                  {/* Clean Inline Chips */}
                  <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 mt-2 text-[11px] sm:text-xs text-slate-300 font-sans">
                    <span className="inline-flex items-center gap-1.5 shrink-0 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                      <CalendarDays className="h-3.5 w-3.5 text-white/70 shrink-0" />
                      <span>{currentEvent.date}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 shrink-0 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                      {currentEvent.type === 'video' ? (
                        <Video className="h-3.5 w-3.5 text-red-400 shrink-0" />
                      ) : (
                        <Clock className="h-3.5 w-3.5 text-white/70 shrink-0" />
                      )}
                      <span>{currentEvent.time}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 min-w-0 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                      <MapPin className="h-3.5 w-3.5 text-white/70 shrink-0" />
                      <span className="truncate">{currentEvent.location}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: CTA Actions */}
              <div className="w-full xl:w-auto grid grid-cols-3 sm:flex sm:items-center gap-2 sm:gap-2.5 pt-2 xl:pt-0 border-t xl:border-t-0 border-white/10 shrink-0 font-sans">
                <a
                  href={`tel:${currentEvent.phone}`}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-[11px] sm:text-xs font-semibold transition-colors border border-white/15 text-center truncate"
                  title={`Call Helpline: ${currentEvent.phoneDisplay}`}
                >
                  <Phone className="h-3.5 w-3.5 text-white/80 shrink-0" />
                  <span className="truncate">{currentEvent.phoneDisplay}</span>
                </a>

                <a
                  href={currentEvent.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] sm:text-xs font-bold transition-all shadow-sm text-center truncate"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">WhatsApp</span>
                </a>

                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-1 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-[11px] sm:text-xs font-semibold transition-all shadow-sm text-center shrink-0 border border-white/20"
                >
                  <span>All Events</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 hidden sm:inline" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox / Video Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-fade-in font-sans"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[92vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/15 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-slate-800/80 border-b border-white/10">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white font-sans">
                  {currentEvent.modalTitle}
                </h3>
                <p className="text-[11px] text-white/60 font-sans mt-0.5">{currentEvent.modalSubtitle}</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Media Body (Video Player or Flyer Image) */}
            <div className="relative w-full h-[58vh] sm:h-[66vh] bg-black flex items-center justify-center">
              {currentEvent.type === 'video' && currentEvent.video ? (
                <video
                  src={currentEvent.video}
                  poster={currentEvent.image}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full max-h-[66vh] object-contain"
                />
              ) : (
                <Image
                  src={currentEvent.image}
                  alt={currentEvent.modalTitle}
                  fill
                  sizes="(max-width: 768px) 100vw, 680px"
                  className="object-contain p-2"
                  priority
                />
              )}
            </div>

            {/* Footer */}
            <div className="p-3.5 sm:p-4 bg-slate-900 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-white/80 text-center sm:text-left">
                <p className="font-semibold text-white/95">{currentEvent.modalAddress}</p>
                <p className="text-white/60 text-[11px] mt-0.5">{currentEvent.modalSchedule}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`tel:${currentEvent.phone}`}
                  className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors text-xs border border-white/15"
                >
                  Call {currentEvent.phoneDisplay}
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors text-xs cursor-pointer"
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
