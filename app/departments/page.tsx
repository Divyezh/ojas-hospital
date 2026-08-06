import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import Link from 'next/link';
import { DepartmentCards } from '@/components/sections/DepartmentCards';

export const metadata: Metadata = {
  title: 'Departments — Specialized Clinical Departments | Ojas Hospital Ahmedabad',
  description: 'Explore all specialized departments at Ojas Multispeciality Hospital — General Medicine, Surgery, Orthopedics, Gynecology, Cardiology, Emergency Care and more in Rakhial, Ahmedabad.',
  alternates: { canonical: `${SITE_CONFIG.url}/departments` },
};

export default function DepartmentsPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-28 pb-8 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Departments</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Clinical <span className="text-gold">Departments</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          Multi-disciplinary medical wings powered by board-certified specialists and advanced diagnostic technology.
        </p>
      </div>

      {/* Redesigned Department Cards Section with Horizontal Scroll */}
      <DepartmentCards />
    </>
  );
}

