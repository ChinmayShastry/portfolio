"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/content";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * Navbar — sticky, minimal. Gains a soft blur + shadow once the page
 * is scrolled, and highlights whichever section you're currently
 * reading. Collapses to a hamburger menu on mobile.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  // Track scroll position for both the navbar background and the
  // "which section am I in?" highlight (a lightweight scroll-spy).
  useEffect(() => {
    const ids = navLinks.map((link) => link.href.replace("#", ""));

    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      // The section whose top has most recently passed the navbar wins.
      const marker = window.scrollY + 140;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      }

      // Near the very bottom, force-select the last link — short final
      // sections can otherwise never become "active".
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 80;
      setActiveId(atBottom ? ids[ids.length - 1] : current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape, and lock background scrolling
  // while it's open.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/85 shadow-soft backdrop-blur-md dark:bg-night/85"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        {/* Logo / name — scrolls back to top */}
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight transition-colors hover:text-terracotta dark:hover:text-ember"
        >
          {profile.name}
          <span className="text-terracotta dark:text-ember">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-terracotta dark:text-ember"
                    : "text-cocoa hover:bg-sand hover:text-charcoal dark:text-latte dark:hover:bg-espresso dark:hover:text-parchment"
                }`}
              >
                {link.label}
                {/* Animated underline that slides between active links */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-terracotta dark:bg-ember"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-full p-2.5 text-cocoa transition-colors hover:bg-sand hover:text-terracotta dark:text-latte dark:hover:bg-espresso dark:hover:text-honey"
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-linen bg-cream/95 backdrop-blur-md md:hidden dark:border-bark dark:bg-night/95"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-terracotta/10 text-terracotta dark:bg-ember/10 dark:text-ember"
                        : "text-cocoa hover:bg-sand hover:text-charcoal dark:text-latte dark:hover:bg-espresso dark:hover:text-parchment"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
