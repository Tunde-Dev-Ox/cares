import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { PostHogProvider } from "@/components/posthog-provider";
import "./globals.css";

const JakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.apccares.org"),
  title: {
    default: "APC CARES | Grassroots Empowerment, Community Support & National Development",
    template: "%s | APC CARES",
  },
  description:
    "APC CARES is a grassroots support group connecting communities across Nigeria with empowerment, civic engagement, resources, and practical opportunities for local development.",
  keywords: [
    "APC CARES",
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
    title: "APC CARES | Grassroots Empowerment & Community Support",
    description:
      "Connecting party vision with grassroots realities and practical opportunities for communities across Nigeria.",
    siteName: "APC CARES",
    locale: "en_NG",
    type: "website",
    url: "https://www.apccares.org/",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "APC CARES logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APC CARES | Grassroots Empowerment & Community Support",
    description:
      "Connecting party vision with grassroots realities and practical opportunities for communities across Nigeria.",
    images: ["/logo.png"],
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
  return (
    <html
      lang="en"
      className={`${JakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f7f8f3] text-[#163331]">
        <Suspense fallback={null}>
          <PostHogProvider />
        </Suspense>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
