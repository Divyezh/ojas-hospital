'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarDays, ShieldPlus, Building2, Stethoscope, Users, Camera,
  Pill, Phone, ArrowRight, ChevronLeft, ChevronRight, Mail, Clock
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { EMERGENCY_INFO } from '@/constants/hospitalData';

// ── Hero Slides ──────────────────────────────────────────────────────────────
const slides = [
  {
    id: 1,
    title: 'Best Multispeciality Hospital in Ahmedabad',
    subtitle: 'Compassionate care, experienced specialists, and 24/7 emergency services at the heart of Rakhial.',
    badge: 'Ojas Hospital',
    image: null,
    type: 'portraits',
  },
  {
    id: 2,
    title: '24/7 Emergency & Trauma Care',
    subtitle: 'Our emergency team is always ready — immediate resuscitation, critical care, and round-the-clock casualty services.',
    badge: 'Ojas Hospital',
    image: '/emergency care.png',
    type: 'image',
  },
];

// ── Dashboard Cards ───────────────────────────────────────────────────────────
const dashboardCards = [
  {
    title: 'Events & Camps',
    description: 'Upcoming health camps & community campaigns',
    href: '/events',
    icon: CalendarDays,
    color: 'from-amber-500/10 to-amber-600/5',
    iconColor: 'text-amber-600',
    accent: 'border-amber-200',
  },
  {
    title: 'Facilities',
    description: 'OT, diagnostics, deluxe rooms & more',
    href: '/facilities',
    icon: Building2,
    color: 'from-blue-500/10 to-blue-600/5',
    iconColor: 'text-blue-600',
    accent: 'border-blue-200',
  },
  {
    title: 'Emergency',
    description: 'Call 24/7 · Immediate care, always ready',
    href: '/contact',
    icon: ShieldPlus,
    color: 'from-red-500/10 to-red-600/5',
    iconColor: 'text-red-600',
    accent: 'border-red-200',
  },
  {
    title: 'Departments',
    description: '8+ specialized clinical departments',
    href: '/departments',
    icon: Stethoscope,
    color: 'from-maroon-500/10 to-maroon-700/5',
    iconColor: 'text-maroon-700',
    accent: 'border-maroon-200',
  },
  {
    title: 'Our Doctors',
    description: '13 expert specialists across all disciplines',
    href: '/doctors',
    icon: Users,
    color: 'from-emerald-500/10 to-emerald-600/5',
    iconColor: 'text-emerald-600',
    accent: 'border-emerald-200',
  },
  {
    title: 'Gallery',
    description: 'Medical camps & hospital photo tour',
    href: '/gallery',
    icon: Camera,
    color: 'from-purple-500/10 to-purple-600/5',
    iconColor: 'text-purple-600',
    accent: 'border-purple-200',
  },
  {
    title: 'Medical Store',
    description: 'In-house pharmacy — all prescriptions covered',
    href: '/facilities',
    icon: Pill,
    color: 'from-teal-500/10 to-teal-600/5',
    iconColor: 'text-teal-600',
    accent: 'border-teal-200',
  },
  {
    title: 'Contact Us',
    description: 'Locate us, send a message, or call directly',
    href: '/contact',
    icon: Phone,
    color: 'from-slate-500/10 to-slate-600/5',
    iconColor: 'text-slate-600',
    accent: 'border-slate-200',
  },
];

