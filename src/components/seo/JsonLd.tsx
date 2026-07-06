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
    image: `${personalInfo.portfolioUrl}${personalInfo.profileImage}`,
    sameAs: [
      personalInfo.linkedin,
      personalInfo.github,
      personalInfo.gitlab,
    ],
    knowsLanguage: ["Arabic", "English", "French"],
    knowsAbout: [
      "React",
      "Angular",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Full-Stack Development",
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
