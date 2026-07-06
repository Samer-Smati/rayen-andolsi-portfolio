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
          title="Professional Journey"
          description="20 months at ArabyAds in Dubai plus EdTech, AI SaaS, travel, and enterprise — with quantified impact at every stage."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent md:left-8 md:block" />

          <div className="space-y-8">
            {experiences.map((job, index) => (
              <ScrollReveal
                key={`${job.company}-${job.period}`}
                delay={index * 0.05}
              >
                <motion.article
                  className={`group relative rounded-2xl border p-6 transition-all md:ml-16 md:p-8 ${
                    job.location.includes("Dubai")
                      ? "border-cyan-500/20 bg-cyan-500/[0.03] hover:border-cyan-500/40"
                      : "border-white/10 bg-white/[0.02] hover:border-violet-500/30 hover:bg-white/[0.04]"
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div className="absolute -left-12 top-8 hidden h-4 w-4 rounded-full border-2 border-violet-400 bg-[#0a0a0f] md:block" />

                  <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-violet-500/15 px-3 py-0.5 text-xs font-medium text-violet-300">
                          {job.industry}
                        </span>
                        <span className="rounded-full bg-white/5 px-3 py-0.5 text-xs font-medium text-zinc-500">
                          {job.employmentType}
                        </span>
                        {job.location.includes("Dubai") ? (
                          <span className="rounded-full bg-cyan-500/15 px-3 py-0.5 text-xs font-medium text-cyan-300">
                            GCC · Dubai
                          </span>
                        ) : null}
                      </div>
                      <h3 className="text-xl font-bold text-white md:text-2xl">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-lg text-violet-400">
                        {job.company}
                      </p>
                    </div>
                    <div className="shrink-0 text-left md:text-right">
                      <p className="text-sm font-semibold text-zinc-300">
                        {job.period}
                      </p>
                      <p className="text-sm text-zinc-600">{job.location}</p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-zinc-500 md:text-base">
                    {job.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {job.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                    Key Contributions
                  </p>
                  <ul className="mb-6 space-y-2.5">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-400 md:text-base"
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
