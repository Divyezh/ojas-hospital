import { Metadata } from 'next';
import { DEPARTMENTS, DOCTORS, FAQ_ITEMS, EMERGENCY_INFO } from './hospitalData';

export const SITE_CONFIG = {
  name: "Ojas Hospital",
  shortName: "Ojas",
  description: "Ojas Hospital is a trusted multispeciality hospital in Rakhial, Ahmedabad offering emergency care, experienced doctors, modern diagnostics, surgery, and compassionate healthcare.",
  url: "https://ojas-hospital.in",
  ogImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
  telephone: EMERGENCY_INFO.hotline,
  email: "ojashospitalo123@gmail.com",
  address: {
    street: "Jasval Bhavan, Char Rasta",
    suite: "Rakhial",
    city: "Ahmedabad",
    state: "Gujarat",
    zip: "380021",
    country: "India"
  }
};

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: "Ojas Hospital | Multispeciality Hospital in Rakhial, Ahmedabad",
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Ojas Hospital",
    "Hospital in Ahmedabad",
    "Best Hospital in Rakhial",
    "General Physician Ahmedabad",
    "Emergency Hospital Ahmedabad",
    "Multispeciality Hospital Ahmedabad",
    "Cardiology",
    "Orthopedic",
    "Gynecology",
    "Pediatrics",
    "Laboratory",
    "ICU",
    "Emergency Care"
  ],
  authors: [{ name: "Ojas Health Institute Medical Board" }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: '@OjasHealth',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generateHospitalJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Hospital', 'MedicalOrganization', 'LocalBusiness'],
    'name': SITE_CONFIG.name,
    'description': SITE_CONFIG.description,
    'url': SITE_CONFIG.url,
    'telephone': SITE_CONFIG.telephone,
    'email': SITE_CONFIG.email,
    'image': SITE_CONFIG.ogImage,
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
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    },
    'medicalSpecialty': DEPARTMENTS.map(d => d.name),
    'availableService': [
      ...DEPARTMENTS.map(d => ({
        '@type': 'MedicalProcedure',
        'name': d.name,
        'description': d.description
      })),
      {
        '@type': 'MedicalClinic',
        'name': '24/7 Emergency & Trauma Care',
        'medicalSpecialty': 'Emergency'
      }
    ]
  };
}

export function generatePhysicianJsonLd() {
  return DOCTORS.map(doc => ({
    '@context': 'https://schema.org',
    '@type': 'Physician',
    'name': doc.name,
    'jobTitle': doc.title,
    'medicalSpecialty': doc.departmentName,
    'worksFor': {
      '@type': 'Hospital',
      'name': SITE_CONFIG.name
    },
    'image': doc.image,
    'description': doc.bio,
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': doc.rating.toString(),
      'reviewCount': doc.reviewCount.toString()
    }
  }));
}

export function generateFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQ_ITEMS.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}
