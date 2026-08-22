'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Activity, Phone, Mail, MapPin, ShieldCheck, Heart, Award, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/metadata';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { DEPARTMENTS, DOCTORS, EMERGENCY_INFO } from '@/constants/hospitalData';
import { motion, Variants } from 'framer-motion';

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export function Footer() {


  return (
    <footer className="footer-main-bg text-cream/70 text-sm border-t border-maroon-800">

      {/* 1. Pre-footer CTA band */}
      <section className="cta-band">
        <div className="cta-band-content">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">Ready to experience compassionate, precision care?</h3>
          <p className="text-cream/80 text-sm sm:text-base mb-6">Our specialists are available 24/7 for consultations and emergencies.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20appointments%20and%20medical%20services." target="_blank" rel="noopener noreferrer" className="btn-gold-fill">
              <WhatsAppIcon className="h-5 w-5 mr-2" />
              Contact on WhatsApp
            </a>
            <a href="tel:7574840735" className="btn-outline-cream">
              <span className="pulse-ring" /> Call Hotline
            </a>
          </div>
        </div>
        <span className="cta-band-wordmark" aria-hidden="true">OJAS</span>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* 2. Main footer grid (5 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-12 border-b border-maroon-800/80">

          {/* Col 1: Brand Info */}
          <motion.div custom={0} variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }} className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2.5 rounded-2xl shadow-lg border border-white/10 shrink-0">
                <Image
                  src="/icon-512.png"
                  alt="Ojas Hospital Icon"
                  width={160}
                  height={160}
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-white tracking-wide" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  OJAS
                </span>
                <span className="text-xs font-bold text-gold tracking-[0.14em] uppercase">
                  HOSPITAL
                </span>
              </div>
            </div>
            <p className="text-cream/70 leading-relaxed text-xs sm:text-sm">
              Delivering compassionate, high-quality, and affordable multispeciality care to the heart of Rakhial, Ahmedabad. With our experienced specialists and 24/7 emergency response, we are dedicated to the health and well-being of every family we serve.
            </p>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div custom={1} variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-base">Quick Links</h4>
            <ul className="space-y-3 text-xs sm:text-sm flex flex-col items-start">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About</Link></li>
              <li><Link href="/departments" className="footer-link">Departments</Link></li>
              <li><Link href="/doctors" className="footer-link">Doctors</Link></li>
              <li><Link href="/facilities" className="footer-link">Facilities</Link></li>
              <li><Link href="/gallery" className="footer-link">Gallery</Link></li>
              <li><Link href="/events" className="footer-link">Events & Camps</Link></li>
              <li><Link href="/media" className="footer-link">Media</Link></li>
              <li><Link href="/awards" className="footer-link">Awards</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Col 3: Clinical Services */}
          <motion.div custom={2} variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }} className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-4 tracking-wide text-base">Departments</h4>
            <ul className="space-y-2 text-xs flex flex-col items-start max-h-72 overflow-y-auto pr-1">
              {DEPARTMENTS.map((dept) => (
                <li key={dept.id}>
                  <Link href={`/departments/${dept.id}`} className="footer-link footer-link-external space-x-1 inline-flex items-center">
                    <span>{dept.name}</span>
                    <ArrowUpRight className="icon-arrow h-2.5 w-2.5 opacity-60" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Emergency Contact */}
          <motion.div custom={3} variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-base">Locations & Contact</h4>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start space-x-3 cursor-pointer group">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-[11px] font-bold text-gold uppercase tracking-wider block">Main Campus</span>
                  <span className="text-cream/90">{EMERGENCY_INFO.address}</span>
                </div>
              </div>
              <div className="flex items-start space-x-3 cursor-pointer group">
                <MapPin className="h-5 w-5 text-gold/80 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-[11px] font-bold text-gold uppercase tracking-wider block">Our Bapunagar Branch</span>
                  <span className="text-cream/80">Ojas Clinic, Gandhi Chowk, Opp. Old Post Office, Opp. Arban Nagar, Old Bapunagar, Ahmedabad – 380023</span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <motion.div whileHover={{ rotate: [-8, 8, -8, 8, 0] }} transition={{ duration: 0.4 }}>
                  <Phone className="h-5 w-5 text-maroon-400 shrink-0 mt-0.5 cursor-pointer" />
                </motion.div>
                <div className="flex flex-col space-y-1">
                  <span className="block text-[11px] text-cream/50 font-bold uppercase">24/7 Hotline</span>
                  <a href="tel:7574840735" className="text-white font-bold hover:text-gold transition-colors">
                    +91 7574840735
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-cream/70 group-hover:text-gold transition-colors duration-200 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-cream/90 hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Col 5: Connect With Us (New) */}
          <motion.div custom={4} variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }} className="flex flex-col">
            <h4 className="text-white font-semibold mb-4 tracking-wide text-base">Connect With Us</h4>

            <div className="flex space-x-3 mb-6">
              {[
                { label: 'WhatsApp', url: 'https://wa.me/917574840735', svg: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /> },
                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/dr-ayush-soni-2134703a7/', svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  aria-label={social.label}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-maroon-700 text-cream"
                  whileHover={{ scale: 1.1, rotate: -6, backgroundColor: 'var(--color-gold)', color: 'var(--color-maroon-900)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    {social.svg}
                  </svg>
                </motion.a>
              ))}
            </div>


          </motion.div>
        </div>

        {/* 2.5 Specialists Directory (SEO internal linking) */}
        <div className="pt-8 pb-6 border-b border-maroon-800/80">
          <p className="text-white text-xs font-bold uppercase tracking-wider mb-3">Our Medical Specialists</p>
          <div className="flex flex-wrap gap-2 text-xs">
            {DOCTORS.map((doc) => (
              <Link
                key={doc.id}
                href={`/doctors/${doc.id}`}
                className="px-2.5 py-1 rounded-lg bg-maroon-900/60 hover:bg-gold hover:text-maroon-950 text-cream/80 border border-maroon-800 transition-colors inline-flex items-center gap-1 text-[11px]"
              >
                <span>{doc.name}</span>
                <span className="text-gold/70 text-[10px]">({doc.title})</span>
              </Link>
            ))}
          </div>
        </div>

        {/* 3. Map Card Enhancement */}
        <div className="mt-8 mb-12">
          <div className="map-card shadow-soft-lg w-full h-48 sm:h-64 relative rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.011093468482!2d72.6172763!3d23.0236317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8680a3df0bfd%3A0x17f2ff07e7c7d8b!2sOjas%20Hospital!5e0!3m2!1sen!2sin!4v1753847087000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ojas Hospital Location on Google Maps"
            ></iframe>
            <div className="map-overlay">
              <a href="https://www.google.com/maps/place/Ojas+Hospital/@23.0236317,72.6198512,17z" target="_blank" rel="noopener noreferrer" className="btn-gold-fill shadow-lg">
                <MapPin className="h-4 w-4 mr-2" /> Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* 4. Bottom Bar */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40 font-medium">
          <p>© 2026 Ojas Hospital. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-cream/80 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-cream/80 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
