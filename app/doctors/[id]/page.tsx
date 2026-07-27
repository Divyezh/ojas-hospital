import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DOCTORS } from '@/constants/hospitalData';
import { SITE_CONFIG } from '@/constants/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

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

  const title = `${doctor.name} - ${doctor.departmentName} in Ahmedabad | Ojas Hospital`;
  const description = `Consult ${doctor.name}, a leading ${doctor.title} specializing in ${doctor.departmentName} at Ojas Hospital, Rakhial, Ahmedabad. Book your appointment today.`;

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
          url: doctor.image || SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: `${doctor.name} at Ojas Hospital`,
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
    'name': doctor.name,
    'jobTitle': doctor.title,
    'medicalSpecialty': doctor.departmentName,
    'worksFor': {
      '@type': 'Hospital',
      'name': 'Ojas Hospital',
      'url': SITE_CONFIG.url
    },
    'image': doctor.image || SITE_CONFIG.ogImage,
    'description': doctor.bio,
    'url': `${SITE_CONFIG.url}/doctors/${doctor.id}`,
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
        'item': `${SITE_CONFIG.url}/#doctors`
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
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="grow pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-6 text-slate-500">
            <Link href="/" className="hover:text-maroon-700">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/#doctors" className="hover:text-maroon-700">Doctors</Link>
            <span className="mx-2">›</span>
            <span className="text-slate-800 font-medium">{doctor.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-full md:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
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
            
            <div className="w-full md:w-2/3">
              <header className="mb-6">
                <span className="inline-block px-3 py-1 bg-maroon-50 text-maroon-700 rounded-full text-sm font-semibold mb-3">
                  {doctor.departmentName}
                </span>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
                  {doctor.name}
                </h1>
                <p className="text-xl text-slate-600 font-medium mb-4">
                  {doctor.title}
                </p>
                
                <div className="flex items-center gap-2 mb-6 text-sm text-slate-500">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < doctor.rating ? 'fill-current' : 'text-slate-300'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span>({doctor.reviewCount} Reviews)</span>
                </div>
              </header>

              <div className="prose prose-lg max-w-none text-slate-700">
                <h2>About {doctor.name}</h2>
                <p>{doctor.bio}</p>
                <p>
                  As a leading <strong>{doctor.departmentName} specialist in Ahmedabad</strong>, {doctor.name} is dedicated to providing personalized and compassionate care. Practicing at Ojas Multispeciality Hospital in Rakhial, the doctor leverages advanced diagnostic and therapeutic techniques to ensure optimal health outcomes.
                </p>
                <p>
                  Whether you are seeking a routine consultation, second opinion, or specialized medical intervention, you can trust {doctor.name}'s extensive clinical experience.
                </p>

                <div className="mt-8">
                  <a href="tel:+918980331402" className="inline-flex items-center gap-2 bg-maroon-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-maroon-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Call Dr. Ayush: +91 89803 31402
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
