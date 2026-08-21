import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";
import { siteMeta, profile, contact } from "@/data/content";
import ScrollProgress from "@/components/ScrollProgress";

/* Typography:
   - Figtree  → clean, friendly sans-serif for body text
   - Fraunces → warm, characterful serif for headings */
const fontBody = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/* SEO — values come from data/content.js (edit them there) */
export const metadata = {
  metadataBase: new URL(siteMeta.url),
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.title,
    locale: "en_US",
    type: "website",
    // Dimensions matter: without them some platforms fall back to a
    // small thumbnail instead of the full-width card.
    ...(siteMeta.ogImage
      ? {
          images: [
            {
              url: siteMeta.ogImage,
              width: 1200,
              height: 630,
              alt: `${profile.name} — ${profile.roles[0]}`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    ...(siteMeta.ogImage ? { images: [siteMeta.ogImage] } : {}),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  // Matches the page background so mobile browser chrome blends in
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF5EE" },
    { media: "(prefers-color-scheme: dark)", color: "#211A14" },
  ],
};

/* Runs before paint: applies the saved (or system-preferred) theme
   so the page never flashes the wrong colors on load. */
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
  // Enables the scroll-reveal animation. Sections are visible by default;
  // this class is what allows them to start hidden. If this script never
  // runs, the page simply renders with everything already showing.
  document.documentElement.classList.add("js-ready");
})();
`;

/* Structured data — helps Google show you as a person, not just a page.
   Built automatically from your content config. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.roles[0],
  description: siteMeta.description,
  email: `mailto:${profile.email}`,
  url: siteMeta.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: contact.socials
    .filter((social) => !social.href.startsWith("mailto:"))
    .map((social) => social.href),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontBody.variable} ${fontDisplay.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-sans">
        {/* Keyboard users can jump straight past the nav.
            Invisible until focused with Tab. */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
