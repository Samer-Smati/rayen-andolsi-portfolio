"use client";

import { experiences } from "@/data/cv";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechChip } from "@/components/ui/TechChip";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Experience"
          title="Work History"
          description="A track record of building products across EdTech, AdTech, travel, and AI."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent md:left-8 md:block" />

          <div className="space-y-8">
            {experiences.map((job, index) => (
              <ScrollReveal key={`${job.company}-${job.period}`} delay={index * 0.05}>
                <motion.article
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-violet-500/30 hover:bg-white/[0.04] md:ml-16 md:p-8"
                  whileHover={{ x: 4 }}
                >
                  <div className="absolute -left-12 top-8 hidden h-4 w-4 rounded-full border-2 border-violet-400 bg-[#0a0a0f] md:block" />

                  <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white md:text-2xl">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-violet-400">{job.company}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-sm font-medium text-zinc-400">
                        {job.period}
                      </p>
                      <p className="text-sm text-zinc-600">{job.location}</p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-zinc-500">{job.description}</p>

                  <ul className="mb-6 space-y-2">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm text-zinc-400 md:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <TechChip key={tech} label={tech} index={techIndex} />
                    ))}
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
