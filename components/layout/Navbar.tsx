'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Menu, X, Calendar, Phone, Stethoscope, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/constants/metadata';
import { EMERGENCY_INFO } from '@/constants/hospitalData';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAppointmentClick = () => {
    window.open("https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20appointments%20and%20medical%20services.", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Departments', href: '#departments' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-soft-sm py-3 border-b border-maroon-100' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Image 
            src="/ojas.png" 
            alt="Ojas Multispeciality Hospital Logo" 
            width={240}
            height={80}
            priority
            className="h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  const targetId = link.href.replace('#', '');
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/' + link.href;
                  }
                }
              }}
              className={`px-3 py-2 text-sm font-semibold rounded-full transition-all ${isScrolled ? 'text-charcoal hover:text-maroon-700 hover:bg-maroon-100/50' : 'text-white/90 hover:text-white hover:bg-white/10'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={`tel:${EMERGENCY_INFO.hotline}`}
            className={`flex items-center space-x-2 text-xs font-bold px-3 py-2 rounded-full border transition-all ${isScrolled ? 'text-charcoal hover:text-maroon-700 border-slate-200 hover:border-maroon-300' : 'text-white hover:text-gold border-white/20 hover:border-gold/50'}`}
          >
            <Phone className={`h-3.5 w-3.5 ${isScrolled ? 'text-maroon-700' : 'text-gold'}`} />
            <span>Call Hotline</span>
          </a>

          <Button
            variant="primary"
            size="md"
            onClick={handleAppointmentClick}
            leftIcon={<WhatsAppIcon className="h-4 w-4" />}
          >
            WhatsApp Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center space-x-2">
          <Button
            variant="primary"
            size="sm"
            onClick={handleAppointmentClick}
            className="text-xs px-3"
          >
            WhatsApp
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors focus:outline-none ${isScrolled ? 'text-charcoal hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden px-4 pt-3 pb-6"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    const targetId = link.href.replace('#', '');
                    const element = document.getElementById(targetId);
                    if (element) {
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      window.location.href = '/' + link.href;
                    }
                  }}
                  className="px-4 py-3 text-base font-semibold text-slate-700 hover:text-maroon-700 hover:bg-maroon-50/50 rounded-2xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col space-y-3">
              <a
                href={`tel:${EMERGENCY_INFO.hotline}`}
                className="flex items-center justify-center space-x-2 py-3 rounded-2xl border border-slate-200 font-bold text-slate-800 text-sm"
              >
                <Phone className="h-4 w-4 text-maroon-700" />
                <span>Call Emergency Hotline</span>
              </a>

              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleAppointmentClick();
                }}
                className="w-full"
                leftIcon={<WhatsAppIcon className="h-5 w-5" />}
              >
                Contact on WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
