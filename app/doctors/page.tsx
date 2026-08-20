import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import { DOCTORS } from '@/constants/hospitalData';
import { DoctorCards } from '@/components/sections/DoctorCards';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Award, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Doctors — Expert Medical Specialists | Ojas Hospital Ahmedabad',
  description: 'Meet the 16 experienced doctors and specialists at Ojas Multispeciality Hospital in Rakhial, Ahmedabad — Medicine, Surgery, Cosmetology, Ayurveda, Pediatrics, ENT, Orthopedics, Critical Care, Homeopathy, Physiotherapy & Unani.',
  keywords: [
    'Doctors in Ahmedabad',
    'Specialist Doctors Rakhial',
    'General Surgeon Ahmedabad',
    'ENT Specialist Ahmedabad',
    'Critical Care Specialist Ahmedabad',
    'Pediatrician Rakhial',
    'Dermatologist Ahmedabad',
  ],
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: { canonical: `${SITE_CONFIG.url}/doctors` },
};

export default function DoctorsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': DOCTORS.map((doc, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Physician',
        '@id': `${SITE_CONFIG.url}/doctors/${doc.id}#doctor`,
        'name': doc.name,
        'jobTitle': doc.title,
        'medicalSpecialty': doc.departmentName,
        'url': `${SITE_CONFIG.url}/doctors/${doc.id}`,
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="pt-28 pb-6 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Doctors</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Our <span className="text-gold">Doctors</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          16 experienced specialists across every major medical discipline — dedicated to your health and recovery in Rakhial, Ahmedabad.
        </p>
      </div>

      <DoctorCards />

      {/* Crawlable Semantic Directory Grid */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-maroon-700 bg-maroon-50 px-3 py-1 rounded-full">
              Full Medical Faculty Directory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Explore All Specialists at Ojas Hospital
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Browse our team of consultants, surgeons, and department heads providing round-the-clock clinical care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DOCTORS.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-maroon-300 hover:shadow-lg transition-all p-5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-maroon-900 text-gold flex items-center justify-center font-bold text-sm shrink-0">
                      {doc.image ? (
                        <Image src={doc.image} alt={doc.name} fill className="object-cover" />
                      ) : (
                        <span>{doc.initials || 'DR'}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm group-hover:text-maroon-700 transition-colors leading-tight">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-maroon-700 font-semibold">{doc.title}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mb-3">{doc.qualifications}</p>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-4">{doc.bio}</p>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-3 border-t border-slate-100 mb-4">
                    <span className="flex items-center gap-1 font-medium">
                      <Award className="w-3.5 h-3.5 text-maroon-600" /> {doc.experienceYears}+ Yrs Exp
                    </span>
                    <span className="flex items-center gap-1 font-medium text-amber-600">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {doc.rating} ({doc.reviewCount})
                    </span>
                  </div>
                </div>

                <Link
                  href={`/doctors/${doc.id}`}
                  className="w-full text-center py-2 px-3 rounded-xl bg-slate-50 group-hover:bg-maroon-700 text-slate-700 group-hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View Full Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
