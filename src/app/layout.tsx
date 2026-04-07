import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Gia Huy — Marketing Portfolio",
  description: "Game Marketing, Livestream Production & Outdoor Activations",
};

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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
