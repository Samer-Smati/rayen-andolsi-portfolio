import { personalInfo } from "@/data/cv";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    url: personalInfo.portfolioUrl,
    sameAs: [personalInfo.linkedin, personalInfo.github],
    knowsLanguage: ["Arabic", "English", "French"],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Angular",
      "PrimeNG",
      "TypeScript",
      "Full-Stack Development",
      "ERP/CRM",
    ],
    workLocation: {
      "@type": "Place",
      name: personalInfo.location,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
