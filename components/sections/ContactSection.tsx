'use client';

import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  PhoneCall,
  MessageSquare,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { EMERGENCY_INFO } from '@/constants/hospitalData';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] text-slate-900 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-maroon-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-50 border border-maroon-200 text-maroon-800 text-xs font-bold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Contact <span className="text-maroon-800">Ojas Hospital</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you have clinical inquiries, insurance questions, or need guidance on travel for care, our patient services team is available around the clock.
          </p>
        </div>

        {/* 4 Details Cards Grid - Full Page Width Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Main Hospital Campus (Rakhial) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-maroon-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5 group">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-maroon-100/70 text-maroon-800 shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-1.5 min-w-0">
                <div className="text-[11px] font-bold text-maroon-700 uppercase tracking-wider">Main Campus</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                  Main Hospital Campus (Rakhial)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Rakhiyal Cross Road, Dynasore Circle, Rakhiyal, Ahmedabad, Gujarat – 380021
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Full Emergency, OPD & IPD
              </span>
              <a
                href="https://maps.google.com/?q=Ojas+Hospital+Rakhial+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-maroon-800 hover:text-maroon-950 bg-maroon-50 hover:bg-maroon-100 px-3 py-1.5 rounded-xl border border-maroon-200 transition-colors"
                title="Open Main Campus in Google Maps"
              >
                <span>Navigate</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Our Bapunagar Branch */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-maroon-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5 group">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-amber-100/70 text-amber-900 shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="h-6 w-6 text-amber-800" />
              </div>
              <div className="space-y-1.5 min-w-0">
                <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Extension Clinic</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                  Our Bapunagar Branch
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>Ojas Clinic</strong> — Gandhi Chowk, Opp. Old Post Office, Opp. Arban Nagar, Old Bapunagar, Ahmedabad – 380023
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Pediatric & OPD Consultations
              </span>
              <a
                href="https://maps.google.com/?q=Ojas+Clinic+Bapunagar+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-maroon-800 hover:text-maroon-950 bg-maroon-50 hover:bg-maroon-100 px-3 py-1.5 rounded-xl border border-maroon-200 transition-colors"
                title="Open Bapunagar Branch in Google Maps"
              >
                <span>Navigate</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Emergency & General Hotlines */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-maroon-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5 group">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-maroon-100/70 text-maroon-800 shrink-0 group-hover:scale-105 transition-transform">
                <PhoneCall className="h-6 w-6" />
              </div>
              <div className="space-y-2.5 min-w-0 flex-1">
                <div className="text-[11px] font-bold text-maroon-700 uppercase tracking-wider">Direct Hotlines</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                  Emergency & General Hotlines
                </h3>
                
                <div className="space-y-2 text-xs sm:text-sm pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Phone:</span>
                    <a href="tel:+917574840735" className="font-bold text-slate-900 hover:text-maroon-800 hover:underline">
                      +91 75748 40735
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Alternate:</span>
                    <a href="tel:+919737290729" className="font-bold text-slate-900 hover:text-maroon-800 hover:underline">
                      +91 97372 90729
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-rose-50 border border-rose-200/80">
                    <span className="text-rose-800 font-bold flex items-center gap-1.5 text-xs">
                      <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                      Emergency:
                    </span>
                    <a href="tel:+919825137766" className="font-extrabold text-rose-700 hover:underline text-xs sm:text-sm">
                      +91 98251 37766
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              <a
                href="tel:+917574840735"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-maroon-800 text-white font-bold text-xs hover:bg-maroon-900 transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Hotline</span>
              </a>
              <a
                href="https://wa.me/917574840735?text=Hello%20Ojas%20Hospital,%20I%20have%20an%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 4: Operational Hours */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-maroon-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5 group">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-emerald-100/70 text-emerald-800 shrink-0 group-hover:scale-105 transition-transform">
                <Clock className="h-6 w-6 text-emerald-700" />
              </div>
              <div className="space-y-2.5 min-w-0 flex-1">
                <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Round-the-clock</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                  Operational Hours
                </h3>
                
                <div className="space-y-2.5 pt-1 text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <span className="text-slate-700 font-medium">Hospital Services:</span>
                    <span className="font-bold text-slate-900 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                      Open 24 Hours
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80">
                    <span className="text-emerald-900 font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Emergency & Casualty:
                    </span>
                    <span className="font-extrabold text-emerald-800 bg-white px-2.5 py-0.5 rounded-md border border-emerald-200">
                      Available 24×7
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              <span>Full medical and trauma response team on site 24/7</span>
            </div>
          </div>

        </div>

        {/* Full-Width Interactive Google Maps */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
              Interactive Location Map
            </h3>
            <a
              href="https://maps.google.com/?q=Ojas+Hospital+Rakhial+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-maroon-800 hover:text-maroon-950 hover:underline flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="relative h-80 sm:h-96 md:h-112 w-full rounded-3xl overflow-hidden border border-maroon-100 shadow-lg bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.011093468482!2d72.6172763!3d23.0236317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8680a3df0bfd%3A0x17f2ff07e7c7d8b!2sOjas%20Hospital!5e0!3m2!1sen!2sin!4v1753847087000!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ojas Hospital Location on Google Maps"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
