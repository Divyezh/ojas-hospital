import { Department, Doctor, Facility, Testimonial, GalleryItem, FAQItem, HospitalStat, EmergencyInfo } from '@/types';

export const EMERGENCY_INFO: EmergencyInfo = {
  hotline: "+91 7574840735",
  ambulance: "+91 7574840735",
  erWaitTime: "Available 24×7",
  traumaCenterLevel: "Emergency Care",
  address: "Rakhiyal Cross Road, Dynasore Circle, Rakhiyal, Ahmedabad, Gujarat – 380021",
};

export const HOSPITAL_STATS: HospitalStat[] = [
  {
    label: "Patients Treated",
    value: 50000,
    suffix: "+",
    description: "Patients treated with compassionate care."
  },
  {
    label: "Expert Doctors",
    value: 16,
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
    name: "Orthopedics",
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
    name: "Pediatrics",
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
    stats: { surgeries: "N/A", satisfaction: "98%", specialists: 4 }
  },
  {
    id: "ayurveda",
    name: "Ayurveda",
    slug: "ayurveda",
    iconName: "Activity",
    description: "Authentic Ayurvedic healing, holistic consultations & lifestyle medicine.",
    fullDescription: "Traditional and evidence-informed Ayurvedic care at Ojas Hospital under the visionary leadership of veteran Ayurvedic practitioners.",
    headOfDepartment: "Managing Trustee / Chief Ayurvedic Physician",
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
    id: "ent",
    name: "ENT",
    slug: "ent",
    iconName: "Activity",
    description: "Comprehensive ear, nose, and throat diagnostic and surgical care in Ahmedabad.",
    fullDescription: "Advanced ENT consultations, endoscopic examinations, and surgeries for hearing issues, sinusitis, tonsillitis, and vocal cord conditions.",
    headOfDepartment: "Chief ENT Specialist",
    features: [
      "Ear & Hearing Care",
      "Sinus & Nasal Surgery",
      "Throat & Tonsil Care",
      "Head & Neck Consultations"
    ],
    image: "/office cabin.png",
    stats: { surgeries: "2,500+", satisfaction: "98%", specialists: 1 }
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
    id: "homeopathic",
    name: "Homeopathic",
    slug: "homeopathic",
    iconName: "Activity",
    description: "Holistic homeopathic therapies for chronic diseases and constitutional wellness.",
    fullDescription: "Gentle, non-invasive homeopathic care for allergies, skin issues, arthritis, and lifestyle disorders at Ojas Hospital.",
    headOfDepartment: "Homeopathic Consultant",
    features: [
      "Constitutional Prescribing",
      "Chronic Allergy Treatment",
      "Pediatric & Geriatric Homeopathy",
      "Holistic Wellness Plans"
    ],
    image: "/deluxe room.png",
    stats: { surgeries: "N/A", satisfaction: "97%", specialists: 1 }
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    slug: "physiotherapy",
    iconName: "Activity",
    description: "Targeted physical therapy, rehabilitation, and pain management in Ahmedabad.",
    fullDescription: "Evidence-based physiotherapy and musculoskeletal rehabilitation helping patients regain strength, mobility, and pain-free living.",
    headOfDepartment: "Chief Physiotherapist",
    features: [
      "Orthopedic Rehab",
      "Post-Operative Therapy",
      "Neuro Rehab",
      "Sports Injury Management"
    ],
    image: "/deluxe room.png",
    stats: { surgeries: "N/A", satisfaction: "98.5%", specialists: 1 }
  },
  {
    id: "unani",
    name: "Unani",
    slug: "unani",
    iconName: "Activity",
    description: "Classical Unani medicine, natural healing & preventative healthcare.",
    fullDescription: "Traditional Unani Tibb medical consultations offering natural herbal therapies, lifestyle counseling, and preventive health solutions.",
    headOfDepartment: "Unani Medicine Consultant",
    features: [
      "Natural Herbal Remedies",
      "Metabolic & Digestive Health",
      "Preventive Health Regimens",
      "Holistic Wellness"
    ],
    image: "/deluxe room.png",
    stats: { surgeries: "N/A", satisfaction: "97%", specialists: 1 }
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
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. Ekraj Ansari",
    title: "Consultant Physician",
    departmentId: "general-medicine",
    departmentName: "Medicine",
    qualifications: "M.D. Medicine",
    experienceYears: 12,
    rating: 4.8,
    reviewCount: 118,
    availability: "Mon - Sat",
    initials: "EA",
    color: "Royal Blue",
    specialties: ["Internal Medicine", "Chronic Diseases", "Preventive Care"],
    bio: "Experienced Physician specializing in M.D. Medicine, providing comprehensive diagnosis and clinical care at Ojas Hospital."
  },
  {
    id: "doc-2",
    name: "Dr. Karan Shah",
    title: "Physician & Critical Care Specialist",
    departmentId: "general-medicine",
    departmentName: "Medicine",
    qualifications: "M.B.B.S., FCCS",
    experienceYears: 10,
    rating: 4.8,
    reviewCount: 112,
    availability: "Mon - Sat",
    initials: "KS",
    color: "Steel Blue",
    specialties: ["Internal Medicine", "FCCS", "Emergency Medicine"],
    bio: "Consultant Physician with expertise in FCCS, dedicated to patient care and internal medicine at Ojas Hospital."
  },
  {
    id: "doc-3",
    name: "Dr. Anand Tank",
    title: "General Surgeon",
    departmentId: "general-surgery",
    departmentName: "Surgical",
    qualifications: "M.S. Surgeon",
    experienceYears: 15,
    rating: 4.8,
    reviewCount: 120,
    availability: "Mon - Sat",
    initials: "AT",
    color: "Royal Blue",
    specialties: ["General Surgery", "Laparoscopic Surgery", "Surgical Care"],
    bio: "Experienced General Surgeon dedicated to providing premium surgical and healthcare services at Ojas Hospital."
  },
  {
    id: "doc-4",
    name: "Dr. Dipakbhai",
    title: "General Surgeon",
    departmentId: "general-surgery",
    departmentName: "Surgical",
    qualifications: "M.S. Surgeon",
    experienceYears: 16,
    rating: 4.7,
    reviewCount: 110,
    availability: "Mon - Sat",
    initials: "DK",
    color: "Emerald Green",
    specialties: ["General Surgery", "Open Surgery", "Consultation"],
    bio: "Experienced General Surgeon dedicated to providing premium surgical healthcare services at Ojas Hospital."
  },
  {
    id: "doc-5",
    name: "Dr. Ayush Soni",
    title: "Skin & Hair Specialist",
    departmentId: "dermatology",
    departmentName: "Skin & Hair",
    qualifications: "Consultant",
    experienceYears: 10,
    rating: 4.7,
    reviewCount: 105,
    availability: "Mon - Sat",
    image: "/Dr Ayush.png",
    initials: "AS",
    color: "Cyan",
    specialties: ["Skin & Hair", "Skin Care", "Hair Treatment"],
    bio: "Experienced Skin & Hair Specialist dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-6",
    name: "Dr. Sheela Shah",
    title: "Cosmetologist",
    departmentId: "dermatology",
    departmentName: "Skin & Cosmetology",
    qualifications: "Cosmetologist",
    experienceYears: 11,
    rating: 4.8,
    reviewCount: 114,
    availability: "Mon - Sat",
    initials: "SS",
    color: "Rose Pink",
    specialties: ["Cosmetology", "Skin Rejuvenation", "Aesthetic Care"],
    bio: "Expert Cosmetologist specializing in aesthetic skin treatments, cosmetology, and advanced skincare at Ojas Hospital."
  },
  {
    id: "doc-7",
    name: "Dr. Adhik Karajaniya",
    title: "Dermatologist & Skin Specialist",
    departmentId: "dermatology",
    departmentName: "Skin & Cosmetology",
    qualifications: "M.D. Skin",
    experienceYears: 13,
    rating: 4.9,
    reviewCount: 128,
    availability: "Mon - Sat",
    initials: "AK",
    color: "Magenta",
    specialties: ["Dermatology", "Skin Conditions", "Hair Care"],
    bio: "Qualified M.D. Skin Specialist providing advanced dermatological care and skin condition treatments at Ojas Hospital."
  },
  {
    id: "doc-8",
    name: "Dr. Sohail Kureshi",
    title: "Skin & Cosmetology Consultant",
    departmentId: "dermatology",
    departmentName: "Skin & Cosmetology",
    qualifications: "B.A.M.S.",
    experienceYears: 9,
    rating: 4.7,
    reviewCount: 98,
    availability: "Mon - Sat",
    initials: "SK",
    color: "Teal",
    specialties: ["Skin & Cosmetology", "Ayurvedic Dermatology", "Holistic Skin Care"],
    bio: "Dedicated Skin & Cosmetology practitioner blending holistic and clinical care for skin health at Ojas Hospital."
  },
  {
    id: "doc-9",
    name: "Dr. Hasmukhbhai Soni",
    title: "Managing Trustee & Ayurvedic Physician",
    departmentId: "ayurveda",
    departmentName: "Managing Trustee / Ayurveda",
    qualifications: "B.A.M.S., LL.B",
    experienceYears: 25,
    rating: 5.0,
    reviewCount: 210,
    availability: "Mon - Sat",
    image: "/dr-hasmukh.png",
    initials: "HS",
    color: "Gold",
    specialties: ["Ayurveda", "Holistic Healing", "Hospital Management"],
    bio: "Managing Trustee of Ojas Hospital and veteran Ayurvedic Physician with over 25 years of leadership and clinical expertise."
  },
  {
    id: "doc-10",
    name: "Dr. Atulbhai Patel",
    title: "Pediatrician / Child Specialist",
    departmentId: "pediatrics",
    departmentName: "Pediatrics",
    qualifications: "M.D. Ped.",
    experienceYears: 15,
    rating: 4.9,
    reviewCount: 140,
    availability: "Mon - Sat",
    initials: "AP",
    color: "Amber",
    specialties: ["Pediatrics", "Neonatal Care", "Child Vaccinations"],
    bio: "Senior M.D. Pediatrician dedicated to compassionate pediatric care, newborn wellness, and childhood development at Ojas Hospital."
  },
  {
    id: "doc-11",
    name: "Dr. Vishalbhai",
    title: "ENT Specialist",
    departmentId: "ent",
    departmentName: "ENT",
    qualifications: "M.S. E.N.T.",
    experienceYears: 14,
    rating: 4.8,
    reviewCount: 125,
    availability: "Mon - Sat",
    initials: "VB",
    color: "Lime Green",
    specialties: ["Ear, Nose & Throat", "ENT Surgery", "Hearing & Sinus"],
    bio: "Experienced ENT Specialist dedicated to providing premium ear, nose, throat and surgical care at Ojas Hospital."
  },
  {
    id: "doc-12",
    name: "Dr. Paritosh Solanki",
    title: "Orthopedic Surgeon",
    departmentId: "orthopedics",
    departmentName: "Orthopedics",
    qualifications: "M.S. Ortho.",
    experienceYears: 16,
    rating: 4.9,
    reviewCount: 145,
    availability: "Mon - Sat",
    initials: "PS",
    color: "Deep Purple",
    specialties: ["Orthopedics", "Joint Care", "Fracture Surgery"],
    bio: "Experienced Orthopedic Surgeon dedicated to providing bone, joint, and trauma care at Ojas Hospital."
  },
  {
    id: "doc-13",
    name: "Dr. Karan Shah",
    title: "Critical Care Medicine Specialist",
    departmentId: "critical-care",
    departmentName: "Critical Care",
    qualifications: "MB.FCCS, CTCCM — Critical Care Medicine Specialist",
    experienceYears: 11,
    rating: 4.9,
    reviewCount: 130,
    availability: "24/7 On-Call",
    initials: "KS",
    color: "Crimson Red",
    specialties: ["Critical Care", "ICU Management", "Emergency Resuscitation", "CTCCM"],
    bio: "Critical Care Specialist with CTCCM & FCCS certifications, leading ICU, emergency response, and intensive life support at Ojas Hospital."
  },
  {
    id: "doc-14",
    name: "Dr. Pujan K. Jain",
    title: "Homeopathic Consultant",
    departmentId: "homeopathic",
    departmentName: "Homeopathic",
    qualifications: "M.H.M.S.",
    experienceYears: 12,
    rating: 4.8,
    reviewCount: 108,
    availability: "Mon - Sat",
    initials: "PJ",
    color: "Indigo",
    specialties: ["Homeopathic Medicine", "Chronic Ailments", "Holistic Wellness"],
    bio: "Experienced Homeopathic Physician providing holistic and constitutional treatment for acute and chronic conditions at Ojas Hospital."
  },
  {
    id: "doc-15",
    name: "Dr. Kunjal Modi",
    title: "Physiotherapist",
    departmentId: "physiotherapy",
    departmentName: "Physiotherapy",
    qualifications: "B.P.T.",
    experienceYears: 10,
    rating: 4.8,
    reviewCount: 115,
    availability: "Mon - Sat",
    initials: "KM",
    color: "Orange",
    specialties: ["Physiotherapy", "Rehabilitation", "Pain Management"],
    bio: "Experienced Physiotherapist dedicated to providing premium rehabilitation services at Ojas Hospital."
  },
  {
    id: "doc-16",
    name: "Dr. Asrar Ansari",
    title: "Unani Medicine Consultant",
    departmentId: "unani",
    departmentName: "Unani",
    qualifications: "B.U.M.S.",
    experienceYears: 11,
    rating: 4.7,
    reviewCount: 96,
    availability: "Mon - Sat",
    initials: "AA",
    color: "Forest Green",
    specialties: ["Unani Medicine", "Natural Therapeutics", "Preventive Care"],
    bio: "Qualified B.U.M.S. Unani Physician offering natural healing, traditional remedies, and lifestyle medicine at Ojas Hospital."
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
    title: "Doctor Consultation Room",
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
    question: "Do you support Ayushman Bharat?",
    answer: "Yes, we provide assistance and treatments for eligible patients under the PMJAY Ayushman Bharat scheme.",
    category: "insurance"
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
