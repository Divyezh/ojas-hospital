'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EMERGENCY_INFO } from '@/constants/hospitalData';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/7574840735?text=${encodeURIComponent('Hello Ojas Hospital, I would like to inquire about appointments and medical services.')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-600/40 border border-emerald-400/30 transition-colors group"
      aria-label="Chat with Ojas on WhatsApp"
    >
      <div className="relative">
        <WhatsAppIcon className="h-6 w-6 text-white" />
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-300 animate-ping" />
      </div>
      <span className="hidden sm:inline text-sm font-bold tracking-wide">WhatsApp Support</span>
    </motion.a>
  );
}
