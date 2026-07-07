"use client";

import { pinnedRepos, personalInfo } from "@/data/cv";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GitHubShowcase() {
  return (
    <section id="github" className="px-6 py-24 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Open Source"
          title="GitHub Highlights"
          description="Public repositories and development work on GitHub."
        />
        <div className="mb-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-indigo-500/25 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent p-6 transition-colors hover:border-indigo-500/40 md:p-8"
          >
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-indigo-300">
              GitHub Profile
            </p>
            <p className="text-xl font-bold text-white group-hover:text-indigo-200 md:text-2xl">
              github.com/rayen-andolsi
            </p>
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pinnedRepos.map((repo, index) => (
            <ScrollReveal key={repo.name} delay={index * 0.05} className="h-full">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-indigo-500/40 hover:bg-white/[0.04]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-indigo-300 group-hover:text-emerald-300">
                    {repo.name}
                  </span>
                  <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-zinc-500">
                    {repo.language}
                  </span>
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
                  {repo.description}
                </p>
                <p className="text-xs text-zinc-600">{repo.stars}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
