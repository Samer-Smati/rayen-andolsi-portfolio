"use client";

import { summary } from "@/data/cv";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="Who I Am"
          description="Passionate about crafting digital experiences that make an impact."
        />
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
            <p className="relative text-lg leading-relaxed text-zinc-300 md:text-xl">
              {summary}
            </p>
            <div className="relative mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
              {[
                { value: "6+", label: "Years Experience" },
                { value: "7+", label: "Companies" },
                { value: "10+", label: "Technologies" },
                { value: "3", label: "Languages" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
