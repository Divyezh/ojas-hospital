import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DEPARTMENTS, DOCTORS, EMERGENCY_INFO } from '@/constants/hospitalData';
import { SITE_CONFIG } from '@/constants/metadata';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { CheckCircle2, Phone, HelpCircle, Activity, ShieldCheck, HeartPulse, Building2, Stethoscope, AlertCircle } from 'lucide-react';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return DEPARTMENTS.map((dept) => ({
    id: dept.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const department = DEPARTMENTS.find((d) => d.id === id);

  if (!department) {
    return {
      title: 'Department Not Found',
    };
  }

  const title = `${department.name} Department & Specialists in Ahmedabad | Ojas Hospital`;
  const description = `The ${department.name} Department at Ojas Hospital Multispeciality in Rakhial, Ahmedabad offers advanced treatment, experienced specialists, state-of-the-art diagnostics, and 24/7 emergency care. Book a consultation.`;

  return {
    title,
    description,
    keywords: [
      `${department.name} Ahmedabad`,
      `${department.name} Hospital Rakhial`,
      `Best ${department.name} doctors Ahmedabad`,
      `Ojas Hospital ${department.name}`,
      'Hospital in Rakhial Ahmedabad',
      'Emergency Care Ahmedabad',
    ],
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/departments/${department.id}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/departments/${department.id}`,
      type: 'website',
      images: [
        {
          url: department.image ? `${SITE_CONFIG.url}${department.image}` : SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: `Ojas Hospital ${department.name} Department Ahmedabad`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [department.image ? `${SITE_CONFIG.url}${department.image}` : SITE_CONFIG.ogImage],
    },
  };
}

export default async function DepartmentPage({ params }: Props) {
  const { id } = await params;
  const department = DEPARTMENTS.find((d) => d.id === id);

  if (!department) {
    notFound();
  }

  const departmentDoctors = DOCTORS.filter((doc) => doc.departmentId === department.id);
  const otherDepartments = DEPARTMENTS.filter((d) => d.id !== department.id).slice(0, 4);

  const deptFaqs = [
    {
      question: `What services and procedures are available in the ${department.name} Department?`,
      answer: `The ${department.name} Department at Ojas Hospital Multispeciality offers comprehensive diagnostic evaluations, outpatient consultations, minor & major surgeries, specialized procedures, and inpatient monitoring in Rakhiyal, Ahmedabad.`
    },
    {
      question: `Who are the primary doctors in the ${department.name} Department?`,
      answer: departmentDoctors.length > 0
        ? `Our team includes ${departmentDoctors.map((d) => `${d.name} (${d.title}, ${d.qualifications})`).join(', ')}, supported by experienced resident medical officers and nursing staff.`
        : `The department is supervised by our senior medical leadership, visiting super-specialist consultants, and board-certified clinicians with decades of clinical experience.`
    },
    {
      question: `Does Ojas Hospital offer 24/7 emergency care for ${department.name} cases?`,
      answer: `Yes. Ojas Hospital operates a 24/7 Emergency & Trauma Centre in Rakhiyal, Ahmedabad. Critical emergencies, acute trauma, and intensive care needs are managed around the clock with immediate doctor triage and ICU support.`
    },
    {
      question: `Are cashless health insurance and mediclaim facilities accepted for ${department.name}?`,
      answer: `Yes, Ojas Hospital supports major private health insurance providers and TPA cashless hospitalization for eligible treatments and surgical procedures.`
    },
    {
      question: `How can I schedule an appointment with a ${department.name} specialist?`,
      answer: `You can book an appointment by calling our hospital desk directly at ${EMERGENCY_INFO.hotline} or by sending a message on WhatsApp at +91 7574840735. Walk-ins are also accepted during regular OPD hours.`
    }
  ];

  const medicalClinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${SITE_CONFIG.url}/departments/${department.id}#department`,
    'name': `Ojas Hospital - ${department.name} Department`,
    'image': department.image ? `${SITE_CONFIG.url}${department.image}` : SITE_CONFIG.ogImage,
    'description': department.description,
    'telephone': EMERGENCY_INFO.hotline,
    'url': `${SITE_CONFIG.url}/departments/${department.id}`,
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.suite}`,
      'addressLocality': SITE_CONFIG.address.city,
      'addressRegion': SITE_CONFIG.address.state,
      'postalCode': SITE_CONFIG.address.zip,
      'addressCountry': SITE_CONFIG.address.country
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': SITE_CONFIG.geo.latitude,
      'longitude': SITE_CONFIG.geo.longitude
    },
    'medicalSpecialty': department.name,
    'medicalStaff': departmentDoctors.map((doc) => ({
      '@type': 'Physician',
      '@id': `${SITE_CONFIG.url}/doctors/${doc.id}#doctor`,
      'name': doc.name,
      'jobTitle': doc.title
    })),
    'parentOrganization': {
      '@type': ['Hospital', 'MedicalOrganization', 'Organization'],
      '@id': `${SITE_CONFIG.url}/#hospital`,
      'name': SITE_CONFIG.officialName,
      'url': SITE_CONFIG.url,
      'logo': `${SITE_CONFIG.url}/logo.png`
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': deptFaqs.map((faq) => ({
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
        'name': 'Departments',
        'item': `${SITE_CONFIG.url}/departments`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': department.name,
        'item': `${SITE_CONFIG.url}/departments/${department.id}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
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
          {/* Breadcrumb Visual */}
          <nav className="text-xs mb-6 text-slate-500">
            <Link href="/" className="hover:text-maroon-700 transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/departments" className="hover:text-maroon-700 transition-colors">Departments</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-800 font-semibold">{department.name}</span>
          </nav>

          <header className="mb-10 text-center">
            <span className="inline-block px-3 py-1 bg-maroon-50 text-maroon-700 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
              Specialized Center of Excellence
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              <span className="text-maroon-700">{department.name}</span> Department at Ojas Hospital
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Advanced {department.name.toLowerCase()} diagnosis, treatment, and specialist care in Rakhiyal, Ahmedabad, Gujarat.
            </p>
          </header>

          <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden mb-10 shadow-soft-sm border border-slate-200">
            <Image
              src={department.image}
              alt={`Ojas Hospital ${department.name} Department and specialists in Ahmedabad`}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="space-y-8 text-slate-700">
            {/* Section 1: Overview */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-maroon-700" />
                What is {department.name} Care at Ojas Hospital?
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The <strong>{department.name} Department</strong> at Ojas Multispeciality Hospital delivers comprehensive diagnostic, therapeutic, and clinical care to patients in Rakhiyal and across Ahmedabad. Located at Rakhiyal Cross Road, Dynasore Circle, our department is equipped with state-of-the-art medical technology, dedicated diagnostic testing facilities, modern operation theatres, and continuous monitoring beds.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {department.fullDescription || department.description}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our clinical protocols follow rigorous national quality benchmarks, ensuring every patient receives precise diagnostic assessments, individual care plans, and comprehensive post-procedure follow-ups.
              </p>
            </section>

            {/* Section 2: Features & Conditions */}
            {department.features && department.features.length > 0 && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-maroon-700" />
                  Clinical Focus Areas & Key Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {department.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 3: Internal Doctor Linkage */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-maroon-700" />
                Our {department.name} Specialists
              </h2>
              {departmentDoctors.length > 0 ? (
                <>
                  <p className="text-sm text-slate-600 mb-6">
                    Consult our experienced doctors practicing in the {department.name} Department at Ojas Hospital, Rakhiyal, Ahmedabad:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {departmentDoctors.map((doc) => (
                      <div key={doc.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-maroon-300 transition-all">
                        <div>
                          <h3 className="font-bold text-slate-900 text-base">{doc.name}</h3>
                          <p className="text-xs text-slate-600 font-medium">{doc.title} ({doc.qualifications})</p>
                          <p className="text-xs text-amber-700 font-semibold mt-1">{doc.experienceYears}+ Years Clinical Experience</p>
                          {doc.branch && (
                            <div className="mt-2 text-[11px] text-maroon-900 bg-maroon-50 border border-maroon-200 px-2.5 py-1.5 rounded-lg leading-snug">
                              <span className="font-bold">📍 Branch:</span> {doc.branch}
                            </div>
                          )}
                        </div>
                        <Link
                          href={`/doctors/${doc.id}`}
                          className="px-3 py-1.5 rounded-xl bg-maroon-700 text-white text-xs font-semibold hover:bg-maroon-800 transition-colors shrink-0 text-center"
                        >
                          View Profile →
                        </Link>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-sm text-slate-700 mb-3">
                    The {department.name} Department at Ojas Hospital is managed by experienced visiting super-specialist consultants and senior resident physicians.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${EMERGENCY_INFO.hotline.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-2 bg-maroon-700 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-maroon-800 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call for Consultant Schedule: {EMERGENCY_INFO.hotline}
                    </a>
                    <Link
                      href="/doctors"
                      className="inline-flex items-center gap-2 bg-white text-maroon-700 border border-maroon-200 px-4 py-2 rounded-xl text-xs font-semibold hover:bg-maroon-50 transition-colors"
                    >
                      View All Hospital Doctors →
                    </Link>
                  </div>
                </div>
              )}
            </section>

            {/* Section 4: When to Consult */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-maroon-700" />
                When to Seek {department.name} Medical Attention
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
                  <h3 className="font-bold text-amber-900 text-sm mb-2">Routine OPD Consultations</h3>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li>• Regular checkups, preventive screenings, and routine diagnostics</li>
                    <li>• Chronic symptom monitoring and medication adjustments</li>
                    <li>• Second opinions and pre-surgical medical assessments</li>
                    <li>• Follow-up visits after hospital procedures or discharge</li>
                  </ul>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100">
                  <h3 className="font-bold text-rose-950 text-sm mb-2">24/7 Emergency & ICU Care</h3>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li>• Sudden, severe, or acute symptoms requiring urgent stabilization</li>
                    <li>• Trauma, acute pain, bleeding, or breathing difficulty</li>
                    <li>• Rapidly deteriorating clinical vital signs</li>
                    <li>• Immediate casualty admission at Ojas Hospital (Available 24/7)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: FAQs */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-maroon-700" />
                Frequently Asked Questions — {department.name}
              </h2>
              <div className="space-y-4">
                {deptFaqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{faq.question}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Appointments CTA */}
            <section className="bg-maroon-900 text-white rounded-3xl p-6 sm:p-8 shadow-soft-md">
              <h2 className="text-2xl font-bold mb-2">Book a Consultation with {department.name}</h2>
              <p className="text-cream/80 text-sm mb-6">
                Consult with our specialists at Ojas Hospital, Rakhiyal Cross Road, Dynasore Circle, Rakhiyal, Ahmedabad. Emergency services available 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${EMERGENCY_INFO.hotline.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 bg-white text-maroon-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-cream transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Helpline: {EMERGENCY_INFO.hotline}
                </a>
                <a
                  href={`https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20appointments%20in%20the%20${encodeURIComponent(department.name)}%20Department.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp Desk
                </a>
              </div>
            </section>

            {/* Section 7: Other Departments Cross-Links */}
            {otherDepartments.length > 0 && (
              <section className="bg-slate-100/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Explore Other Clinical Departments
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {otherDepartments.map((dept) => (
                    <Link
                      key={dept.id}
                      href={`/departments/${dept.id}`}
                      className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-maroon-300 hover:shadow-md transition-all block group"
                    >
                      <h3 className="font-bold text-slate-900 text-sm group-hover:text-maroon-700 transition-colors">
                        {dept.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">{dept.description}</p>
                      <span className="text-[11px] font-semibold text-maroon-600 mt-2 block">
                        Explore Department →
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
