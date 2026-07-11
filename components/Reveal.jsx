"use client";

import { motion } from "framer-motion";

/**
 * Reveal — shared scroll-triggered entrance animation.
 * Wraps any content and fades/slides it in the first time it scrolls
 * into view. Used by every section for a consistent feel.
 *
 * Props:
 *   delay — stagger offset in seconds
 *   y     — slide-in distance in px (set 0 for a pure fade)
 */
export default function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
