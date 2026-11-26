// All portfolio content lives here so it can be edited in one place.

export const PROFILE = {
  name: "Rahaf Salman",
  firstName: "Rahaf",
  lastName: "Salman",
  initials: "RS",
  role: "Frontend Developer",
  location: "Nablus, Palestine",
  email: "rahafsahir22@gmail.com",
  phone: "+970 595546850",
  phoneHref: "tel:+970595546850",
  github: "https://github.com/RAHAFSALMAN7",
  githubHandle: "RAHAFSALMAN7",
  linkedin: "https://linkedin.com/in/rahaf-alsalman7",
  linkedinHandle: "rahaf-alsalman7",
  current: {
    company: "255 Advertising",
    url: "https://www.255adv.com/",
    role: "Web Developer",
    since: "Sep 2026",
  },
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STACK = ["React.js", "Next.js", "Shopify", "TypeScript", "Tailwind CSS", "Framer Motion", "FastAPI"];

export type Experience = {
  company: string;
  url?: string;
  role: string;
  type: "Full-time" | "Training" | "Internship";
  period: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: "255 Advertising",
    url: "https://www.255adv.com/",
    role: "Web Developer",
    type: "Full-time",
    period: "Sep 2026 – Present",
    current: true,
    bullets: [
      "Updated and improved sections of the official 255 website",
      "Built the Sakher Olayyan portfolio page on the 255 website",
      "Developed client websites: La Rose Aroma, Al-Amour, and Roseme",
      "Built and customized Shopify e-commerce stores, from theme to launch",
      "Delivered responsive, production-ready front-end interfaces",
    ],
    tags: ["React.js", "Next.js", "Shopify", "E-commerce", "Vercel", "UI/UX"],
  },
  {
    company: "Zuccess",
    url: "https://zuccess.ai/",
    role: "Web Developer",
    type: "Full-time",
    period: "Aug 2025 – Apr 2026",
    bullets: [
      "Production-level role — not an internship",
      "Built & deployed websites for clients: AMT, MKN, Zuccess",
      "Managed deployments on Netlify, Vercel, and GoDaddy",
      "Contributed to Zai Chat WhatsApp automation platform",
      "Developed responsive, high-performance front-end interfaces",
    ],
    tags: ["React.js", "Next.js", "Netlify", "Vercel", "Deployment"],
  },
  {
    company: "Udacity",
    role: "UX Trainee",
    type: "Training",
    period: "Feb 2025 – Present",
    bullets: ["User experience design principles", "Wireframing, prototyping, and usability testing"],
    tags: ["Figma", "UX Research", "Prototyping"],
  },
  {
    company: "Cystack",
    role: "Software Development Intern",
    type: "Internship",
    period: "Nov 2024 – Jan 2025",
    bullets: ["Contributed to software development projects", "Gained hands-on experience in team workflows"],
    tags: ["Web Dev", "Collaboration"],
  },
  {
    company: "Paltel",
    role: "AI/ML Intern",
    type: "Internship",
    period: "Sep 2024 – Nov 2024",
    bullets: ["AI / ML / Data Analysis using TensorFlow, Keras", "Data processing with Pandas and NumPy"],
    tags: ["TensorFlow", "Keras", "Pandas", "NumPy"],
  },
  {
    company: "Adaptive TechSoft",
    role: "Database Intern",
    type: "Internship",
    period: "Jul 2024 – Sep 2024",
    bullets: ["Database systems design and management", "Oracle DB development and queries"],
    tags: ["Oracle", "SQL", "Databases"],
  },
  {
    company: "Udacity",
    role: "Frontend Intern",
    type: "Internship",
    period: "May 2024 – Sep 2024",
    bullets: ["HTML, CSS, JavaScript fundamentals and projects", "Built responsive layouts and UI components"],
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  type: string;
  company: "255 Advertising" | "Zuccess";
  liveUrl: string;
  // Hue for the generated cover gradient
  hue: number;
};

export const PROJECTS: Project[] = [
  {
    title: "255 Advertising",
    desc: "Updated and refined sections of the agency's official website, keeping the experience consistent, responsive, and on-brand.",
    tags: ["Next.js", "Responsive", "UI Updates"],
    type: "Agency Website",
    company: "255 Advertising",
    liveUrl: "https://www.255adv.com/",
    hue: 250,
  },
  {
    title: "Sakher Olayyan Portfolio",
    desc: "Personal portfolio page built within the 255 website to showcase work with a clean layout and a smooth, modern presentation.",
    tags: ["Portfolio", "Next.js", "UI/UX"],
    type: "Portfolio",
    company: "255 Advertising",
    liveUrl: "https://www.255adv.com/Sakher-Olayyan",
    hue: 200,
  },
  {
    title: "La Rose Aroma",
    desc: "Shopify e-commerce store delivered for a client with an elegant visual identity, clear product presentation, and a polished mobile shopping experience.",
    tags: ["Shopify", "E-commerce", "Responsive"],
    type: "Shopify Store",
    company: "255 Advertising",
    liveUrl: "https://larosearoma.com/",
    hue: 340,
  },
  {
    title: "Al-Amour",
    desc: "Modern web experience built and deployed on Vercel, focused on refined visuals, fast loading, and responsive layouts.",
    tags: ["Next.js", "Vercel", "Responsive"],
    type: "Brand Website",
    company: "255 Advertising",
    liveUrl: "https://al-amour.vercel.app/",
    hue: 20,
  },
  {
    title: "Roseme",
    desc: "Client website crafted with a premium look and feel, clear structure, and a smooth experience across desktop and mobile.",
    tags: ["Brand Website", "Responsive", "UI/UX"],
    type: "Client Website",
    company: "255 Advertising",
    liveUrl: "https://roseme.us/",
    hue: 310,
  },
  {
    title: "Kanaan Trucking",
    desc: "Website for a U.S. truckload carrier, built with interactive 3D elements and motion that bring the brand to life, covering services, fleet, careers, and contact.",
    tags: ["3D", "Next.js", "Animations"],
    type: "3D Business Website",
    company: "255 Advertising",
    liveUrl: "https://kanaan-trucking.vercel.app/",
    hue: 35,
  },
  {
    title: "AMT Arabia",
    desc: "Real client project built for the Saudi market, focused on polished UX, clear structure, and a fast, production-ready web experience.",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    type: "Client Website",
    company: "Zuccess",
    liveUrl: "https://amt-arabia.net/en",
    hue: 160,
  },
  {
    title: "Zuccess",
    desc: "AI-powered creative tech platform designed to support content workflows with a modern interface and smooth, conversion-focused interactions.",
    tags: ["AI Platform", "React", "UI/UX"],
    type: "Creative Tech",
    company: "Zuccess",
    liveUrl: "https://zuccess.ai/",
    hue: 225,
  },
  {
    title: "Zai Chat",
    desc: "AI chat and dashboard system with a product-oriented UI, integration-focused flows, and a responsive control panel experience.",
    tags: ["AI Chat", "Dashboard", "Integration"],
    type: "AI Product",
    company: "Zuccess",
    liveUrl: "https://zaichat.net/dashboard",
    hue: 275,
  },
  {
    title: "MKN Sea Point",
    desc: "Business website built to present services with clarity, credibility, and a premium visual style across desktop and mobile devices.",
    tags: ["Business Website", "Responsive", "Production"],
    type: "Business Website",
    company: "Zuccess",
    liveUrl: "https://www.mknseapoint.com/",
    hue: 185,
  },
];

export const SKILL_GROUPS = [
  { category: "Languages", skills: ["JavaScript", "TypeScript", "Python", "C++"] },
  { category: "Frontend", skills: ["React.js", "Next.js", "HTML & CSS", "Tailwind CSS", "Framer Motion"] },
  { category: "E-commerce", skills: ["Shopify", "Theme Customization", "Store Setup & Launch", "Payment Gateways"] },
  { category: "Tools & APIs", skills: ["Git & GitHub", "Vercel", "Netlify", "FastAPI"] },
  { category: "Concepts", skills: ["REST APIs", "OOP", "Data Structures", "Algorithms", "Responsive Design"] },
];

export const SOFT_SKILLS = [
  "Client Communication",
  "Problem Solving",
  "Teamwork",
  "Remote Work",
  "Attention to Detail",
  "Fast Learner",
  "Time Management",
  "Documentation",
];

export const AI_TOOLS = ["Cursor AI", "Claude AI", "GitHub Copilot", "Figma AI"];

export const EDUCATION = [
  {
    school: "An-Najah National University",
    degree: "Computer Science Apprenticeship Program",
    program: "",
    year: "2025",
    tags: ["Software Engineering", "Web Development", "AI/ML", "Databases"],
  },
  {
    school: "American English Scholarship Program",
    degree: "English Language Certificate",
    program: "AESP — 120-Hour Intensive Training",
    year: "2025",
    tags: ["General English", "Business English", "Communication"],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  kind: "Nanodegree" | "Training" | "Program" | "Workshop" | "Webinar";
  detail?: string;
  verifyUrl?: string;
  // First image is the card thumbnail; the rest show in the viewer
  images: { src: string; alt: string }[];
};

// Newest first
export const CERTIFICATES: Certificate[] = [
  {
    title: "American English Scholarship Program",
    issuer: "Amideast · America House",
    date: "Apr 2025",
    kind: "Program",
    detail: "120-hour training",
    images: [{ src: "/certificates/amideast-aesp.jpg", alt: "AESP certificate of completion from Amideast" }],
  },
  {
    title: "Project Management Professional with AI",
    issuer: "Creativity House",
    date: "Jan 2025",
    kind: "Webinar",
    images: [{ src: "/certificates/creativity-house-pmp-ai.jpg", alt: "Creativity House certificate of participation" }],
  },
  {
    title: "AI / ML Training",
    issuer: "Paltel · Jawwal",
    date: "Sep – Nov 2024",
    kind: "Training",
    detail: "320 training hours",
    images: [
      { src: "/certificates/jawwal-paltel-training.jpg", alt: "Jawwal training completion letter" },
      { src: "/certificates/paltel-desk.jpg", alt: "Workspace during the Paltel training in Nablus" },
    ],
  },
  {
    title: "Front End Web Developer",
    issuer: "Udacity",
    date: "Sep 2024",
    kind: "Nanodegree",
    verifyUrl: "https://confirm.udacity.com/e/814e842e-0cbc-11ef-b940-63cb598f4668",
    images: [{ src: "/certificates/udacity-frontend.jpg", alt: "Udacity Front End Web Developer nanodegree certificate" }],
  },
  {
    title: "Oracle Programming",
    issuer: "Adaptive TechSoft (ATS)",
    date: "Jul – Aug 2024",
    kind: "Training",
    detail: "320 training hours",
    images: [{ src: "/certificates/ats-oracle.jpg", alt: "Adaptive TechSoft training certificate" }],
  },
  {
    title: "Introduction to QA",
    issuer: "IEEE Computer Society · Student Branch",
    date: "Feb 2024",
    kind: "Workshop",
    images: [{ src: "/certificates/ieee-qa-workshop.jpg", alt: "IEEE certificate of attendance, Introduction to QA" }],
  },
];

export const displayUrl = (url: string) => {
  const { hostname, pathname } = new URL(url);
  return hostname.replace(/^www\./, "") + (pathname === "/" ? "" : pathname);
};
