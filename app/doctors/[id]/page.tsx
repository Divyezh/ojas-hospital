import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DOCTORS, EMERGENCY_INFO } from '@/constants/hospitalData';
import { SITE_CONFIG } from '@/constants/metadata';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return DOCTORS.map((doc) => ({
    id: doc.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const doctor = DOCTORS.find((d) => d.id === id);

  if (!doctor) {
    return {
      title: 'Doctor Not Found',
    };
  }

  const title = `${doctor.name} - ${doctor.title} (${doctor.qualifications}) | Ojas Hospital`;
  const description = `Consult ${doctor.name}, a leading ${doctor.title} specializing in ${doctor.departmentName} at Ojas Hospital Multispeciality, Rakhial, Ahmedabad. ${doctor.experienceYears} years of experience. Book an appointment.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/doctors/${doctor.id}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/doctors/${doctor.id}`,
      type: 'profile',
      images: [
        {
          url: doctor.image ? `${SITE_CONFIG.url}${doctor.image}` : SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: `${doctor.name} — ${doctor.title} at Ojas Hospital Ahmedabad`,
        },
      ],
    },
  };
}

export default async function DoctorPage({ params }: Props) {
  const { id } = await params;
  const doctor = DOCTORS.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_CONFIG.url}/doctors/${doctor.id}#doctor`,
    'name': doctor.name,
    'jobTitle': doctor.title,
    'qualification': doctor.qualifications,
    'medicalSpecialty': doctor.departmentName,
    'url': `${SITE_CONFIG.url}/doctors/${doctor.id}`,
    'telephone': EMERGENCY_INFO.hotline,
    'worksFor': {
      '@type': ['Hospital', 'MedicalOrganization', 'Organization'],
      '@id': `${SITE_CONFIG.url}/#hospital`,
      'name': SITE_CONFIG.officialName,
      'url': SITE_CONFIG.url,
      'logo': `${SITE_CONFIG.url}/logo.png`
    },
    'hospitalAffiliation': {
      '@type': ['Hospital', 'MedicalOrganization', 'Organization'],
      '@id': `${SITE_CONFIG.url}/#hospital`,
      'name': SITE_CONFIG.officialName,
      'url': SITE_CONFIG.url,
      'logo': `${SITE_CONFIG.url}/logo.png`
    },
    'knowsAbout': doctor.specialties,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.suite}`,
      'addressLocality': SITE_CONFIG.address.city,
      'addressRegion': SITE_CONFIG.address.state,
      'postalCode': SITE_CONFIG.address.zip,
      'addressCountry': SITE_CONFIG.address.country
    },
    'image': doctor.image ? `${SITE_CONFIG.url}${doctor.image}` : SITE_CONFIG.ogImage,
    'description': doctor.bio,
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': doctor.rating.toString(),
      'reviewCount': doctor.reviewCount.toString()
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
        'name': 'Doctors',
        'item': `${SITE_CONFIG.url}/doctors`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': doctor.name,
        'item': `${SITE_CONFIG.url}/doctors/${doctor.id}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="grow pt-28 pb-16 bg-slate-50">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs mb-6 text-slate-500">
            <Link href="/" className="hover:text-maroon-700 transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/doctors" className="hover:text-maroon-700 transition-colors">Doctors</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-800 font-semibold">{doctor.name}</span>
          </nav>

          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft-sm border border-slate-200/80 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 flex justify-center shrink-0">
                <div className="relative w-64 h-64 md:w-full md:h-80 rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50">
                  {doctor.image ? (
                    <Image
                      src={doctor.image}
                      alt={`${doctor.name}, ${doctor.title} at Ojas Hospital Ahmedabad`}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                      <span className="text-4xl">👨‍⚕️</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Link
                      href={`/departments/${doctor.departmentId}`}
                      className="inline-block px-3 py-1 bg-maroon-50 text-maroon-700 hover:bg-maroon-100 transition-colors rounded-full text-xs font-bold"
                    >
                      {doctor.departmentName} Department
                    </Link>
                    <span className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-xs font-bold">
                      {doctor.experienceYears}+ Years Clinical Experience
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                    {doctor.name}
                  </h1>
                  <p className="text-lg text-slate-600 font-semibold mb-4">
                    {doctor.title} <span className="text-slate-400">({doctor.qualifications})</span>
                  </p>

                  <div className="flex items-center gap-2 mb-6 text-sm text-slate-500">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'fill-current' : 'text-slate-300'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-semibold text-slate-700">{doctor.rating}</span>
                    <span>({doctor.reviewCount} Verified Patient Ratings)</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4">
                  <a
                    href={`tel:${EMERGENCY_INFO.hotline.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 bg-maroon-700 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-sm hover:bg-maroon-800 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    Call Hospital Desk: {EMERGENCY_INFO.hotline}
                  </a>
                  <a
                    href={`https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation%20with%20${encodeURIComponent(doctor.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-sm hover:bg-emerald-700 transition-colors"
                  >
                    Consult via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Structured Entity Content Sections */}
          <div className="space-y-8 text-slate-700">
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
                Specialization & Qualifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase block mb-1">Medical Specialty</span>
                  <p className="font-semibold text-slate-800">{doctor.title} ({doctor.departmentName})</p>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase block mb-1">Qualifications</span>
                  <p className="font-semibold text-slate-800">{doctor.qualifications}</p>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase block mb-1">Clinical Practice</span>
                  <p className="font-semibold text-slate-800">{doctor.experienceYears}+ Years of Dedicated Practice</p>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase block mb-1">OPD Availability</span>
                  <p className="font-semibold text-slate-800">{doctor.availability}</p>
                </div>
              </div>
            </section>

            {doctor.specialties && doctor.specialties.length > 0 && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                  Areas of Clinical Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map((spec, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold">
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </section>
            )}

            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
                About {doctor.name}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                {doctor.bio}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                As a leading <strong>{doctor.departmentName} specialist in Ahmedabad</strong>, {doctor.name} is dedicated to providing personalized and compassionate care. Practicing at Ojas Multispeciality Hospital in Rakhial, the doctor leverages advanced diagnostic and therapeutic techniques to ensure optimal health outcomes for patients across Gujarat.
              </p>
            </section>

            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">
                Hospital Affiliation & Location
              </h2>
              <div className="space-y-2 text-sm text-slate-700">
                <p>
                  <strong>Hospital:</strong> Ojas Multispeciality Hospital
                </p>
                <p>
                  <strong>Department:</strong>{' '}
                  <Link href={`/departments/${doctor.departmentId}`} className="text-maroon-700 hover:underline font-medium">
                    {doctor.departmentName} Department
                  </Link>
                </p>
                <p>
                  <strong>Address:</strong> Jaysval Bhavan, Char Rasta, Rakhial, Ahmedabad, Gujarat 380021, India
                </p>
                <p>
                  <strong>Hotline:</strong> {EMERGENCY_INFO.hotline} (Available 24/7 for emergency inquiries)
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}

