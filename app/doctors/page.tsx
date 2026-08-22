import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import { DOCTORS } from '@/constants/hospitalData';
import { DoctorCards } from '@/components/sections/DoctorCards';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Doctors — Expert Medical Specialists | Ojas Hospital Ahmedabad',
  description: 'Meet the experienced doctors and specialists at Ojas Multispeciality Hospital in Rakhial & Bapunagar, Ahmedabad — Medicine, Surgery, Cosmetology, Ayurveda, Pediatrics, Orthopedics, and Critical Care.',
  keywords: [
    'Doctors in Ahmedabad',
    'Specialist Doctors Rakhial',
    'General Surgeon Ahmedabad',
    'ENT Specialist Ahmedabad',
    'Critical Care Specialist Ahmedabad',
    'Pediatrician Rakhial',
    'Dermatologist Ahmedabad',
  ],
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: { canonical: `${SITE_CONFIG.url}/doctors` },
};

export default function DoctorsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': DOCTORS.map((doc, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Physician',
        '@id': `${SITE_CONFIG.url}/doctors/${doc.id}#doctor`,
        'name': doc.name,
        'jobTitle': doc.title,
        'medicalSpecialty': doc.departmentName,
        'url': `${SITE_CONFIG.url}/doctors/${doc.id}`,
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="pt-28 pb-6 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Doctors</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Our <span className="text-gold">Doctors</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          16 experienced specialists across every major medical discipline — dedicated to your health and recovery in Rakhial, Ahmedabad.
        </p>
      </div>

      <DoctorCards />
    </>
  );
}
