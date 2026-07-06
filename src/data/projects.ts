export type ProjectLink = {
  label: string;
  url: string;
};

export type FeaturedProject = {
  title: string;
  type: "Professional" | "Open Source" | "Live Demo";
  category: string;
  period?: string;
  description: string;
  metrics: string[];
  highlights: string[];
  technologies: string[];
  links: ProjectLink[];
  featured?: boolean;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "ArabyAds — GCC Influencer Campaign Platform",
    type: "Professional",
    category: "AdTech · Dubai, UAE",
    period: "2022 – 2024",
    featured: true,
    description:
      "Full-Stack Developer at ArabyAds (Dubai) — built React dashboards, Node.js/.NET APIs, and reporting pipelines for GCC brands and influencers managing ad campaigns at scale.",
    metrics: [
      "10K+ events/month",
      "~40% faster loads",
      "Full-stack role — React, Node.js, .NET across UI and APIs",
    ],
    highlights: [
      "Full-stack delivery: React UI, Node.js/.NET back-end, and database-backed reporting",
      "React dashboards for GCC campaign creation, monitoring & optimization",
      "Node.js + .NET services for MENA market analytics and data ingestion",
      "Performance optimizations under high-traffic startup conditions",
    ],
    technologies: ["React", "Node.js", ".NET", "JavaScript", "SASS"],
    links: [{ label: "Request case study", url: "#contact" }],
  },
  {
    title: "Elite Conseil — Education Management Platform",
    type: "Professional",
    category: "EdTech",
    period: "2025 – Present",
    featured: true,
    description:
      "Multi-campus education ecosystem — student records, trainer assignments, applications, and admin dashboards across 5+ school entities.",
    metrics: [
      "5+ campuses",
      "4 user roles",
      "Angular 19 production",
    ],
    highlights: [
      "JWT auth & role-based dashboards for academic workflows",
      "PrimeNG 19 data tables, forms, and campus modules",
      "Node.js micro-services for enrollment & scheduling",
    ],
    technologies: ["Angular 19", "Node.js", "TypeScript", "PrimeNG 19", "Tailwind"],
    links: [{ label: "Request demo", url: "#contact" }],
  },
  {
    title: "Memorality — AI Event Recommendation Engine",
    type: "Professional",
    category: "AI / SaaS",
    period: "2024 – 2025",
    featured: true,
    description:
      "AI-powered event platform analyzing user profiles via OpenAI to deliver personalized event suggestions and boost engagement.",
    metrics: [
      "OpenAI in production",
      "Full-stack delivery",
      "3 MongoDB entities",
    ],
    highlights: [
      "OpenAI API for profile-based recommendation engine",
      "Next.js + Flask architecture for scalable traffic",
      "MongoDB schemas for users, events & recommendations",
    ],
    technologies: ["Next.js", "Flask", "OpenAI API", "MongoDB", "TypeScript"],
    links: [{ label: "Request demo", url: "#contact" }],
  },
  {
    title: "Wantotrip — Travel Booking Platform",
    type: "Professional",
    category: "Travel · E-Commerce",
    period: "2024",
    description:
      "Complete UI/UX overhaul of a travel booking platform — trip browsing, filters, and multi-step reservations across devices.",
    metrics: ["Full booking redesign", "Mobile + desktop", "MUI theming"],
    highlights: [
      "Redesigned navigation and reservation journey",
      ".NET API integration for booking flows",
      "Legacy Angular refactor for performance",
    ],
    technologies: ["Angular", "TypeScript", "MUI", ".NET", "SASS"],
    links: [{ label: "Request demo", url: "#contact" }],
  },
  {
    title: "Carzone Crawler",
    type: "Open Source",
    category: "Docker · Automation",
    period: "2025",
    description:
      "Production-ready Dockerized TypeScript crawler — containerized data extraction with reproducible deployments.",
    metrics: ["Docker", "TypeScript", "CI-ready"],
    highlights: [
      "Containerized pipeline with Docker",
      "Structured TypeScript architecture",
      "Scalable scraping workflow design",
    ],
    technologies: ["TypeScript", "Docker", "Node.js"],
    links: [
      {
        label: "View on GitHub",
        url: "https://github.com/Samer-Smati/carzone-crawler-docker",
      },
    ],
  },
  {
    title: "Collaborative Blog Platform",
    type: "Open Source",
    category: "CMS / Web",
    period: "2025",
    description:
      "Multi-author blogging platform with SCSS design system and Strapi CMS integration.",
    metrics: ["Multi-author", "Strapi CMS", "SCSS system"],
    highlights: [
      "Collaborative content creation workflow",
      "Responsive SCSS design system",
      "Strapi cloud template integration",
    ],
    technologies: ["SCSS", "JavaScript", "Strapi"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Samer-Smati/blog-collaboratif",
      },
    ],
  },
  {
    title: "Backend Evaluation System",
    type: "Open Source",
    category: "Enterprise · .NET",
    period: "2024",
    description:
      "C# .NET back-end evaluation system — structured REST API design for enterprise assessment workflows.",
    metrics: [".NET REST API", "C# architecture", "2024"],
    highlights: [
      "Enterprise-grade .NET back-end",
      "Evaluation workflow data processing",
      "Clean API layer design",
    ],
    technologies: ["C#", ".NET", "REST APIs"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Samer-Smati/backend-evaluation",
      },
    ],
  },
  {
    title: "This Portfolio — Live on Vercel",
    type: "Live Demo",
    category: "Next.js · Personal Brand",
    period: "2026",
    description:
      "This site — Next.js 16, Framer Motion animations, Resend contact API, Zod validation, deployed on Vercel with SEO and performance optimization.",
    metrics: ["Live deployed", "Contact API", "SEO ready"],
    highlights: [
      "Next.js App Router + TypeScript",
      "Framer Motion scroll animations",
      "Serverless contact form with Resend",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    links: [
      {
        label: "Live Site",
        url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://samer-portfolio.vercel.app",
      },
      {
        label: "GitHub",
        url: "https://github.com/Samer-Smati",
      },
    ],
  },
];

export const codeProfiles = [
  {
    platform: "GitHub",
    username: "Samer-Smati",
    url: "https://github.com/Samer-Smati",
    stats: "60+ repositories · 7 followers",
    description:
      "Production experiments, Docker projects, .NET backends, and MERN capstones",
  },
  {
    platform: "GitLab",
    username: "Samer-Smati",
    url: "https://gitlab.com/Samer-Smati",
    stats: "20+ projects",
    description:
      "React/Node checkpoints, ERP capstone, and imported learning projects — active since 2022",
  },
  {
    platform: "LinkedIn",
    username: "Samer Smati",
    url: "https://www.linkedin.com/in/samer-smati",
    stats: "Professional profile",
    description:
      "Professional profile — experience history, projects, and recommendations",
  },
];
