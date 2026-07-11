"use client";

import Reveal from "@/components/Reveal";

/**
 * SectionHeading — consistent heading block used at the top of
 * every section: a small terracotta eyebrow label, a large serif
 * title, and an optional one-line description.
 */
export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta dark:text-ember">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold sm:text-4xl md:text-[2.75rem] md:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-cocoa dark:text-latte">
          {description}
        </p>
      )}
    </Reveal>
  );
}
