"use client";

import { motion } from "framer-motion";

type TechChipProps = {
  label: string;
  index?: number;
};

export function TechChip({ label, index = 0 }: TechChipProps) {
  return (
    <motion.span
      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm transition-colors hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-200"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      whileHover={{ scale: 1.05 }}
    >
      {label}
    </motion.span>
  );
}
