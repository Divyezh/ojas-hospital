import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DOCTORS, EMERGENCY_INFO, DEPARTMENTS } from '@/constants/hospitalData';
import { SITE_CONFIG } from '@/constants/metadata';
import { CheckCircle2, Clock, Calendar, MapPin, Phone, Award, ShieldCheck, HeartPulse, HelpCircle, UserCheck } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

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

  const title = `${doctor.name} - ${doctor.title} (${doctor.qualifications}) | Ojas Hospital Ahmedabad`;
  const description = `Consult ${doctor.name} (${doctor.qualifications}), leading ${doctor.title} specializing in ${doctor.departmentName} at Ojas Hospital Multispeciality, Rakhial, Ahmedabad. ${doctor.experienceYears}+ years of clinical experience. Book an appointment today.`;

  return {
    title,
    description,
    keywords: [
      doctor.name,
      doctor.title,
      `${doctor.title} Ahmedabad`,
      `${doctor.departmentName} specialist Rakhial`,
      `Ojas Hospital ${doctor.name}`,
      'Doctor in Rakhial Ahmedabad',
      'Multispeciality Hospital Ahmedabad',
    ],
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
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
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [doctor.image ? `${SITE_CONFIG.url}${doctor.image}` : SITE_CONFIG.ogImage],
    },
  };
}

