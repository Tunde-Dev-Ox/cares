import "server-only";

import type { Document } from "@contentful/rich-text-types";

const CONTENT_TYPE = "apcCaresWings";

const fallbackWings = [
  { slug: "health", title: "Health" },
  { slug: "education", title: "Education" },
  { slug: "economic-empowerment", title: "Economic Empowerment" },
  { slug: "infrastructure", title: "Infrastructure" },
  { slug: "security", title: "Security" },
  { slug: "youth", title: "Youth" },
  { slug: "women", title: "Women" },
  { slug: "agriculture-food-security", title: "Agriculture & Food Security" },
  { slug: "civic-engagement", title: "Civic Engagement" },
  { slug: "partnerships-diaspora", title: "Partnerships & Diaspora" },
];

type ContentfulEntry = {
  fields?: Record<string, unknown>;
};

export type ContentfulAsset = {
  sys?: { id?: string };
  fields?: {
    title?: string;
    description?: string;
    file?: {
      url?: string;
      details?: { image?: { width?: number; height?: number } };
    };
  };
};

type ContentfulResponse = {
  items?: ContentfulEntry[];
  includes?: { Asset?: ContentfulAsset[] };
};

export type WingNavigationItem = {
  slug: string;
  title: string;
};

export type ContentfulWing = WingNavigationItem & {
  challenge: Document | null;
  approach: Document | null;
  flagshipProgram: Document | null;
  programmes: Document | null;
  keyPartners: Document | null;
  heroText: Document | null;
  safeguards: Document | null;
  change: Document | null;
  image: {
    url: string;
    title: string;
    description: string;
    width: number;
    height: number;
  } | null;
  assets: ContentfulAsset[];
};

function getContentfulConfig() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID || process.env.NEXT_CONTENTFUL_SPACE_ID;
  const deliveryToken = process.env.CONTENTFUL_DELIVERY_TOKEN;

  if (!spaceId || !deliveryToken) {
    return null;
  }

  return {
    spaceId,
    deliveryToken,
    environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
  };
}

async function fetchWingEntries(slug?: string): Promise<ContentfulResponse | null> {
  const config = getContentfulConfig();
  if (!config) {
    return null;
  }

  const query = new URLSearchParams({ content_type: CONTENT_TYPE, include: "1", limit: "1000" });
  if (slug) {
    query.set("fields.slug", slug);
  }

  const url = `https://cdn.contentful.com/spaces/${config.spaceId}/environments/${config.environment}/entries?${query}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${config.deliveryToken}` },
    next: { revalidate: 3600, tags: ["contentful-wings"] },
  });

  if (!response.ok) {
    console.error(`Contentful wing request failed (${response.status}).`);
    return null;
  }

  return (await response.json()) as ContentfulResponse;
}

export async function getPublishedWingSlugs(): Promise<string[]> {
  try {
    const result = await fetchWingEntries();
    const slugs = (result?.items ?? [])
      .map((entry) => entry.fields?.slug)
      .filter((slug): slug is string => typeof slug === "string" && slug.trim().length > 0)
      .map((slug) => slug.trim());

    return [...new Set(slugs)];
  } catch {
    return [];
  }
}

function toDocument(value: unknown): Document | null {
  if (
    typeof value === "object" &&
    value !== null &&
    "nodeType" in value &&
    value.nodeType === "document" &&
    "content" in value &&
    Array.isArray(value.content)
  ) {
    return value as Document;
  }

  return null;
}

function toWing(entry: ContentfulEntry, assets: ContentfulAsset[] = []): ContentfulWing | null {
  const fields = entry.fields;
  if (!fields || typeof fields.slug !== "string" || !fields.slug) {
    return null;
  }

  const title = typeof fields.title === "string" && fields.title
    ? fields.title
    : fields.slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  const imageLink = fields.image as { sys?: { id?: string } } | undefined;
  const imageAsset = assets.find((asset) => asset.sys?.id === imageLink?.sys?.id);
  const imageFile = imageAsset?.fields?.file;
  const imageUrl = imageFile?.url;

  return {
    slug: fields.slug,
    title,
    challenge: toDocument(fields.challenge),
    approach: toDocument(fields.approach),
    flagshipProgram: toDocument(fields.flagshipProgram),
    programmes: toDocument(fields.programmes),
    keyPartners: toDocument(fields.keyPartners),
    safeguards: toDocument(fields.safeguards),
    heroText: toDocument(fields.heroText),
    change: toDocument(fields.change),
    image: imageUrl
      ? {
        url: imageUrl.startsWith("//") ? `https:${imageUrl}` : imageUrl,
        title: imageAsset?.fields?.title || title,
        description: imageAsset?.fields?.description || "",
        width: imageFile?.details?.image?.width || 1200,
        height: imageFile?.details?.image?.height || 800,
      }
      : null,
    assets,
  };
}

export async function getWingNavigation(): Promise<WingNavigationItem[]> {
  const result = await fetchWingEntries();
  const wings = (result?.items ?? [])
    .map((entry) => toWing(entry, result?.includes?.Asset))
    .filter((wing): wing is ContentfulWing => wing !== null)
    .map(({ slug, title }) => ({ slug, title }));

  if (wings.length === 0) {
    return fallbackWings;
  }

  const order = new Map(fallbackWings.map((wing, index) => [wing.slug, index]));
  return wings.sort(
    (first, second) =>
      (order.get(first.slug) ?? Number.MAX_SAFE_INTEGER) -
      (order.get(second.slug) ?? Number.MAX_SAFE_INTEGER),
  );
}

export async function getWingBySlug(slug: string): Promise<ContentfulWing | null> {
  const result = await fetchWingEntries(slug);
  const entry = result?.items?.[0];
  return entry ? toWing(entry, result?.includes?.Asset) : null;
}