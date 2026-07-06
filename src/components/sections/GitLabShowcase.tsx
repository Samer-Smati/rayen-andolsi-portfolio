"use client";

import { gitlabActivity, personalInfo } from "@/data/cv";
import { gitlabPublicProjects } from "@/data/projects";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GitLabShowcase() {
  return (
    <section id="gitlab" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="GitLab"
          title="Active Development"
          description="Where I ship production code daily — enterprise Angular & Node.js platforms, feature branches, and merge requests."
        />

        <ScrollReveal>
          <a
            href={personalInfo.gitlab}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-8 block rounded-2xl border border-orange-500/25 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent p-6 transition-colors hover:border-orange-500/40 md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-orange-300">
                  Primary code platform
                </p>
                <p className="text-xl font-bold text-white group-hover:text-orange-200 md:text-2xl">
                  gitlab.com/Smati_Samer
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
                  {gitlabActivity.summary}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-orange-500/20 px-6 py-3 text-sm font-semibold text-orange-200">
                View GitLab profile →
              </span>
            </div>
          </a>
        </ScrollReveal>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gitlabActivity.stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.05} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-2xl font-bold text-orange-300">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-white">{stat.label}</p>
                <p className="mt-1 text-xs text-zinc-500">{stat.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {gitlabPublicProjects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.06} className="h-full">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-orange-500/30 hover:bg-white/[0.04]"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-semibold text-orange-300 group-hover:text-orange-200">
                    {project.name}
                  </span>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-zinc-500">
                    {project.type}
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <p className="mt-3 text-xs text-zinc-600">{project.stack}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
