export const CONFIG = {
  name: "Harbourview Medical Clinic",
  short: "Harbourview",
  phone: "(555) 010-2020",
  phoneLink: "+15550102020",
  email: "hello@harbourview.example",
} as const;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Our Providers", href: "/doctors" },
  { label: "Patient Resources", href: "/visit" },
  { label: "About Us", href: "/about" },
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
    slug: "primary-care",
    name: "Primary Care",
    spec: "Primary Care",
    icon: "M12 3v18M3 12h18",
    blurb: "Everyday healthcare focused on prevention, wellness and ongoing care.",
    long: "A welcoming primary care experience designed around preventive health, routine visits and long-term relationships with your care team.",
    treats: [
      "Annual wellness visits",
      "Routine health screenings",
      "Preventive care",
      "Chronic condition follow-ups",
      "General health consultations",
    ],
    campus: "Clinic location varies",
    ref: "Ask the clinic whether a referral is needed",
    stay: "Outpatient appointment",
  },
  {
    slug: "family-medicine",
    name: "Family Medicine",
    spec: "Family Medicine",
    icon: "M3 12l9-9 9 9M5 10v10h14V10",
    blurb: "Healthcare for adults and families through different stages of life.",
    long: "Family medicine brings routine healthcare, preventive services and ongoing health management together for individuals and families.",
    treats: [
      "Routine checkups",
      "Preventive screenings",
      "Common illnesses",
      "Health and lifestyle guidance",
      "Ongoing condition management",
    ],
    campus: "Clinic location varies",
    ref: "Contact the clinic for appointment requirements",
    stay: "Outpatient appointment",
  },
  {
    slug: "womens-health",
    name: "Women's Health",
    spec: "Women's Health",
    icon: "M12 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 13v8M8 17h8",
    blurb: "Personalized care and health consultations for women.",
    long: "Women's health visits can support preventive care, routine consultations and conversations about individual health needs.",
    treats: [
      "Preventive health visits",
      "Routine women's health consultations",
      "Reproductive health discussions",
      "Health screenings",
      "Care coordination",
    ],
    campus: "Clinic location varies",
    ref: "Ask about referral requirements when booking",
    stay: "Outpatient appointment",
  },
  {
    slug: "cardiology",
    name: "Heart Health",
    spec: "Cardiology",
    icon: "M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z",
    blurb: "Heart health consultations and coordination with cardiac specialists.",
    long: "Cardiology services may include specialist assessments and care planning based on individual needs and provider availability.",
    treats: [
      "Heart health consultations",
      "Cardiovascular risk discussions",
      "Blood pressure follow-ups",
      "Specialist care coordination",
      "Diagnostic testing coordination",
    ],
    campus: "Availability varies by clinic",
    ref: "Referral requirements vary by provider and insurance plan",
    stay: "Usually outpatient",
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    spec: "Dermatology",
    icon: "M12 3a9 9 0 1 0 9 9M12 3v9h9",
    blurb: "Skin health consultations and evaluation of common skin concerns.",
    long: "Dermatology appointments help patients discuss skin concerns and understand appropriate evaluation and treatment options.",
    treats: [
      "Acne consultations",
      "Eczema and rash evaluation",
      "Skin health assessments",
      "Mole and lesion evaluation",
      "Ongoing skin condition management",
    ],
    campus: "Availability varies by clinic",
    ref: "Ask whether a referral is needed",
    stay: "Outpatient appointment",
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    spec: "Orthopedics",
    icon: "M5 19l14-14M5 5l3 3M16 16l3 3",
    blurb: "Musculoskeletal consultations for joint, bone and mobility concerns.",
    long: "Orthopedic care focuses on assessment, treatment discussions and coordination of appropriate next steps for musculoskeletal conditions.",
    treats: [
      "Joint pain consultations",
      "Sports injury evaluation",
      "Shoulder and knee concerns",
      "Mobility assessments",
      "Recovery planning",
    ],
    campus: "Availability varies by clinic",
    ref: "Referral requirements vary by provider and insurance plan",
    stay: "Outpatient appointment",
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    spec: "Pediatrics",
    icon: "M12 3l2.5 6 6.5.5-5 4.2 1.7 6.3L12 16.5 6.3 20l1.7-6.3-5-4.2 6.5-.5z",
    blurb: "Child-focused consultations and preventive care for growing families.",
    long: "Pediatric visits are designed to support children's health through age-appropriate consultations and family-focused communication.",
    treats: [
      "Well-child visits",
      "Growth and development discussions",
      "Routine childhood concerns",
      "Preventive health guidance",
      "Care coordination",
    ],
    campus: "Availability varies by clinic",
    ref: "Confirm age requirements and referral policies",
    stay: "Outpatient appointment",
  },
  {
    slug: "behavioral-health",
    name: "Behavioral Health",
    spec: "Behavioral Health",
    icon: "M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
    blurb: "Supportive behavioral health consultations and care coordination.",
    long: "Behavioral health services may provide a supportive starting point for discussing emotional wellbeing and exploring appropriate care options.",
    treats: [
      "Initial consultations",
      "Wellbeing assessments",
      "Care planning",
      "Referral coordination",
      "Follow-up appointments",
    ],
    campus: "Availability varies by clinic",
    ref: "Ask about provider availability and insurance coverage",
    stay: "Appointment format varies by provider",
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
    name: "Jordan Taylor, MD",
    spec: "Primary Care",
    role: "Primary Care Provider — Demo Profile",
    langs: "English",
  },
  {
    name: "Morgan Lee, DO",
    spec: "Family Medicine",
    role: "Family Medicine Provider — Demo Profile",
    langs: "English, Mandarin",
  },
  {
    name: "Alex Morgan, MD",
    spec: "Women's Health",
    role: "Women's Health Provider — Demo Profile",
    langs: "English, Spanish",
  },
  {
    name: "Casey Bennett, MD",
    spec: "Cardiology",
    role: "Cardiology Provider — Demo Profile",
    langs: "English",
  },
  {
    name: "Riley Parker, MD",
    spec: "Dermatology",
    role: "Dermatology Provider — Demo Profile",
    langs: "English, Spanish",
  },
  {
    name: "Jamie Brooks, DO",
    spec: "Orthopedics",
    role: "Orthopedic Provider — Demo Profile",
    langs: "English",
  },
  {
    name: "Avery Wilson, MD",
    spec: "Pediatrics",
    role: "Pediatric Provider — Demo Profile",
    langs: "English",
  },
  {
    name: "Drew Carter, MD",
    spec: "Behavioral Health",
    role: "Behavioral Health Provider — Demo Profile",
    langs: "English",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "How do I request an appointment?",
    a: "Use the appointment request option or contact the clinic directly. Your request is not confirmed until the clinic contacts you.",
  },
  {
    q: "Do you accept my insurance?",
    a: "Insurance participation varies by provider and plan. Contact the clinic and your insurance company to verify in-network status and coverage before your visit.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "Bring a photo ID, your insurance card if applicable, a list of medications, and relevant medical records or test results.",
  },
  {
    q: "Will I have out-of-pocket costs?",
    a: "Costs depend on your insurance benefits, deductible, copay, coinsurance and the services provided. Ask the clinic and insurer about expected costs before your visit.",
  },
  {
    q: "Can I request language assistance?",
    a: "Contact the clinic in advance to ask about language assistance and interpreter availability.",
  },
  {
    q: "What if I need urgent medical help?",
    a: "For a life-threatening emergency in the United States, call 911. This clinic website concept does not provide emergency services.",
  },
];

export const CAMPUSES = [
  {
    name: "Main Clinic",
    address: "Address to be added, United States",
    phone: "(555) 010-2020",
    tel: "+15550102020",
    note: "Demo location — replace with the real clinic address before publishing.",
  },
];

export const FUNDS = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "UnitedHealthcare",
  "Humana",
  "Medicare",
  "Medicaid",
];

export const initials = (name: string) =>
  name
    .replace(/^(Dr\\.?|Prof\\.?)\\s/, "")
    .split(" ")
    .map((word) => word[0])
    .join("");