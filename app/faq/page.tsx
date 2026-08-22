import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import { FAQ } from '@/components/sections/FAQ';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions | Ojas Hospital Ahmedabad',
  description: 'Find answers about appointments, emergency timings, cashless insurance, hospital branches, and medical services at Ojas Multispeciality Hospital in Ahmedabad.',
  alternates: { canonical: `${SITE_CONFIG.url}/faq` },
};

export default function FAQPage() {
  return (
    <>
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
