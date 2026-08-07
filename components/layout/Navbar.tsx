'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/constants/metadata';
import { EMERGENCY_INFO } from '@/constants/hospitalData';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { LanguageSwitcher } from './LanguageSwitcher';

const primaryLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Departments', href: '/departments' },
  { name: 'Doctors', href: '/doctors' },
  { name: 'Contact', href: '/contact' },
];

const moreLinks = [
  { name: 'Facilities', href: '/facilities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Events', href: '/events' },
  { name: 'Media', href: '/media' },
  { name: 'Awards', href: '/awards' },
];

const allMobileLinks = [...primaryLinks, ...moreLinks];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleAppointmentClick = () => {
    window.open("https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20appointments%20and%20medical%20services.", "_blank");
  };

  useEffect(() => {
    const updateNavHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };
    updateNavHeight();
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      updateNavHeight();
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateNavHeight);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateNavHeight);
    };
  }, []);

  // Close "More" dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  const navLinkClass = (href: string) =>
    `px-3 py-2 text-sm font-semibold rounded-full transition-all ${
      pathname === href
        ? 'text-maroon-700 bg-maroon-100/70'
        : 'text-charcoal hover:text-maroon-700 hover:bg-maroon-100/50'
    }`;

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 bg-white shadow-soft-sm border-b border-maroon-100 ${
        isScrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/ojas.png"
            alt="Ojas Multispeciality Hospital Logo"
            width={380}
            height={120}
            priority
            className="h-14 sm:h-20 lg:h-26 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {primaryLinks.map((link) => (
            <Link key={link.name} href={link.href} className={navLinkClass(link.href)}>
              {link.name}
            </Link>
          ))}

          {/* More dropdown */}
          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen((o) => !o)}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-full transition-all ${
                moreOpen || moreLinks.some((l) => l.href === pathname)
                  ? 'text-maroon-700 bg-maroon-100/70'
                  : 'text-charcoal hover:text-maroon-700 hover:bg-maroon-100/50'
              }`}
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              More
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50"
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                        pathname === link.href
                          ? 'bg-maroon-50 text-maroon-700'
                          : 'text-charcoal hover:bg-maroon-50 hover:text-maroon-700'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <LanguageSwitcher />
          <a
            href={`tel:${EMERGENCY_INFO.hotline}`}
            className="flex items-center space-x-2 text-xs font-bold px-3 py-2 rounded-full border transition-all text-charcoal hover:text-maroon-700 border-slate-200 hover:border-maroon-300"
          >
            <Phone className="h-3.5 w-3.5 text-maroon-700" />
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
          <LanguageSwitcher />
          <Button variant="primary" size="sm" onClick={handleAppointmentClick} className="text-xs px-3">
            WhatsApp
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl transition-colors focus:outline-none text-charcoal hover:bg-slate-100"
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
              {allMobileLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-semibold rounded-2xl transition-colors ${
                    pathname === link.href
                      ? 'text-maroon-700 bg-maroon-50'
                      : 'text-slate-700 hover:text-maroon-700 hover:bg-maroon-50/50'
                  }`}
                >
                  {link.name}
                </Link>
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
                onClick={() => { setMobileMenuOpen(false); handleAppointmentClick(); }}
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
