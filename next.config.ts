import type { NextConfig } from "next";

// Static export for GitHub Pages: `next build` writes plain files to ./out.
const config: NextConfig = {
  output: "export",
  trailingSlash: true, // /impressum/index.html, works on any static host
  images: { unoptimized: true },
};
export default config;
