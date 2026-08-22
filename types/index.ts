export interface Department {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  description: string;
  fullDescription: string;
  headOfDepartment: string;
  features: string[];
  image: string;
  stats: {
    surgeries: string;
    satisfaction: string;
    specialists: number;
  };
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  departmentId: string;
  departmentName: string;
  qualifications: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  availability: string;
  image?: string;
  initials?: string;
  color?: string;
  specialties: string[];
  bio: string;
  branch?: string;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  badgeText?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  meta?: string;
  rating: number;
  text: string;
  avatar: string;
  timeAgo: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'camps' | 'media' | 'all';
  image: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'appointments' | 'insurance' | 'emergency';
}

export interface HospitalStat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
}

export interface EmergencyInfo {
  hotline: string;
  ambulance: string;
  erWaitTime: string;
  traumaCenterLevel: string;
  address: string;
}

export interface AppointmentFormData {
  patientName: string;
  email: string;
  phone: string;
  department: string;
  doctor?: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  urgency: 'routine' | 'urgent' | 'emergency';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface HospitalEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: 'Health Camp' | 'Medical Campaign' | 'Awareness Drive' | 'Vaccination Drive' | 'Community Event';
  image: string;
  isUpcoming: boolean;
}

export interface MediaCoverage {
  id: string;
  title: string;
  outlet: string;
  type: 'Electronic Media' | 'Print Media';
  date: string;
  link?: string;
  thumbnail: string;
  summary: string;
}

export interface Award {
  id: string;
  title: string;
  issuingBody: string;
  year: string;
  recipient: string;
  description?: string;
  image?: string;
}
