// All site copy lives here. Edit this file to change what the page says.

export const site = {
  name: "Usher Kielvin Ponce",
  shortName: "Usher Ponce",
  role: "Software Engineer & Founder",
  url: "https://usherponce.xyz",
  email: "usherponce@gmail.com",
  location: "Taguig, PH",
  year: 2026,
  bio: [
    "I'm a software engineer and founder. I build enterprise web systems, operational platforms, and software products.",
    "Right now I'm building Lamig Technologies and shipping internal systems at Ashcol Airconditioning Corporation. Based in Taguig, PH.",
  ],
  links: [
    { label: "github", href: "https://github.com/usherponce" },
    { label: "linkedin", href: "https://linkedin.com/in/usher-kielvin-ponce" },
    { label: "email", href: "mailto:usherponce@gmail.com" },
  ],
};

export const highlights = [
  { title: "Lamig Technologies", caption: "Founder" },
  { title: "Ashcol Airconditioning Corporation", caption: "Software Engineer" },
  { title: "National University", caption: "BSIT-MWA · MOA" },
];

export type Project = {
  name: string;
  label: string;
  summary: string;
  year: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Lamig App",
    label: "Product · Mobile & Web",
    summary:
      "Core platform engineered for streamlined operational workflows, automated communications, and service coordination.",
    year: "2026",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Firebase", "Tailwind CSS"],
  },
  {
    name: "Ashcol Portal",
    label: "Enterprise System · Ashcol Airconditioning Corp.",
    summary:
      "Centralized service and dispatch management portal with role-based access control (RBAC), service ticketing, and automated email dispatch pipelines.",
    year: "2026",
    tags: ["React", "Node.js", "PostgreSQL", "Mailgun API", "Tailwind CSS"],
  },
];

export const experience = [
  {
    period: "2026 — Present",
    title: "Founder & Software Engineer",
    org: "Lamig Technologies",
  },
  {
    period: "2026 — Present",
    title: "Software Engineer",
    org: "Ashcol Airconditioning Corporation",
  },
];

export const education = [
  {
    period: "2024 — Present",
    title: "BS in Information Technology (BSIT-MWA)",
    org: "National University – MOA",
  },
];

export const stack = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "PostgreSQL",
  "Python",
  "Firebase",
  "Tailwind CSS",
  "Docker",
  "REST APIs",
  "Gemini API",
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Stack", href: "#stack" },
];