// ── Hero Component ────────────────────────────────────────────────────────────
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(advance, 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, current]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-linear-to-br from-maroon-900 to-maroon-800 pt-52 sm:pt-60 pb-16 px-6"
      style={{ paddingTop: 'calc(var(--navbar-height, 130px) + 3.5rem)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hospital hero slider"
    >
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-[radial-gradient(circle,rgba(199,154,75,0.12),transparent_70%)] pointer-events-none z-0" />

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-cream border border-gold/50 px-5 py-2.5 rounded-full shadow-lg shadow-black/20 mb-6">
            <ShieldPlus className="h-5 w-5 text-maroon-700" />
            <span className="text-sm sm:text-base font-extrabold tracking-[0.06em] text-maroon-900 uppercase">{slide.badge}</span>
          </div>

          {/* Headline */}
          <h1
            className="text-[clamp(32px,5.5vw,66px)] leading-[1.15] font-bold text-white mb-6 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            {slide.title.split(' ').map((word, i) => (
              <span key={i} className={word === 'Hospital' || word === 'Ahmedabad' ? 'text-gold' : 'text-white'}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Image or Portraits */}
          {slide.type === 'portraits' ? (
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end gap-6 sm:gap-8 w-full mb-8 px-4">
              {[
                { src: '/dr-hasmukh.png', name: 'Dr. Hasmukh Soni', role: 'Managing Director' },
                { src: '/Dr Ayush.png', name: 'Dr. Ayush Soni', role: 'Director' },
              ].map((p) => (
                <figure
                  key={p.name}
                  className="relative w-[min(85vw,280px)] h-[min(65vw,360px)] sm:w-[clamp(180px,22vw,300px)] sm:h-[clamp(240px,32vw,400px)] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                >
                  <Image src={p.src} alt={`${p.name}, ${p.role} – Ojas Hospital`} fill priority sizes="(max-width: 640px) 85vw, 300px" className="object-cover object-top" />
                  <figcaption className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/85 via-black/50 to-transparent flex flex-col justify-end items-center pb-4 gap-0.5">
                    <span className="text-white text-[14px] font-bold" style={{ fontFamily: 'var(--font-fraunces)' }}>{p.name}</span>
                    <span className="text-gold text-[12px] font-bold uppercase tracking-widest" style={{ fontFamily: 'var(--font-fraunces)' }}>{p.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="relative w-full max-w-2xl h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
              <Image src={slide.image!} alt={slide.title} fill sizes="(max-width: 768px) 100vw, 700px" className="object-cover" priority />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            </div>
          )}

          {/* Subtitle */}
          <p className="text-[17px] leading-[1.75] text-white/85 mb-9 max-w-2xl">{slide.subtitle}</p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="https://wa.me/917574840735"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gold text-maroon-900 font-bold hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(199,154,75,0.35)] transition-all tracking-[0.02em]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <Link
              href="/departments"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl border-[1.5px] border-white/40 text-white font-semibold hover:bg-white/10 hover:border-white transition-all group tracking-[0.02em]"
            >
              Explore Departments
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-8 border-t border-white/15 w-full max-w-2xl">
            {[{ value: '24×7', label: 'Emergency Care' }, { value: '13', label: 'Specialists' }, { value: '4.2★', label: 'Google Rating' }].map(({ value, label }, i) => (
              <React.Fragment key={label}>
                {i > 0 && <div className="hidden sm:block w-px h-10 bg-white/15" />}
                <div className="flex flex-col items-center text-center">
                  <strong className="text-3xl text-gold font-bold" style={{ fontFamily: 'var(--font-fraunces)' }}>{value}</strong>
                  <span className="text-[13px] text-white/70 tracking-wide uppercase mt-1 font-semibold">{label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider controls */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-6 z-20">
        <button onClick={prev} aria-label="Previous slide" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-gold' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
        <button onClick={advance} aria-label="Next slide" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

// ── Dashboard Grid ─────────────────────────────────────────────────────────────
function DashboardGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-maroon-700">Quick Access</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Everything You Need, <span className="text-maroon-700">In One Place</span>
          </h2>
          <p className="mt-3 text-base text-charcoal/70 max-w-xl mx-auto">
            Navigate directly to any section of Ojas Hospital's services.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {dashboardCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={card.href}
                className={`group flex flex-col h-full p-5 sm:p-6 rounded-2xl border bg-linear-to-br ${card.color} ${card.accent} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`p-3 rounded-xl bg-white shadow-sm w-fit mb-4 ${card.iconColor}`}>
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-charcoal group-hover:text-maroon-700 transition-colors leading-tight mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-charcoal/65 leading-relaxed flex-1">{card.description}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-maroon-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  Visit <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Top Utility Belt ───────────────────────────────────────────────────────────
function UtilityBelt() {
  return (
    <div className="bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-xs py-2 px-4 hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <a href={`tel:${EMERGENCY_INFO.hotline}`} className="flex items-center gap-1.5 hover:text-gold transition-colors font-semibold">
            <Phone className="h-3 w-3 text-gold" />
            {EMERGENCY_INFO.hotline}
          </a>
          <a href="mailto:ojashospitalo123@gmail.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Mail className="h-3 w-3" />
            ojashospitalo123@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3 w-3 text-gold" />
          <span>Open 24×7 · Emergency Available Always</span>
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <UtilityBelt />
      <HeroSlider />
      <DashboardGrid />
    </>
  );
}
