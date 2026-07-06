"use client";

import { personalInfo } from "@/data/cv";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((current) => (current + 1) % personalInfo.subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <GradientBlob />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for opportunities
        </motion.div>

        <h1 className="mb-4 font-[family-name:var(--font-syne)] text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
          <AnimatedText text="Samer" />
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
            <AnimatedText text="Smati" />
          </span>
        </h1>

        <motion.div
          className="mb-8 h-8 overflow-hidden md:h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.p
            key={subtitleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-xl font-medium text-zinc-400 md:text-2xl"
          >
            {personalInfo.subtitles[subtitleIndex]}
          </motion.p>
        </motion.div>

        <motion.p
          className="mb-10 max-w-xl text-base text-zinc-500 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {personalInfo.location} · Building scalable, high-performance web
          applications with modern JavaScript stacks.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="#experience"
            className="rounded-full bg-gradient-to-r from-violet-500 via-violet-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-105"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-zinc-500 transition-colors hover:text-white"
          >
            Email
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/20 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
