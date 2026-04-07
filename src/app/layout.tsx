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
  return {
    title: config?.title || "Gia Huy — Marketing Portfolio",
    description:
      config?.tagline ||
      "Game Marketing, Livestream Production & Outdoor Activations",
    openGraph: {
      title: config?.title || "Gia Huy — Marketing Portfolio",
      description:
        config?.tagline ||
        "Game Marketing, Livestream Production & Outdoor Activations",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config?.title || "Gia Huy — Marketing Portfolio",
      description:
        config?.tagline ||
        "Game Marketing, Livestream Production & Outdoor Activations",
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
      <body className="bg-surface text-primary font-body antialiased overflow-hidden h-dvh">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
