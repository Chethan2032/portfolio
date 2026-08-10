import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.chethan2032.com/sitemap.xml",
    host: "https://www.chethan2032.com",
  };
}
