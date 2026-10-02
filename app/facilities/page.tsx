import { Metadata } from 'next';
import { SITE_CONFIG, STANDARD_ROBOTS } from '@/constants/metadata';
import { FacilityCards } from '@/components/sections/FacilityCards';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hospital Facilities — Modern Infrastructure | Ojas Hospital Ahmedabad',
  description: 'Explore world-class facilities at Ojas Hospital — operation theatres, diagnostics, deluxe rooms, dental clinic, in-house medical store, and more in Rakhial, Ahmedabad.',
  alternates: { canonical: `${SITE_CONFIG.url}/facilities` },
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: 'Hospital Facilities — Modern Infrastructure | Ojas Hospital Ahmedabad',
    description: 'Explore world-class facilities at Ojas Hospital — operation theatres, diagnostics, deluxe rooms, and more in Rakhial, Ahmedabad.',
    url: `${SITE_CONFIG.url}/facilities`,
    type: 'website',
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: 'Ojas Hospital Facilities Ahmedabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospital Facilities — Modern Infrastructure | Ojas Hospital Ahmedabad',
    description: 'Explore world-class facilities at Ojas Hospital in Rakhial, Ahmedabad.',
    images: [SITE_CONFIG.ogImage],
  },
};

export default function FacilitiesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': SITE_CONFIG.url },
      { '@type': 'ListItem', 'position': 2, 'name': 'Facilities', 'item': `${SITE_CONFIG.url}/facilities` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
