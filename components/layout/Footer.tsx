'use client';

import React from 'react';
import Image from 'next/image';
import { Activity, Phone, Mail, MapPin, ShieldCheck, Heart, Award, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/metadata';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { DEPARTMENTS, EMERGENCY_INFO } from '@/constants/hospitalData';
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
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* 2. Main footer grid (5 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-12 border-b border-maroon-800/80">

          {/* Col 1: Brand Info */}
          <motion.div custom={0} variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }} className="lg:col-span-1 space-y-4">
            <div className="flex items-center">
              <div className="inline-block">
                <Image src="/logo.png" alt="Ojas Multispeciality Hospital Logo" width={240} height={80} className="h-16 w-auto object-contain" />
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
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#departments" className="footer-link">Departments</a></li>
              <li><a href="#doctors" className="footer-link">Doctors</a></li>
              <li><a href="#facilities" className="footer-link">Facilities</a></li>
              <li><a href="#gallery" className="footer-link">Gallery</a></li>
              <li><a href="#gallery" className="footer-link">Medical Camps</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </motion.div>

          {/* Col 3: Clinical Services */}
          <motion.div custom={2} variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-base">Departments</h4>
            <ul className="space-y-3 text-xs sm:text-sm flex flex-col items-start">
              {DEPARTMENTS.slice(0, 8).map((dept) => (
                <li key={dept.id}>
                  <a href="#departments" className="footer-link footer-link-external space-x-1">
                    <span>{dept.name}</span>
                    <ArrowUpRight className="icon-arrow h-3 w-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Emergency Contact */}
          <motion.div custom={3} variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }}>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-base">Emergency & Contact</h4>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start space-x-3 cursor-pointer group">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-cream/90">{EMERGENCY_INFO.address}</span>
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
                  <a href="tel:9737290729" className="text-white font-bold hover:text-gold transition-colors">
                    +91 9737290729
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
                { label: 'Instagram', url: '#', svg: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /> },
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

        {/* 3. Map Card Enhancement */}
        <div className="mt-8 mb-12">
          <div className="map-card shadow-soft-lg w-full h-48 sm:h-64 relative rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9366479768656!2d72.6288667753381!3d23.024564479169627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86548a3f8205%3A0x6b86ec32e293817a!2sOjas%20Hospital!5e0!3m2!1sen!2sin!4v1722157582155!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
              title="Ojas Hospital Map"
            ></iframe>
            <div className="map-overlay">
              <a href="https://maps.google.com/?q=Ojas+Hospital,+Ahmedabad" target="_blank" rel="noopener noreferrer" className="btn-gold-fill shadow-lg">
                <MapPin className="h-4 w-4 mr-2" /> Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* 4. Bottom Bar */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40 font-medium">
          <p>© 2026 Ojas Hospital. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <a href="/privacy-policy" className="hover:text-cream/80 transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-cream/80 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
