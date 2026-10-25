// ===== CONTENT: customise this file for each hospital demo =====

export const CONFIG = {
  name: "Harbourview Private Hospital",
  short: "Harbourview",
  phone: "(02) 9000 0000",
  phoneLink: "+61290000000",
  email: "info@harbourview.example",
} as const;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Patient info", href: "/visit" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export type Service = {
  slug: string;
  name: string;
  spec: string;
  icon: string;
  blurb: string;
  long: string;
  treats: string[];
  campus: string;
  ref: string;
  stay: string;
};

export const SERVICES: Service[] = [
  {
    slug: "cardiology",
    name: "Heart & Cardiac Care",
    spec: "Cardiology",
    icon: "M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z",
    blurb: "Comprehensive heart assessments, cardiac procedures and recovery support.",
    long: "Our cardiac care concept brings assessment, diagnosis, treatment planning and recovery support together, with a focus on clear communication at every stage.",
    treats: [
      "Cardiac assessment and diagnostics",
      "Coronary angiography and stenting",
      "Heart rhythm evaluation",
      "Heart failure management",
      "Cardiac rehabilitation",
    ],
    campus: "Sydney Harbour, North Shore",
    ref: "Referral requirements vary by appointment",
    stay: "Depends on the procedure and individual care plan",
  },
  {
    slug: "oncology",
    name: "Cancer Care Centre",
    spec: "Oncology",
    icon: "M12 3v18M3 12h18",
    blurb: "Coordinated cancer treatment with specialist and supportive care.",
    long: "Cancer care involves more than treatment alone. This service concept brings medical specialists, nursing support and patient guidance together around an individual care plan.",
    treats: [
      "Medical oncology consultations",
      "Chemotherapy planning",
      "Radiation oncology consultations",
      "Cancer screening coordination",
      "Supportive and palliative care",
    ],
    campus: "Sydney Harbour",
    ref: "Specialist or GP referral may be required",
    stay: "Outpatient visits or planned admission",
  },
  {
    slug: "maternity",
    name: "Maternity & Women's Health",
    spec: "Obstetrics",
    icon: "M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM6 21c0-4 2.5-7 6-7s6 3 6 7",
    blurb: "Supportive pregnancy care, birth planning and postnatal guidance.",
    long: "From antenatal appointments to postnatal support, the maternity service concept prioritises reassurance, informed choices and respectful care for growing families.",
    treats: [
      "Antenatal consultations",
      "Pregnancy and birth planning",
      "Obstetric assessments",
      "Postnatal care",
      "Breastfeeding guidance",
    ],
    campus: "Sydney Harbour, Parramatta",
    ref: "Confirm referral requirements when booking",
    stay: "Depends on birth type and clinical needs",
  },
  {
    slug: "orthopaedics",
    name: "Bone, Joint & Spine Care",
    spec: "Orthopaedics",
    icon: "M5 19l14-14M5 5l3 3M16 16l3 3",
    blurb: "Orthopaedic assessments, joint care and rehabilitation planning.",
    long: "The orthopaedics service concept combines specialist assessment with treatment planning and recovery guidance to help patients understand their options.",
    treats: [
      "Hip and knee conditions",
      "Sports injuries",
      "Shoulder and joint conditions",
      "Spine assessments",
      "Fracture and injury care",
    ],
    campus: "Sydney Harbour, North Shore",
    ref: "Referral requirements vary by specialist",
    stay: "Outpatient care or planned admission",
  },
  {
    slug: "paediatrics",
    name: "Children's Health",
    spec: "Paediatrics",
    icon: "M12 3l2.5 6 6.5.5-5 4.2 1.7 6.3L12 16.5 6.3 20l1.7-6.3-5-4.2 6.5-.5z",
    blurb: "Child-focused consultations and family-centred care.",
    long: "Our paediatric service concept is designed around children and their families, with an emphasis on approachable communication and age-appropriate care.",
    treats: [
      "Newborn and infant assessments",
      "Common childhood illnesses",
      "Asthma and allergy assessments",
      "Child health consultations",
      "Growth and development reviews",
    ],
    campus: "Sydney Harbour, Parramatta",
    ref: "Confirm referral requirements when booking",
    stay: "Outpatient visit or admission when required",
  },
  {
    slug: "surgery",
    name: "Surgical Services",
    spec: "Surgery",
    icon: "M12 6v6l4 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
    blurb: "Planned surgical consultations, procedures and recovery support.",
    long: "The surgical services concept guides patients from consultation and preparation through their procedure and follow-up, with clear information at each step.",
    treats: [
      "General surgery consultations",
      "Hernia assessment",
      "Gallbladder conditions",
      "Endoscopy coordination",
      "Minor surgical procedures",
    ],
    campus: "North Shore, Parramatta",
    ref: "Specialist referral may be required",
    stay: "Day procedure or planned admission",
  },
  {
    slug: "imaging",
    name: "Medical Imaging",
    spec: "Radiology",
    icon: "M3 5h18v14H3zM8 12h8",
    blurb: "Diagnostic imaging services to support clinical assessment.",
    long: "Medical imaging helps clinicians investigate symptoms and plan care. The service concept covers appointment coordination and communication with referring practitioners.",
    treats: [
      "X-ray",
      "Ultrasound",
      "CT scanning",
      "MRI scanning",
      "Diagnostic imaging consultations",
    ],
    campus: "All campuses",
    ref: "Referral requirements depend on the examination",
    stay: "Usually outpatient",
  },
  {
    slug: "rehabilitation",
    name: "Rehabilitation & Recovery",
    spec: "Rehabilitation",
    icon: "M4 17c3-6 5 4 8-2s5 2 8-5",
    blurb: "Individualised recovery support to help patients regain function.",
    long: "Rehabilitation focuses on practical goals, guided recovery and improving everyday function after illness, injury or surgery.",
    treats: [
      "Post-operative rehabilitation",
      "Physiotherapy coordination",
      "Mobility and balance support",
      "Occupational therapy",
      "Recovery planning",
    ],
    campus: "Sydney Harbour, Parramatta",
    ref: "Referral requirements vary by service",
    stay: "Inpatient or outpatient, depending on needs",
  },
];

