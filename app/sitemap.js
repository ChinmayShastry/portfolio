import { siteMeta } from "@/data/content";

/** Generates /sitemap.xml automatically at build time. */
export default function sitemap() {
  return [
    {
      url: siteMeta.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
