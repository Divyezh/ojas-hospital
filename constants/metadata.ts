import { Metadata } from 'next';
import { DEPARTMENTS, DOCTORS, FAQ_ITEMS, EMERGENCY_INFO } from './hospitalData';

export const SITE_CONFIG = {
  name: "Ojas Hospital",
  officialName: "Ojas Hospital Multispeciality",
  shortName: "Ojas",
  description: "Ojas Hospital Multispeciality is a trusted multispeciality hospital in Rakhial, Ahmedabad, Gujarat, India offering 24/7 emergency care, experienced general physicians, surgeons, specialists, diagnostics, and surgery.",
  url: "https://www.ojashospitalmultispecility.com",
  logo: "https://www.ojashospitalmultispecility.com/logo.png",
  favicon: "https://www.ojashospitalmultispecility.com/favicon.png",
  ogImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
  telephone: EMERGENCY_INFO.hotline,
  email: "ojashospitalo123@gmail.com",
  address: {
    street: "Rakhiyal Cross Road, Dynasore Circle",
    suite: "Rakhiyal",
    city: "Ahmedabad",
    state: "Gujarat",
    zip: "380021",
    country: "India"
  },
  geo: {
    latitude: "23.0236317",
    longitude: "72.6198512"
  },
  sameAs: [
    "https://www.google.com/maps/place/Ojas+Hospital/@23.0236317,72.6198512,17z",
    "https://wa.me/917574840735",
    "https://www.linkedin.com/in/dr-ayush-soni-2134703a7/"
  ]
};

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: "Ojas Hospital Multispeciality | Hospital in Rakhial, Ahmedabad",
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png' },
    ],
  },
  keywords: [
    "Ojas Hospital",
    "Ojas Hospital Multispeciality",
    "Hospital in Ahmedabad",
    "Hospital in Rakhial",
    "General Physician Ahmedabad",
    "General Surgeon Ahmedabad",
    "Emergency Hospital Ahmedabad",
    "Multispeciality Hospital Ahmedabad",
    "Skin and Cosmetology Ahmedabad",
    "Dermatologist Rakhial",
    "Ayurvedic Doctor Ahmedabad",
    "Orthopedic Surgeon Ahmedabad",
    "Pediatrician Ahmedabad",
    "ENT Specialist Ahmedabad",
    "Critical Care Medicine Ahmedabad",
    "Homeopathic Doctor Ahmedabad",
    "Physiotherapy Clinic Ahmedabad",
    "Unani Doctor Ahmedabad",
    "24/7 Emergency Care Ahmedabad"
  ],
  authors: [{ name: "Ojas Multispeciality Hospital Medical Board" }],
  creator: SITE_CONFIG.officialName,
  publisher: SITE_CONFIG.officialName,
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
    title: SITE_CONFIG.officialName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.officialName,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.officialName} Ahmedabad`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.officialName,
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
    '@type': ['Hospital', 'MedicalOrganization', 'Organization', 'LocalBusiness'],
    '@id': `${SITE_CONFIG.url}/#hospital`,
    'name': SITE_CONFIG.officialName,
    'legalName': SITE_CONFIG.officialName,
    'alternateName': SITE_CONFIG.name,
    'description': SITE_CONFIG.description,
    'url': SITE_CONFIG.url,
    'logo': `${SITE_CONFIG.url}/logo.png`,
    'telephone': SITE_CONFIG.telephone,
    'email': SITE_CONFIG.email,
    'image': SITE_CONFIG.ogImage,
    'sameAs': SITE_CONFIG.sameAs,
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
    'medicalStaff': DOCTORS.map(doc => ({
      '@type': 'Physician',
      '@id': `${SITE_CONFIG.url}/doctors/${doc.id}#doctor`,
      'name': doc.name,
      'jobTitle': doc.title,
      'medicalSpecialty': doc.departmentName
    })),
    'availableService': [
      ...DEPARTMENTS.map(d => ({
        '@type': 'MedicalProcedure',
        'name': d.name,
        'description': d.description,
        'url': `${SITE_CONFIG.url}/departments/${d.id}`
      })),
      {
        '@type': 'MedicalClinic',
        'name': '24/7 Emergency & Trauma Care',
        'medicalSpecialty': 'Emergency Care',
        'description': 'Round-the-clock emergency medical services, trauma care, and casualty response.'
      }
    ]
  };
}

export function generatePhysicianJsonLd() {
  return DOCTORS.map(doc => ({
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_CONFIG.url}/doctors/${doc.id}#doctor`,
    'name': doc.name,
    'jobTitle': doc.title,
    'medicalSpecialty': doc.departmentName,
    'url': `${SITE_CONFIG.url}/doctors/${doc.id}`,
    'telephone': SITE_CONFIG.telephone,
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
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.suite}`,
      'addressLocality': SITE_CONFIG.address.city,
      'addressRegion': SITE_CONFIG.address.state,
      'postalCode': SITE_CONFIG.address.zip,
      'addressCountry': SITE_CONFIG.address.country
    },
    'image': doc.image ? `${SITE_CONFIG.url}${doc.image}` : SITE_CONFIG.ogImage,
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

