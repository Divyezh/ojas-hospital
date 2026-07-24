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
    id: "ophthalmology",
    name: "Ophthalmology (Eye Care)",
    slug: "ophthalmology",
    iconName: "Eye",
    description: "Comprehensive eye care, vision testing, and surgical treatments.",
    fullDescription: "Our eye care department offers advanced diagnostics, cataract surgeries, and treatments for various vision and eye disorders.",
    headOfDepartment: "Chief Ophthalmologist",
    features: [
      "Vision Testing",
      "Cataract Surgery",
      "Glaucoma Treatment",
      "Retinal Care"
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    stats: { surgeries: "3,000+", satisfaction: "98%", specialists: 2 }
  },
  {
    id: "ent",
    name: "ENT",
    slug: "ent",
    iconName: "Ear",
    description: "Specialized care for ear, nose, and throat conditions.",
    fullDescription: "Expert diagnosis and surgical treatment for disorders of the ear, nose, throat, and related structures of the head and neck.",
    headOfDepartment: "Chief ENT Specialist",
    features: [
      "Hearing Tests",
      "Sinus Surgery",
      "Throat Infections",
      "Voice Disorders"
    ],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    stats: { surgeries: "2,500+", satisfaction: "97.5%", specialists: 2 }
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
    id: "urology",
    name: "Urology",
    slug: "urology",
    iconName: "Activity",
    description: "Treatment of urinary tract and male reproductive system disorders.",
    fullDescription: "Comprehensive urological care including kidney stone management, prostate treatments, and minimally invasive surgeries.",
    headOfDepartment: "Chief Urologist",
    features: [
      "Kidney Stone Removal",
      "Prostate Care",
      "Urinary Tract Infections",
      "Endourology"
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    stats: { surgeries: "2,000+", satisfaction: "98.5%", specialists: 2 }
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
  },
  {
    id: "radiology",
    name: "Radiology",
    slug: "radiology",
    iconName: "Activity",
    description: "Advanced imaging services including Digital X-Ray and Sonography.",
    fullDescription: "State-of-the-art diagnostic imaging providing accurate and timely reports for effective medical treatments.",
    headOfDepartment: "Chief Radiologist",
    features: [
      "Digital X-Ray",
      "Sonography / Ultrasound",
      "Accurate Diagnostics",
      "Image-guided Procedures"
    ],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    stats: { surgeries: "N/A", satisfaction: "99%", specialists: 3 }
  },
  {
    id: "laboratory",
    name: "Laboratory",
    slug: "laboratory",
    iconName: "Activity",
    description: "Comprehensive pathology and diagnostic laboratory services.",
    fullDescription: "Fully automated pathology lab ensuring quick, accurate, and reliable test results to support clinical diagnosis.",
    headOfDepartment: "Head Pathologist",
    features: [
      "Blood Tests",
      "Biochemistry",
      "Microbiology",
      "Clinical Pathology"
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    stats: { surgeries: "N/A", satisfaction: "99.5%", specialists: 4 }
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "doc-1",
    name: "Dr. Ojas Specialist",
    title: "Senior Consultant",
    departmentId: "general-medicine",
    departmentName: "General Medicine",
    qualifications: "MBBS, MD",
    experienceYears: 15,
    rating: 4.8,
    reviewCount: 120,
    availability: "Mon - Sat",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    specialties: ["Internal Medicine", "Preventive Care", "Chronic Disease Management"],
    bio: "Experienced physician dedicated to providing comprehensive and compassionate care to patients."
  },
  {
    id: "doc-2",
    name: "Dr. Ojas Surgeon",
    title: "Chief Surgeon",
    departmentId: "general-surgery",
    departmentName: "General Surgery",
    qualifications: "MBBS, MS",
    experienceYears: 12,
    rating: 4.9,
    reviewCount: 95,
    availability: "Mon, Wed, Fri",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    specialties: ["Laparoscopic Surgery", "Trauma Care", "Gastrointestinal Surgery"],
    bio: "Skilled surgeon specializing in minimally invasive procedures for faster patient recovery."
  },
  {
    id: "doc-3",
    name: "Dr. Ojas Orthopedic",
    title: "Orthopedic Specialist",
    departmentId: "orthopedics",
    departmentName: "Orthopedics",
    qualifications: "MBBS, MS (Ortho)",
    experienceYears: 10,
    rating: 4.7,
    reviewCount: 88,
    availability: "Tue, Thu, Sat",
    image: "https://images.unsplash.com/photo-1594824436951-7f126789ebc1?auto=format&fit=crop&q=80&w=600",
    specialties: ["Joint Replacement", "Fracture Management", "Sports Injuries"],
    bio: "Expert in restoring mobility and treating complex bone and joint disorders."
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "fac-1",
    title: "24×7 Emergency",
    category: "Emergency",
    description: "Immediate response and life-saving care available round the clock.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    features: ["Rapid Response", "Trauma Care", "Resuscitation"],
    badgeText: "24/7"
  },
  {
    id: "fac-2",
    title: "ICU",
    category: "Critical Care",
    description: "Intensive Care Unit equipped with advanced life support systems.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    features: ["Advanced Monitoring", "Ventilator Support", "Specialized Nursing"]
  },
  {
    id: "fac-3",
    title: "Operation Theatre",
    category: "Surgery",
    description: "Modern, sterile surgical suites for all major operations.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    features: ["Sterile Environment", "Advanced Anesthesia", "Surgical Lighting"]
  },
  {
    id: "fac-4",
    title: "General Ward",
    category: "Inpatient",
    description: "Clean and comfortable general wards for inpatient care.",
    image: "https://images.unsplash.com/photo-1581595220892-c0739db3ba8c?auto=format&fit=crop&q=80&w=800",
    features: ["24/7 Nursing", "Spacious Beds", "Clean Environment"]
  },
  {
    id: "fac-5",
    title: "Semi Special Rooms",
    category: "Inpatient",
    description: "Shared patient rooms with enhanced privacy and amenities.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    features: ["Air Conditioned", "Attached Washroom", "Attendant Bed"]
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
    patientName: "Patient Name",
    patientAge: 45,
    treatment: "General Treatment",
    department: "Ahmedabad",
    rating: 5,
    quote: "The doctors and staff treated my family with great care and professionalism. The entire experience was smooth and reassuring.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    verified: true,
    date: "a year ago"
  },
  {
    id: "t2",
    patientName: "Patient Name",
    patientAge: 32,
    treatment: "Maternity",
    department: "Ahmedabad",
    rating: 5,
    quote: "The doctors and staff treated my family with great care and professionalism. The entire experience was smooth and reassuring.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    verified: true,
    date: "2 months ago"
  },
  {
    id: "t3",
    patientName: "Patient Name",
    patientAge: 55,
    treatment: "Orthopedics",
    department: "Ahmedabad",
    rating: 5,
    quote: "The doctors and staff treated my family with great care and professionalism. The entire experience was smooth and reassuring.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    verified: true,
    date: "3 weeks ago"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Hospital Reception",
    category: "facilities",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    caption: "Welcoming and clean reception area"
  },
  {
    id: "g2",
    title: "Operation Theatre",
    category: "operating-rooms",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800",
    caption: "Advanced sterile surgical suites"
  },
  {
    id: "g3",
    title: "Doctors",
    category: "facilities",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    caption: "Our team of experienced medical professionals"
  },
  {
    id: "g4",
    title: "Medical Equipment",
    category: "diagnostics",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    caption: "State-of-the-art diagnostic technology"
  },
  {
    id: "g5",
    title: "Patient Care",
    category: "lounges",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    caption: "Compassionate care for every patient"
  },
  {
    id: "g6",
    title: "Hospital Building",
    category: "facilities",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    caption: "Ojas Hospital infrastructure"
  },
  {
    id: "g7",
    title: "Medical Camps",
    category: "facilities",
    image: "https://images.unsplash.com/photo-1581595220892-c0739db3ba8c?auto=format&fit=crop&q=80&w=800",
    caption: "Community health and awareness camps"
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
