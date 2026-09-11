import { Department, Doctor, Facility, Testimonial, GalleryItem, FAQItem, HospitalStat, EmergencyInfo } from '@/types';

export const EMERGENCY_INFO: EmergencyInfo = {
  hotline: "+91 7574840735",
  ambulance: "+91 7574840735",
  erWaitTime: "Available 24×7",
  traumaCenterLevel: "Emergency Care",
  address: "Rakhiyal Cross Road, Dynasore Circle, Rakhiyal, Ahmedabad, Gujarat – 380021",
};

export const BRANCHES = [
  {
    id: "main-branch",
    name: "Main Hospital Campus (Rakhial)",
    tag: "Main Campus & 24/7 Casualty",
    address: "Rakhiyal Cross Road, Dynasore Circle, Rakhiyal, Ahmedabad, Gujarat – 380021",
    phone: "+91 75748 40735",
    hours: "24×7 Emergency, ICU & Inpatient Services",
  },
  {
    id: "bapunagar-branch",
    name: "Our Bapunagar Branch (Ojas Clinic)",
    tag: "Specialist Clinic & OPD",
    address: "Ojas Clinic, Gandhi Chowk, Opp. Old Post Office, Opp. Arban Nagar, Old Bapunagar, Ahmedabad – 380023",
    phone: "+91 93165 59726 / +91 75748 40735",
    hours: "OPD & Specialized Pediatric / Clinical Consultations",
  },
];

