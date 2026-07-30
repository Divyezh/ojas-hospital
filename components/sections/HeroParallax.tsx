'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

const fadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.7, ease: 'easeOut' } },
});

const wordContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const wordChild: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 14, stiffness: 110 } },
};

interface PortraitCardProps {
  src: string;
  alt: string;
  org: string;
  role: string;
}

function PortraitCard({ src, alt, org, role }: PortraitCardProps) {
  return (
    <figure className="relative w-[min(85vw,320px)] h-[min(70vw,400px)] sm:w-[clamp(200px,24vw,340px)] sm:h-[clamp(280px,34vw,440px)] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 340px"
        className="object-cover object-top"
      />
      {/* Gradient scrim — text lives here, never outside the card */}
      <figcaption className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/85 via-black/50 to-transparent flex flex-col justify-end items-center pb-4 px-4 gap-0.5">
        <span
          className="text-white/70 text-[10px] font-semibold tracking-[0.18em] uppercase"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          {org}
        </span>
        <span
          className="text-gold text-[16px] font-bold tracking-[0.06em] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          {role}
        </span>
      </figcaption>
    </figure>
  );
}

export function HeroParallax() {
  const whatsappUrl = 'https://wa.me/917574840735';
  const words = 'Best Multispeciality Hospital in Ahmedabad'.split(' ');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-linear-to-br from-maroon-900 to-maroon-800 pt-24 pb-16 px-6"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-[radial-gradient(circle,rgba(199,154,75,0.12),transparent_70%)] pointer-events-none z-0" />

      {/* ── HERO TOP — badge + headline ── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mb-12">

        {/* Badge */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 bg-cream border border-gold/40 px-4 py-2 rounded-full shadow-lg shadow-black/20 mb-7"
        >
          <ShieldCheck className="h-4 w-4 text-maroon-700" />
          <span className="text-[13px] font-bold tracking-[0.04em] text-maroon-900 uppercase">
            Multispeciality Care in Rakhial
          </span>
        </motion.div>

        {/* Headline — capped to avoid overflow */}
        <motion.h1
          className="text-[clamp(36px,5.5vw,68px)] leading-[1.15] font-bold text-white max-w-225 flex flex-wrap justify-center gap-x-3 drop-shadow-lg"
          style={{ fontFamily: 'var(--font-fraunces)' }}
          variants={wordContainer}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordChild}
              className={word === 'Hospital' ? 'text-gold' : 'text-white'}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* ── PORTRAITS — visual anchor, sized up ── */}
      <motion.div
        variants={fadeUp(0.35)}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col sm:flex-row justify-center items-center sm:items-end gap-6 sm:gap-8 w-full mb-10 px-4"
      >
        <PortraitCard
          src="/dr-hasmukh.png"
          alt="Hasmukh Sir, Managing Director – Ojas Multispeciality Hospital"
          org="Ojas Hospital"
          role="Managing Director"
        />
        <PortraitCard
          src="/Dr Ayush.png"
          alt="Dr. Ayush, Director – Ojas Multispeciality Hospital"
          org="Ojas Hospital"
          role="Director"
        />
      </motion.div>

      {/* ── HERO BOTTOM — subtext, buttons, stats ── */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl">

        {/* Subtext — sits cleanly below portraits, no negative margin */}
        <motion.p
          variants={fadeUp(0.55)}
          initial="hidden"
          animate="visible"
          className="text-[17px] leading-[1.75] text-white/85 mb-9"
        >
          At Ojas Hospital, we are committed to providing compassionate, affordable,
          and high-quality healthcare with experienced doctors, advanced facilities,
          and 24/7 emergency care for every family in Ahmedabad.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp(0.7)}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gold text-maroon-900 font-bold hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(199,154,75,0.35)] transition-all tracking-[0.02em]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
          </a>
          <a
            href="#departments"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl border-[1.5px] border-white/40 text-white font-semibold hover:bg-white/10 hover:border-white transition-all group tracking-[0.02em]"
          >
            Explore Departments
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp(0.85)}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-8 border-t border-white/15 w-full"
        >
          {[
            { value: '24×7', label: 'Emergency Care' },
            { value: '13', label: 'Specialists' },
            { value: '4.2★', label: 'Google Rating' },
          ].map(({ value, label }, i) => (
            <React.Fragment key={label}>
              {i > 0 && <div className="hidden sm:block w-px h-10 bg-white/15" />}
              <div className="flex flex-col items-center text-center">
                <strong className="text-3xl text-gold font-bold" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  {value}
                </strong>
                <span className="text-[13px] text-white/70 tracking-wide uppercase mt-1 font-semibold">
                  {label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
