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
    title: "Elite Conseil — ERP/CRM Education Platform",
    type: "Professional",
    category: "EdTech · ERP/CRM",
    period: "2024 – Present",
    featured: true,
    description:
      "Large-scale ERP/CRM platform for a multi-campus education group — centralizing student lifecycle management, admissions, scheduling, and instructor allocation across 30,000+ students.",
    metrics: [
      "30,000+ students",
      "500+ instructors",
      "Multi-campus delivery",
    ],
    highlights: [
      "Java Spring Boot backend with clean architecture and scalable REST APIs",
      "Secure RBAC authentication with fine-grained role-based access control",
      "Interactive Angular dashboards with PrimeNG for operational insights",
      "Agile delivery with product owners and cross-functional stakeholders",
    ],
    technologies: [
      "Java Spring Boot",
      "Angular",
      "PrimeNG",
      "TypeScript",
      "Tailwind CSS",
      "CI/CD",
    ],
    links: [{ label: "Request demo", url: "#contact" }],
  },
  {
    title: "111CoThink — Chatbot & Web Solutions",
    type: "Professional",
    category: "Digital Agency",
    period: "2023 – 2024",
    featured: true,
    description:
      "Chatbot interface for automated customer support and SEO-optimized responsive websites for coworking platforms and e-commerce clients.",
    metrics: [
      "AI-powered chatbot",
      "SEO-optimized sites",
      "Multi-project delivery",
    ],
    highlights: [
      "Developed chatbot interface improving automated customer support",
      "Built SEO-optimized responsive websites for client visibility",
      "Full development lifecycle from requirements to deployment",
      "CI/CD best practices for streamlined deployments",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "MySQL",
      "Tailwind CSS",
    ],
    links: [{ label: "Request demo", url: "#contact" }],
  },
  {
    title: "Lion-Touch — Nutrition Management App",
    type: "Professional",
    category: "Digital Health",
    period: "2023",
    description:
      "Diet and nutrition management web application with health data dashboards and a dedicated nutritionist interface for appointment scheduling and client monitoring.",
    metrics: [
      "Nutrition tracking",
      "Nutritionist portal",
      "Health dashboards",
    ],
    highlights: [
      "Backend logic for caloric calculations and macronutrient distribution",
      "Angular dashboards presenting health data in actionable format",
      "Nutritionist interface for scheduling, monitoring, and progress tracking",
      "Clean frontend/backend separation for maintainability",
    ],
    technologies: ["Angular", "Laravel", "PrimeNG", "Tailwind CSS"],
    links: [{ label: "Request demo", url: "#contact" }],
  },
  {
    title: "Digital Hub — Backend Services",
    type: "Professional",
    category: "Enterprise · Java",
    period: "2022 – 2023",
    description:
      "Backend services using Java Spring Boot for internal and client-facing applications — RESTful API design, data persistence, and performance optimization.",
    metrics: [
      "RESTful API design",
      "Spring Data JPA",
      "Code review participation",
    ],
    highlights: [
      "Designed RESTful APIs ensuring performance, security, and scalability",
      "Spring Data JPA for efficient relational database persistence",
      "Collaborated with frontend developers for smooth API integration",
      "Debugging, performance optimization, and technical documentation",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "Git",
    ],
    links: [{ label: "Request demo", url: "#contact" }],
  },
  {
    title: "This Portfolio — Live on Vercel",
    type: "Live Demo",
    category: "Next.js · Personal Brand",
    period: "2026",
    description:
      "This site — Next.js 16, Framer Motion animations, Resend contact API, Zod validation, deployed on Vercel with SEO optimization.",
    metrics: ["Live deployed", "Contact API", "SEO ready"],
    highlights: [
      "Next.js App Router + TypeScript",
      "Framer Motion scroll animations",
      "Serverless contact form with Resend",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    links: [
      {
        label: "Live Site",
        url:
          process.env.NEXT_PUBLIC_SITE_URL ??
          "https://rayen-andolsi-portfolio.vercel.app",
      },
      {
        label: "GitHub",
        url: "https://github.com/Samer-Smati/rayen-andolsi-portfolio",
      },
    ],
  },
];