export const SPECS: string[] = SERVICES.map((service) => service.spec);

export type Doctor = {
  name: string;
  spec: string;
  role: string;
  langs: string;
};

export const DOCTORS: Doctor[] = [
  {
    name: "Dr Amelia Chen",
    spec: "Cardiology",
    role: "Consultant Cardiologist",
    langs: "English, Mandarin",
  },
  {
    name: "Dr Rajesh Mehta",
    spec: "Cardiology",
    role: "Cardiac Rhythm Specialist",
    langs: "English, Hindi",
  },
  {
    name: "Prof. Daniel Okafor",
    spec: "Oncology",
    role: "Medical Oncology Consultant",
    langs: "English",
  },
  {
    name: "Dr Grace Alvarez",
    spec: "Oncology",
    role: "Radiation Oncology Consultant",
    langs: "English, Spanish",
  },
  {
    name: "Dr Sophie Nguyen",
    spec: "Obstetrics",
    role: "Consultant Obstetrician",
    langs: "English, Vietnamese",
  },
  {
    name: "Dr Fatima Haddad",
    spec: "Obstetrics",
    role: "Women's Health Consultant",
    langs: "English, Arabic",
  },
  {
    name: "Dr Liam Patterson",
    spec: "Orthopaedics",
    role: "Hip and Knee Specialist",
    langs: "English",
  },
  {
    name: "Dr Mei Tanaka",
    spec: "Orthopaedics",
    role: "Sports and Shoulder Specialist",
    langs: "English, Japanese",
  },
  {
    name: "Dr Aroha Williams",
    spec: "Paediatrics",
    role: "Consultant Paediatrician",
    langs: "English, Te Reo Māori",
  },
  {
    name: "Dr Hannah Kowalski",
    spec: "Surgery",
    role: "General Surgery Consultant",
    langs: "English, Polish",
  },
  {
    name: "Dr Samuel Reid",
    spec: "Radiology",
    role: "Diagnostic Imaging Consultant",
    langs: "English",
  },
  {
    name: "Dr Priya Raman",
    spec: "Rehabilitation",
    role: "Rehabilitation Consultant",
    langs: "English, Tamil",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Do I need a referral?",
    a: "Referral requirements depend on the specialist and service. Please contact the hospital or your GP before booking to confirm what you need.",
  },
  {
    q: "How can I check the cost of treatment?",
    a: "Ask the hospital team for an itemised estimate before your appointment or admission. Your out-of-pocket costs may depend on your insurance, cover and treating specialist's fees.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "Bring your appointment details, relevant referral and test results, a list of current medicines, and any insurance or identification documents requested by the hospital.",
  },
  {
    q: "Can a family member accompany me?",
    a: "Visitor and support-person arrangements depend on the department and clinical circumstances. Please confirm the current policy with the hospital team before your visit.",
  },
  {
    q: "Can I request an interpreter?",
    a: "Contact the hospital before your appointment to discuss language assistance and interpreter availability.",
  },
  {
    q: "Is parking available?",
    a: "Parking availability, accessibility and fees vary by location. Contact the relevant campus before travelling to confirm the arrangements.",
  },
];

export const CAMPUSES = [
  {
    name: "Sydney Harbour",
    address: "120 Harbour Street, Sydney NSW 2000",
    phone: "(02) 9000 0000",
    tel: "+61290000000",
    note: "Demo main campus for the hospital website concept.",
  },
  {
    name: "North Shore",
    address: "45 Pacific Highway, North Sydney NSW 2060",
    phone: "(02) 9000 0100",
    tel: "+61290000100",
    note: "Demo campus for specialist clinics and planned procedures.",
  },
  {
    name: "Parramatta",
    address: "8 Church Street, Parramatta NSW 2150",
    phone: "(02) 9000 0200",
    tel: "+61290000200",
    note: "Demo campus for outpatient services and rehabilitation.",
  },
];

export const FUNDS = [
  "Medibank",
  "Bupa",
  "HCF",
  "NIB",
  "AHM",
  "HBF",
  "DVA",
  "Medicare",
];

export const initials = (name: string) =>
  name
    .replace(/^(Dr|Prof\\.)\\s/, "")
    .split(" ")
    .map((word) => word[0])
    .join("");