export const HOSPITAL_STATS: HospitalStat[] = [
  {
    label: "Patients Treated",
    value: 50000,
    suffix: "+",
    description: "Patients treated with compassionate care."
  },
  {
    label: "Expert Doctors",
    value: 18,
    suffix: "",
    description: "Experienced medical professionals across specialties."
  },
  {
    label: "Success Rate",
    value: 95,
    suffix: "%+",
    description: "Based on clinical outcomes and patient recovery."
  },
  {
    label: "Years of Trust",
    value: 24,
    suffix: "",
    description: "Serving the Ahmedabad community."
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: "general-medicine",
    name: "General Medicine",
    slug: "general-medicine",
    iconName: "Stethoscope",
    description: "Primary care & health checkups by expert physicians in Ahmedabad.",
    fullDescription: "Trusted general physician services in Rakhial, Ahmedabad. We treat fevers, infections, chronic diseases, and offer preventive health checkups for adults.",
    headOfDepartment: "Chief Physician",
    features: [
      "Preventive Health Checkups",
      "Chronic Disease Management",
      "Fever & Infection Treatment",
      "Adult Immunizations"
    ],
    image: "/general medicine.png",
    stats: { surgeries: "N/A", satisfaction: "98%", specialists: 2 }
  },
  {
    id: "general-surgery",
    name: "General Surgery",
    slug: "general-surgery",
    iconName: "Activity",
    description: "Safe laparoscopic & open surgeries for quick recovery in Ahmedabad.",
    fullDescription: "Expert general surgeons at Ojas Hospital performing laparoscopic and open procedures including hernia repair, appendectomy, and gallbladder surgery in Rakhial, Ahmedabad.",
    headOfDepartment: "Chief Surgeon",
    features: [
      "Laparoscopic Surgery",
      "Hernia Repair",
      "Appendectomy",
      "Gallbladder Surgery"
    ],
    image: "/general surgery.png",
    stats: { surgeries: "10,000+", satisfaction: "90%", specialists: 2 }
  },
  {
    id: "orthopedics",
    name: "Orthopedic",
    slug: "orthopedics",
    iconName: "Bone",
    description: "Bone, joint & spine care for pain relief and mobility in Ahmedabad.",
    fullDescription: "Leading orthopedic specialists in Ahmedabad treating fractures, joint pain, sports injuries, and spine conditions with advanced joint replacement therapies.",
    headOfDepartment: "Chief Orthopedic Surgeon",
    features: [
      "Fracture & Trauma Care",
      "Joint Replacement",
      "Sports Injuries",
      "Spine Care"
    ],
    image: "/orthopedics.png",
    stats: { surgeries: "5,000+", satisfaction: "98.5%", specialists: 1 }
  },
  {
    id: "gynecology",
    name: "Gynecology",
    slug: "gynecology",
    iconName: "Baby",
    description: "Trusted women's healthcare, maternity & gynecological surgery in Ahmedabad.",
    fullDescription: "Expert gynecologists in Rakhial offering maternity care, normal and C-section deliveries, women's health screenings, and gynecological surgeries.",
    headOfDepartment: "Chief Gynecologist",
    features: [
      "Maternity Care",
      "Normal & Cesarean Deliveries",
      "Women's Health Screenings",
      "Gynecological Surgeries"
    ],
    image: "/gynacologist.png",
    stats: { surgeries: "8,000+", satisfaction: "99%", specialists: 2 }
  },
  {
    id: "pediatrics",
    name: "Pediatric",
    slug: "pediatrics",
    iconName: "Smile",
    description: "Compassionate child healthcare & vaccinations in Ahmedabad.",
    fullDescription: "Child-friendly pediatric care in Ahmedabad covering newborn care, vaccinations, childhood illness treatment, and growth monitoring.",
    headOfDepartment: "Chief Pediatrician",
    features: [
      "Newborn Care",
      "Childhood Vaccinations",
      "Pediatric Infections",
      "Growth & Development"
    ],
    image: "/Pediatrics.png",
    stats: { surgeries: "N/A", satisfaction: "99.5%", specialists: 1 }
  },
  {
    id: "dermatology",
    name: "Skin & Cosmetology",
    slug: "dermatology",
    iconName: "Activity",
    description: "Skin, cosmetology & hair treatments by expert dermatologists in Ahmedabad.",
    fullDescription: "Trusted skin, cosmetology & hair clinic in Ahmedabad treating skin conditions, aesthetics, hair loss, and offering advanced cosmetic procedures.",
    headOfDepartment: "Chief Dermatologist",
    features: [
      "Cosmetology & Aesthetics",
      "Skin Disease Treatment",
      "Hair Care & PRP",
      "Acne & Scar Therapy"
    ],
    image: "/skin care.png",
    stats: { surgeries: "N/A", satisfaction: "98%", specialists: 1 }
  },
  {
    id: "ayurveda",
    name: "Ayurveda",
    slug: "ayurveda",
    iconName: "Activity",
    description: "Authentic Ayurvedic healing, holistic consultations & lifestyle medicine.",
    fullDescription: "Traditional and evidence-informed Ayurvedic care at Ojas Hospital under the visionary leadership of veteran Ayurvedic practitioners.",
    headOfDepartment: "Chief Ayurvedic Physician",
    features: [
      "Holistic Consultations",
      "Chronic Disease Management",
      "Panchakarma & Detox",
      "Diet & Lifestyle Guidance"
    ],
    image: "/hospital.png",
    stats: { surgeries: "N/A", satisfaction: "99%", specialists: 1 }
  },
  {
    id: "critical-care",
    name: "Critical Care",
    slug: "critical-care",
    iconName: "HeartPulse",
    description: "Specialized intensive care and life support management at Ojas Hospital.",
    fullDescription: "Comprehensive critical care medicine led by FCCS and CTCCM specialists equipped with state-of-the-art ICU monitoring.",
    headOfDepartment: "Critical Care Specialist",
    features: [
      "Intensive Care Unit (ICU)",
      "Ventilator Support",
      "Hemodynamic Monitoring",
      "Post-Surgical Critical Care"
    ],
    image: "/emergency care.png",
    stats: { surgeries: "N/A", satisfaction: "99%", specialists: 1 }
  },
  {
    id: "cardiology",
    name: "Cardiology",
    slug: "cardiology",
    iconName: "HeartPulse",
    description: "Heart diagnostics & cardiovascular care by cardiologists in Ahmedabad.",
    fullDescription: "Expert cardiac care in Rakhial, Ahmedabad. ECG, echocardiogram, hypertension management, heart failure treatment, and preventive cardiology.",
    headOfDepartment: "Chief Cardiologist",
    features: [
      "ECG & Echocardiogram",
      "Heart Failure Management",
      "Hypertension Care",
      "Preventive Cardiology"
    ],
    image: "/cardiologist.png",
    stats: { surgeries: "1,200+", satisfaction: "99%", specialists: 2 }
  },
  {
    id: "emergency-care",
    name: "Emergency Care",
    slug: "emergency-care",
    iconName: "Siren",
    description: "24/7 emergency & trauma care in Ahmedabad — always ready.",
    fullDescription: "24x7 emergency and trauma centre in Rakhial, Ahmedabad. Immediate resuscitation, critical care, and round-the-clock casualty services.",
    headOfDepartment: "Emergency Head",
    features: [
      "24/7 Availability",
      "Trauma Care",
      "Immediate Resuscitation",
      "Critical Care Transport"
    ],
    image: "/emergency care.png",
    stats: { surgeries: "N/A", satisfaction: "99%", specialists: 5 }
  },
  {
    id: "dental",
    name: "Dental Care",
    slug: "dental",
    iconName: "Smile",
    description: "Comprehensive oral healthcare, root canal, teeth cleaning & dental surgery in Ahmedabad.",
    fullDescription: "Modern dental clinic at Ojas Hospital offering diagnostic checkups, painless root canal treatments, scaling, cosmetic dental restorations, and oral surgery.",
    headOfDepartment: "Dental Surgeon",
    features: [
      "Dental Examination & X-Ray",
      "Root Canal Treatment (RCT)",
      "Teeth Cleaning & Scaling",
      "Tooth Extraction & Dental Surgery"
    ],
    image: "/dentist.png",
    stats: { surgeries: "3,000+", satisfaction: "98.5%", specialists: 1 }
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. Aijaz Ansari",
    title: "Consultant Physician",
    departmentId: "general-medicine",
    departmentName: "Medicine",
    qualifications: "M.D. Medicine",
    experienceYears: 12,
    rating: 4.8,
    reviewCount: 118,
    availability: "Evening 6:00 PM – 9:00 PM",
    initials: "AA",
    color: "Royal Blue",
    specialties: ["Internal Medicine", "Heart Disease & Diabetes", "Respiratory Illnesses", "Preventive Care"],
    bio: "Senior Consultant Physician with M.D. Medicine qualifications, specializing in heart disease, diabetes management, and respiratory healthcare at Ojas Hospital."
  },
  {
    id: "doc-2",
    name: "Dr. Manishbhai Soni",
    title: "Consultant Physician",
    departmentId: "general-medicine",
    departmentName: "Medicine",
    qualifications: "M.D. Medicine",
    experienceYears: 14,
    rating: 4.8,
    reviewCount: 115,
    availability: "Evening 5:00 PM – 6:00 PM",
    initials: "MS",
    color: "Steel Blue",
    specialties: ["Internal Medicine", "General Medicine", "Chronic Conditions"],
    bio: "Consultant Physician with M.D. Medicine qualifications specializing in general internal medicine, adult care, and chronic disease management at Ojas Hospital."
  },
  {
    id: "doc-3",
    name: "Dr. Karan Shah",
    title: "Medical Superintendent & Critical Care Specialist",
    departmentId: "superintendent",
    departmentName: "Superintendent",
    qualifications: "M.B.B.S., FCCS",
    experienceYears: 10,
    rating: 4.8,
    reviewCount: 112,
    availability: "Evening 7:30 PM – 9:00 PM",
    initials: "KS",
    color: "Navy Blue",
    specialties: ["Medical Superintendent", "Internal Medicine", "FCCS Critical Care", "Emergency Resuscitation"],
    bio: "Medical Superintendent and Consultant Physician with FCCS credentials, dedicated to acute medical care and critical care interventions at Ojas Hospital."
  },
  {
    id: "doc-4",
    name: "Dr. Anand Tank",
    title: "General & Laparoscopic Surgeon",
    departmentId: "general-surgery",
    departmentName: "Surgical",
    qualifications: "M.S. Surgeon",
    experienceYears: 15,
    rating: 4.8,
    reviewCount: 120,
    availability: "Evening 5:00 PM – 6:00 PM",
    initials: "AT",
    color: "Royal Blue",
    specialties: ["General Surgery", "Laparoscopic Surgery", "Appendectomy & Hernia"],
    bio: "Senior General & Laparoscopic Surgeon (M.S.) with clinical excellence in minimally invasive laparoscopic procedures at Ojas Hospital."
  },
  {
    id: "doc-5",
    name: "Dr. Deepakbhai",
    title: "Senior General Surgeon",
    departmentId: "general-surgery",
    departmentName: "Surgical",
    qualifications: "M.S. Surgeon",
    experienceYears: 16,
    rating: 4.7,
    reviewCount: 110,
    availability: "Evening 5:30 PM – 8:00 PM",
    initials: "DK",
    color: "Emerald Green",
    specialties: ["General Surgery", "Open Surgery", "Trauma Recovery"],
    bio: "Experienced General Surgeon (M.S.) dedicated to surgical consultations, open abdominal operations, and trauma recovery at Ojas Hospital."
  },
  {
    id: "doc-6",
    name: "Dr. Priyank Barot",
    title: "General & Laparoscopic Surgeon",
    departmentId: "general-surgery",
    departmentName: "Surgical",
    qualifications: "M.S. (General and Laparoscopic Surgeon)",
    experienceYears: 12,
    rating: 4.8,
    reviewCount: 104,
    availability: "Evening 5:00 PM – 6:00 PM",
    initials: "PB",
    color: "Teal",
    specialties: ["General Surgery", "Laparoscopy", "Abdominal Procedures"],
    bio: "Consultant General & Laparoscopic Surgeon (M.S.) delivering advanced surgical procedures and clinical care at Ojas Hospital."
  },
  {
    id: "doc-8",
    name: "Dr. Vikas Gupta",
    title: "Consultant Gynecologist & Laparoscopic Surgeon",
    departmentId: "gynecology",
    departmentName: "Gynecology",
    qualifications: "M.S. (Gynec)",
    experienceYears: 11,
    rating: 4.8,
    reviewCount: 98,
    availability: "Evening 4:00 PM – 5:00 PM",
    initials: "VG",
    color: "Violet",
    specialties: ["Gynecology & Obstetrics", "Laparoscopic Surgery", "Women's Health", "Reproductive Wellness"],
    bio: "Consultant Gynecologist & Laparoscopic Surgeon (M.S.) specializing in obstetrics, laparoscopic surgeries, and women's healthcare treatments at Ojas Hospital."
  },
  {
    id: "doc-11",
    name: "Dr. Ayush Soni",
    title: "Skin, Hair & Face Care Specialist & Director",
    departmentId: "dermatology",
    departmentName: "Skin & Cosmetology",
    qualifications: "PGDCC",
    experienceYears: 8,
    rating: 4.8,
    reviewCount: 106,
    availability: "Afternoon 12:00 PM – 5:00 PM",
    image: "/Dr Ayush.png",
    initials: "AS",
    color: "Cyan",
    specialties: ["Skin Care", "Hair Restoration", "Face Care & Cosmetology"],
    bio: "Specialist in Skin, Hair & Face Care (PGDCC) and Director at Ojas Hospital, providing advanced cosmetic dermatology, hair therapies, and facial treatments."
  },
  {
    id: "doc-12",
    name: "Dr. Hasmukhbhai Soni",
    title: "Managing Trustee / Director",
    departmentId: "management",
    departmentName: "Management & Director",
    qualifications: "B.A.M.S., LLB",
    experienceYears: 25,
    rating: 5.0,
    reviewCount: 210,
    availability: "Afternoon 12:00 PM – 2:00 PM & Evening 7:00 PM – 10:00 PM",
    image: "/dr-hasmukh.png",
    initials: "HS",
    color: "Gold",
    specialties: ["Ayurveda & Panchakarma", "Hospital Mentor & Management", "Healthcare Administration"],
    bio: "Founder of Ojas Hospital, veteran Ayurvedic Physician and Director with over 25 years of hospital mentorship, management, and clinical service in Ahmedabad."
  },
  {
    id: "doc-14",
    name: "Dr. Atulbhai Patel",
    title: "Senior Pediatrician & Child Specialist",
    departmentId: "pediatrics",
    departmentName: "Pediatrics",
    qualifications: "M.B.B.S., D.Ped. (M.D. Ped.)",
    experienceYears: 15,
    rating: 4.9,
    reviewCount: 140,
    availability: "Mon, Wed, Fri: Afternoon 1:00 PM – 2:00 PM",
    initials: "AP",
    color: "Amber",
    branch: "Our Bapunagar Branch — Ojas Clinic, Gandhi Chowk, Opp. Old Post Office, Old Bapunagar, Ahmedabad",
    specialties: ["Pediatrics", "Childhood Immunization", "Neonatal Care", "Growth & Nutrition"],
    bio: "Senior Pediatrician & Child Specialist (M.B.B.S., D.Ped.) dedicated to compassionate child healthcare and vaccination schedules at Ojas Hospital."
  },
  {
    id: "doc-16",
    name: "Dr. Vishal Prajapati",
    title: "Pulmonary Medicine Specialist",
    departmentId: "pulmonary-medicine",
    departmentName: "Pulmonary Medicine",
    qualifications: "M.D. (Medicine, Pulmonologist)",
    experienceYears: 10,
    rating: 4.8,
    reviewCount: 95,
    availability: "Evening 4:00 PM – 6:00 PM",
    initials: "VP",
    color: "Deep Cyan",
    specialties: ["Pulmonology", "Respiratory Illnesses", "Asthma & Chest Care"],
    bio: "Consultant Specialist in Pulmonary Medicine (M.D.) treating respiratory illnesses, asthma, and lung disorders at Ojas Hospital."
  },
  {
    id: "doc-17",
    name: "Dr. Paritosh Solanki",
    title: "Orthopedic Surgeon",
    departmentId: "orthopedics",
    departmentName: "Orthopedics",
    qualifications: "M.S. Ortho.",
    experienceYears: 16,
    rating: 4.9,
    reviewCount: 145,
    availability: "Evening 6:00 PM – 7:00 PM",
    initials: "PS",
    color: "Deep Purple",
    specialties: ["Orthopedic Surgery", "Fracture Care", "Joint & Bone Care"],
    bio: "Leading Orthopedic Surgeon (M.S. Ortho.) specializing in bone and joint care, fracture fixation, and trauma recovery at Ojas Hospital."
  },
  {
    id: "doc-19",
    name: "Dr. Mayur Mishra",
    title: "Homeopathic Consultant",
    departmentId: "homeopathic",
    departmentName: "Homeopathy",
    qualifications: "B.H.M.S.",
    experienceYears: 11,
    rating: 4.8,
    reviewCount: 92,
    availability: "Afternoon 2:00 PM – 4:00 PM",
    initials: "MM",
    color: "Violet",
    specialties: ["Homeopathy", "Chronic Care", "Healthcare Administration"],
    bio: "Consultant Homeopath (B.H.M.S., M.H.A.) specializing in holistic healing and health administration at Ojas Hospital."
  },
  {
    id: "doc-21",
    name: "Dr. Bhargav Vadhel",
    title: "Consultant Physiotherapist",
    departmentId: "physiotherapy",
    departmentName: "Physiotherapy",
    qualifications: "B.P.T. (Physiotherapist)",
    experienceYears: 9,
    rating: 4.7,
    reviewCount: 88,
    availability: "Afternoon 2:00 PM – 4:00 PM",
    initials: "DB",
    color: "Orange",
    specialties: ["Physiotherapy", "Sports Injury Rehab", "Pain Management"],
    bio: "Physiotherapist (B.P.T.) delivering physical rehabilitation, muscle recovery, and therapeutic exercise plans at Ojas Hospital."
  },
  {
    id: "doc-22",
    name: "Dr. Asharaf Ansari",
    title: "Unani Medicine Consultant",
    departmentId: "unani",
    departmentName: "Unani Department",
    qualifications: "B.U.M.S.",
    experienceYears: 11,
    rating: 4.7,
    reviewCount: 96,
    availability: "Afternoon 2:00 PM – 2:30 PM",
    initials: "AA",
    color: "Forest Green",
    specialties: ["Unani Medicine", "Herbal Therapeutics", "Digestive Care"],
    bio: "Certified Unani Physician (B.U.M.S.) delivering herbal therapeutics and holistic natural healing at Ojas Hospital."
  },
  {
    id: "doc-24",
    name: "Dr. Viralben Patel",
    title: "Dental Specialist",
    departmentId: "dental",
    departmentName: "Dental Department",
    qualifications: "B.D.S.",
    experienceYears: 8,
    rating: 4.8,
    reviewCount: 90,
    availability: "Morning 9:00 AM – 1:00 PM",
    initials: "VP",
    color: "Cyan",
    specialties: ["Dental Surgery", "Dental Specialist Care", "Root Canal Treatment", "Oral Health"],
    bio: "Dental Specialist (B.D.S.) offering tooth extractions, root canal treatments, scaling, and oral healthcare services at Ojas Hospital."
  },
  {
    id: "doc-25",
    name: "Dr. J. M. Shah",
    title: "Pediatrician & Child Specialist",
    departmentId: "pediatrics",
    departmentName: "Pediatrics",
    qualifications: "M.B., D.Ped.",
    experienceYears: 14,
    rating: 4.8,
    reviewCount: 95,
    availability: "Evening 5:00 PM – 6:00 PM",
    initials: "JS",
    color: "Amber",
    specialties: ["Pediatrics", "Childhood Immunization", "Neonatal Care", "Pediatric Healthcare"],
    bio: "Pediatrician & Child Specialist (M.B.B.S., D.Ped.) dedicated to pediatric healthcare, childhood immunization, and neonatal care at Ojas Hospital."
  },
  {
    id: "doc-26",
    name: "Dr. Pulakbhai Godiyawala",
    title: "Consultant Orthopedic Surgeon",
    departmentId: "orthopedics",
    departmentName: "Orthopedics",
    qualifications: "M.S. Ortho.",
    experienceYears: 15,
    rating: 4.8,
    reviewCount: 110,
    availability: "Evening 5:00 PM – 6:00 PM",
    initials: "PG",
    color: "Deep Purple",
    specialties: ["Orthopedic Surgery", "Fracture Fixation", "Bone & Joint Care", "Trauma Recovery"],
    bio: "Consultant Orthopedic Surgeon (M.S. Ortho.) specializing in fracture management, trauma recovery, and bone & joint healthcare at Ojas Hospital."
  }
];

