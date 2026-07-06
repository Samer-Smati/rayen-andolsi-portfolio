import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://samer-portfolio.vercel.app";

export const metadata: Metadata = {
  title: "Samer Smati — Full-Stack Developer",
  description:
    "Full-Stack Developer with 6+ years of experience in TypeScript, React, Angular, Next.js, and Node.js. Building scalable, high-performance web applications.",
  keywords: [
    "Samer Smati",
    "Full-Stack Developer",
    "TypeScript",
    "React",
    "Angular",
    "Next.js",
    "Node.js",
    "Tunisia",
  ],
  authors: [{ name: "Samer Smati" }],
  openGraph: {
    title: "Samer Smati — Full-Stack Developer",
    description:
      "Full-Stack Developer with 6+ years of experience in TypeScript, React, Angular, Next.js, and Node.js.",
    url: siteUrl,
    siteName: "Samer Smati Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samer Smati — Full-Stack Developer",
    description:
      "Full-Stack Developer with 6+ years of experience in TypeScript, React, Angular, Next.js, and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full bg-[#0a0a0f] antialiased">{children}</body>
    </html>
  );
}
