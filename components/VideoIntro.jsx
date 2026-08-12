"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { introVideo } from "@/data/content";

/**
 * VideoIntro — an on-demand intro video. Never autoplays.
 *
 * Nothing renders until `introVideo.src` is set in data/content.js,
 * so this section stays invisible until the video exists.
 *
 * Both modes are bandwidth-friendly by design: the video (or the
 * YouTube player) is only fetched once the visitor actively clicks
 * play. Until then the page costs nothing but a poster image.
 */
export default function VideoIntro() {
  // Tracks the click-to-load step used by both modes
  const [activated, setActivated] = useState(false);

  // Section is entirely opt-in
  if (!introVideo?.src) return null;

  const isYouTube = introVideo.type === "youtube";

  return (
    <section id="intro-video" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow={introVideo.eyebrow}
          title={introVideo.title}
          description={introVideo.blurb}
        />

        <Reveal>
          <div className="group relative aspect-video overflow-hidden rounded-3xl border border-linen bg-espresso shadow-lift dark:border-bark">
            {/*
              Before activation both modes show the same poster +
              play button, so the two look identical to the visitor.
            */}
            {!activated && (
              <button
                type="button"
                onClick={() => setActivated(true)}
                aria-label={`Play intro video${
                  introVideo.duration ? ` (${introVideo.duration})` : ""
                }`}
                className="absolute inset-0 z-10 h-full w-full cursor-pointer"
              >
                {introVideo.poster && (
                  <Image
                    src={introVideo.poster}
                    alt=""
                    fill
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Warm scrim keeps the play button legible on any frame */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-charcoal/10"
                />

                {/* Play affordance */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-terracotta text-cream shadow-lift transition-all duration-300 group-hover:scale-110 group-hover:bg-terracotta-dark"
                >
                  {/* Nudged right to optically centre the triangle */}
                  <Play size={30} fill="currentColor" className="ml-1" />
                </span>

                {introVideo.duration && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-charcoal/70 px-3 py-1.5 text-xs font-medium text-cream backdrop-blur-sm"
                  >
                    <Clock size={13} />
                    {introVideo.duration}
                  </span>
                )}
              </button>
            )}

            {/* Local file: a plain, fully-accessible <video> element */}
            {activated && !isYouTube && (
              <video
                className="h-full w-full bg-charcoal"
                controls
                autoPlay
                playsInline
                preload="none"
                poster={introVideo.poster || undefined}
              >
                <source src={introVideo.src} type="video/mp4" />
                {introVideo.captions && (
                  <track
                    kind="captions"
                    src={introVideo.captions}
                    srcLang="en"
                    label="English"
                    default
                  />
                )}
                {/* Fallback for browsers that can't play the file at all */}
                <p className="p-6 text-cream">
                  Your browser can&apos;t play this video.{" "}
                  <a href={introVideo.src} className="underline">
                    Download it instead
                  </a>
                  .
                </p>
              </video>
            )}

            {/* YouTube: only now do we contact youtube-nocookie.com */}
            {activated && isYouTube && (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${introVideo.src}?autoplay=1&rel=0&modestbranding=1`}
                title={introVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
