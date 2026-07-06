"use client";

import { personalInfo } from "@/data/cv";
import { motion } from "framer-motion";

export function FloatingCTA() {
  const phoneHref = `tel:${personalInfo.phone.replace(/\s/g, "")}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 md:bottom-8 md:right-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
    >
      <a
        href={phoneHref}
        className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/40 transition-transform hover:scale-105"
      >
        Call Me
      </a>
      <a
        href={personalInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/20 bg-[#0a0a0f]/90 px-5 py-2.5 text-center text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
      >
        WhatsApp
      </a>
    </motion.div>
  );
}
