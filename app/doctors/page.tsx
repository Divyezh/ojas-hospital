import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import { DoctorCards } from '@/components/sections/DoctorCards';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Doctors — Expert Medical Specialists | Ojas Hospital Ahmedabad',
  description: 'Meet the 16 experienced doctors and specialists at Ojas Multispeciality Hospital in Rakhial, Ahmedabad — Medicine, Surgery, Cosmetology, Ayurveda, Pediatrics, ENT, Orthopedics, Critical Care, Homeopathy, Physiotherapy & Unani.',
  alternates: { canonical: `${SITE_CONFIG.url}/doctors` },
};

export default function DoctorsPage() {
  return (
    <>
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
          16 experienced specialists across every major discipline — dedicated to your health and recovery.
        </p>
      </div>
      <DoctorCards />
    </>
  );
}
