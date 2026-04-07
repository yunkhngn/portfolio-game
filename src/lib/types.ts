import type { Document } from "@contentful/rich-text-types";

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  email: string;
  socialLinks: { platform: string; url: string; icon: string }[];
}

export type ProjectType = "Game" | "Clip" | "Outdoor";

export interface HeroSection {
  heading: string;
  subheading: string;
  backgroundImage?: Asset;
  backgroundVideo?: Asset;
  ctaText: string;
}

export interface AboutSection {
  bio: Document;
  photo: Asset;
  skills: string[];
}

export interface Project {
  title: string;
  slug: string;
  projectType: ProjectType;
  category: string;
  description: Document;
  tags: string[];
  thumbnail: Asset;
  media: Asset[];
  heroVideo?: Asset;
  featured: boolean;
  year: number;
  order: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface Experience {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  order: number;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: Asset;
  order: number;
}

export interface MarqueeItem {
  text: string;
  order: number;
}

export interface Asset {
  url: string;
  title: string;
  width?: number;
  height?: number;
  contentType: string;
}
