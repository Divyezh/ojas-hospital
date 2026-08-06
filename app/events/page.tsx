import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import Link from 'next/link';
import { EventsClient, HospitalEvent } from './EventsClient';

export const metadata: Metadata = {
  title: 'Events & Medical Camps — Ojas Hospital Ahmedabad',
  description: 'Stay updated on upcoming health camps, medical campaigns, and community events organized by Ojas Multispeciality Hospital in Rakhial, Ahmedabad.',
  alternates: { canonical: `${SITE_CONFIG.url}/events` },
};

// Seeded from GALLERY_ITEMS — real camps the hospital has actually run
const EVENTS: HospitalEvent[] = [
  {
    id: 'e1',
    title: 'Community Free Health Camp',
    date: '2024',
    location: 'Rakhial, Ahmedabad',
    description: 'A free community health camp providing basic health checkups, blood pressure monitoring, and doctor consultations to residents of Rakhial and surrounding areas.',
    category: 'Health Camp',
    image: '/camp1.webp',
    isUpcoming: false,
  },
  {
    id: 'e2',
    title: 'Free Health Checkup Drive',
    date: '2024',
    location: 'Rakhial, Ahmedabad',
    description: 'Comprehensive free health screening camp offering glucose testing, BMI checks, and general physician consultations for the local community.',
    category: 'Health Camp',
    image: '/camp2.webp',
    isUpcoming: false,
  },
  {
    id: 'e3',
    title: 'Health Awareness Campaign',
    date: '2023',
    location: 'Ahmedabad',
    description: 'Community awareness drive focusing on preventive healthcare, hygiene, nutrition education, and early disease detection.',
    category: 'Awareness Drive',
    image: '/camp3.webp',
    isUpcoming: false,
  },
  {
    id: 'e4',
    title: 'Medical Community Outreach Camp',
    date: '2023',
    location: 'Rakhial, Ahmedabad',
    description: 'Dedicated outreach program providing healthcare access to underserved communities, including free medicines and doctor consultations.',
    category: 'Community Event',
    image: '/camp4.webp',
    isUpcoming: false,
  },
  {
    id: 'e5',
    title: 'Defeat Diabetes Campaign Seminar',
    date: '2026',
    location: 'Ahmedabad',
    description: 'Collaborative initiative and public seminar organized in partnership with GAMA (All Gujarat Ayurved Medical Association) to launch the regional diabetes screening drives.',
    category: 'Medical Campaign',
    image: '/event.webp',
    isUpcoming: false,
  },
  {
    id: 'e6',
    title: 'GAMA & Ojas Hospital Collaboration Conference',
    date: '2026',
    location: 'Rakhial, Ahmedabad',
    description: 'A coordination and training conference with the executive board of the All Gujarat Ayurved Medical Association (GAMA) to establish standard protocols for public camps.',
    category: 'Community Event',
    image: '/event1.webp',
    isUpcoming: false,
  },
];

export default function EventsPage() {
  return (
    <>
      <div className="pt-28 pb-6 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Events</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Events & <span className="text-gold">Medical Camps</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          Health camps, community campaigns, and awareness drives organized by Ojas Hospital for public welfare.
        </p>
      </div>

      <EventsClient events={EVENTS} />
    </>
  );
}

