import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { PostHogProvider } from "@/components/posthog-provider";
import { getWingNavigation } from "@/lib/contentful";
import "./globals.css";

const JakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "APC CARES",
  alternateName: "Community Access to Resources & Empowerment Services",
  url: "https://www.apccares.org",
  logo: "https://www.apccares.org/logo.png",
  sameAs: [
    "https://x.com/apccares",
    "https://web.facebook.com/profile.php?id=61594507993276",
    "https://www.instagram.com/apccares/",
    "https://www.youtube.com/channel/UCc38qTsxAXDRbeH1IgTjWWQ",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.apccares.org"),
  title: "APC Cares | Grassroots Support & Community Empowerment",
  description:
    "APC Cares supports grassroots engagement and community access to resources and empowerment opportunities across Nigeria.",
  keywords: [
    "APC Cares",
    "APC support group",
    "grassroots empowerment Nigeria",
    "community development Nigeria",
    "youth and women empowerment",
    "grassroots support group",
    "community support programmes",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "APC Cares | Grassroots Empowerment & Community Support",
    description:
      "Connecting party vision with grassroots realities and practical opportunities for communities across Nigeria.",
    siteName: "APC Cares",
    locale: "en_NG",
    type: "website",
    url: "https://www.apccares.org/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "APC Cares grassroots support and community empowerment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APC Cares | Grassroots Empowerment & Community Support",
    description:
      "Connecting party vision with grassroots realities and practical opportunities for communities across Nigeria.",
    images: ["/opengraph-image"],
    creator: "@apccares",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutContent>{children}</RootLayoutContent>;
}

async function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const wings = await getWingNavigation();

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${JakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f7f8f3] text-[#163331]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Suspense fallback={null}>
          <PostHogProvider />
        </Suspense>
        <Header wings={wings} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
