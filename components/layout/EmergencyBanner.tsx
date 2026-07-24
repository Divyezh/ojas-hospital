'use client';

import React from 'react';
import { PhoneCall, Siren, Clock, ShieldCheck } from 'lucide-react';
import { EMERGENCY_INFO } from '@/constants/hospitalData';

export function EmergencyBanner() {
  return (
    <div className="bg-slate-900 text-white text-xs sm:text-sm py-2.5 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Info */}
        <div className="flex items-center space-x-4 flex-wrap justify-center md:justify-start gap-y-1">
          <div className="flex items-center space-x-1.5 text-rose-400 font-semibold">
            <Siren className="h-4 w-4 animate-pulse" />
            <span>24/7 Level 1 Emergency Hotline:</span>
            <a
              href={`tel:${EMERGENCY_INFO.hotline}`}
              className="text-white hover:text-rose-300 underline font-bold tracking-wide transition-colors"
            >
              {EMERGENCY_INFO.hotline}
            </a>
          </div>
          <span className="hidden lg:inline text-slate-600">|</span>
          <div className="hidden lg:flex items-center space-x-1.5 text-slate-300">
            <Clock className="h-3.5 w-3.5 text-gold" />
            <span>ER Door-to-Doctor Wait: <strong>{EMERGENCY_INFO.erWaitTime}</strong></span>
          </div>
        </div>

        {/* Right Info */}
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-1 text-emerald-400 font-medium">
            <ShieldCheck className="h-4 w-4" />
            <span>JCI Accredited Hospital</span>
          </div>
          <a
            href={`tel:${EMERGENCY_INFO.ambulance}`}
            className="flex items-center space-x-1 bg-rose-600/90 hover:bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-bold transition-all shadow-sm"
          >
            <PhoneCall className="h-3 w-3" />
            <span>Ambulance Direct</span>
          </a>
        </div>
      </div>
    </div>
  );
}
