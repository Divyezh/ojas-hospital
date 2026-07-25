import { Department, Doctor, Facility, Testimonial, GalleryItem, FAQItem, HospitalStat, EmergencyInfo } from '@/types';

export const EMERGENCY_INFO: EmergencyInfo = {
  hotline: "+91 98251 37768",
  ambulance: "+91 98251 37768",
  erWaitTime: "Available 24×7",
  traumaCenterLevel: "Emergency Care",
  address: "Jasval Bhavan, Char Rasta, Rakhial, Ahmedabad, Gujarat – 380021",
};

export const HOSPITAL_STATS: HospitalStat[] = [
  {
    label: "Successful Treatments",
    value: 50000,
    suffix: "+",
    description: "Patients treated with compassionate care."
  },
  {
    label: "Expert Doctors",
    value: 20,
    suffix: "+",
    description: "Experienced medical professionals across specialties."
  },
  {
    label: "Patient Satisfaction",
    value: 99,
    suffix: "%",
    description: "Based on patient reviews and feedback."
  },
  {
    label: "Years of Trust",
    value: 15,
    suffix: "+",
    description: "Serving the Ahmedabad community."
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: "general-medicine",
    name: "General Medicine",
    slug: "general-medicine",
    iconName: "Stethoscope",
    description: "Comprehensive medical care for adult diseases and preventive health checkups.",
    fullDescription: "Our General Medicine department provides primary and specialized care for acute and chronic adult illnesses, focusing on disease prevention, diagnosis, and non-surgical treatments.",
    headOfDepartment: "Chief Physician",
    features: [
      "Preventive Health Checkups",
      "Chronic Disease Management",
      "Fever & Infection Treatment",
      "Adult Immunizations"
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    stats: { surgeries: "N/A", satisfaction: "98%", specialists: 4 }
  },
  {
    id: "general-surgery",
    name: "General Surgery",
    slug: "general-surgery",
    iconName: "Activity",
    description: "Advanced surgical interventions including laparoscopic and open procedures.",
    fullDescription: "Our surgical team is equipped to handle complex and routine general surgeries with a focus on minimally invasive techniques for faster recovery.",
    headOfDepartment: "Chief Surgeon",
    features: [
      "Laparoscopic Surgery",
      "Hernia Repair",
      "Appendectomy",
      "Gallbladder Surgery"
    ],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    stats: { surgeries: "10,000+", satisfaction: "99%", specialists: 3 }
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    slug: "orthopedics",
    iconName: "Bone",
    description: "Treatment for bone, joint, and spine disorders including fracture management.",
    fullDescription: "We provide comprehensive orthopedic care from trauma and fracture management to joint replacements and sports injury treatments.",
    headOfDepartment: "Chief Orthopedic Surgeon",
    features: [
      "Fracture & Trauma Care",
      "Joint Replacement",
      "Sports Injuries",
      "Spine Care"
    ],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    stats: { surgeries: "5,000+", satisfaction: "98.5%", specialists: 3 }
  },
  {
    id: "gynecology",
    name: "Gynecology",
    slug: "gynecology",
    iconName: "Baby",
    description: "Women's health, maternity care, and advanced gynecological treatments.",
    fullDescription: "Dedicated to women's health across all stages of life, offering maternity services, preventative screenings, and advanced surgical interventions.",
    headOfDepartment: "Chief Gynecologist",
    features: [
      "Maternity Care",
      "Normal & Cesarean Deliveries",
      "Women's Health Screenings",
      "Gynecological Surgeries"
    ],
    image: "https://images.unsplash.com/photo-1581595220892-c0739db3ba8c?auto=format&fit=crop&q=80&w=800",
    stats: { surgeries: "8,000+", satisfaction: "99%", specialists: 4 }
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    slug: "pediatrics",
    iconName: "Smile",
    description: "Compassionate healthcare for infants, children, and adolescents.",
    fullDescription: "Providing expert pediatric care, vaccinations, and specialized treatments for childhood illnesses in a child-friendly environment.",
    headOfDepartment: "Chief Pediatrician",
    features: [
      "Newborn Care",
      "Childhood Vaccinations",
      "Pediatric Infections",
      "Growth & Development"
    ],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    stats: { surgeries: "N/A", satisfaction: "99.5%", specialists: 2 }
  },

  {
    id: "dermatology",
    name: "Dermatology",
    slug: "dermatology",
    iconName: "Activity",
    description: "Advanced skin care and treatment for dermatological conditions.",
    fullDescription: "Providing comprehensive medical and cosmetic dermatology services for skin, hair, and nail disorders.",
    headOfDepartment: "Chief Dermatologist",
    features: [
      "Acne Treatment",
      "Skin Allergies",
      "Hair Loss Treatment",
      "Cosmetic Procedures"
    ],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    stats: { surgeries: "N/A", satisfaction: "98%", specialists: 2 }
  },
  {
    id: "cardiology",
    name: "Cardiology",
    slug: "cardiology",
    iconName: "HeartPulse",
    description: "Expert cardiac care, diagnostics, and management of heart diseases.",
    fullDescription: "Dedicated to heart health with advanced ECG, echo, and treatments for cardiovascular conditions.",
    headOfDepartment: "Chief Cardiologist",
    features: [
      "ECG & Echocardiogram",
      "Heart Failure Management",
      "Hypertension Care",
      "Preventive Cardiology"
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    stats: { surgeries: "1,200+", satisfaction: "99%", specialists: 2 }
  },

  {
    id: "emergency-care",
    name: "Emergency Care",
    slug: "emergency-care",
    iconName: "Siren",
    description: "24x7 immediate response and critical care for medical emergencies.",
    fullDescription: "Our casualty department is fully equipped to handle all medical and surgical emergencies around the clock.",
    headOfDepartment: "Emergency Head",
    features: [
      "24/7 Availability",
      "Trauma Care",
      "Immediate Resuscitation",
      "Critical Care Transport"
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    stats: { surgeries: "N/A", satisfaction: "99%", specialists: 5 }
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. Aejaz Ansari",
    title: "General Physician",
    departmentId: "general-medicine",
    departmentName: "General Medicine",
    qualifications: "MBBS, MD",
    experienceYears: 10,
    rating: 4.5,
    reviewCount: 100,
    availability: "Mon - Sat",
    initials: "AA",
    color: "Royal Blue",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced General Physician dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-2",
    name: "Dr. Manishbhai Soni",
    title: "Cardiologist",
    departmentId: "cardiology",
    departmentName: "Cardiology",
    qualifications: "MBBS, MD",
    experienceYears: 11,
    rating: 4.6,
    reviewCount: 112,
    availability: "Mon - Sat",
    initials: "MS",
    color: "Emerald Green",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Cardiologist dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-3",
    name: "Dr. Karan Shah",
    title: "Neurologist",
    departmentId: "neurology",
    departmentName: "Neurology",
    qualifications: "MBBS, MD",
    experienceYears: 12,
    rating: 4.7,
    reviewCount: 124,
    availability: "Mon - Sat",
    initials: "KS",
    color: "Crimson Red",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Neurologist dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-4",
    name: "Dr. Shankar Kumawat",
    title: "Orthopedic Surgeon",
    departmentId: "orthopedics",
    departmentName: "Orthopedics",
    qualifications: "MBBS, MD",
    experienceYears: 13,
    rating: 4.8,
    reviewCount: 136,
    availability: "Mon - Sat",
    initials: "SK",
    color: "Deep Purple",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Orthopedic Surgeon dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-5",
    name: "Dr. Bharat Jain",
    title: "General Surgeon",
    departmentId: "general-surgery",
    departmentName: "General Surgery",
    qualifications: "MBBS, MD",
    experienceYears: 14,
    rating: 4.9,
    reviewCount: 148,
    availability: "Mon - Sat",
    initials: "BJ",
    color: "Navy Blue",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced General Surgeon dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-6",
    name: "Dr. Anand Tank",
    title: "Pediatrician",
    departmentId: "pediatrics",
    departmentName: "Pediatrics",
    qualifications: "MBBS, MD",
    experienceYears: 15,
    rating: 4.5,
    reviewCount: 160,
    availability: "Mon - Sat",
    initials: "AT",
    color: "Orange",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Pediatrician dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-7",
    name: "Dr. Dipakbhai",
    title: "Emergency Physician",
    departmentId: "emergency-care",
    departmentName: "Emergency Care",
    qualifications: "MBBS, MD",
    experienceYears: 16,
    rating: 4.6,
    reviewCount: 172,
    availability: "Mon - Sat",
    initials: "DK",
    color: "Forest Green",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Emergency Physician dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-8",
    name: "Dr. Vikas Gupta",
    title: "Ophthalmologist",
    departmentId: "ophthalmology",
    departmentName: "Ophthalmology",
    qualifications: "MBBS, MD",
    experienceYears: 17,
    rating: 4.7,
    reviewCount: 184,
    availability: "Mon - Sat",
    initials: "VG",
    color: "Teal",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Ophthalmologist dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-9",
    name: "Dr. Chetna Soni",
    title: "Gynecologist",
    departmentId: "gynecology",
    departmentName: "Gynecology",
    qualifications: "MBBS, MD",
    experienceYears: 18,
    rating: 4.8,
    reviewCount: 196,
    availability: "Mon - Sat",
    initials: "CS",
    color: "Rose Pink",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Gynecologist dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-10",
    name: "Dr. Viral Patel",
    title: "ENT Specialist",
    departmentId: "ent",
    departmentName: "ENT",
    qualifications: "MBBS, MD",
    experienceYears: 19,
    rating: 4.9,
    reviewCount: 208,
    availability: "Mon - Sat",
    initials: "VP",
    color: "Lime Green",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced ENT Specialist dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-11",
    name: "Dr. Shweta Rai",
    title: "Dermatologist",
    departmentId: "dermatology",
    departmentName: "Dermatology",
    qualifications: "MBBS, MD",
    experienceYears: 10,
    rating: 4.5,
    reviewCount: 220,
    availability: "Mon - Sat",
    initials: "SR",
    color: "Magenta",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Dermatologist dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-12",
    name: "Dr. Aditya Kharadiya",
    title: "Urologist",
    departmentId: "urology",
    departmentName: "Urology",
    qualifications: "MBBS, MD",
    experienceYears: 11,
    rating: 4.6,
    reviewCount: 232,
    availability: "Mon - Sat",
    initials: "AK",
    color: "Indigo",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Urologist dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-13",
    name: "Dr. Ayush Soni",
    title: "Physician",
    departmentId: "general-medicine",
    departmentName: "General Medicine",
    qualifications: "MBBS, MD",
    experienceYears: 12,
    rating: 4.7,
    reviewCount: 244,
    availability: "Mon - Sat",
    initials: "AS",
    color: "Cyan",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Physician dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-14",
    name: "Dr. Hemsukh Soni",
    title: "Cardiologist",
    departmentId: "cardiology",
    departmentName: "Cardiology",
    qualifications: "MBBS, MD",
    experienceYears: 13,
    rating: 4.8,
    reviewCount: 256,
    availability: "Mon - Sat",
    initials: "HS",
    color: "Gold",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Cardiologist dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-15",
    name: "Dr. Anupbhai Patel",
    title: "Orthopedic Specialist",
    departmentId: "orthopedics",
    departmentName: "Orthopedics",
    qualifications: "MBBS, MD",
    experienceYears: 14,
    rating: 4.9,
    reviewCount: 268,
    availability: "Mon - Sat",
    initials: "AP",
    color: "Dark Red",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Orthopedic Specialist dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-16",
    name: "Dr. Vishalbhai",
    title: "Surgeon",
    departmentId: "general-surgery",
    departmentName: "General Surgery",
    qualifications: "MBBS, MD",
    experienceYears: 15,
    rating: 4.5,
    reviewCount: 280,
    availability: "Mon - Sat",
    initials: "VS",
    color: "Steel Blue",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Surgeon dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-17",
    name: "Dr. Paritosh Solanki",
    title: "Neurologist",
    departmentId: "neurology",
    departmentName: "Neurology",
    qualifications: "MBBS, MD",
    experienceYears: 16,
    rating: 4.6,
    reviewCount: 292,
    availability: "Mon - Sat",
    initials: "PS",
    color: "Violet",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Neurologist dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-18",
    name: "Dr. Mayur Mishra",
    title: "Pediatrician",
    departmentId: "pediatrics",
    departmentName: "Pediatrics",
    qualifications: "MBBS, MD",
    experienceYears: 17,
    rating: 4.7,
    reviewCount: 304,
    availability: "Mon - Sat",
    initials: "MM",
    color: "Turquoise",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Pediatrician dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-19",
    name: "Dr. Kunjal Modi",
    title: "Gynecologist",
    departmentId: "gynecology",
    departmentName: "Gynecology",
    qualifications: "MBBS, MD",
    experienceYears: 18,
    rating: 4.8,
    reviewCount: 316,
    availability: "Mon - Sat",
    initials: "KM",
    color: "Amber",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Gynecologist dedicated to providing premium healthcare services at Ojas Hospital."
  },
  {
    id: "doc-20",
    name: "Dr. Asrar Ansari",
    title: "Emergency Physician",
    departmentId: "emergency-care",
    departmentName: "Emergency Care",
    qualifications: "MBBS, MD",
    experienceYears: 19,
    rating: 4.9,
    reviewCount: 328,
    availability: "Mon - Sat",
    initials: "AA",
    color: "Deep Cyan",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced Emergency Physician dedicated to providing premium healthcare services at Ojas Hospital."
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
    title: "Doctor Consultation Cabins",
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
    id: "fac-6",
    title: "Special Rooms",
    category: "Inpatient",
    description: "Private patient rooms offering comfort and personalized care.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    features: ["Private Room", "TV & WiFi", "Sofa for Attendant"]
  },
  {
    id: "fac-7",
    title: "Deluxe Rooms",
    category: "Inpatient",
    description: "Premium suites providing maximum comfort for patients and families.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    features: ["Premium Furnishings", "Mini Fridge", "VIP Services"]
  },
  {
    id: "fac-8",
    title: "Digital X-Ray",
    category: "Diagnostics",
    description: "High-resolution digital radiography for quick and accurate bone imaging.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    features: ["Low Radiation", "Instant Results", "High Clarity"]
  },
  {
    id: "fac-9",
    title: "ECG",
    category: "Diagnostics",
    description: "Electrocardiogram services for immediate cardiac assessment.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    features: ["Cardiac Check", "Quick Reporting", "Painless Procedure"]
  },
  {
    id: "fac-10",
    title: "Sonography",
    category: "Diagnostics",
    description: "Advanced ultrasound imaging for soft tissue and internal organ diagnostics.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    features: ["Pregnancy Scans", "Abdominal Scans", "Non-invasive"]
  },
  {
    id: "fac-11",
    title: "Laboratory",
    category: "Diagnostics",
    description: "In-house pathology lab for comprehensive blood and fluid testing.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    features: ["Automated Analyzers", "Accurate Reports", "Home Collection Available"]
  },
  {
    id: "fac-12",
    title: "Nebulizer",
    category: "Treatment",
    description: "Respiratory therapy support for asthma and breathing difficulties.",
    image: "https://images.unsplash.com/photo-1581595220892-c0739db3ba8c?auto=format&fit=crop&q=80&w=800",
    features: ["Breathing Support", "Pediatric Friendly", "Sterile Equipment"]
  },
  {
    id: "fac-13",
    title: "Pharmacy",
    category: "Services",
    description: "In-house pharmacy stocked with authentic medicines and health supplies.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    features: ["Authentic Medicines", "24/7 Availability", "Surgical Supplies"]
  },
  {
    id: "fac-14",
    title: "Cashless Insurance Support",
    category: "Services",
    description: "Dedicated TPA desk to help with cashless mediclaim processing.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    features: ["Multiple TPAs", "Easy Processing", "Claim Assistance"]
  },
  {
    id: "fac-15",
    title: "Ayushman Bharat Assistance",
    category: "Services",
    description: "Support for eligible patients under the PMJAY Ayushman Bharat scheme.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    features: ["Government Scheme", "Affordable Care", "Dedicated Desk"]
  },
  {
    id: "fac-16",
    title: "Modern Medical Equipment",
    category: "Facilities",
    description: "Hospital is equipped with the latest technology for best patient outcomes.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    features: ["Advanced Tech", "Regular Maintenance", "Reliable Results"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr Hemant. Toshikhane",
    meta: "Local Guide · 772 reviews · 4,061 photos",
    rating: 5,
    text: "The doctors and staff treated my family with great care and professionalism. The entire experience was smooth and reassuring. 🙏",
    avatar: "https://avatar.vercel.sh/hemant",
    timeAgo: "a year ago"
  },
  {
    id: "t2",
    name: "Dr Bhargav Kumawat BNYS",
    meta: "8 reviews",
    rating: 5,
    text: "Very nice hospital and good staff and Dr Ojas sir is very nice and polite to patient…",
    avatar: "https://avatar.vercel.sh/bhargav",
    timeAgo: "2 months ago"
  },
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
    image: "/camp1.png",
    caption: "Our latest community medical camp"
  },
  {
    id: "g2",
    title: "Medical Camp 2",
    category: "camps",
    image: "/camp2.png",
    caption: "Free health checkups for the community"
  },
  {
    id: "g3",
    title: "Medical Camp 3",
    category: "camps",
    image: "/camp3.png",
    caption: "Spreading awareness and providing care"
  },
  {
    id: "g4",
    title: "Medical Camp 4",
    category: "camps",
    image: "/camp4.png",
    caption: "Dedicated to community healthcare"
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
    answer: "We offer General Medicine, General Surgery, Orthopedics, Gynecology, Pediatrics, Ophthalmology, ENT, Dermatology, Cardiology, Urology, and more.",
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
    answer: "You can reach us at +91 75748 40735 or our emergency number +91 98251 37768. You can also find our address in the Contact section.",
    category: "general"
  }
];
