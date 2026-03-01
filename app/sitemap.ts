import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://blubit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/career", "/contact", "/request-quote", "/admin/login"].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
    lastModified: new Date(),
  }));
}

