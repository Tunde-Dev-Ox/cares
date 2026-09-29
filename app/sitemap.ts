import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/contact",
  "/get-involved",
  "/media-room",
  "/our-mandate",
  "/our-work",
  "/privacy",
  "/terms",
  "/wings",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.apccares.org";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
