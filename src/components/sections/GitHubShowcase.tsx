"use client";

import { pinnedRepos } from "@/data/cv";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function GitHubShowcase() {
  return (
    <section id="github" className="px-6 py-24 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Code"
          title="Pinned Repositories"
          description="Curated open-source work — production experiments, Docker, .NET, and full-stack capstones."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pinnedRepos.map((repo, index) => (
            <ScrollReveal key={repo.name} delay={index * 0.05} className="h-full">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-violet-500/40 hover:bg-white/[0.04]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-violet-300 group-hover:text-cyan-300">
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
