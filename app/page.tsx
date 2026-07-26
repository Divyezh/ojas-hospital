'use client';

import React from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { AppointmentModal } from '@/components/sections/AppointmentModal';

const Statistics = dynamic(() => import('@/components/sections/Statistics').then(mod => mod.Statistics));
const DepartmentCards = dynamic(() => import('@/components/sections/DepartmentCards').then(mod => mod.DepartmentCards));
const FacilityCards = dynamic(() => import('@/components/sections/FacilityCards').then(mod => mod.FacilityCards));
const DoctorCards = dynamic(() => import('@/components/sections/DoctorCards').then(mod => mod.DoctorCards));
const TestimonialCards = dynamic(() => import('@/components/sections/TestimonialCards').then(mod => mod.TestimonialCards));
const Gallery = dynamic(() => import('@/components/sections/Gallery').then(mod => mod.Gallery));
const FAQ = dynamic(() => import('@/components/sections/FAQ').then(mod => mod.FAQ));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then(mod => mod.ContactSection));
const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => mod.Footer));

export default function Home() {
  useSmoothScroll();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Sections */}
      <Hero />
      <About />
      <Statistics />
      <DepartmentCards />
      <FacilityCards />
      <DoctorCards />
      <TestimonialCards />
      <Gallery />
      <FAQ />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
