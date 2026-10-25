import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com.au";
  const paths = ["", "/services", "/doctors", "/visit", "/about", "/contact", "/book", "/privacy"];
  return paths.map((p) => ({ url: `${site}${p}`, lastModified: new Date() }));
}
