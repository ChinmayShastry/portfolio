"use client";

import { Briefcase, GraduationCap, Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { timeline } from "@/data/content";

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
};

/**
 * Experience — vertical timeline of work, education, and
 * certifications. The icon for each entry is chosen by its
 * `type` field in data/content.js.
 */
export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-sand/50 px-5 py-24 sm:px-8 dark:bg-espresso/40"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & education"
          description="From trading desks to training loops — the road so far."
        />

        <ol className="relative border-l-2 border-linen pl-8 dark:border-bark">
          {timeline.map((entry, i) => {
            const Icon = typeIcons[entry.type] ?? Briefcase;
            return (
              <Reveal key={`${entry.title}-${entry.period}`} delay={0.06 * i}>
                <li className="relative pb-12 last:pb-2">
                  {/* Timeline dot */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[3.05rem] top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-linen bg-cream text-terracotta dark:border-bark dark:bg-night dark:text-ember"
                  >
                    <Icon size={17} />
                  </span>

                  <div className="rounded-2xl border border-linen bg-cream p-6 shadow-soft transition-transform hover:-translate-y-1 dark:border-bark dark:bg-night">
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber dark:text-honey">
                      {entry.period}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-semibold">
                      {entry.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-terracotta dark:text-ember">
                      {entry.org} · {entry.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-cocoa dark:text-latte">
                      {entry.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
