import type { NextConfig } from "next";

/**
 * Static export.
 *
 * The Vercel git integration on this repo stopped firing — GitHub recorded no
 * webhook and no deployment after 2026-01-28, so pushes changed nothing and the
 * live site sat on a seven-month-old build. Exporting to plain HTML removes the
 * dependency on any one host: the same output can be served by GitHub Pages,
 * Cloudflare Pages, Vercel, or a directory on a machine you own.
 *
 * `images.unoptimized` is required by `output: "export"` — there is no server to
 * run the optimiser, and the only images here are the mark, already small.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
