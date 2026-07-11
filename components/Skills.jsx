"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { services, toolbelt } from "@/data/content";

/**
 * Skills / "What I Do" — a grid of service cards (icon + title +
 * description) followed by a chip cloud of tools & technologies.
 * Both lists live in data/content.js.
 */
export default function Skills() {
  return (
    <section id="skills" className="bg-sand/50 px-5 py-24 sm:px-8 dark:bg-espresso/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What I Do"
          title="Skills that bridge two worlds"
          description="Applied AI engineering, grounded in five years of real financial-markets experience."
        />

        {/* Service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={0.08 * (i % 3)}>
                <div className="group h-full rounded-3xl border border-linen bg-cream p-7 shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-lift dark:border-bark dark:bg-night">
                  <div className="mb-5 inline-flex rounded-2xl bg-terracotta/10 p-3.5 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-cream dark:bg-ember/15 dark:text-ember dark:group-hover:bg-ember dark:group-hover:text-night">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cocoa dark:text-latte">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Toolbelt chips */}
        <Reveal delay={0.15} className="mt-14">
          <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.2em] text-cocoa dark:text-latte">
            Tools I reach for
          </h3>
          <ul className="flex flex-wrap justify-center gap-2.5">
            {toolbelt.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-linen bg-cream px-4 py-1.5 text-sm font-medium text-cocoa transition-colors hover:border-amber hover:text-charcoal dark:border-bark dark:bg-night dark:text-latte dark:hover:border-honey dark:hover:text-parchment"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
