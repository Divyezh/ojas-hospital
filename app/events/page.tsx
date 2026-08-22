import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import Link from 'next/link';
import { EventsClient, HospitalEvent } from './EventsClient';

export const metadata: Metadata = {
  title: 'Events & Medical Camps — Ojas Hospital Ahmedabad',
  description: 'Stay updated on upcoming health camps, free diabetes screening drives, medical campaigns, and community health events organized by Ojas Multispeciality Hospital in Ahmedabad.',
  keywords: [
    'Free Diabetes Camp Ahmedabad',
    'Free Medical Camp Rakhial',
    'Free BP and Sugar Checkup Camp Bapunagar',
    'Ojas Hospital Health Camps',
    'Community Medical Events Ahmedabad',
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/events` },
  openGraph: {
    title: 'Events & Free Medical Camps — Ojas Hospital Ahmedabad',
    description: 'Upcoming Free Defeat Diabetes & Blood Pressure Diagnosis & Treatment Camp by Ojas Hospital in Bapunagar, Ahmedabad.',
    url: `${SITE_CONFIG.url}/events`,
    images: [
      {
        url: '/free-diabetes-camp-ojas-hospital.webp',
        width: 1200,
        height: 1800,
        alt: 'Free Defeat Diabetes and Blood Pressure Checkup Camp - Ojas Hospital Ahmedabad',
      },
    ],
  },
};

// Seeded from GALLERY_ITEMS — real camps the hospital has actually run
const EVENTS: HospitalEvent[] = [
  {
    id: 'e-upcoming-diabetes-2026',
    title: 'Free Defeat Diabetes & Blood Pressure Diagnosis & Treatment Camp',
    date: '02-09-2026 (Wednesday) | 06:00 PM – 09:00 PM',
    location: 'Ojas Clinic, Gandhi Chowk, Old Post Office, Juna Bapunagar, Ahmedabad - 380023',
    description: 'Free community health screening camp organized by Ojas Hospital in joint collaboration with Dr. Hasmukh Soni, Dr. Paras Jain, and Dr. Jaydeep Parmar. Offering free Blood Sugar checkup, Blood Pressure (BP) testing, and specialist medical guidance. Contact: 93165 59726 / 75748 40735.',
    category: 'Health Camp',
    image: '/free-diabetes-camp-ojas-hospital.webp',
    imagePosition: 'object-top',
    isUpcoming: true,
  },
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
    title: 'Medical Community Outreach Camp With Bapunagar MLA Shri Dineshsinh Kushwahji',
    date: '2023',
    location: 'Rakhial, Ahmedabad',
    description: 'Dedicated outreach program providing healthcare access to underserved communities with Bapunagar MLA Shri Dineshsinh Kushwahji, including free medicines and doctor consultations.',
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
  {
    id: 'e7',
    title: 'Dignitary Meet with Gujarat Home Minister',
    date: '2024',
    location: 'Gandhinagar, Gujarat',
    description: 'Dr. Hasmukh Soni in an official meet and discussion with Gujarat Home Minister Harsh Sanghavi regarding community medical checkup drives and public healthcare support.',
    category: 'Community Event',
    image: '/ojas-hospital-event-2.webp',
    isUpcoming: false,
  },
  {
    id: 'e8',
    title: 'Well Wish Social Meeting with Home minister of India, Shri Amitbhai Shah',
    date: '2023',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni in a well-wish social meeting with Union Home Minister Shri Amitbhai Shah.',
    category: 'Community Event',
    image: '/ojas-hospital-event-3.webp',
    isUpcoming: false,
  },
  {
    id: 'e9',
    title: 'Honouring Chief Minister Shri Bhupendrabhai Patel Sir During Shri Babasaheb Ambedakarji janm jayanti',
    date: '2023',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni honouring Chief Minister Shri Bhupendrabhai Patel Sir during Shri Babasaheb Ambedkarji Janm Jayanti.',
    category: 'Community Event',
    image: '/ojas-hospital-event-4.webp',
    imagePosition: 'object-top',
    isUpcoming: false,
  },
  {
    id: 'e10',
    title: 'Integrated Medicine CME Seminar and Felicitation',
    date: '2025',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni presenting an appreciation memento and welcome bouquet to guest medical practitioners at the GAMA and Sushrusha Hospital collaborative clinical conference.',
    category: 'Medical Campaign',
    image: '/ojas-hospital-event-5.webp',
    imagePosition: 'object-top',
    isUpcoming: false,
  },
  {
    id: 'e11',
    title: 'Community Leadership Meet with Chief Minister',
    date: '2020',
    location: 'Gandhinagar, Gujarat',
    description: 'Dr. Hasmukh Soni and representatives of Gujarat Ayurvedic Board and community leaders in a cordial consultative meeting with Chief Minister Vijay Rupani regarding healthcare initiatives.',
    category: 'Community Event',
    image: '/ojas-hospital-event-6.webp',
    isUpcoming: false,
  },
  {
    id: 'e12',
    title: 'Lamp Lighting with BJP Ahmedabad President Shri Prerakbhai Shah Sir',
    date: '2025',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni lighting the traditional lamp (Deep Pragatya) with BJP Ahmedabad President Shri Prerakbhai Shah Sir to inaugurate the delegates meet.',
    category: 'Community Event',
    image: '/ojas-hospital-event-7.webp',
    isUpcoming: false,
  },
  {
    id: 'e13',
    title: 'Felicitation of Chief Minister Bhupendrabhai Patel',
    date: '2023',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni greeting and presenting flowers to Chief Minister Bhupendrabhai Patel and BJP State President Shri Jagdishbhai Vishvkarma Sir at a public welfare and community program.',
    category: 'Community Event',
    image: '/ojas-hospital-event-8.webp',
    isUpcoming: false,
  },
  {
    id: 'e14',
    title: 'Welcoming of Government Ayurvedic Officer',
    date: '2024',
    location: 'Gandhinagar, Gujarat',
    description: 'Dr. Hasmukh Soni and executive members of GAMA presenting a Lord Dhanvantari idol to a newly appointed health and administration officer at the department headquarters.',
    category: 'Community Event',
    image: '/ojas-hospital-event-9.webp',
    isUpcoming: false,
  },
  {
    id: 'e15',
    title: 'Honouring Gujarat Chief Minister Shri Bhupendrabhai Patel',
    date: '2025',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni honouring Gujarat Chief Minister Shri Bhupendrabhai Patel during a commemorative event honoring social leadership and healthcare welfare.',
    category: 'Community Event',
    image: '/ojas-hospital-event-10.webp',
    imagePosition: 'object-top',
    isUpcoming: false,
  },
  {
    id: 'e16',
    title: 'GAMA Medical Conference Guest Welcoming With BJP Ahmedabad President Shri Prerakbhai Shah Sir',
    date: '2025',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni welcoming BJP Ahmedabad President Shri Prerakbhai Shah Sir, key medical speakers, and research delegates to the annual integrated medicine symposium.',
    category: 'Community Event',
    image: '/ojas-hospital-event-11.webp',
    imagePosition: 'object-top',
    isUpcoming: false,
  },
  {
    id: 'e17',
    title: 'Doctors & Delegates Conference Reception',
    date: '2025',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni greeting other medical association members at the reception of the GAMA annual integrated medical practices training conference.',
    category: 'Community Event',
    image: '/ojas-hospital-event-12.webp',
    isUpcoming: false,
  },
  {
    id: 'e18',
    title: 'National Summit Greeting with Prime Minister Shri Narendrabhai Modi Sir',
    date: '2014',
    location: 'Gandhinagar, Gujarat',
    description: 'Dr. Hasmukh Soni shaking hands with Prime Minister Shri Narendrabhai Modi Sir at the National Ayurveda Summit and Expo during discussions on strengthening the traditional medical systems in Gujarat.',
    category: 'Community Event',
    image: '/ojas-hospital-event-13.webp',
    imagePosition: 'object-top',
    isUpcoming: false,
  },
  {
    id: 'e19',
    title: 'International Seminar Honour at Parul University',
    date: '2025',
    location: 'Vadodara, Gujarat',
    description: "Dr. Hasmukh Soni presenting an appreciation plaque to international research scholars and speakers at Parul University's global Ayurveda conference (Ayushmarsha).",
    category: 'Community Event',
    image: '/ojas-hospital-event-14.webp',
    isUpcoming: false,
  },
  {
    id: 'e20',
    title: 'Public Forum Greeting with Union Minister Shri Amitbhai Shah',
    date: '2024',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni bowing in respect and greeting Union Home Minister Shri Amitbhai Shah at a community forum for health development.',
    category: 'Community Event',
    image: '/ojas-hospital-event-16.webp',
    isUpcoming: false,
  },
  {
    id: 'e21',
    title: 'Keynote Speech at National Summit on Ayurveda',
    date: '2017',
    location: 'Mahatma Mandir, Gandhinagar',
    description: 'Dr. Hasmukh Soni delivering a keynote speech at the podium of the National Summit & Expo on Ayurveda organized by Central Council of Indian Medicine (CCIM).',
    category: 'Community Event',
    image: '/ojas-hospital-event-17.webp',
    isUpcoming: false,
  },
  {
    id: 'e23',
    title: 'Consultative Meeting with C.R. Patil',
    date: '2022',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni meeting BJP Gujarat Pradesh President C.R. Patil during a consultative program regarding public welfare and Ayurveda development.',
    category: 'Community Event',
    image: '/ojas-hospital-event-19.webp',
    isUpcoming: false,
  },
  {
    id: 'e24',
    title: 'Amazing Ayurveda Exhibition Pavilion Launch',
    date: '2017',
    location: 'Mahatma Mandir, Gandhinagar',
    description: 'Dr. Hasmukh Soni and executive members of Gujarat Ayurveda Board posing at the "Amazing Ayurveda / The Ayurveda Shop" booth during the National Ayush Expo.',
    category: 'Medical Campaign',
    image: '/ojas-hospital-event-20.webp',
    isUpcoming: false,
  },
  {
    id: 'e25',
    title: 'Delegate Networking at National Ayurveda Expo',
    date: '2017',
    location: 'Mahatma Mandir, Gandhinagar',
    description: 'Dr. Hasmukh Soni interacting and networking with medical delegates, researchers, and pharmaceutical experts at the National Expo.',
    category: 'Community Event',
    image: '/ojas-hospital-event-21.webp',
    isUpcoming: false,
  },
  {
    id: 'e26',
    title: 'Plenary Session of National Summit & Expo',
    date: '2017',
    location: 'Mahatma Mandir, Gandhinagar',
    description: 'View of the audience of over 10,000 medical practitioners and delegates listening to plenary talks during the National Ayurveda Summit.',
    category: 'Community Event',
    image: '/ojas-hospital-event-22.webp',
    isUpcoming: false,
  },
  {
    id: 'e27',
    title: 'National Summit Organizing Committee Photo',
    date: '2017',
    location: 'Mahatma Mandir, Gandhinagar',
    description: 'Dr. Hasmukh Soni standing with the core organizing committee and delegates of the National Summit & Expo on Ayurveda.',
    category: 'Community Event',
    image: '/ojas-hospital-event-23.webp',
    isUpcoming: false,
  },
];

export default function EventsPage() {
  const eventsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': EVENTS.map((ev, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Event',
        'name': ev.title,
        'description': ev.description,
        'image': `${SITE_CONFIG.url}${ev.image}`,
        'eventStatus': 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
        'location': {
          '@type': 'Place',
          'name': 'Ojas Hospital / Clinic',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Ahmedabad',
            'addressRegion': 'Gujarat',
            'addressCountry': 'IN',
          },
        },
        'organizer': {
          '@type': 'Hospital',
          'name': 'Ojas Multispeciality Hospital',
          'url': SITE_CONFIG.url,
        },
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'INR',
          'availability': 'https://schema.org/InStock',
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchema) }}
      />
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

