'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Marquee } from '@/registry/magicui/marquee';
import { TESTIMONIALS } from '@/constants/hospitalData';

const IconGoogle = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const IconStar = ({ filled }: { filled: boolean }) => (
  <Star 
    fill={filled ? "currentColor" : "none"} 
    className={filled ? "text-gold" : "text-gold/30"} 
    size={15} 
    strokeWidth={filled ? 1 : 2} 
  />
);

function TestimonialCardItem({ test }: { test: any }) {
  const [expanded, setExpanded] = useState(false);

  // If text already ends in ellipsis, we don't need a read more button
  const textEndsWithEllipsis = test.text.endsWith('…');
  const showReadMore = !expanded && test.text.length > 150 && !textEndsWithEllipsis;

  return (
    <div className="testimonial-card">
      <span className="quote-mark" aria-hidden="true">"</span>

      <div className="reviewer-row">
        <img src={test.avatar} alt={test.name} className="reviewer-avatar" />
        <div className="reviewer-info">
          <strong>{test.name}</strong>
          {test.meta && <span className="reviewer-meta">{test.meta}</span>}
        </div>
      </div>

      <div className="rating-row">
        {Array.from({ length: 5 }).map((_, i) => (
          <IconStar key={i} filled={i < test.rating} />
        ))}
        <span className="rating-time">{test.timeAgo}</span>
      </div>

      <p className={`quote-text ${expanded || textEndsWithEllipsis ? 'expanded' : ''}`}>
        {test.text}
      </p>
      
      {showReadMore && (
        <button className="read-more" onClick={() => setExpanded(true)}>
          Read more
        </button>
      )}

      <span className="badge-google">
        <IconGoogle /> Posted on Google
      </span>
    </div>
  );
}

export function TestimonialCards() {
  const firstRow = TESTIMONIALS;

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white relative overflow-hidden flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 w-full">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-block relative">
            <span className="text-xs font-bold uppercase tracking-widest text-maroon-700">Patient Stories</span>
            <div className="absolute -bottom-2 left-0 w-2/3 h-0.5 bg-maroon-700 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-charcoal tracking-tight">
            Real Experiences from Our <span className="text-maroon-700">Patients & Families</span>
          </h2>
          <p className="text-base text-charcoal/80 leading-relaxed">
            Read authentic feedback and recovery journeys from individuals who placed their trust in Ojas.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Viewport */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((test, index) => (
            <div key={`r1-${test.id}-${index}`} className="w-64 sm:w-72 shrink-0 mx-2">
              <TestimonialCardItem test={test} />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 sm:w-1/4 bg-linear-to-r from-maroon-900 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 sm:w-1/4 bg-linear-to-l from-maroon-900 to-transparent"></div>
      </div>
    </section>
  );
}
