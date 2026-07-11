"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/content";

/**
 * Projects — responsive card grid. Each card shows an image, title,
 * description, tag chips, and (optionally) Live / Code links.
 * Cards lift slightly on hover; the image zooms gently.
 */
export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="RAG systems, agentic tools, and deep-learning models — built end-to-end and shipped."
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.08 * (i % 3)} className="h-full">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-linen bg-cream shadow-soft transition-shadow hover:shadow-lift dark:border-bark dark:bg-espresso"
              >
                {/* Preview image */}
                <div className="group relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-cocoa dark:text-latte">
                    {project.description}
                  </p>

                  {/* Tag chips */}
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-amber/15 px-3 py-1 text-xs font-medium text-brown dark:bg-honey/10 dark:text-honey"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Links — hidden automatically when the URL is "" */}
                  <div className="mt-5 flex items-center gap-4 border-t border-linen pt-4 dark:border-bark">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-terracotta transition-colors hover:text-terracotta-dark dark:text-ember dark:hover:text-honey"
                      >
                        <ExternalLink size={15} aria-hidden="true" />
                        Live demo
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-cocoa transition-colors hover:text-charcoal dark:text-latte dark:hover:text-parchment"
                      >
                        <Github size={15} aria-hidden="true" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
