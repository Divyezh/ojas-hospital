import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants/metadata';
import Link from 'next/link';
import { AwardsClient, HospitalAward } from './AwardsClient';

export const metadata: Metadata = {
  title: 'Awards & Recognition — Ojas Hospital Ahmedabad',
  description: 'Awards, certifications, and recognitions received by Ojas Multispeciality Hospital and its doctors in Rakhial, Ahmedabad.',
  alternates: { canonical: `${SITE_CONFIG.url}/awards` },
};

const AWARDS: HospitalAward[] = [
  {
    id: 'a1',
    title: 'Certificate of Appreciation',
    issuingBody: 'Gujarat Ayurvedic Medical Association (GAMA) - Rakhial Branch',
    year: '2023',
    recipient: 'Dr. Hasmukh Soni (Ojas Hospital)',
    description: 'Awarded for outstanding support, leadership, and contribution to community healthcare initiatives and Ayurveda promotion.',
    image: '/ojas-hospital-award-1.webp'
  },
  {
    id: 'a2',
    title: 'Certificate of Appreciation (Medical Coordinator)',
    issuingBody: 'Gujarat Ayurvedic Medical Association (GAMA)',
    year: '2023',
    recipient: 'Dr. Hasmukh Soni',
    description: 'Honoured for selfless services and dedication as a Medical Expert and Coordinator in various public health camps.',
    image: '/ojas-hospital-award-2.webp'
  },
  {
    id: 'a3',
    title: 'Certificate of Appreciation (Honorary Medical Officer)',
    issuingBody: 'Shri Swaminarayan Gurukul, Ahmedabad',
    year: '2023',
    recipient: 'Dr. Hasmukh Soni',
    description: 'Presented in gratitude for providing voluntary medical consultation and healthcare services during the Multi-speciality Free Medical Camp.',
    image: '/ojas-hospital-award-3.webp'
  },
  {
    id: 'a4',
    title: 'Women Power Of India "Swarnashakti" Trophy',
    issuingBody: 'Swarnashakti Swarnkar Women Foundation',
    year: '2024',
    recipient: 'Ojas Hospital',
    description: 'Awarded to Ojas Hospital and its leadership in recognition of outstanding support towards women empowerment and community healthcare.',
    image: '/ojas-hospital-award-4.webp'
  },
  {
    id: 'a5',
    title: 'Memento of Honour (Guest of Honour)',
    issuingBody: 'Khadi and Village Industries Commission (KVIC)',
    year: '2023',
    recipient: 'Dr. Hasmukh Soni',
    description: 'Presented to Dr. Hasmukh Soni as a Guest of Honour at the Swadeshi Promotion and Gandhi Commemoration event.',
    image: '/ojas-hospital-award-5.webp'
  },
  {
    id: 'a6',
    title: 'Corona Warrior Award',
    issuingBody: 'Brahmin Swarnkar Godwad Samaj (BSGS)',
    year: '2020',
    recipient: 'Dr. Hasmukh J. Soni (Ojas Hospital)',
    description: 'Felicitation for tireless services, providing medical support, food, and essentials to the needy in Rakhial and Pali district during the COVID-19 pandemic.',
    image: '/ojas-hospital-award-6.webp'
  },
  {
    id: 'a7',
    title: 'Recognition and Appreciation Trophy',
    issuingBody: 'Aamani Spaces Ltd.',
    year: '2013',
    recipient: 'Dr. Hasmukh Soni',
    description: 'Presented for outstanding guidance, medical support, and advisory services to the organization.',
    image: '/ojas-hospital-award-7.webp'
  },
  {
    id: 'a8',
    title: 'Star 2020 National Corona Warrior Certificate',
    issuingBody: 'World Record Publishing Limited, United Kingdom (Indo-UK Cultural Forum)',
    year: '2020',
    recipient: 'Dr. Hasmukh J. Soni',
    description: 'National and international recognition for outstanding contribution and serving as a silent warrior during the Corona pandemic.',
    image: '/ojas-hospital-award-8.webp'
  },
  {
    id: 'a9',
    title: 'Symposium Honour (Defeat Diabetes Initiative)',
    issuingBody: 'Dr. Prakash Kurmi, Founder of Defeat Diabetes Initiative',
    year: '2026',
    recipient: 'All Gujarat Ayurved Medical Association (GAMA)',
    description: 'Presented at the Hyatt Regency CME Symposium for valuable participation and leading regional diabetes awareness campaigns.',
    image: '/ojas-hospital-award-9.webp'
  },
  {
    id: 'a10',
    title: 'Social Leadership Recognition (સામાજીક આગેવાન)',
    issuingBody: 'Rajasthan Soni Samaj',
    year: '2021',
    recipient: 'Dr. Hasmukhbhai Soni',
    description: 'Felicitation in Ahmedabad for leadership, dedication to community development, and public healthcare welfare services.',
    image: '/ojas-hospital-award-10.webp'
  },
  {
    id: 'a11',
    title: 'Ayush India Expo Appreciation Award',
    issuingBody: 'GAMA Ayush Conference',
    year: '2024',
    recipient: 'Dr. Hasmukh Soni',
    description: 'Awarded to GAMA Chairman Dr. Hasmukh Soni for outstanding contribution to the successful organization of the Ayush India Expo.',
    image: '/ojas-hospital-award-11.webp'
  },
  {
    id: 'a12',
    title: 'Guest of Honour (Practical Ayurveda Workshop)',
    issuingBody: 'J.S. Ayurveda Mahavidyalaya & P.D. Patel Ayurveda Hospital, Nadiad',
    year: '2023',
    recipient: 'Dr. Hasmukh Soni',
    description: 'Felicitation for delivering expert lecture on practical and diagnostic principles of Ayurveda.',
    image: '/ojas-hospital-award-12.webp'
  },
  {
    id: 'a13',
    title: 'Gratitude of Respect Plaque',
    issuingBody: 'Sushrusha Hospital in association with GAMA',
    year: '2025',
    recipient: 'Dr. Hasmukh Soni',
    description: 'Presented at the Welcome Hotel by ITC Hotels for his distinguished contribution to integrated medical practices.',
    image: '/ojas-hospital-award-13.webp'
  },
  {
    id: 'a14',
    title: 'Lifetime Achievement Award',
    issuingBody: 'Ayush India Expo (5th Edition)',
    year: '2025',
    recipient: 'Dr. Hasmukh Soni',
    description: "A prestigious honor presented in recognition of Dr. Soni's decades-long dedication to medical practice, education, and Ayurveda promotion in Gujarat.",
    image: '/ojas-hospital-award-14.webp'
  },
  {
    id: 'a15',
    title: 'Memento of Honour',
    issuingBody: 'Ayurved Vyaspeeth',
    year: '2024',
    recipient: 'Dr. Hasmukh Soni',
    description: 'Awarded for exceptional leadership in promoting holistic healthcare practices and training programs.',
    image: '/ojas-hospital-award-15.webp'
  },
  {
    id: 'a16',
    title: 'CME Program Appreciation Award',
    issuingBody: 'Akhil Bhartiya Ayurved Mahasammelan',
    year: '2021',
    recipient: 'Dr. Hasmukh Soni',
    description: 'Recognized for hosting and coordinating the Continuing Medical Education Programme for Ayurvedic Medical Officers and private practitioners.',
    image: '/ojas-hospital-award-16.webp'
  },
  {
    id: 'a17',
    title: 'Memento of Appreciation (Arogyadham Model)',
    issuingBody: 'Hiramani Arogyadham (J.P. Hiramani Healthcare)',
    year: '2024',
    recipient: 'Dr. Hasmukh Soni',
    description: 'Presented to Dr. Hasmukh Soni for his contribution to the development and guidance of regional healthcare models.',
    image: '/ojas-hospital-award-17.webp'
  }
];

export default function AwardsPage() {
  return (
    <>
      <div className="pt-28 pb-6 bg-linear-to-br from-maroon-900 to-maroon-800 text-white text-center px-4">
        <nav className="text-xs text-white/50 mb-3">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white/80">Awards</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
          Awards & <span className="text-gold">Recognition</span>
        </h1>
        <p className="text-white/75 max-w-2xl mx-auto text-base">
          Certifications, accreditations, and honours received by Ojas Hospital and our medical team.
        </p>
      </div>

      <AwardsClient awards={AWARDS} />
    </>
  );
}

