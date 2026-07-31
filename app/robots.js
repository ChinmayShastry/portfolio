import { siteMeta } from "@/data/content";

/** Generates /robots.txt automatically at build time. */
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteMeta.url}/sitemap.xml`,
  };
}
