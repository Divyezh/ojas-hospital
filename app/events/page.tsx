import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, MapPin, Tag, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events & Medical Camps — Ojas Hospital Ahmedabad',
  description: 'Stay updated on upcoming health camps, medical campaigns, and community events organized by Ojas Multispeciality Hospital in Rakhial, Ahmedabad.',
  alternates: { canonical: `${SITE_CONFIG.url}/events` },
};

interface HospitalEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: 'Health Camp' | 'Medical Campaign' | 'Awareness Drive' | 'Vaccination Drive' | 'Community Event';
  image: string;
  isUpcoming: boolean;
}

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

const categoryColors: Record<HospitalEvent['category'], string> = {
  'Health Camp': 'bg-emerald-100 text-emerald-700',
  'Medical Campaign': 'bg-blue-100 text-blue-700',
  'Awareness Drive': 'bg-amber-100 text-amber-700',
  'Vaccination Drive': 'bg-purple-100 text-purple-700',
  'Community Event': 'bg-rose-100 text-rose-700',
};

function EventCard({ event }: { event: HospitalEvent }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-maroon-100 shadow-soft-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={event.image} alt={event.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold ${categoryColors[event.category]}`}>
          {event.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-charcoal mb-2 leading-tight">{event.title}</h3>
        <div className="flex flex-col gap-1 mb-3 text-xs text-charcoal/60">
          <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5 text-maroon-600" />{event.date}</span>
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-maroon-600" />{event.location}</span>
        </div>
        <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{event.description}</p>
        <a
          href="https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20I%20would%20like%20to%20know%20more%20about%20your%20upcoming%20health%20camps."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-center py-2.5 rounded-xl bg-maroon-700 hover:bg-maroon-800 text-white text-xs font-semibold transition-colors"
        >
          Register Interest via WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const upcoming = EVENTS.filter((e) => e.isUpcoming);
  const past = EVENTS.filter((e) => !e.isUpcoming);

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

      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Upcoming Events */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="h-5 w-5 text-maroon-700" />
              <h2 className="text-2xl font-extrabold text-charcoal">Upcoming Events</h2>
            </div>
            {upcoming.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-maroon-200 bg-cream p-12 text-center">
                <CalendarDays className="h-10 w-10 text-maroon-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-charcoal mb-2">No upcoming events at this time</h3>
                <p className="text-sm text-charcoal/60 mb-6">
                  Check back soon — Ojas Hospital regularly organizes free health camps and community campaigns.
                  You can also follow us on WhatsApp to get notified.
                </p>
                <a
                  href="https://wa.me/917574840735?text=Hello%20Ojas%20Hospital%2C%20please%20notify%20me%20about%20upcoming%20health%20camps%20and%20events."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-maroon-700 text-white text-sm font-semibold hover:bg-maroon-800 transition-colors"
                >
                  Get Notified on WhatsApp
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcoming.map((event) => <EventCard key={event.id} event={event} />)}
              </div>
            )}
          </section>

          {/* Past Events */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Tag className="h-5 w-5 text-charcoal/50" />
              <h2 className="text-2xl font-extrabold text-charcoal">Past Events</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {past.map((event) => <EventCard key={event.id} event={event} />)}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
