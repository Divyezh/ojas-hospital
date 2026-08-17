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
    title: 'Public Forum Greeting with Union Minister',
    date: '2023',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni being recognized and receiving honours from Union Home Minister Amit Shah for his leadership in public healthcare and ayurvedic medical councils.',
    category: 'Community Event',
    image: '/ojas-hospital-event-3.webp',
    isUpcoming: false,
  },
  {
    id: 'e9',
    title: 'Shri Ambedkar Award Felicitation by Chief Minister',
    date: '2023',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni receiving blessings and greeting Chief Minister of Gujarat, Bhupendrabhai Patel, during the Dr. Ambedkar Samaj Sammelan and award presentation.',
    category: 'Community Event',
    image: '/ojas-hospital-event-4.webp',
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
    title: 'Lamp Lighting Ceremony at Doctors & Delegates Meet',
    date: '2025',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni lighting the traditional lamp (Deep Pragatya) to inaugurate the multi-specialty clinical training and delegates meet at the Welcome Hotel by ITC Hotels.',
    category: 'Community Event',
    image: '/ojas-hospital-event-7.webp',
    isUpcoming: false,
  },
  {
    id: 'e13',
    title: 'Felicitation of Chief Minister Bhupendrabhai Patel',
    date: '2023',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni greeting and presenting flowers to Chief Minister Bhupendrabhai Patel at a public welfare and community program.',
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
    title: 'BJP Gujarat State President Shri Jagdishbhai Vishwakarma',
    date: '2025',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni greeting BJP Gujarat State President Shri Jagdishbhai Vishwakarma during a commemorative event honoring social leadership and healthcare welfare.',
    category: 'Community Event',
    image: '/ojas-hospital-event-10.webp',
    isUpcoming: false,
  },
  {
    id: 'e16',
    title: 'GAMA Medical Conference Guest Welcoming',
    date: '2025',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni welcoming key medical speakers and research delegates to the annual integrated medicine symposium.',
    category: 'Community Event',
    image: '/ojas-hospital-event-11.webp',
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
    title: 'National Summit Greeting with PM Narendra Modi',
    date: '2014',
    location: 'Gandhinagar, Gujarat',
    description: 'Dr. Hasmukh Soni shaking hands with Narendra Modi at the National Ayurveda Summit and Expo during discussions on strengthening the traditional medical systems in Gujarat.',
    category: 'Community Event',
    image: '/ojas-hospital-event-13.webp',
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
    title: 'Public Forum Greeting with Union Minister',
    date: '2024',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni bowing in respect and greeting Union Home Minister Amit Shah at a community forum for health development.',
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
    id: 'e22',
    title: 'State Public Representative Forum Meet',
    date: '2022',
    location: 'Ahmedabad, Gujarat',
    description: 'Dr. Hasmukh Soni participating in a state-level representative meeting at a public forum focused on regional developmental works.',
    category: 'Community Event',
    image: '/ojas-hospital-event-18.webp',
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
    description: 'View of the audience of over 2,000 medical practitioners and delegates listening to plenary talks during the National Ayurveda Summit.',
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

