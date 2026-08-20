import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import { DEPARTMENTS } from '@/constants/hospitalData';
import Link from 'next/link';
import Image from 'next/image';
import { DepartmentCards } from '@/components/sections/DepartmentCards';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Departments — Specialized Clinical Wings | Ojas Hospital Ahmedabad',
  description: 'Explore all 14 specialized departments at Ojas Multispeciality Hospital — General Medicine, Surgery, Orthopedics, Gynecology, Critical Care, ENT, Pediatrics, Dermatology and more in Rakhial, Ahmedabad.',
  keywords: [
    'Hospital Departments Ahmedabad',
    'Clinical Departments Rakhial',
    'Critical Care Hospital Ahmedabad',
    'Gynecology Department Rakhial',
    'General Surgery Hospital Ahmedabad',
    'ENT Department Ahmedabad',
  ],
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: { canonical: `${SITE_CONFIG.url}/departments` },
};

export default function DepartmentsPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': DEPARTMENTS.map((dept, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'MedicalClinic',
        '@id': `${SITE_CONFIG.url}/departments/${dept.id}#department`,
        'name': dept.name,
        'description': dept.description,
        'url': `${SITE_CONFIG.url}/departments/${dept.id}`,
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {/* Page header */}
      <div className="pt-28 pb-8 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Departments</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Clinical <span className="text-gold">Departments</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          14 specialized medical wings powered by board-certified doctors, ultra-modern diagnostics, and 24/7 casualty care in Rakhiyal, Ahmedabad.
        </p>
      </div>

      {/* Redesigned Department Cards Section with Horizontal Scroll */}
      <DepartmentCards />

      {/* Complete SSR Crawlable Department Directory */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-maroon-700 bg-maroon-50 px-3 py-1 rounded-full">
              Comprehensive Directory
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
              All 14 Clinical Specialties & Departments
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Explore diagnostic capabilities, inpatient facilities, and experienced consulting physicians across every medical wing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.id}
                className="bg-white rounded-3xl border border-slate-200 hover:border-maroon-300 hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={dept.image}
                      alt={`Ojas Hospital ${dept.name} Department`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-sm">
                        {dept.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {dept.fullDescription || dept.description}
                    </p>

                    {dept.features && dept.features.length > 0 && (
                      <div className="space-y-1.5 mb-6">
                        {dept.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/departments/${dept.id}`}
                    className="w-full text-center py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-maroon-700 text-maroon-900 group-hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Department & Specialists</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
