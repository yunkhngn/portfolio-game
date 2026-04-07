import { createClient } from "contentful";
import type {
  SiteConfig,
  HeroSection,
  AboutSection,
  Project,
  Service,
  Experience,
  Testimonial,
  MarqueeItem,
  Asset,
} from "./types";
import {
  mockSiteConfig,
  mockHero,
  mockAbout,
  mockProjects,
  mockServices,
  mockExperiences,
  mockTestimonials,
  mockMarqueeItems,
} from "./mock-data";

const isContentfulConfigured =
  !!process.env.CONTENTFUL_SPACE_ID && !!process.env.CONTENTFUL_ACCESS_TOKEN;

const client = isContentfulConfigured
  ? createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    })
  : null;

function parseAsset(asset: any): Asset | undefined {
  if (!asset?.fields?.file) return undefined;
  const file = asset.fields.file;
  return {
    url: `https:${file.url}`,
    title: asset.fields.title || "",
    width: file.details?.image?.width,
    height: file.details?.image?.height,
    contentType: file.contentType,
  };
}

function parseAssets(assets: any[]): Asset[] {
  return (assets || []).map(parseAsset).filter(Boolean) as Asset[];
}

export async function getSiteConfig(): Promise<SiteConfig> {
  if (!client) return mockSiteConfig;
  try {
    const entries = await client.getEntries({
      content_type: "siteConfig",
      limit: 1,
    });
    if (!entries.items.length) return mockSiteConfig;
    return entries.items[0].fields as unknown as SiteConfig;
  } catch {
    return mockSiteConfig;
  }
}

export async function getHero(): Promise<HeroSection> {
  if (!client) return mockHero;
  try {
    const entries = await client.getEntries({
      content_type: "heroSection",
      limit: 1,
    });
    if (!entries.items.length) return mockHero;
    const fields = entries.items[0].fields as any;
    return {
      heading: fields.heading,
      subheading: fields.subheading,
      backgroundImage: parseAsset(fields.backgroundImage),
      backgroundVideo: parseAsset(fields.backgroundVideo),
      ctaText: fields.ctaText,
    };
  } catch {
    return mockHero;
  }
}

export async function getAbout(): Promise<AboutSection> {
  if (!client) return mockAbout;
  try {
    const entries = await client.getEntries({
      content_type: "aboutSection",
      limit: 1,
    });
    if (!entries.items.length) return mockAbout;
    const fields = entries.items[0].fields as any;
    return {
      bio: fields.bio,
      photo: parseAsset(fields.photo)!,
      skills: fields.skills || [],
    };
  } catch {
    return mockAbout;
  }
}

export async function getProjects(): Promise<Project[]> {
  if (!client) return mockProjects;
  try {
    const entries = await client.getEntries({
      content_type: "project",
      order: ["fields.order"] as any,
      include: 2,
    });
    if (!entries.items.length) return mockProjects;
    return entries.items.map((item: any) => ({
      title: item.fields.title,
      slug: item.fields.slug,
      projectType: item.fields.projectType,
      category: item.fields.category,
      description: item.fields.description,
      tags: item.fields.tags || [],
      thumbnail: parseAsset(item.fields.thumbnail)!,
      media: parseAssets(item.fields.media),
      heroVideo: parseAsset(item.fields.heroVideo),
      featured: item.fields.featured || false,
      year: item.fields.year,
      order: item.fields.order,
    }));
  } catch {
    return mockProjects;
  }
}

export async function getServices(): Promise<Service[]> {
  if (!client) return mockServices;
  try {
    const entries = await client.getEntries({
      content_type: "service",
      order: ["fields.order"] as any,
    });
    if (!entries.items.length) return mockServices;
    return entries.items.map((item: any) => item.fields as Service);
  } catch {
    return mockServices;
  }
}

export async function getExperiences(): Promise<Experience[]> {
  if (!client) return mockExperiences;
  try {
    const entries = await client.getEntries({
      content_type: "experience",
      order: ["-fields.order"] as any,
    });
    if (!entries.items.length) return mockExperiences;
    return entries.items.map((item: any) => item.fields as Experience);
  } catch {
    return mockExperiences;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!client) return mockTestimonials;
  try {
    const entries = await client.getEntries({
      content_type: "testimonial",
      order: ["fields.order"] as any,
    });
    if (!entries.items.length) return mockTestimonials;
    return entries.items.map((item: any) => ({
      ...(item.fields as any),
      avatar: parseAsset(item.fields.avatar),
    }));
  } catch {
    return mockTestimonials;
  }
}

export async function getMarqueeItems(): Promise<MarqueeItem[]> {
  if (!client) return mockMarqueeItems;
  try {
    const entries = await client.getEntries({
      content_type: "marqueeItem",
      order: ["fields.order"] as any,
    });
    if (!entries.items.length) return mockMarqueeItems;
    return entries.items.map((item: any) => item.fields as MarqueeItem);
  } catch {
    return mockMarqueeItems;
  }
}
