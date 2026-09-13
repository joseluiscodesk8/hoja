export const profile = {
  name: "Jose Luis Gómez",
  role: "Full-Stack Developer (Next.js)",
  location: "Medellín, Colombia",
  phone: "+57 3053584113",
  phoneHref: "tel:+573053584113",
  email: "jlgomezangari@gmail.com",
  website: "https://hoja-cv.vercel.app",
  websiteLabel: "hoja-cv.vercel.app",
  github: "https://github.com/joseluiscodesk8",
  githubLabel: "github.com/joseluiscodesk8",
  linkedin:
    "https://www.linkedin.com/in/jos%C3%A9-lu%C3%ADs-g%C3%B3mez-angarita-5785941a3/",
  linkedinLabel: "LinkedIn",
} as const;

export const summary = `Full-Stack Developer with 4+ years building and shipping complete web applications end to end with the Next.js ecosystem (App Router, React, TypeScript, Node.js, PostgreSQL). I have taken three products from architecture to production on my own, covering REST APIs, authentication and role-based authorization, relational data modeling, payment integrations, and deployment. I also apply DevOps practices (Docker, Kubernetes, ArgoCD, CI/CD) to make development and delivery reliable. Self-taught, autonomous.`;

export type ProjectTone = "teal" | "amber" | "rose";

export interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
  tone: ProjectTone;
}

export interface Job {
  title: string;
  company?: string;
  period: string;
  modality: string;
  descriptions?: string[];
  bullets?: string[];
  projects?: Project[];
}

export const jobs: Job[] = [
  {
    title: "Freelance Full-Stack Developer",
    period: "2022 – Present",
    modality: "Remote",
    descriptions: [
      "Designed, built and deployed production-grade applications from scratch for clients and my own products, working across the full stack: frontend (React / Next.js), backend APIs, authentication, databases.",
    ],
    projects: [
      {
        name: "Axiora",
        description:
          "SaaS platform that synchronizes inventory for e-commerce sellers. Owned the full-stack implementation: REST API layer, authentication with role-based authorization (BetterAuth), subscription billing with Stripe checkouts and webhooks, PostgreSQL data model with Prisma, input validation with Zod, and an analytics dashboard with a managed billing panel. Deployed on Vercel.",
        link: "https://axiora-web-seven.vercel.app",
        image: "/axiora.jpg",
        tone: "teal",
      },
      {
        name: "Enginectra",
        description:
          "Corporate website for an MEP engineering firm with a conversational AI customer-support assistant. Built the streaming API route for Google Gemini responses (Vercel AI SDK v7), persisted conversation history with Drizzle ORM on Neon PostgreSQL, and implemented an SEO/metadata strategy (sitemap, robots, OpenGraph).",
        link: "https://engineer-self.vercel.app",
        image: "/engie.jpg",
        tone: "amber",
      },
      {
        name: "Agagem",
        description:
          "E-commerce for handmade jewelry and resin art. Implemented custom JWT authentication (jose + bcrypt), shopping cart, Stripe Checkout in Colombian pesos, order tracking, and an admin dashboard to manage products, orders and customer support messages.",
        link: "https://agagem.vercel.app",
        image: "/agagem.jpg",
        tone: "rose",
      },
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Pukara LTD",
    period: "Jan 2025 – Jun 2025",
    modality: "Remote",
    bullets: [
      "Automated production backups with Restic and documented the processes to improve traceability and maintenance.",
      "Monitored Kubernetes clusters in GitOps environments using ArgoCD and kubectl, and managed application releases with Helm charts.",
      "Collaborated in a remote team following infrastructure-as-code and CI/CD best practices.",
    ],
  },
];

export const coreCompetencies = [
  "Next.js",
  "App Router",
  "React",
  "TypeScript",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "Prisma ORM",
  "Drizzle ORM",
  "Authentication & Authorization (JWT, BetterAuth)",
  "Role-Based Access Control",
  "Stripe",
  "Zod",
  "Vercel AI SDK",
  "Tailwind CSS",
  "Sass",
  "SEO",
  "Docker",
  "Kubernetes",
  "ArgoCD",
  "Helm",
  "Terraform",
  "CI/CD",
  "Git",
  "GitHub",
  "Vercel",
].join(", ");

export const technicalSkills = [
  {
    group: "Frontend",
    items:
      "HTML5, CSS3, Sass, Tailwind CSS, Responsive Design, SEO",
  },
  {
    group: "Frameworks",
    items:
      "Next.js (App Router, Server Components, Server Actions, Route Handlers), React 19",
  },
  {
    group: "Backend & Data",
    items: "Node.js, REST APIs, PostgreSQL, Prisma, Drizzle, Zod",
  },
  { group: "Auth & Payments", items: "JWT (jose / bcrypt), BetterAuth, Stripe" },
  { group: "AI", items: "Vercel AI SDK (Google Gemini streaming)" },
  {
    group: "DevOps",
    items: "Docker, Kubernetes, ArgoCD (GitOps), Helm, Terraform, CI/CD, Restic, Vercel",
  },
  {
    group: "Tools & Other",
    items:
      "Git/GitHub, TypeScript strict mode, Graphic Design (Photoshop, Illustrator)",
  },
] as const;

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "B2 (upper intermediate)" },
] as const;

export const softSkills = [
  "Self-taught",
  "Adaptability",
  "Conflict Resolution",
  "Empathy",
  "Active Listening",
  "Mutual Support",
  "Shared Responsibility",
] as const;

export const education = [
  {
    institution: "Platzi",
    program: "Full Stack with JavaScript",
    period: "2022–2023",
  },
  {
    institution: "U.R.B.E.",
    program: "Bachelor's Degree in Graphic Design",
    period: "2008–2012",
  },
  {
    institution: "Open English",
    program: "certificate",
    period: "2025",
  },
] as const;