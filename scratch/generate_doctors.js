const fs = require('fs');

const doctorsInput = [
  ["Dr. Aejaz Ansari", "AA", "Royal Blue", "general-medicine", "General Medicine", "General Physician"],
  ["Dr. Manishbhai Soni", "MS", "Emerald Green", "cardiology", "Cardiology", "Cardiologist"],
  ["Dr. Karan Shah", "KS", "Crimson Red", "neurology", "Neurology", "Neurologist"],
  ["Dr. Shankar Kumawat", "SK", "Deep Purple", "orthopedics", "Orthopedics", "Orthopedic Surgeon"],
  ["Dr. Bharat Jain", "BJ", "Navy Blue", "general-surgery", "General Surgery", "General Surgeon"],
  ["Dr. Anand Tank", "AT", "Orange", "pediatrics", "Pediatrics", "Pediatrician"],
  ["Dr. Dipakbhai", "DK", "Forest Green", "emergency-care", "Emergency Care", "Emergency Physician"],
  ["Dr. Vikas Gupta", "VG", "Teal", "ophthalmology", "Ophthalmology", "Ophthalmologist"],
  ["Dr. Chetna Soni", "CS", "Rose Pink", "gynecology", "Gynecology", "Gynecologist"],
  ["Dr. Viral Patel", "VP", "Lime Green", "ent", "ENT", "ENT Specialist"],
  ["Dr. Shweta Rai", "SR", "Magenta", "dermatology", "Dermatology", "Dermatologist"],
  ["Dr. Aditya Kharadiya", "AK", "Indigo", "urology", "Urology", "Urologist"],
  ["Dr. Ayush Soni", "AS", "Cyan", "general-medicine", "General Medicine", "Physician"],
  ["Dr. Hemsukh Soni", "HS", "Gold", "cardiology", "Cardiology", "Cardiologist"],
  ["Dr. Anupbhai Patel", "AP", "Dark Red", "orthopedics", "Orthopedics", "Orthopedic Specialist"],
  ["Dr. Vishalbhai", "VS", "Steel Blue", "general-surgery", "General Surgery", "Surgeon"],
  ["Dr. Paritosh Solanki", "PS", "Violet", "neurology", "Neurology", "Neurologist"],
  ["Dr. Mayur Mishra", "MM", "Turquoise", "pediatrics", "Pediatrics", "Pediatrician"],
  ["Dr. Kunjal Modi", "KM", "Amber", "gynecology", "Gynecology", "Gynecologist"],
  ["Dr. Asrar Ansari", "AA", "Deep Cyan", "emergency-care", "Emergency Care", "Emergency Physician"]
];

let doctorsString = "export const DOCTORS: Doctor[] = [\n";

doctorsInput.forEach((doc, index) => {
  const [name, initials, color, depId, depName, title] = doc;
  doctorsString += `  {
    id: "doc-${index + 1}",
    name: "${name}",
    title: "${title}",
    departmentId: "${depId}",
    departmentName: "${depName}",
    qualifications: "MBBS, MD",
    experienceYears: ${10 + (index % 10)},
    rating: ${(4.5 + (index % 5) * 0.1).toFixed(1)},
    reviewCount: ${100 + index * 12},
    availability: "Mon - Sat",
    initials: "${initials}",
    color: "${color}",
    specialties: ["Consultation", "Treatment", "Specialist Care"],
    bio: "Experienced ${title} dedicated to providing premium healthcare services at Ojas Hospital."
  }${index === doctorsInput.length - 1 ? '' : ','}\n`;
});

doctorsString += "];";

const targetPath = 'c:\\\\Users\\\\Divyesh\\\\OneDrive\\\\Desktop\\\\client\\\\constants\\\\hospitalData.ts';
let content = fs.readFileSync(targetPath, 'utf8');

const regex = /export const DOCTORS: Doctor\[\] = \[[\s\S]*?\];/;
content = content.replace(regex, doctorsString);

fs.writeFileSync(targetPath, content);
console.log('Successfully updated DOCTORS array in hospitalData.ts');
