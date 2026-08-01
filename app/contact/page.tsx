import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import { ContactSection } from '@/components/sections/ContactSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us — Ojas Hospital Rakhial, Ahmedabad',
  description: 'Contact Ojas Multispeciality Hospital in Rakhial, Ahmedabad. Call our 24/7 emergency hotline, send a message, or visit us at Jasval Bhavan, Char Rasta, Rakhial.',
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-28 pb-6 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Contact</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Contact <span className="text-gold">Ojas Hospital</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          Reach us by call, WhatsApp, or visit. Emergency care available 24×7.
        </p>
      </div>

      {/* Brief About blurb */}
      <div className="bg-cream border-b border-maroon-100">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <p className="text-charcoal/80 text-sm leading-relaxed">
            Ojas Hospital is a trusted multispeciality hospital in Rakhial, Ahmedabad serving the community for over 24 years with compassionate, affordable, and high-quality care.
            {' '}<Link href="/about" className="text-maroon-700 font-semibold hover:underline">Learn more about us →</Link>
          </p>
        </div>
      </div>

      <ContactSection />
    </>
  );
}
