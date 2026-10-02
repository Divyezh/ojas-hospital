import { Metadata } from 'next';
import { SITE_CONFIG, STANDARD_ROBOTS, generateFaqJsonLd } from '@/constants/metadata';
import { FAQ } from '@/components/sections/FAQ';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions | Ojas Hospital Ahmedabad',
  description: 'Find answers about appointments, emergency timings, cashless insurance, hospital branches, and medical services at Ojas Multispeciality Hospital in Ahmedabad.',
  alternates: { canonical: `${SITE_CONFIG.url}/faq` },
  robots: STANDARD_ROBOTS,
  openGraph: {
    title: 'FAQ — Frequently Asked Questions | Ojas Hospital Ahmedabad',
    description: 'Find answers about appointments, emergency timings, cashless insurance, hospital branches, and medical services at Ojas Multispeciality Hospital in Ahmedabad.',
    url: `${SITE_CONFIG.url}/faq`,
    type: 'website',
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: 'Ojas Hospital FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Frequently Asked Questions | Ojas Hospital Ahmedabad',
    description: 'Find answers about appointments, insurance, and medical services at Ojas Hospital.',
    images: [SITE_CONFIG.ogImage],
  },
};

export default function FAQPage() {
  const faqSchema = generateFaqJsonLd();
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': SITE_CONFIG.url },
      { '@type': 'ListItem', 'position': 2, 'name': 'FAQ', 'item': `${SITE_CONFIG.url}/faq` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="pt-28 pb-6 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">FAQ</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Frequently Asked <span className="text-gold">Questions</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          Answers about appointments, insurance, emergency services, and more.
        </p>
      </div>
      <FAQ />
    </>
  );
}
