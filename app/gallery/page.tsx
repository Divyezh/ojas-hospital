import { Metadata } from 'next';
import { SITE_CONFIG, STANDARD_ROBOTS } from '@/constants/metadata';
import { Gallery } from '@/components/sections/Gallery';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery — Medical Camps & Hospital Photos | Ojas Hospital Ahmedabad',
  description: 'View photos from Ojas Hospital\'s community medical camps, health awareness drives, and hospital facilities in Rakhial, Ahmedabad.',
  alternates: { canonical: `${SITE_CONFIG.url}/gallery` },
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: 'Gallery — Medical Camps & Hospital Photos | Ojas Hospital Ahmedabad',
    description: 'View photos from Ojas Hospital\'s community medical camps, health awareness drives, and hospital facilities in Rakhial, Ahmedabad.',
    url: `${SITE_CONFIG.url}/gallery`,
    type: 'website',
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: 'Ojas Hospital Photo Gallery Ahmedabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery — Medical Camps & Hospital Photos | Ojas Hospital Ahmedabad',
    description: 'View photos from Ojas Hospital community camps and facilities.',
    images: [SITE_CONFIG.ogImage],
  },
};

export default function GalleryPage() {
  return (
    <>
      <div className="pt-28 pb-6 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Gallery</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Photo <span className="text-gold">Gallery</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          A visual tour of our community health programs, medical camps, and hospital facilities.
        </p>
      </div>
      <Gallery />
    </>
  );
}
