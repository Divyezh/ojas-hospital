import { Metadata } from 'next';
import { SITE_CONFIG, STANDARD_ROBOTS } from '@/constants/metadata';
import Link from 'next/link';
import { MediaSection } from '@/components/sections/MediaSection';

export const metadata: Metadata = {
  title: 'Media Coverage — Press & News | Ojas Hospital Ahmedabad',
  description: 'Media coverage of Ojas Multispeciality Hospital in Rakhial, Ahmedabad — electronic media, print media, and press features.',
  alternates: { canonical: `${SITE_CONFIG.url}/media` },
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: 'Media Coverage — Press & News | Ojas Hospital Ahmedabad',
    description: 'Media coverage of Ojas Multispeciality Hospital in Rakhial, Ahmedabad — electronic media, print media, and press features.',
    url: `${SITE_CONFIG.url}/media`,
    type: 'website',
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: 'Ojas Hospital Media Coverage' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media Coverage — Press & News | Ojas Hospital Ahmedabad',
    description: 'Media coverage and press features of Ojas Hospital in Ahmedabad.',
    images: [SITE_CONFIG.ogImage],
  },
};

export default function MediaPage() {
  return (
    <>
      <div className="pt-28 pb-6 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Media</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Media <span className="text-gold">Coverage</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          Press features, TV coverage, and print media stories about Ojas Hospital and our community health work.
        </p>
      </div>

      <MediaSection />
    </>
  );
}
