"use client";

import { education, languages, softSkills } from "@/data/cv";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Education"
          title="Background"
          description="Academic foundation and continuous learning in full-stack development."
        />

        <div className="mb-16 grid gap-6">
          {education.map((item, index) => (
            <ScrollReveal key={item.institution} delay={index * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-cyan-500/30 md:p-8">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white md:text-xl">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-cyan-400">{item.institution}</p>
                  </div>
                  <div className="text-sm text-zinc-500">
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <ScrollReveal>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <h3 className="mb-6 text-xl font-bold text-white">Soft Skills</h3>
              <div className="space-y-4">
                {softSkills.map((skill) => (
                  <div key={skill.title}>
                    <p className="font-semibold text-violet-300">{skill.title}</p>
                    <p className="text-sm text-zinc-500">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <h3 className="mb-6 text-xl font-bold text-white">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0"
                  >
                    <p className="font-semibold text-white">{lang.name}</p>
                    <p className="text-sm text-zinc-500">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
