import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DEPARTMENTS, EMERGENCY_INFO } from '@/constants/hospitalData';
import { SITE_CONFIG } from '@/constants/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

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

  const title = `${department.name} Specialist in Ahmedabad | Ojas Hospital Rakhial`;
  const description = `Looking for the best ${department.name} in Ahmedabad? Visit Ojas Multispeciality Hospital in Rakhial. We provide advanced ${department.name.toLowerCase()} treatments with top specialists.`;

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
          url: department.image,
          width: 1200,
          height: 630,
          alt: `Ojas Hospital ${department.name} Department`,
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

  const medicalClinicSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    'name': `Ojas Hospital - ${department.name} Department`,
    'image': department.image,
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
      'latitude': '23.0238',
      'longitude': '72.6171'
    },
    'medicalSpecialty': department.name,
    'parentOrganization': {
      '@type': 'Hospital',
      'name': 'Ojas Hospital',
      'url': SITE_CONFIG.url,
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
        'name': 'Departments',
        'item': `${SITE_CONFIG.url}/#departments`
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
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="grow pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Visual */}
          <nav className="text-sm mb-6 text-slate-500">
            <Link href="/" className="hover:text-maroon-700">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/#departments" className="hover:text-maroon-700">Departments</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-800 font-medium">{department.name}</span>
          </nav>

          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              <span className="text-maroon-700">{department.name}</span> Department at Ojas Hospital
            </h1>
            <p className="text-xl text-slate-600">
              Leading {department.name} specialists in Rakhial, Ahmedabad providing comprehensive care.
            </p>
          </header>

          <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={department.image}
              alt={`Ojas Hospital ${department.name} department and specialists in Ahmedabad`}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none text-slate-700">
            <h2>About Our {department.name} Department in Ahmedabad</h2>
            <p>
              Welcome to the <strong>{department.name} Department</strong> at Ojas Multispeciality Hospital, located in the heart of Rakhial, Ahmedabad. As one of the premier healthcare providers in the region, we are committed to delivering world-class medical services and compassionate care to our patients. Our facility is equipped with state-of-the-art infrastructure and advanced diagnostic technology to accurately diagnose and treat a wide spectrum of health conditions.
            </p>
            <p>
              Finding the <strong>best {department.name.toLowerCase()} doctor in Ahmedabad</strong> is a priority for many families, and at Ojas Hospital, we bring together highly experienced specialists, dedicated nursing staff, and a multidisciplinary approach to ensure the best possible clinical outcomes. We understand that medical emergencies can happen at any time, which is why our <strong>Emergency Hospital in Ahmedabad</strong> operates 24 hours a day, providing immediate and expert interventions for critical cases.
            </p>
            <h3>Comprehensive {department.name} Treatments</h3>
            <p>
              Our specialists are trained in the latest therapeutic and surgical methodologies. We emphasize a holistic approach to patient care, from initial consultation and accurate diagnosis to personalized treatment plans and post-operative rehabilitation. {department.description} Whether you are seeking a routine check-up, managing a chronic condition, or require complex surgical intervention, our experts are here to guide you every step of the way. 
            </p>
            <p>
              As a leading <strong>Multispeciality Hospital in Ahmedabad</strong>, Ojas Hospital provides seamless coordination between different departments. If your condition requires cross-specialty expertise, our {department.name} team works closely with our diagnostic, pathology, and intensive care units to offer a unified, comprehensive healthcare experience. Our modern patient suites and dedicated staff ensure that your stay is comfortable and conducive to a rapid recovery.
            </p>
            <h3>Why Choose Ojas Hospital for {department.name}?</h3>
            <ul>
              <li><strong>Experienced Specialists:</strong> Our team comprises some of the most respected and skilled doctors in the field.</li>
              <li><strong>Advanced Technology:</strong> We invest in the latest medical equipment to ensure precise diagnostics and effective treatments.</li>
              <li><strong>24/7 Care:</strong> With our round-the-clock emergency services, you can trust us to be there when you need us the most.</li>
              <li><strong>Patient-Centric Approach:</strong> We believe in empathetic care, ensuring that every patient and their family are well-informed and comfortable.</li>
            </ul>
            <p>
              If you or a loved one are looking for expert {department.name.toLowerCase()} care, do not hesitate to reach out. At Ojas Hospital, your health and well-being are our highest priority. 
            </p>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="text-xl font-bold mb-2">Book an Appointment Today</h4>
              <p className="mb-4">Schedule a consultation with our {department.name} experts in Rakhial, Ahmedabad.</p>
              <a href="https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20appointments%20and%20medical%20services." target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
