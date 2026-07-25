'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react';

interface HeroParallaxProps {
  onOpenAppointment: () => void;
}

export function HeroParallax({ onOpenAppointment }: HeroParallaxProps) {
  const whatsappUrl = `https://wa.me/917574840735`;

  // Staggered word animation variants for headline
  const sentence = "Best Multispeciality Hospital in Ahmedabad";
  const words = sentence.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 * i },
    }),
  };

  const child: Variants = {
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-maroon-900 to-maroon-800 pt-20 pb-12">
      {/* Background glow centered behind subject */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-[radial-gradient(circle,rgba(199,154,75,0.12),transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-225 px-6 mt-10">

        {/* Top Pill Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          className="inline-flex items-center space-x-2 bg-cream border border-gold/40 px-4 py-2 rounded-full shadow-lg shadow-black/20 mb-6 z-10"
        >
          <ShieldCheck className="h-4 w-4 text-maroon-700" />
          <span className="text-[13px] sm:text-sm font-bold tracking-[0.02em] text-maroon-900 uppercase">
            Multispeciality Care in Rakhial
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="relative z-10 text-[clamp(48px,8vw,96px)] leading-[1.05] font-bold text-white mb-4 sm:-mb-15 flex flex-wrap justify-center gap-x-3 sm:gap-x-4 drop-shadow-lg"
          style={{ fontFamily: 'var(--font-fraunces)' }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              variants={child}
              key={index}
              className={word === "Hospital" ? "text-gold" : "text-white"}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Doctor Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative z-20 h-[clamp(380px,45vw,560px)] w-full max-w-150 flex justify-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] pointer-events-none"
        >
          <Image
            src="/dr-hasmukh.png"
            alt="Experienced lead physician at Ojas Multispeciality Hospital in Ahmedabad"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-contain object-bottom"
          />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative z-30 text-base sm:text-lg text-cream/90 max-w-2xl mx-auto mt-6 sm:mt-8 leading-relaxed"
        >
          At Ojas Hospital, we are committed to providing compassionate, affordable, and high-quality healthcare with experienced doctors, advanced facilities, and 24/7 emergency care for every family in Ahmedabad.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative z-30 flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gold text-maroon-900 font-bold hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(199,154,75,0.35)] transition-all tracking-[0.02em]"
          >
            <MessageSquare className="h-5 w-5" />
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

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="relative z-30 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-12 pt-8 sm:pt-10 border-t border-white/15 w-full"
        >
          <div className="flex flex-col items-center text-center">
            <strong className="text-3xl text-gold font-bold" style={{ fontFamily: 'var(--font-fraunces)' }}>24×7</strong>
            <span className="text-[13px] text-white/70 tracking-wide uppercase mt-1 font-semibold">Emergency Care</span>
          </div>

          <div className="hidden sm:block w-px h-10 bg-white/15"></div>

          <div className="flex flex-col items-center text-center">
            <strong className="text-3xl text-gold font-bold" style={{ fontFamily: 'var(--font-fraunces)' }}>180+</strong>
            <span className="text-[13px] text-white/70 tracking-wide uppercase mt-1 font-semibold">Experienced Specialists</span>
          </div>

          <div className="hidden sm:block w-px h-10 bg-white/15"></div>

          <div className="flex flex-col items-center text-center">
            <strong className="text-3xl text-gold font-bold" style={{ fontFamily: 'var(--font-fraunces)' }}>4.2★</strong>
            <span className="text-[13px] text-white/70 tracking-wide uppercase mt-1 font-semibold">Google Rating</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
