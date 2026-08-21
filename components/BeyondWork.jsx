"use client";

import { Music4 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { beyondWork } from "@/data/content";

/**
 * BeyondWork — the music section. Deliberately short and placed late,
 * after the technical case has been made.
 *
 * Stats render as plain values rather than using CountUp, because the
 * age range ("4–65") isn't a single number to animate.
 *
 * Hidden entirely when `beyondWork` is null in data/content.js.
 */
export default function BeyondWork() {
  if (!beyondWork?.paragraphs?.length) return null;

  return (
    <section id="beyond" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={beyondWork.eyebrow}
          title={beyondWork.title}
        />

        <Reveal>
          <div className="rounded-3xl border border-linen bg-sand/40 p-8 sm:p-10 dark:border-bark dark:bg-espresso/40">
            <span
              aria-hidden="true"
              className="mb-6 inline-flex rounded-2xl bg-terracotta/10 p-3.5 text-terracotta dark:bg-ember/15 dark:text-ember"
            >
              <Music4 size={24} />
            </span>

            {beyondWork.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="mb-4 text-lg leading-relaxed text-cocoa last:mb-0 dark:text-latte"
              >
                {paragraph}
              </p>
            ))}

            {beyondWork.stats?.length > 0 && (
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-linen pt-6 dark:border-bark">
                {beyondWork.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col text-center">
                    <dt className="order-2 mt-1 text-xs leading-snug text-cocoa dark:text-latte">
                      {stat.label}
                    </dt>
                    <dd className="font-display text-2xl font-semibold text-terracotta sm:text-3xl dark:text-ember">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
