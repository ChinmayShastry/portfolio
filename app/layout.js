import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";
import { siteMeta } from "@/data/content";

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
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.title,
    type: "website",
    ...(siteMeta.ogImage ? { images: [{ url: siteMeta.ogImage }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
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
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontBody.variable} ${fontDisplay.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
