"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects, contact } from "@/data/content";

/**
 * Projects — responsive card grid. Each card shows an image, title,
 * description, tag chips, and (optionally) Live / Code links.
 * Cards lift on hover; the image zooms gently behind a warm scrim.
 * Projects flagged `featured` in data/content.js get a badge.
 */
export default function Projects() {
  // Reuse the GitHub link from the socials list for the footer button
  const githubProfile = contact.socials.find(
    (social) => social.label === "GitHub"
  )?.href;

  return (
    <section id="projects" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="GenAI and RAG systems, deep learning, and the fundamentals underneath. Three have live demos — demo and code links are on each card."
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.08 * (i % 3)} className="h-full">
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-linen bg-cream shadow-soft transition-shadow hover:shadow-lift dark:border-bark dark:bg-espresso"
              >
                {/* Preview image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Warm scrim so the badge stays readable on any artwork */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  {project.featured && (
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-terracotta shadow-soft backdrop-blur-sm dark:bg-night/90 dark:text-ember">
                      <Star size={12} fill="currentColor" aria-hidden="true" />
                      Featured
                    </span>
                  )}
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
                        aria-label={`${project.title} — open live demo (opens in a new tab)`}
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
                        aria-label={`${project.title} — view source on GitHub (opens in a new tab)`}
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

        {/* Footer link out to the full GitHub profile */}
        {githubProfile && (
          <Reveal delay={0.1} className="mt-12 text-center">
            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-linen bg-sand/60 px-7 py-3.5 font-medium transition-all hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta dark:border-bark dark:bg-espresso/60 dark:hover:border-ember dark:hover:text-ember"
            >
              <Github size={18} aria-hidden="true" />
              See everything on GitHub
              <ExternalLink
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
