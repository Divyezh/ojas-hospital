import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import { DEPARTMENTS } from '@/constants/hospitalData';
import Link from 'next/link';
import { DepartmentCards } from '@/components/sections/DepartmentCards';

export const metadata: Metadata = {
  title: 'Departments — Specialized Clinical Wings | Ojas Hospital Ahmedabad',
  description: 'Explore specialized clinical departments at Ojas Multispeciality Hospital — General Medicine, Surgery, Orthopedics, Gynecology, Critical Care, Pediatrics, Dermatology, Dental Care, Cardiology and more in Rakhial, Ahmedabad.',
  keywords: [
    'Hospital Departments Ahmedabad',
    'Clinical Departments Rakhial',
    'Critical Care Hospital Ahmedabad',
    'Gynecology Department Rakhial',
    'General Surgery Hospital Ahmedabad',
  ],
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: { canonical: `${SITE_CONFIG.url}/departments` },
};

export default function DepartmentsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': DEPARTMENTS.map((dept, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'MedicalClinic',
        '@id': `${SITE_CONFIG.url}/departments/${dept.id}#department`,
        'name': dept.name,
        'description': dept.description,
        'url': `${SITE_CONFIG.url}/departments/${dept.id}`,
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
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
          Specialized medical wings powered by board-certified doctors, ultra-modern diagnostics, and 24/7 casualty care in Rakhiyal, Ahmedabad.
        </p>
      </div>

      {/* Department Cards Section with Horizontal Scroll */}
      <DepartmentCards />
    </>
  );
}
