export const personalInfo = {
  name: "Samer Smati",
  title: "Full-Stack Developer",
  location: "La Soukra, Tunis, Tunisia",
  email: "samersmati@gmail.com",
  phone: "+216 20 871 852",
  github: "https://github.com/Samer-Smati",
  linkedin: "https://www.linkedin.com/in/samer-smati",
  subtitles: [
    "Full-Stack Developer",
    "TypeScript · React · Angular · Next.js",
    "Node.js · MongoDB · Flask",
  ],
};

export const summary =
  "Versatile software developer with 6+ years of experience specializing in modern front-end and full-stack development. Proficient in TypeScript, React.js, Angular, and Next.js, with additional expertise in Node.js and Flask for back-end development. Skilled in building scalable, high-performance web applications, implementing responsive designs, and delivering seamless user experiences. Adept at collaborating with cross-functional teams, meeting tight deadlines, and driving innovation.";

export const skills = {
  languages: [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Python",
    "UML",
    "NoSQL",
    "Mongoose",
  ],
  frameworks: [
    "Angular",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Flask",
  ],
  databases: ["MySQL", "MongoDB"],
  tools: ["Postman", "Git", "Slack", "Discord", "Agile/Scrum"],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    company: "Elite Conseil",
    role: "Full-Stack Developer",
    period: "04/2025 – Present",
    location: "Tunis, Tunisia",
    description:
      "Education group managing multiple schools and campuses, providing digital platforms for students, trainers, prospects, and candidate applications.",
    highlights: [
      "Designed and developed internal services to manage student records, trainer assignments, and application workflows across campuses.",
      "Built secure authentication flows and interactive dashboards to streamline academic and administrative processes.",
      "Collaborated with product owners during sprint planning and retrospectives, ensuring delivery of scalable and maintainable features.",
    ],
    technologies: [
      "Angular 19",
      "Node.js",
      "TypeScript",
      "PrimeNG 19",
      "SASS",
      "Tailwind",
    ],
  },
  {
    company: "Memorality",
    role: "Full-Stack Developer",
    period: "10/2024 – 01/2025",
    location: "Tunis, Tunisia",
    description:
      "AI-driven startup offering multiple digital solutions, including smart event management and personalized recommendations.",
    highlights: [
      "Developed an event management platform using AI to analyze client and user profiles for tailored event suggestions.",
      "Integrated OpenAI APIs to enhance recommendation accuracy and improve user engagement.",
      "Built scalable backend services and responsive interfaces to ensure smooth user experience under growing traffic.",
    ],
    technologies: [
      "Next.js",
      "Flask",
      "TypeScript",
      "OpenAI API",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
  {
    company: "Wantotrip",
    role: "Full-Stack Developer",
    period: "05/2024 – 09/2024",
    location: "Tunis, Tunisia",
    description:
      "Online travel agency offering curated group trips and personalized travel experiences.",
    highlights: [
      "Redesigned and optimized the booking platform UI/UX for smoother navigation and higher client satisfaction.",
      "Collaborated with .NET backend developers to deliver fully integrated responsive features across desktop and mobile.",
      "Improved user journey with modern design practices and interactive components, boosting engagement and retention.",
    ],
    technologies: ["Angular", "TypeScript", "SASS", "MUI", ".NET"],
  },
  {
    company: "ArabyAds",
    role: "Full-Stack Developer",
    period: "07/2022 – 03/2024",
    location: "Tunis, Tunisia",
    description:
      "AdTech platform facilitating ad campaigns for influencers and brands — connecting creators with companies to serve and manage advertisements.",
    highlights: [
      "Built and maintained front-end dashboards and management tools in React, enabling clients and influencers to create, monitor, and optimize ad campaigns.",
      "Developed backend services using .NET and Node.js to handle campaign data, reporting, and performance analytics.",
      "Updated UI components and user flows to enhance usability and responsiveness, reducing load times.",
    ],
    technologies: ["React", "Node.js", ".NET", "JavaScript", "SASS"],
  },
  {
    company: "GOMYCODE",
    role: "Full Stack JS Instructor",
    period: "02/2022 – 07/2022",
    location: "Tunis, Tunisia",
    description:
      "EdTech platform providing digital skills training and full-stack development education across Tunisia.",
    highlights: [
      "Delivered hands-on instruction in MERN stack and guided students in building real-world applications.",
      "Mentored students on client-based projects, ensuring practical knowledge in front-end and back-end development.",
      "Developed course materials, coding exercises, and project briefs to enhance learning outcomes.",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "12/2021 – 03/2022",
    location: "Remote",
    description:
      "Web project manager for WordPress and Prestashop projects, overseeing the entire project lifecycle from ideation to delivery.",
    highlights: [
      "Worked with clients to understand needs, define scope, and create project plans.",
      "Coordinated development teams, conducted QA testing, and provided ongoing client support.",
    ],
    technologies: [
      "jQuery",
      "Ajax",
      "Prestashop",
      "JavaScript",
      "MySQL",
    ],
  },
  {
    company: "IT Open Sprite (ITOS)",
    role: "Web Developer",
    period: "11/2019 – 11/2021",
    location: "Tunis, Tunisia",
    description:
      "Development of web applications with focus on customer reference data access and front-end interactions.",
    highlights: [
      "Facilitated access to customer reference data and simplified front-end interactions.",
      "Designed functional specifications and developed new application flows.",
      "Conducted unit and integration tests, ensuring application reliability and robustness.",
    ],
    technologies: [
      "PHP",
      "JavaScript",
      "Symfony",
      "WordPress",
      "MySQL",
      "jQuery",
    ],
  },
];

export type Education = {
  institution: string;
  degree: string;
  period: string;
  location: string;
};

export const education: Education[] = [
  {
    institution: "GOMYCODE",
    degree: "Training in Full-Stack Development with the MERN Stack",
    period: "09/2021 – 02/2022",
    location: "Tunis, Tunisia",
  },
  {
    institution: "Université Internationale de Tunis (UIT)",
    degree: "Master's in Information Systems Engineering (ISE)",
    period: "2015 – 2017",
    location: "Tunis, Tunisia",
  },
  {
    institution: "ISET Kasserine",
    degree: "Licence in Computer Systems Development (DSI)",
    period: "2011 – 2014",
    location: "Kasserine, Tunisia",
  },
];

export const softSkills = [
  {
    title: "Teamwork",
    description: "Effective collaboration in team environments",
  },
  {
    title: "Problem Solving",
    description: "Creative solutions to complex technical challenges",
  },
  {
    title: "Communication",
    description: "Clear and concise communication skills",
  },
];

export const languages = [
  { name: "French", level: "Good Level" },
  { name: "English", level: "Good Level" },
  { name: "Arabic", level: "Native" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
