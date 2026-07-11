/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is fully static (no server code). Vercel and Netlify both
  // auto-detect Next.js with zero configuration.
  //
  // If you ever want a plain HTML export (e.g. for GitHub Pages),
  // uncomment the two lines below and run `npm run build` — the static
  // site will be emitted to the `out/` folder:
  //
  // output: "export",
  // images: { unoptimized: true },

  images: {
    // The placeholder artwork ships as local SVGs; this lets next/image
    // serve them. Once you swap in real JPG/PNG/WebP photos you can
    // remove these two lines.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
