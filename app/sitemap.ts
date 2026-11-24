
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://muazzam-manzoor.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
