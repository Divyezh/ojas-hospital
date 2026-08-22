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
    value: 15,
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
    name: "Dr. Azaz Ansari",
    title: "Consultant Physician",
    departmentId: "general-medicine",
    departmentName: "Medicine",
    qualifications: "M.D. Medicine",
    experienceYears: 12,
    rating: 4.8,
    reviewCount: 118,
    availability: "Evening 6:00 PM – 7:00 PM (Mon - Sat)",
    initials: "AA",
    color: "Royal Blue",
    specialties: ["Internal Medicine", "Heart Disease & Diabetes", "Respiratory Illnesses", "Preventive Healthcare"],
    bio: "Senior Consultant Physician with M.D. Medicine qualifications, specializing in cardiology screening, diabetes management, chronic internal conditions, and respiratory healthcare at Ojas Hospital."
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
    availability: "Evening 7:30 PM – 9:00 PM (Mon - Sat)",
    initials: "KS",
    color: "Steel Blue",
    specialties: ["Internal Medicine", "FCCS Critical Care", "Emergency Medicine", "Acute Medical Stabilization"],
    bio: "Consultant Physician with FCCS certification, dedicated to acute clinical care, emergency stabilization, and comprehensive internal medicine diagnosis at Ojas Hospital."
  },
  {
    id: "doc-3",
    name: "Dr. Anand Tank",
    title: "General & Laparoscopic Surgeon",
    departmentId: "general-surgery",
    departmentName: "Surgical",
    qualifications: "M.S. Surgeon",
    experienceYears: 15,
    rating: 4.8,
    reviewCount: 120,
    availability: "Evening 5:00 PM – 6:00 PM (Mon - Sat)",
    initials: "AT",
    color: "Royal Blue",
    specialties: ["General Surgery", "Laparoscopic Surgery", "Appendectomy & Hernia", "Abdominal Procedures"],
    bio: "Senior General & Laparoscopic Surgeon (M.S.) with 15+ years of clinical excellence in minimally invasive laparoscopic procedures, hernia repair, gallbladder surgery, and emergency abdominal operations at Ojas Hospital."
  },
  {
    id: "doc-4",
    name: "Dr. Dipakbhai",
    title: "Senior General Surgeon",
    departmentId: "general-surgery",
    departmentName: "Surgical",
    qualifications: "M.S. Surgeon",
    experienceYears: 16,
    rating: 4.7,
    reviewCount: 110,
    availability: "Evening 5:30 PM – 8:00 PM (Mon - Sat)",
    initials: "DK",
    color: "Emerald Green",
    specialties: ["General Surgery", "Piles, Fissure & Fistula", "Open & Minor Surgery", "Trauma Care"],
    bio: "Experienced General Surgeon (M.S.) dedicated to surgical consultations, open abdominal operations, anorectal surgeries (piles, fissure, fistula treatment), and trauma recovery at Ojas Hospital."
  },
  {
    id: "doc-5",
    name: "Dr. Ayush Soni",
    title: "Director — Skin & Hair Specialist",
    departmentId: "dermatology",
    departmentName: "Skin & Cosmetology",
    qualifications: "Skin & Hair Consultant",
    experienceYears: 3,
    rating: 4.7,
    reviewCount: 105,
    availability: "Afternoon 12:00 PM – 1:00 PM (Mon - Sat)",
    image: "/Dr Ayush.png",
    initials: "AS",
    color: "Cyan",
    specialties: ["Skin & Hair", "Advanced Cosmetology", "PRP Hair Therapy", "Acne & Scar Treatments"],
    bio: "Director and Skin & Hair Specialist with 3 years of clinical excellence at Ojas Hospital, leading clinical dermatology, aesthetic skincare, hair restoration therapies, and personalized patient care protocols."
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
    availability: "Evening 7:30 PM – 8:30 PM (Mon - Sat)",
    initials: "AK",
    color: "Magenta",
    specialties: ["Dermatology", "Clinical Skin Diseases", "Psoriasis & Eczema", "Cosmetic Dermatology"],
    bio: "Qualified M.D. Skin Specialist providing expert diagnosis and clinical management for complex dermatological disorders, chronic allergies, psoriasis, eczema, and skin rejuvenation at Ojas Hospital."
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
    availability: "Afternoon 12:00 PM – 1:00 PM (Mon - Sat)",
    initials: "SK",
    color: "Teal",
    specialties: ["Skin & Cosmetology", "Ayurvedic Dermatology", "Holistic Skin Care", "Chronic Skin Conditions"],
    bio: "Dedicated Skin & Cosmetology practitioner blending holistic Ayurvedic principles and clinical care for chronic skin conditions, acne management, and natural wellness at Ojas Hospital."
  },
  {
    id: "doc-9",
    name: "Dr. Hasmukhbhai Soni",
    title: "Chief Ayurvedic Physician",
    departmentId: "ayurveda",
    departmentName: "Ayurveda",
    qualifications: "B.A.M.S., LL.B",
    experienceYears: 25,
    rating: 5.0,
    reviewCount: 210,
    availability: "Evening 6:00 PM – 9:00 PM (Mon - Sat)",
    image: "/dr-hasmukh.png",
    initials: "HS",
    color: "Gold",
    specialties: ["Ayurveda & Panchakarma", "Holistic Healing", "Chronic Disease Management", "Hospital Leadership"],
    bio: "Founder of Ojas Hospital, veteran Ayurvedic Physician with over 25 years of healthcare leadership and holistic clinical practice serving the Ahmedabad community."
  },
  {
    id: "doc-10",
    name: "Dr. Atulbhai Patel",
    title: "Senior Pediatrician & Child Specialist",
    departmentId: "pediatrics",
    departmentName: "Pediatrics",
    qualifications: "MB. D. Ped",
    experienceYears: 15,
    rating: 4.9,
    reviewCount: 140,
    availability: "Mon, Wed, Fri (Afternoon 1:00 PM – 2:00 PM)",
    initials: "AP",
    color: "Amber",
    branch: "Our Bapunagar Branch — Ojas Clinic, Gandhi Chowk, Opp. Old Post Office, Opp. Arban Nagar, Old Bapunagar, Ahmedabad",
    specialties: ["Pediatrics", "Neonatal Care", "Childhood Immunization", "Growth & Nutrition"],
    bio: "Senior Pediatrician & Child Specialist (MB. D. Ped) dedicated to compassionate child healthcare, newborn wellness, developmental monitoring, and vaccination schedules at Ojas Hospital and Our Bapunagar Branch (Ojas Clinic)."
  },
  {
    id: "doc-11",
    name: "Dr. Vishalbhai",
    title: "ENT Surgeon & Specialist",
    departmentId: "ent",
    departmentName: "ENT",
    qualifications: "M.S. E.N.T.",
    experienceYears: 14,
    rating: 4.8,
    reviewCount: 125,
    availability: "Evening 6:00 PM – 8:00 PM (Mon - Sat)",
    initials: "VB",
    color: "Lime Green",
    specialties: ["Ear, Nose & Throat", "Sinus & Nasal Surgery", "Hearing Impairment", "Throat & Tonsil Care"],
    bio: "Experienced ENT Surgeon (M.S. E.N.T.) providing advanced diagnostics and surgeries for ear, nose, throat, sinusitis, deviated nasal septum, and vocal cord disorders at Ojas Hospital."
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
    availability: "Evening 6:00 PM – 7:00 PM (Mon - Sat)",
    initials: "PS",
    color: "Deep Purple",
    specialties: ["Orthopedic Surgery", "Fracture & Trauma Care", "Joint Pain & Arthritis", "Spine Care"],
    bio: "Leading Orthopedic Surgeon (M.S. Ortho.) specializing in bone and joint care, fracture fixation, arthritis management, and trauma recovery at Ojas Hospital."
  },
  {
    id: "doc-13",
    name: "Dr. Karan Shah",
    title: "Medical Superintendent & Critical Care Specialist",
    departmentId: "critical-care",
    departmentName: "Critical Care",
    qualifications: "MB.FCCS, CTCCM — Critical Care Medicine Specialist",
    experienceYears: 11,
    rating: 4.9,
    reviewCount: 130,
    availability: "Evening 7:30 PM – 9:00 PM & 24/7 On-Call",
    initials: "KS",
    color: "Crimson Red",
    specialties: ["Critical Care Medicine", "ICU Management", "Emergency Resuscitation", "CTCCM Life Support"],
    bio: "Medical Superintendent and Critical Care Specialist holding FCCS & CTCCM credentials, supervising Ojas Hospital's ICU, emergency triage, and life support systems."
  },
  {
    id: "doc-14",
    name: "Dr. Pooja K. Jain",
    title: "Homeopathic Consultant",
    departmentId: "homeopathic",
    departmentName: "Homeopathic",
    qualifications: "M.H.M.S.",
    experienceYears: 12,
    rating: 4.8,
    reviewCount: 108,
    availability: "Evening 6:30 PM – 8:00 PM (Mon - Sat)",
    initials: "PJ",
    color: "Indigo",
    specialties: ["Homeopathic Medicine", "Chronic Ailments & Allergies", "Constitutional Therapeutics", "Holistic Wellness"],
    bio: "Experienced Homeopathic Physician (M.H.M.S.) providing personalized, constitutional, and non-invasive remedies for chronic disorders, skin allergies, and holistic health at Ojas Hospital."
  },
  {
    id: "doc-15",
    name: "Dr. Kunjal Modi",
    title: "Consultant Physiotherapist",
    departmentId: "physiotherapy",
    departmentName: "Physiotherapy",
    qualifications: "B.P.T.",
    experienceYears: 10,
    rating: 4.8,
    reviewCount: 115,
    availability: "Evening 5:30 PM – 7:00 PM (Mon - Sat)",
    initials: "KM",
    color: "Orange",
    specialties: ["Physiotherapy", "Orthopedic Rehabilitation", "Post-Surgical Therapy", "Pain Management"],
    bio: "Qualified Physiotherapist (B.P.T.) specializing in musculoskeletal recovery, post-operative rehab, paralysis therapy, and joint mobility restoration at Ojas Hospital."
  },
  {
    id: "doc-16",
    name: "Dr. Asraf Ansari",
    title: "Unani Medicine Consultant",
    departmentId: "unani",
    departmentName: "Unani",
    qualifications: "B.U.M.S.",
    experienceYears: 11,
    rating: 4.7,
    reviewCount: 96,
    availability: "Afternoon 2:00 PM – 2:30 PM (Mon - Sat)",
    initials: "AA",
    color: "Forest Green",
    specialties: ["Unani Medicine", "Natural Herbal Therapeutics", "Digestive & Metabolic Health", "Preventive Care"],
    bio: "Certified Unani Physician (B.U.M.S.) delivering classical herbal therapeutics, metabolic health treatments, and holistic natural healing at Ojas Hospital."
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
