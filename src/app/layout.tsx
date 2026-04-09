import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { getSiteConfig } from "@/lib/contentful";
import Navigation from "@/components/Navigation";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();

  const title = config?.title || "Gia Huy — Marketing Portfolio";
  const description =
    config?.tagline ||
    "Game Marketing, Livestream Production & Outdoor Activations — Creative Strategist based in Vietnam.";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://giahuy.dev";
  const ogImage = `${siteUrl}/thumbnail.jpg`;

  return {
    title,
    description,
    keywords: [
      "Gia Huy",
      "marketing portfolio",
      "game marketing",
      "livestream production",
      "outdoor activation",
      "creative strategist",
      "brand marketing",
      "campaign management",
      "Vietnam marketer",
    ],
    authors: [{ name: "Gia Huy" }],
    creator: "Gia Huy",
    metadataBase: new URL(siteUrl),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "Gia Huy Portfolio",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Gia Huy — Marketing Portfolio",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@giahuy",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-surface text-primary font-body antialiased">
        {/* <Navigation /> */}
        {children}
      </body>
    </html>
  );
}
