import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import { About } from '@/components/sections/About';
import { Statistics } from '@/components/sections/Statistics';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us — Ojas Multispeciality Hospital Ahmedabad',
  description: 'Learn about Ojas Hospital — trusted multispeciality care in Rakhial, Ahmedabad since 2000. Meet our leadership, mission, and 24 years of healthcare excellence.',
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
};

const leadership = [
  {
    src: '/dr-hasmukh.png',
    name: 'Dr. Hasmukh Soni',
    role: 'Managing Director',
    bio: 'With decades of clinical experience, Dr. Hasmukh Soni founded Ojas Hospital to bring compassionate, high-quality, and affordable healthcare to the Rakhial community.',
  },
  {
    src: '/Dr Ayush.png',
    name: 'Dr. Ayush Soni',
    role: 'Director — Skin & Hair Specialist',
    bio: 'Dr. Ayush Soni leads hospital operations and heads the Dermatology department. His focus on patient experience and modern care protocols drives the hospital\'s daily excellence.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-28 pb-6 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">About Us</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          About <span className="text-gold">Ojas Hospital</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          Trusted multispeciality care in the heart of Rakhial, Ahmedabad — for over two decades.
        </p>
      </div>

      {/* About content */}
      <About />

      {/* Statistics */}
      <Statistics />

      {/* Leadership section */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-maroon-700">Our Leadership</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              The Faces Behind <span className="text-maroon-700">Ojas Hospital</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {leadership.map((person) => (
              <div key={person.name} className="flex flex-col items-center text-center bg-white rounded-2xl shadow-soft-sm border border-maroon-100 p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="relative w-48 h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
                  <Image src={person.src} alt={`${person.name} — ${person.role} at Ojas Hospital`} fill className="object-cover object-top" sizes="192px" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-1">{person.name}</h3>
                <span className="text-sm font-semibold text-maroon-700 mb-4">{person.role}</span>
                <p className="text-sm text-charcoal/70 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-white border-t border-maroon-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-charcoal/70 mb-6">Explore more about what Ojas Hospital offers</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Our Facilities', href: '/facilities' },
              { label: 'Awards & Recognition', href: '/awards' },
              { label: 'Our Doctors', href: '/doctors' },
              { label: 'Contact Us', href: '/contact' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="px-5 py-2.5 rounded-full border border-maroon-200 text-sm font-semibold text-maroon-700 hover:bg-maroon-700 hover:text-white hover:border-maroon-700 transition-all">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
