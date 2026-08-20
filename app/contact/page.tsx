import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import { EMERGENCY_INFO } from '@/constants/hospitalData';
import { ContactSection } from '@/components/sections/ContactSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us — Ojas Hospital Multispeciality Rakhial, Ahmedabad',
  description: 'Contact Ojas Hospital Multispeciality at Rakhiyal Cross Road, Dynasore Circle, Rakhiyal, Ahmedabad, Gujarat 380021. 24/7 emergency hotline +91 7574840735, WhatsApp, and location directions.',
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Ojas Hospital Multispeciality',
    'url': `${SITE_CONFIG.url}/contact`,
    'mainEntity': {
      '@type': ['Hospital', 'MedicalOrganization', 'Organization'],
      '@id': `${SITE_CONFIG.url}/#hospital`,
      'name': SITE_CONFIG.officialName,
      'url': SITE_CONFIG.url,
      'logo': `${SITE_CONFIG.url}/logo.png`,
      'telephone': EMERGENCY_INFO.hotline,
      'email': SITE_CONFIG.email,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.suite}`,
        'addressLocality': SITE_CONFIG.address.city,
        'addressRegion': SITE_CONFIG.address.state,
        'postalCode': SITE_CONFIG.address.zip,
        'addressCountry': SITE_CONFIG.address.country
      }
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': SITE_CONFIG.url
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Contact',
        'item': `${SITE_CONFIG.url}/contact`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
          {EMERGENCY_INFO.address}. 24/7 Emergency Care Hotline: {EMERGENCY_INFO.hotline}
        </p>
      </div>

      {/* Brief About blurb */}
      <div className="bg-cream border-b border-maroon-100">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <p className="text-charcoal/80 text-sm leading-relaxed">
            Ojas Hospital Multispeciality is a trusted hospital in Rakhial, Ahmedabad, Gujarat serving the community for over 24 years with compassionate, affordable, and high-quality healthcare.
            {' '}<Link href="/about" className="text-maroon-700 font-semibold hover:underline">Learn more about us →</Link>
          </p>
        </div>
      </div>

      <ContactSection />
    </>
  );
}

