'use client';

import React from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { AppointmentModal } from '@/components/sections/AppointmentModal';

import {
  StatisticsSkeleton,
  DepartmentCardsSkeleton,
  FacilityCardsSkeleton,
  DoctorCardsSkeleton,
  TestimonialCardsSkeleton,
  GallerySkeleton,
  FAQSkeleton,
  ContactSkeleton,
  FooterSkeleton,
} from '@/components/ui/SectionSkeleton';

const Statistics = dynamic(
  () => import('@/components/sections/Statistics').then(mod => mod.Statistics),
  { loading: () => <StatisticsSkeleton /> }
);
const DepartmentCards = dynamic(
  () => import('@/components/sections/DepartmentCards').then(mod => mod.DepartmentCards),
  { loading: () => <DepartmentCardsSkeleton /> }
);
const FacilityCards = dynamic(
  () => import('@/components/sections/FacilityCards').then(mod => mod.FacilityCards),
  { loading: () => <FacilityCardsSkeleton /> }
);
const DoctorCards = dynamic(
  () => import('@/components/sections/DoctorCards').then(mod => mod.DoctorCards),
  { loading: () => <DoctorCardsSkeleton /> }
);
const TestimonialCards = dynamic(
  () => import('@/components/sections/TestimonialCards').then(mod => mod.TestimonialCards),
  { loading: () => <TestimonialCardsSkeleton /> }
);
const Gallery = dynamic(
  () => import('@/components/sections/Gallery').then(mod => mod.Gallery),
  { loading: () => <GallerySkeleton /> }
);
const FAQ = dynamic(
  () => import('@/components/sections/FAQ').then(mod => mod.FAQ),
  { loading: () => <FAQSkeleton /> }
);
const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection').then(mod => mod.ContactSection),
  { loading: () => <ContactSkeleton /> }
);
const Footer = dynamic(
  () => import('@/components/layout/Footer').then(mod => mod.Footer),
  { loading: () => <FooterSkeleton /> }
);

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