export interface ScheduleDoctor {
  name: string;
  qualification: string;
  timing: string;
  isCrossedOut?: boolean;
}

export interface ScheduleDepartment {
  department: string;
  subtitle?: string;
  doctors: ScheduleDoctor[];
}

export const CONSULTATION_SCHEDULE: ScheduleDepartment[] = [
  {
    department: "Medicine Department",
    subtitle: "Heart, Diabetes & Respiratory",
    doctors: [
      { name: "Dr. Aijaz Ansari", qualification: "M.D. Medicine", timing: "Evening 6:00 to 9:00" },
      { name: "Dr. Manishbhai Soni", qualification: "M.D. Medicine", timing: "Evening 5:00 to 6:00" },
    ]
  },
  {
    department: "Surgical Department",
    subtitle: "General & Laparoscopic Surgery",
    doctors: [
      { name: "Dr. Anand Tank", qualification: "M.S. Surgeon", timing: "Evening 5:00 to 6:00" },
      { name: "Dr. Deepakbhai", qualification: "M.S. Surgeon", timing: "Evening 5:30 to 8:00" },
      { name: "Dr. Priyank Barot", qualification: "M.S. (General & Laparoscopic Surgeon)", timing: "Evening 5:00 to 6:00" },
    ]
  },
  {
    department: "Gynecology Department",
    subtitle: "Women's Healthcare",
    doctors: [
      { name: "Dr. Vikas Gupta", qualification: "M.S. (Gynec), Laparoscopic Surgeon", timing: "Evening 4:00 to 5:00" },
    ]
  },
  {
    department: "Dental Department",
    subtitle: "Oral & Dental Surgery",
    doctors: [
      { name: "Dr. Viralben Patel", qualification: "B.D.S., Dental Specialist", timing: "Morning 9:00 to 1:00" },
    ]
  },
  {
    department: "Skin & Cosmetology",
    subtitle: "Plastic Surgery & Facial Care",
    doctors: [
      { name: "Dr. Ayush Soni", qualification: "PGDCC", timing: "Afternoon 12:00 to 5:00" },
    ]
  },
  {
    department: "Managing Trustee / Director",
    subtitle: "Hospital Mentor & Management",
    doctors: [
      { name: "Dr. Hasmukhbhai Soni", qualification: "B.A.M.S., LLB", timing: "Afternoon 12:00 to 2:00 / Evening 7:00 to 10:00" },
    ]
  },
  {
    department: "Pediatrics",
    subtitle: "Children's Health & Vaccination",
    doctors: [
      { name: "Dr. Atulbhai Patel", qualification: "M.B.B.S., D.Ped. (M.D. Ped.)", timing: "Mon-Wed-Fri: Afternoon 1:00 to 2:00" },
      { name: "Dr. J. M. Shah", qualification: "M.B., D.Ped.", timing: "Evening 5:00 to 6:00" },
    ]
  },
  {
    department: "Pulmonary Medicine",
    subtitle: "Chest & Respiratory Medicine",
    doctors: [
      { name: "Dr. Vishal Prajapati", qualification: "M.D. (Medicine, Pulmonologist)", timing: "Evening 4:00 to 6:00" },
    ]
  },
  {
    department: "Orthopedic Department",
    subtitle: "Bone, Joint & Fracture Care",
    doctors: [
      { name: "Dr. Pulakbhai Godiyawala", qualification: "M.S. Ortho.", timing: "Evening 5:00 to 6:00" },
      { name: "Dr. Paritosh Solanki", qualification: "M.S. Ortho.", timing: "Evening 6:00 to 7:00" },
    ]
  },
  {
    department: "Superintendent",
    subtitle: "Medical Superintendent",
    doctors: [
      { name: "Dr. Karan Shah", qualification: "M.B.B.S., FCCS", timing: "Evening 7:30 to 9:00" }
    ]
  },
  {
    department: "Homeopathic Department",
    subtitle: "Homeopathy & Holistic Care",
    doctors: [
      { name: "Dr. Mayur Mishra", qualification: "B.H.M.S., Homeopathic Consultant", timing: "Afternoon 2:00 to 4:00" },
    ]
  },
  {
    department: "Physiotherapy",
    subtitle: "Rehabilitation & Physical Therapy",
    doctors: [
      { name: "Dr. Bhargav Vadhel", qualification: "B.P.T. (Physiotherapist)", timing: "Afternoon 2:00 to 4:00" },
    ]
  },
  {
    department: "Unani Department",
    subtitle: "Herbal & Natural Therapeutics",
    doctors: [
      { name: "Dr. Asharaf Ansari", qualification: "B.U.M.S.", timing: "Afternoon 2:00 to 2:30" },
    ]
  }
];


