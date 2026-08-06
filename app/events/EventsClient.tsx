'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CalendarDays, MapPin, Tag, Clock, X, Maximize2 } from 'lucide-react';

export interface HospitalEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: 'Health Camp' | 'Medical Campaign' | 'Awareness Drive' | 'Vaccination Drive' | 'Community Event';
  image: string;
  isUpcoming: boolean;
}

const categoryColors: Record<HospitalEvent['category'], string> = {
  'Health Camp': 'bg-emerald-100 text-emerald-700',
  'Medical Campaign': 'bg-blue-100 text-blue-700',
  'Awareness Drive': 'bg-amber-100 text-amber-700',
  'Vaccination Drive': 'bg-purple-100 text-purple-700',
  'Community Event': 'bg-rose-100 text-rose-700',
};

function EventCard({ event, onOpenModal }: { event: HospitalEvent; onOpenModal: (event: HospitalEvent) => void }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-maroon-100 shadow-soft-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col group">
      {/* Clickable & Viewable Image */}
      <div 
        onClick={() => onOpenModal(event)}
        className="relative h-52 w-full cursor-pointer overflow-hidden bg-slate-100"
      >
        <Image 
          src={event.image} 
          alt={event.title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-maroon-950 text-xs font-bold shadow-md">
            <Maximize2 className="h-3.5 w-3.5 text-maroon-700" />
            View Photo
          </span>
        </div>
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold ${categoryColors[event.category]}`}>
          {event.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 
          onClick={() => onOpenModal(event)}
          className="text-base font-bold text-charcoal hover:text-maroon-700 transition-colors cursor-pointer mb-2 leading-tight"
        >
          {event.title}
        </h3>
        <div className="flex flex-col gap-1 mb-3 text-xs text-charcoal/60">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-maroon-600" />
            {event.date}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-maroon-600" />
            {event.location}
          </span>
        </div>
        <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{event.description}</p>
      </div>
    </div>
  );
}

export function EventsClient({ events }: { events: HospitalEvent[] }) {
  const [activeEvent, setActiveEvent] = useState<HospitalEvent | null>(null);

  const upcoming = events.filter((e) => e.isUpcoming);
  const past = events.filter((e) => !e.isUpcoming);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveEvent(null);
    };
    if (activeEvent) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeEvent]);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Upcoming Events */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="h-5 w-5 text-maroon-700" />
            <h2 className="text-2xl font-extrabold text-charcoal">Upcoming Events</h2>
          </div>
          {upcoming.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-maroon-200 bg-cream p-12 text-center">
              <CalendarDays className="h-10 w-10 text-maroon-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-charcoal mb-2">No upcoming events at this time</h3>
              <p className="text-sm text-charcoal/60 mb-6">
                Check back soon — Ojas Hospital regularly organizes free health camps and community campaigns.
                You can also follow us on WhatsApp to get notified.
              </p>
              <a
                href="https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20please%20notify%20me%20about%20upcoming%20health%20camps%20and%20events."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-maroon-700 text-white text-sm font-semibold hover:bg-maroon-800 transition-colors"
              >
                Get Notified on WhatsApp
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} onOpenModal={setActiveEvent} />
              ))}
            </div>
          )}
        </section>

        {/* Past Events */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Tag className="h-5 w-5 text-charcoal/50" />
            <h2 className="text-2xl font-extrabold text-charcoal">Past Events</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {past.map((event) => (
              <EventCard key={event.id} event={event} onOpenModal={setActiveEvent} />
            ))}
          </div>
        </section>

      </div>

      {/* Full-Screen Image Viewer Modal */}
      {activeEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveEvent(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveEvent(null)}
              className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg"
              aria-label="Close image viewer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* High-res Image View */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] bg-black">
              <Image 
                src={activeEvent.image} 
                alt={activeEvent.title} 
                fill 
                sizes="100vw"
                className="object-contain p-2 sm:p-4" 
                priority
              />
            </div>

            {/* Modal Caption Footer */}
            <div className="p-5 bg-maroon-950 text-white border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${categoryColors[activeEvent.category]}`}>
                  {activeEvent.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">{activeEvent.title}</h3>
                <p className="text-xs text-slate-300 flex items-center gap-4 mt-1">
                  <span>📅 {activeEvent.date}</span>
                  <span>📍 {activeEvent.location}</span>
                </p>
              </div>
              <button
                onClick={() => setActiveEvent(null)}
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
