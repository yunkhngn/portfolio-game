import type { Document } from "@contentful/rich-text-types";

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  email: string;
  socialLinks: { platform: string; url: string; icon: string }[];
}

export type ProjectType = "Game" | "Clip" | "Outdoor";

export interface HeroFloatingObject {
  image: Asset;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";
  size?: "sm" | "md" | "lg";
  rotate?: number;
}

export interface HeroSection {
  label: string;
  headingLine1: string;
  headingLine2: string;
  name: string;
  year: string;
  floatingObjects?: HeroFloatingObject[];
  backgroundImage?: Asset;
  backgroundVideo?: Asset;
}

export interface AboutSection {
  name: string;
  education: string;
  educationDetail?: string;
  bio: Document;
  photo: Asset;
  skills: string[];
  software: string[];
  experiences?: {
    role: string;
    company: string;
    period?: string;
  }[];
}

export interface Project {
  title: string;
  slug: string;
  projectType: ProjectType;
  category: string;
  
  image1Title?: string;
  image2Title?: string;
  situation?: Document;
  myScope?: Document;
  whatIveDone?: Document;
  result?: Document;
  keyLearning?: Document;

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

export interface Achievement {
  title: string;
  description: Document;
  media1: Asset;
  media2: Asset;
}

export interface Learn {
  title: string;
  description: Document;
  media1: Asset;
  media2: Asset;
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
