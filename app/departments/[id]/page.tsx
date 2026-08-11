import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DEPARTMENTS, DOCTORS, EMERGENCY_INFO } from '@/constants/hospitalData';
import { SITE_CONFIG } from '@/constants/metadata';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

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
  const description = `The ${department.name} Department at Ojas Hospital Multispeciality in Rakhial, Ahmedabad offers advanced treatment, experienced specialists, and 24/7 emergency care. Book a consultation.`;

  return {
    title,
    description,
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
  };
}

export default async function DepartmentPage({ params }: Props) {
  const { id } = await params;
  const department = DEPARTMENTS.find((d) => d.id === id);

  if (!department) {
    notFound();
  }

  const departmentDoctors = DOCTORS.filter((doc) => doc.departmentId === department.id);

  const deptFaqs = [
    {
      question: `What services are provided by the ${department.name} Department at Ojas Hospital?`,
      answer: `The ${department.name} Department at Ojas Hospital Multispeciality provides comprehensive diagnostics, consultations, inpatient and outpatient care, procedures, and post-treatment rehabilitation in Rakhial, Ahmedabad.`
    },
    {
      question: `Which specialists practice in the ${department.name} Department?`,
      answer: departmentDoctors.length > 0
        ? `Specialists in our ${department.name} Department include ${departmentDoctors.map(d => `${d.name} (${d.title})`).join(', ')}.`
        : `Our ${department.name} Department is led by senior medical specialists and experienced resident physicians.`
    },
    {
      question: `Does Ojas Hospital provide 24/7 emergency care for ${department.name} cases?`,
      answer: `Yes, Ojas Hospital operates a 24/7 Casualty & Emergency Department in Rakhial, Ahmedabad with round-the-clock emergency medical officers and specialists on call.`
    },
    {
      question: `How can I book an appointment with a ${department.name} specialist at Ojas Hospital?`,
      answer: `You can book an appointment by calling our 24/7 helpline at ${EMERGENCY_INFO.hotline} or via WhatsApp at +91 7574840735.`
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
    'medicalStaff': departmentDoctors.map(doc => ({
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
    'mainEntity': deptFaqs.map(faq => ({
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
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Department Entity Profile
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              <span className="text-maroon-700">{department.name}</span> Department at Ojas Hospital
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Leading {department.name.toLowerCase()} specialists and treatment services in Rakhial, Ahmedabad, Gujarat.
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
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
                What is {department.name} Care at Ojas Hospital?
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                The <strong>{department.name} Department</strong> at Ojas Multispeciality Hospital delivers comprehensive diagnostic, therapeutic, and surgical care to patients in Rakhial and across Ahmedabad. Located at Jasval Bhavan, Char Rasta, our department is equipped with modern infrastructure and clinical facilities to manage routine conditions as well as complex medical cases.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {department.fullDescription || department.description}
              </p>
            </section>

            {/* Section 2: Features & Conditions */}
            {department.features && department.features.length > 0 && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
                  Conditions We Treat & Clinical Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {department.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm font-semibold text-slate-800">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 3: Internal Doctor Linkage */}
            {departmentDoctors.length > 0 && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
                  Our {department.name} Specialists
                </h2>
                <p className="text-sm text-slate-600 mb-6">
                  Consult our experienced doctors practicing in the {department.name} Department at Ojas Hospital, Rakhial, Ahmedabad:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {departmentDoctors.map((doc) => (
                    <div key={doc.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-between hover:border-maroon-300 transition-all">
                      <div>
                        <h3 className="font-bold text-slate-900 text-base">{doc.name}</h3>
                        <p className="text-xs text-slate-600 font-medium">{doc.title}</p>
                        <p className="text-xs text-amber-700 font-semibold mt-1">{doc.experienceYears}+ Years Experience</p>
                      </div>
                      <Link
                        href={`/doctors/${doc.id}`}
                        className="px-3 py-1.5 rounded-xl bg-maroon-700 text-white text-xs font-semibold hover:bg-maroon-800 transition-colors shrink-0"
                      >
                        View Profile →
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 4: When to Consult */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
                When to Consult a {department.name} Specialist
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-maroon-700 font-bold">•</span>
                  <span>When experiencing acute or chronic symptoms relating to {department.name.toLowerCase()}.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-maroon-700 font-bold">•</span>
                  <span>For routine health evaluations, preventive screenings, or follow-up consultations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-maroon-700 font-bold">•</span>
                  <span>If recommended by a general physician for specialized diagnostic assessment or surgical intervention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-maroon-700 font-bold">•</span>
                  <span>In case of severe onset of symptoms requiring 24/7 emergency casualty evaluation.</span>
                </li>
              </ul>
            </section>

            {/* Section 5: Department FAQs */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm border border-slate-200/80">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {deptFaqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <h3 className="font-bold text-slate-900 text-sm mb-2">Q: {faq.question}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">A: {faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Appointments */}
            <section className="bg-maroon-900 text-white rounded-3xl p-6 sm:p-8 shadow-soft-md">
              <h2 className="text-2xl font-bold mb-2">Book a Consultation with {department.name}</h2>
              <p className="text-cream/80 text-sm mb-6">
                Consult with our specialists at Ojas Hospital, Jasval Bhavan, Char Rasta, Rakhial, Ahmedabad. Emergency services available 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${EMERGENCY_INFO.hotline.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 bg-white text-maroon-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-cream transition-colors"
                >
                  Call Helpline: {EMERGENCY_INFO.hotline}
                </a>
                <a
                  href={`https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20appointments%20in%20the%20${encodeURIComponent(department.name)}%20Department.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Contact on WhatsApp
                </a>
              </div>
            </section>
          </div>
        </article>
      </div>
    </>
  );
}

