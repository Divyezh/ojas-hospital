import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import { FacilityCards } from '@/components/sections/FacilityCards';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hospital Facilities — Modern Infrastructure | Ojas Hospital Ahmedabad',
  description: 'Explore world-class facilities at Ojas Hospital — operation theatres, diagnostics, deluxe rooms, dental clinic, in-house medical store, and more in Rakhial, Ahmedabad.',
  alternates: { canonical: `${SITE_CONFIG.url}/facilities` },
};

export default function FacilitiesPage() {
  return (
    <>
      <div className="pt-28 pb-6 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Facilities</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Our <span className="text-gold">Facilities</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          Modern infrastructure and state-of-the-art equipment — everything under one roof for your complete care.
        </p>
      </div>
      <FacilityCards />
    </>
  );
}
