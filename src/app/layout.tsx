import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://rayen-andolsi-portfolio.vercel.app";

export const metadata: Metadata = {
  title: "Rayen Andolsi — Full-Stack Developer",
  description:
    "Java & Angular full-stack developer with 4+ years building scalable enterprise applications — Spring Boot, Angular, PrimeNG, ERP/CRM systems.",
  keywords: [
    "Rayen Andolsi",
    "Full-Stack Developer Tunisia",
    "Java Developer",
    "Angular Developer",
    "Spring Boot Developer",
    "PrimeNG",
    "ERP CRM Developer",
    "TypeScript",
    "Enterprise Applications",
  ],
  authors: [{ name: "Rayen Andolsi" }],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Rayen Andolsi — Full-Stack Developer",
    description:
      "4+ years full-stack. Java Spring Boot, Angular, PrimeNG, ERP/CRM platforms.",
    url: siteUrl,
    siteName: "Rayen Andolsi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayen Andolsi — Full-Stack Developer",
    description:
      "Java & Angular full-stack developer. Spring Boot, ERP/CRM, enterprise dashboards.",
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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body
        className="min-h-full bg-[#0b0f14] antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
