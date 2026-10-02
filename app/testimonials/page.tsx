import { Metadata } from 'next';
import { SITE_CONFIG, STANDARD_ROBOTS } from '@/constants/metadata';
import { TestimonialCards } from '@/components/sections/TestimonialCards';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Patient Testimonials — Real Stories | Ojas Hospital Ahmedabad',
  description: 'Read authentic patient testimonials and recovery stories from Ojas Multispeciality Hospital in Rakhial, Ahmedabad. Rated 4.2★ on Google.',
  alternates: { canonical: `${SITE_CONFIG.url}/testimonials` },
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: 'Patient Testimonials — Real Stories | Ojas Hospital Ahmedabad',
    description: 'Read authentic patient testimonials and recovery stories from Ojas Multispeciality Hospital in Rakhial, Ahmedabad.',
    url: `${SITE_CONFIG.url}/testimonials`,
    type: 'website',
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: 'Ojas Hospital Patient Testimonials' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Testimonials — Real Stories | Ojas Hospital Ahmedabad',
    description: 'Read authentic patient recovery stories from Ojas Hospital.',
    images: [SITE_CONFIG.ogImage],
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <div className="pt-28 pb-6 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Testimonials</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Patient <span className="text-gold">Testimonials</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          Real stories from patients and families who trusted Ojas Hospital with their care.
        </p>
      </div>
      <TestimonialCards />
    </>
  );
}
