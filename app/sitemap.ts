import type { MetadataRoute } from "next";
import { getPublishedWingSlugs } from "@/lib/contentful";

const routes = [
  "",
  "/about",
  "/contact",
  "/become-a-member",
  "/media-room",
  "/our-mandate",
  "/our-work",
  "/privacy",
  "/terms",
  "/wings",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.apccares.org").replace(/\/+$/, "");
  const wingSlugs = await getPublishedWingSlugs();

  return [
    ...routes.map((route) => ({ url: `${baseUrl}${route}` })),
    ...wingSlugs.map((slug) => ({ url: `${baseUrl}/wings/${slug}` })),
  ];
}