export default async function DoctorPage({ params }: Props) {
  const { id } = await params;
  const doctor = DOCTORS.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  const relatedDoctors = DOCTORS.filter((d) => d.id !== doctor.id && (d.departmentId === doctor.departmentId || Math.abs(d.experienceYears - doctor.experienceYears) <= 3)).slice(0, 3);
  const department = DEPARTMENTS.find((dept) => dept.id === doctor.departmentId);

  const doctorFaqs = [
    {
      question: `What are the OPD consultation hours for ${doctor.name}?`,
      answer: `${doctor.name} is available for OPD consultations ${doctor.availability} at Ojas Hospital Multispeciality in Rakhial, Ahmedabad. For emergency cases, our 24/7 Casualty & Trauma center is always operational.`
    },
    {
      question: `How can I book an appointment with ${doctor.name}?`,
      answer: `You can schedule an appointment by calling our hospital desk directly at ${EMERGENCY_INFO.hotline} or connecting with our team via WhatsApp at +91 7574840735.`
    },
    {
      question: `What medical conditions does ${doctor.name} treat?`,
      answer: `${doctor.name} specializes in ${doctor.specialties.join(', ')} within the ${doctor.departmentName} department, delivering advanced diagnostic evaluations, personalized treatment plans, and continuous follow-up care.`
    },
    {
      question: `What documents should I carry for consultation with ${doctor.name}?`,
      answer: `Please bring your previous medical records, recent diagnostic/lab test reports, prescription history, and your government photo ID or cashless health insurance policy documents.`
    }
  ];

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
    'priceRange': '$$',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': doctorFaqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="grow pt-28 pb-16 bg-slate-50">
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs mb-6 text-slate-500">
            <Link href="/" className="hover:text-maroon-700 transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/doctors" className="hover:text-maroon-700 transition-colors">Doctors</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-800 font-semibold">{doctor.name}</span>
          </nav>

          {/* Profile Header Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft-sm border border-slate-200/80 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-full md:w-1/3 flex justify-center shrink-0">
                <div className="relative w-64 h-64 md:w-full md:h-80 rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50 flex items-center justify-center">
                  {doctor.image ? (
                    <Image
                      src={doctor.image}
                      alt={`${doctor.name}, ${doctor.title} at Ojas Hospital Ahmedabad`}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-maroon-900 via-maroon-800 to-maroon-950 text-white p-6 text-center">
                      <span className="text-6xl font-black mb-2 text-gold tracking-wider font-mono">{doctor.initials || 'DR'}</span>
                      <span className="text-sm font-semibold text-white/90">{doctor.name}</span>
                      <span className="text-xs text-cream/70 mt-1">{doctor.qualifications}</span>
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
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Medical Specialist
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
                    {doctor.name}
                  </h1>
                  <p className="text-lg text-slate-700 font-semibold mb-2">
                    {doctor.title} <span className="text-slate-500 font-medium">({doctor.qualifications})</span>
                  </p>
                  <p className="text-sm text-slate-600 mb-4">
                    Senior Practitioner at <strong>Ojas Multispeciality Hospital</strong>, Rakhiyal, Ahmedabad.
                  </p>

                  <div className="flex items-center gap-3 mb-6 text-sm text-slate-600 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'fill-current' : 'text-slate-300'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-bold text-slate-800">{doctor.rating} / 5.0</span>
                    <span className="text-xs text-slate-500">({doctor.reviewCount} Verified Patient Reviews)</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4">
                  <a
                    href={`tel:${EMERGENCY_INFO.hotline.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 bg-maroon-700 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-sm hover:bg-maroon-800 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Hospital Desk: {EMERGENCY_INFO.hotline}
                  </a>
                  <a
                    href={`https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20${encodeURIComponent(doctor.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-sm hover:bg-emerald-700 transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Consult via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Structured Detail Sections */}
          <div className="space-y-8 text-slate-700">

            {/* Section 1: Detailed Clinical Bio */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-maroon-700" />
                About {doctor.name} & Clinical Background
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                {doctor.bio}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Practicing at <strong>Ojas Multispeciality Hospital in Rakhiyal, Ahmedabad</strong>, {doctor.name} brings over {doctor.experienceYears} years of clinical excellence. Known for an empathetic, evidence-based approach to patient diagnosis, treatment, and continuous monitoring, {doctor.name} caters to patients from Ahmedabad, Gandhinagar, and across Gujarat.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether managing complex acute cases or long-term chronic conditions, {doctor.name} coordinates closely with Ojas Hospital&apos;s 24/7 ICU, advanced diagnostics, pathology lab, and surgical suites to deliver high standard medical outcomes.
              </p>
            </section>

            {/* Section 2: Clinical Details Grid */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-maroon-700" />
                Credentials & OPD Schedule
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 font-bold uppercase block mb-1">Specialty</span>
                  <p className="font-semibold text-slate-900">{doctor.title}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 font-bold uppercase block mb-1">Qualifications</span>
                  <p className="font-semibold text-slate-900">{doctor.qualifications}</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 font-bold uppercase block mb-1">Experience</span>
                  <p className="font-semibold text-slate-900">{doctor.experienceYears}+ Years</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 font-bold uppercase block mb-1">OPD Timing</span>
                  <p className="font-semibold text-maroon-800">{doctor.availability}</p>
                </div>
              </div>
            </section>

            {/* Section 3: Specializations */}
            {doctor.specialties && doctor.specialties.length > 0 && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-maroon-700" />
                  Key Clinical Expertise & Specializations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {doctor.specialties.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 4: Patient Preparation & Consultation Guide */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-maroon-700" />
                How to Prepare for Your Consultation
              </h2>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-maroon-700 font-bold">•</span>
                  <span><strong>Prior Medical Reports:</strong> Please bring all previous prescriptions, discharge summaries, laboratory reports, and imaging scans (X-ray, MRI, CT scan, Ultrasound).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-maroon-700 font-bold">•</span>
                  <span><strong>Medication List:</strong> Carry a complete list of ongoing medications including dosages, vitamins, or traditional medicines you are currently taking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-maroon-700 font-bold">•</span>
                  <span><strong>Symptom Timeline:</strong> Be prepared to describe when your symptoms started, their frequency, severity, and any aggravating or relieving factors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-maroon-700 font-bold">•</span>
                  <span><strong>Government / Insurance Cards:</strong> Keep your government photo ID, health insurance policy documents, or TPA cashless insurance card handy for seamless billing.</span>
                </li>
              </ul>
            </section>

            {/* Section 5: Doctor FAQs */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-maroon-700" />
                Frequently Asked Questions about {doctor.name}
              </h2>
              <div className="space-y-4">
                {doctorFaqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{faq.question}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Hospital Location Card */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-xl font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-maroon-700" />
                Consultation Location & Hospital Affiliation
              </h2>
              <div className="space-y-2 text-sm text-slate-700">
                <p>
                  <strong>Hospital:</strong> Ojas Multispeciality Hospital
                </p>
                {doctor.branch && (
                  <p className="p-3 bg-maroon-50 rounded-xl border border-maroon-200 text-maroon-900">
                    <strong>Clinic / Branch Location:</strong> {doctor.branch}
                  </p>
                )}
                <p>
                  <strong>Department:</strong>{' '}
                  <Link href={`/departments/${doctor.departmentId}`} className="text-maroon-700 hover:underline font-semibold">
                    {doctor.departmentName} Department →
                  </Link>
                </p>
                <p>
                  <strong>Main Campus Address:</strong> {EMERGENCY_INFO.address}, India
                </p>
                <p>
                  <strong>Hotline:</strong> {EMERGENCY_INFO.hotline} (Available 24/7 for appointments & inquiries)
                </p>
              </div>
            </section>

            {/* Section 7: Related Doctors & Department Link */}
            {relatedDoctors.length > 0 && (
              <section className="bg-slate-100/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Other Specialists at Ojas Hospital
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedDoctors.map((doc) => (
                    <Link
                      key={doc.id}
                      href={`/doctors/${doc.id}`}
                      className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-maroon-300 hover:shadow-md transition-all block group"
                    >
                      <h3 className="font-bold text-slate-900 text-sm group-hover:text-maroon-700 transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">{doc.title}</p>
                      <span className="text-[11px] font-semibold text-maroon-600 mt-2 block">
                        View Profile →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

          </div>
        </article>
      </div>
    </>
  );
}
