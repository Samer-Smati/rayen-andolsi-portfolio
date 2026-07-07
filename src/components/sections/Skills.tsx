"use client";

import { skills } from "@/data/cv";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechChip } from "@/components/ui/TechChip";

const skillGroups = [
  {
    title: "Front-End",
    description: "Angular, PrimeNG, TypeScript, and responsive UI development",
    items: skills.frontend,
    accent: "indigo",
  },
  {
    title: "Back-End & APIs",
    description: "Java Spring Boot, Node.js, REST APIs, and authentication",
    items: skills.backend,
    accent: "emerald",
  },
  {
    title: "Databases",
    description: "Relational and document storage with ORM frameworks",
    items: skills.databases,
    accent: "amber",
  },
  {
    title: "DevOps & Tools",
    description: "CI/CD, Git workflows, and Agile delivery practices",
    items: skills.devops,
    accent: "emerald",
  },
];

const accentBorder: Record<string, string> = {
  indigo: "hover:border-indigo-500/30 hover:bg-indigo-500/5",
  emerald: "hover:border-emerald-500/30 hover:bg-emerald-500/5",
  amber: "hover:border-amber-500/30 hover:bg-amber-500/5",
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technical Arsenal"
          description="Java, Spring Boot, Angular, PrimeNG, TypeScript, and CI/CD pipelines."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <ScrollReveal key={group.title} delay={groupIndex * 0.08} className="h-full">
              <div
                className={`h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors ${accentBorder[group.accent]}`}
              >
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <p className="mb-4 text-sm text-zinc-500">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, index) => (
                    <TechChip key={item} label={item} index={index} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
