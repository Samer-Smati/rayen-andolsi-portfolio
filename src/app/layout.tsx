import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://samer-portfolio.vercel.app";

export const metadata: Metadata = {
  title: "Samer Smati — Full-Stack Developer",
  description:
    "Full-Stack Developer with 6+ years experience and 20 months GCC AdTech at ArabyAds Dubai. React, Angular 19, Next.js, Node.js. Arabic native.",
  keywords: [
    "Samer Smati",
    "Full-Stack Developer Dubai",
    "Developer Jobs UAE",
    "React Developer Dubai",
    "Angular Developer Dubai",
    "Node.js Developer UAE",
    "GCC AdTech",
    "ArabyAds",
    "GCC AdTech",
    "Arabic Developer UAE",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Samer Smati" }],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Samer Smati — Full-Stack Developer",
    description:
      "6+ years full-stack. Ex-ArabyAds Dubai (GCC AdTech). React, Angular, Next.js, Node.js.",
    url: siteUrl,
    siteName: "Samer Smati Portfolio",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/samer-profile.jpg`,
        width: 1200,
        height: 1200,
        alt: "Samer Smati — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samer Smati — Full-Stack Developer",
    description:
      "Full-stack engineer. GCC AdTech experience. React, Angular, Next.js, Node.js.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body
        className="min-h-full bg-[#0a0a0f] antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
