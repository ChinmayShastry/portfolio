"use client";

import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { whyHireMe } from "@/data/content";

/**
 * WhyHireMe — the straight pitch, in a warmer register than the rest
 * of the page. Content lives in `whyHireMe` in data/content.js.
 */
export default function WhyHireMe() {
  if (!whyHireMe?.reasons?.length) return null;

  return (
    <section id="why" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow={whyHireMe.eyebrow}
          title={whyHireMe.title}
          description={whyHireMe.blurb}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {whyHireMe.reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={0.07 * (i % 2)} className="h-full">
              <div className="flex h-full gap-4 rounded-3xl border border-linen bg-sand/50 p-7 transition-all hover:-translate-y-1 hover:shadow-soft dark:border-bark dark:bg-espresso/50">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta/12 text-terracotta dark:bg-ember/15 dark:text-ember"
                >
                  <Check size={17} strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cocoa dark:text-latte">
                    {reason.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
