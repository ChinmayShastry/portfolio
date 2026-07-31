"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal — shared scroll-triggered entrance animation.
 * Wraps any content and fades/slides it in the first time it scrolls
 * into view. Used by every section for a consistent feel.
 *
 * Visitors with "reduce motion" enabled get a plain fade with no
 * movement, so the site stays comfortable for them.
 *
 * Props:
 *   delay — stagger offset in seconds
 *   y     — slide-in distance in px (set 0 for a pure fade)
 */
export default function Reveal({ children, delay = 0, y = 28, className = "" }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: reduced ? 0.3 : 0.6,
        delay: reduced ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
