'use client';

import React, { useState } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Statistics } from '@/components/sections/Statistics';
import { DepartmentCards } from '@/components/sections/DepartmentCards';
import { FacilityCards } from '@/components/sections/FacilityCards';
import { DoctorCards } from '@/components/sections/DoctorCards';
import { TestimonialCards } from '@/components/sections/TestimonialCards';
import { Gallery } from '@/components/sections/Gallery';
import { FAQ } from '@/components/sections/FAQ';
import { ContactSection } from '@/components/sections/ContactSection';
import { AppointmentModal } from '@/components/sections/AppointmentModal';

export default function Home() {
  useSmoothScroll();

  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string | undefined>();
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>();

  const handleOpenAppointment = (deptId?: string, doctorId?: string) => {
    setSelectedDepartment(deptId);
    setSelectedDoctor(doctorId);
    setAppointmentModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Header */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Page Sections */}
      <Hero onOpenAppointment={() => handleOpenAppointment()} />
      <About />
      <Statistics />
      <DepartmentCards
        onSelectDepartment={(deptId) => handleOpenAppointment(deptId)}
      />
      <FacilityCards />
      <DoctorCards />
      <TestimonialCards />
      <Gallery />
      <FAQ />
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        defaultDepartment={selectedDepartment}
        defaultDoctor={selectedDoctor}
      />
    </div>
  );
}
