"use client";

import { personalInfo } from "@/data/cv";
import { motion } from "framer-motion";
import Image from "next/image";

type ProfilePortraitProps = {
  size?: "hero" | "about";
  className?: string;
};

const portraitConfig = {
  hero: {
    src: personalInfo.profileImage,
    width: 960,
    height: 1200,
    maxWidthClass: "max-w-[340px]",
    sizes: "340px",
  },
  about: {
    src: personalInfo.profileImageAbout ?? personalInfo.profileImage,
    width: 560,
    height: 560,
    maxWidthClass: "max-w-[220px]",
    sizes: "220px",
  },
} as const;

export function ProfilePortrait({
  size = "hero",
  className = "",
}: ProfilePortraitProps) {
  const isHero = size === "hero";
  const config = portraitConfig[size];

  return (
    <motion.div
      className={`relative mx-auto w-full ${config.maxWidthClass} ${className}`}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-cyan-500/10 to-orange-500/10 blur-xl"
        animate={{ opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-1 shadow-2xl shadow-violet-500/10">
        <Image
          src={config.src}
          alt={`${personalInfo.name} — ${personalInfo.title}`}
          width={config.width}
          height={config.height}
          priority={isHero}
          sizes={config.sizes}
          unoptimized
          className="h-auto w-full rounded-[1.65rem] object-cover object-top"
        />
      </div>

      {isHero ? (
        <>
          <motion.div
            className="absolute -right-2 top-6 rounded-2xl border border-white/10 bg-[#0a0a0f]/90 px-3.5 py-2.5 backdrop-blur-xl"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-[11px] text-zinc-500">Experience</p>
            <p className="text-base font-bold text-white">6+ Years</p>
          </motion.div>

          <motion.div
            className="absolute -left-2 bottom-14 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-2.5 backdrop-blur-xl"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            <p className="text-[11px] text-cyan-300/80">Based in GCC</p>
            <p className="text-sm font-bold text-white">Dubai · AdTech</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-2 right-4 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3.5 py-1.5 backdrop-blur-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <p className="text-[11px] font-semibold text-cyan-300">
              Full-Stack · TypeScript
            </p>
          </motion.div>
        </>
      ) : null}
    </motion.div>
  );
}