export const FACILITIES: Facility[] = [
  {
    id: "fac-1",
    title: "Operation Theatre",
    category: "Surgery",
    description: "Modern, sterile surgical suites for all major operations.",
    image: "/operation theatre.png",
    features: ["Sterile Environment", "Advanced Anesthesia", "Surgical Lighting"],
    badgeText: "Advanced"
  },
  {
    id: "fac-2",
    title: "Minor Surgical Suite",
    category: "Surgery",
    description: "Dedicated suite for minor and minimally invasive surgical procedures.",
    image: "/Minor Surgical Suite.png",
    features: ["Quick Recovery", "Outpatient Care", "Precision Tools"]
  },
  {
    id: "fac-3",
    title: "Consultation Cabin",
    category: "Outpatient",
    description: "Private and comfortable cabins for patient consultations.",
    image: "/office cabin.png",
    features: ["Private", "Comfortable", "Patient-centric"]
  },
  {
    id: "fac-4",
    title: "Normal Surgery",
    category: "Surgery",
    description: "Equipped for standard surgical procedures and routine operations.",
    image: "/normal surgery.png",
    features: ["Expert Surgeons", "Safe Environment", "Post-op Care"]
  },
  {
    id: "fac-5",
    title: "Dental Clinic",
    category: "Specialized Care",
    description: "Comprehensive dental care with state-of-the-art equipment.",
    image: "/dentist.png",
    features: ["Painless Procedures", "Cosmetic Dentistry", "Oral Surgery"]
  },
  {
    id: "fac-7",
    title: "Deluxe Rooms",
    category: "Inpatient",
    description: "Premium suites providing maximum comfort for patients and families.",
    image: "/deluxe room.png",
    features: ["Premium Furnishings", "Mini Fridge", "VIP Services"]
  },
  {
    id: "fac-8",
    title: "Special Room 1",
    category: "Inpatient",
    description: "Comfortable and well-equipped special room for enhanced patient care.",
    image: "/special room 1.png",
    features: ["Comfortable Bed", "Attached Washroom", "Patient Care"]
  },
  {
    id: "fac-9",
    title: "Special Room 2",
    category: "Inpatient",
    description: "Modern special room providing a peaceful environment for recovery.",
    image: "/special room 2.png",
    features: ["Quiet Environment", "Modern Amenities", "24/7 Nursing"]
  },
  {
    id: "fac-10",
    title: "Sonography",
    category: "Diagnostics",
    description: "Advanced ultrasound imaging for soft tissue and internal organ diagnostics.",
    image: "/sonography.png",
    features: ["Pregnancy Scans", "Abdominal Scans", "Non-invasive"]
  },
  {
    id: "fac-11",
    title: "Medical Store",
    category: "Pharmacy",
    description: "In-house pharmacy stocking all prescribed medicines, surgical supplies, and healthcare products.",
    image: "/ojas medicial store.png",
    features: ["All Medicines Available", "24/7 Access", "Doctor-prescribed Supplies"],
    badgeText: "In-House"
  },
  {
    id: "fac-12",
    title: "Mediclaim Assistance",
    category: "Insurance",
    description: "Dedicated mediclaim and insurance assistance desk to help patients with cashless claims and documentation.",
    image: "/mediclaim.png",
    features: ["Cashless Claims", "Documentation Help", "Insurance Guidance"],
    badgeText: "Support"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t3",
    name: "Vikas Patel",
    rating: 4,
    text: "The doctors and staff treated my family with great care and professionalism. 🥳",
    avatar: "https://avatar.vercel.sh/vikas",
    timeAgo: "3 weeks ago"
  },
  {
    id: "t4",
    name: "Navika Parihar",
    rating: 5,
    text: "A hospital with all the required machines & facilities, I got my Fisher operation done here, I would say the Doctors were very experienced and calm, and the staff was very polite, dedicated, and helpful. I got very good care from the team throughout the process. This is really commendable. I am thankful to the entire staff of Ojas hospital and a special thanks to Dr. Hasmukh Soni sir 🙏🙏🙏",
    avatar: "https://avatar.vercel.sh/navika",
    timeAgo: "1 month ago"
  },
  {
    id: "t5",
    name: "Rahul Solanki",
    rating: 5,
    text: "The facilities are very good in Ojas Hospital are very helpful to poor patients",
    avatar: "https://avatar.vercel.sh/rahul",
    timeAgo: "2 months ago"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Medical Camp 1",
    category: "camps",
    image: "/camp1.webp",
    caption: "Our latest community medical camp"
  },
  {
    id: "g2",
    title: "Medical Camp 2",
    category: "camps",
    image: "/camp2.webp",
    caption: "Free health checkups for the community"
  },
  {
    id: "g3",
    title: "Medical Camp 3",
    category: "camps",
    image: "/camp3.webp",
    caption: "Spreading awareness and providing care"
  },
  {
    id: "g4",
    title: "Medical Camp 4",
    category: "camps",
    image: "/camp4.webp",
    caption: "Dedicated to community healthcare"
  },
  {
    id: "g5",
    title: "Free Diabetes Camp Flyer",
    category: "media",
    image: "/media1.webp",
    caption: "Campaign announcement flyer for the Free Diabetes Diagnosis & Treatment Camp."
  },
  {
    id: "g6",
    title: "Kite String Cleanliness Drive",
    category: "media",
    image: "/media2.webp",
    caption: "Divya Bhaskar coverage of the Uttarayan kite string cleanliness and safety drive."
  },
  {
    id: "g7",
    title: "Multi-Specialty Diagnosis Camp",
    category: "media",
    image: "/media3.webp",
    caption: "Campaign details flyer for the Bapunagar Multi-Specialty Health Diagnosis Camp."
  },
  {
    id: "g8",
    title: "Municipal School Health Camp",
    category: "media",
    image: "/media4.webp",
    caption: "News coverage of free checkups and care for 2,000 municipal school students in Rakhial."
  },
  {
    id: "g9",
    title: "Bapunagar Health Camp Coverage",
    category: "media",
    image: "/media5.webp",
    caption: "Newspaper clipping announcing the free multi-specialty diagnosis camp."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What are your emergency timings?",
    answer: "Our emergency department is open 24 hours a day, 7 days a week, 365 days a year to handle any medical emergencies.",
    category: "emergency"
  },
  {
    id: "faq-2",
    question: "Is Ojas Hospital open 24 hours?",
    answer: "Yes, Ojas Hospital operates 24x7. Our emergency, ICU, and inpatient services are always available.",
    category: "general"
  },
  {
    id: "faq-3",
    question: "How can I book an appointment?",
    answer: "You can book an appointment by calling us at +91 75748 40735, sending a message via WhatsApp, or visiting the hospital reception.",
    category: "appointments"
  },
  {
    id: "faq-4",
    question: "Do you provide cashless insurance?",
    answer: "Yes, we support cashless insurance facilities. Please bring your insurance card and our TPA desk will assist you.",
    category: "insurance"
  },
  {
    id: "faq-5",
    question: "Where are Ojas Hospital and Clinics located?",
    answer: "Our Main Multispeciality Campus is located at Rakhiyal Cross Road, Dynasore Circle, Rakhial, Ahmedabad. We also operate Our Bapunagar Branch (Ojas Clinic) at Gandhi Chowk, Opp. Old Post Office, Opp. Arban Nagar, Old Bapunagar, Ahmedabad.",
    category: "general"
  },
  {
    id: "faq-6",
    question: "Which departments are available?",
    answer: "We offer General Medicine, General Surgery, Orthopedics, Gynecology, Pediatrics, Ophthalmology, ENT, Skin & Hair, Cardiology, Urology, and more.",
    category: "general"
  },
  {
    id: "faq-7",
    question: "Do you have diagnostic services?",
    answer: "Yes, we have in-house diagnostic facilities including Digital X-Ray, ECG, Sonography, and a fully equipped Laboratory.",
    category: "general"
  },
  {
    id: "faq-8",
    question: "How can I contact the hospital?",
    answer: "You can reach us at +91 75748 40735 or our emergency number +91 98251 37766. You can also find our address in the Contact section.",
    category: "general"
  }
];
