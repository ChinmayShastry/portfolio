"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * CountUp — animates a stat upward the first time it scrolls into view.
 *
 * Accepts values that carry a prefix or suffix ("5+", "~10", "50%")
 * and animates only the numeric part. If the value has no number in
 * it, or the visitor prefers reduced motion, the final value is shown
 * immediately with no animation.
 */
export default function CountUp({ value, duration = 1500 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Split "50+" → prefix "", number "50", suffix "+"
  const parts = String(value).match(/^(\D*?)(\d[\d,.]*)(.*)$/);
  const prefix = parts ? parts[1] : "";
  const target = parts ? parseFloat(parts[2].replace(/,/g, "")) : null;
  const suffix = parts ? parts[3] : "";

  const [display, setDisplay] = useState(
    target === null ? String(value) : `${prefix}0${suffix}`
  );

  useEffect(() => {
    if (target === null || !inView) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(`${prefix}${target}${suffix}`);
      return;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, prefix, suffix, duration]);

  return <span ref={ref}>{display}</span>;
}
