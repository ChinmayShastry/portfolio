"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgress — a thin warm bar across the very top of the page
 * that fills as you scroll. Gives the single-page layout a sense of
 * length and position. Purely decorative, so it's hidden from
 * screen readers.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Spring smoothing so the bar glides instead of jittering
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-terracotta via-amber to-terracotta dark:from-ember dark:via-honey dark:to-ember"
    />
  );
}
