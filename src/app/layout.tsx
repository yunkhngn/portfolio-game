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

  const title = config?.title || "Modern Portfolio Template";
  const description =
    config?.tagline ||
    "A premium marketing portfolio template built with Next.js and Tailwind CSS.";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const ogImage = `${siteUrl}/thumbnail.jpg`;

  return {
    title,
    description,
    keywords: [
      config?.name || "Portfolio",
      "marketing portfolio",
      "creative strategist",
      "integrated marketing",
      "digital strategy",
      "portfolio template",
    ],
    authors: [{ name: config?.name || "Portfolio Author" }],
    creator: config?.name || "Portfolio Author",
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
      siteName: `${config?.name || "Author"} Portfolio`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
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
