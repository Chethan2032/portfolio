import type { MetadataRoute } from "next";

// Must be the www host — the apex 308-redirects to www, and a sitemap listing
// a redirecting URL gets rejected by Google.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.chethan2032.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
