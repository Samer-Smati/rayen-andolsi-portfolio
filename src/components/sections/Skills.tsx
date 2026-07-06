"use client";

import { skills } from "@/data/cv";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechChip } from "@/components/ui/TechChip";

const skillGroups = [
  {
    title: "Front-End",
    description: "Modern UI frameworks, RTL-ready layouts, and component libraries",
    items: skills.frontend,
    accent: "violet",
  },
  {
    title: "Back-End & APIs",
    description: "Server-side logic, micro-services, and third-party integrations",
    items: skills.backend,
    accent: "cyan",
  },
  {
    title: "Databases",
    description: "Relational and document storage, production data modeling",
    items: skills.databases,
    accent: "orange",
  },
  {
    title: "DevOps & Cloud",
    description: "Docker, Vercel, Git workflows — deployment-ready delivery",
    items: skills.devops,
    accent: "emerald",
  },
];

const accentBorder: Record<string, string> = {
  violet: "hover:border-violet-500/30 hover:bg-violet-500/5",
  cyan: "hover:border-cyan-500/30 hover:bg-cyan-500/5",
  orange: "hover:border-orange-500/30 hover:bg-orange-500/5",
  emerald: "hover:border-emerald-500/30 hover:bg-emerald-500/5",
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Technical Arsenal"
          description="React, Angular, Next.js, Node.js, .NET, Docker, and cloud-ready deployments."
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
