"use client";

import { ArrowUp } from "lucide-react";
import { profile, contact } from "@/data/content";

/** Footer — copyright, compact social links, and a back-to-top button. */
export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-linen px-5 py-10 sm:px-8 dark:border-bark">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-cocoa dark:text-latte">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          a lot of chai.
        </p>

        <div className="flex items-center gap-5">
          {/* Compact social row */}
          <ul className="flex items-center gap-4">
            {contact.socials.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-cocoa transition-colors hover:text-terracotta dark:text-latte dark:hover:text-ember"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="rounded-full border border-linen bg-sand/60 p-2.5 text-cocoa transition-all hover:-translate-y-1 hover:border-terracotta hover:text-terracotta dark:border-bark dark:bg-espresso/60 dark:text-latte dark:hover:border-ember dark:hover:text-ember"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
