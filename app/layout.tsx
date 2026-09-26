import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import "./globals.css";

const JakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "APC CARES | Community Access to Resources & Empowerment Services",
    template: "%s | APC CARES",
  },
  description:
    "APC CARES is an officially recognized APC support group translating party policies into visible community change across Nigeria's 36 states and 774 Local Government Areas.",
  openGraph: {
    title: "APC CARES | Grassroots Empowerment & Support Group",
    description:
      "Bridging the distance between party leadership and everyday realities in Nigeria's communities.",
    siteName: "APC CARES",
    locale: "en_NG",
    type: "website",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
