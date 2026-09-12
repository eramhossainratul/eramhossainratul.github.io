import type { MetadataRoute } from "next";

// The site deploys to GitHub Pages under /Eram_portfolio/, mirrored here so
// the generated sitemap.xml URLs resolve on the live origin (basePath is
// inlined at build time by the deploy workflow; locally it is empty).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Required for `output: "export"` — the sitemap is generated once at build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://maherukhislam.github.io${basePath}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}