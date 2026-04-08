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
  MarqueeItem,
  Asset,
  Achievement,
  Learn,
} from "./types";
import { DEFAULT_PLACEHOLDER } from "./constants";
import { mockAchievement, mockLearn } from "./mock-data";

const isContentfulConfigured =
  !!process.env.CONTENTFUL_SPACE_ID && !!process.env.CONTENTFUL_ACCESS_TOKEN;

if (!isContentfulConfigured) {
  throw new Error("Contentful environment variables are not configured in .env");
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

function parseAsset(asset: any, fallback: any = DEFAULT_PLACEHOLDER): any {
  if (!asset?.fields?.file) return fallback;
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
  const result = (assets || []).map((a) => parseAsset(a));
  return result.length > 0 ? result : [DEFAULT_PLACEHOLDER];
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const entries = await client.getEntries({
    content_type: "siteConfig",
    limit: 1,
  });
  if (!entries.items.length) {
    throw new Error("Missing SiteConfig entry in Contentful");
  }
  return entries.items[0].fields as unknown as SiteConfig;
}

export async function getHero(): Promise<HeroSection> {
  const entries = await client.getEntries({
    content_type: "heroSection",
    limit: 1,
  });
  if (!entries.items.length) {
    throw new Error("Missing HeroSection entry in Contentful");
  }
  const fields = entries.items[0].fields as any;
  return {
    label: fields.label || "Marketing",
    headingLine1: fields.headingLine1 || "",
    headingLine2: fields.headingLine2 || "",
    name: fields.name || "",
    year: fields.year || "",
    backgroundImage: parseAsset(fields.backgroundImage),
    backgroundVideo: parseAsset(fields.backgroundVideo, null),
    floatingObjects: [],
  };
}

export async function getAbout(): Promise<AboutSection> {
  const entries = await client.getEntries({
    content_type: "aboutSection",
    limit: 1,
  });
  if (!entries.items.length) {
    throw new Error("Missing AboutSection entry in Contentful");
  }
  const fields = entries.items[0].fields as any;
  return {
    name: fields.name || "",
    education: fields.education || "",
    educationDetail: fields.educationDetail || "",
    bio: fields.bio || "",
    photo: parseAsset(fields.photo),
    skills: fields.skills || [],
    software: fields.software || [],
  };
}

export async function getProjects(): Promise<Project[]> {
  const entries = await client.getEntries({
    content_type: "project",
    order: ["fields.order"] as any,
    include: 2,
  });
  if (!entries.items.length) return [];
  return entries.items.map((item: any) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    projectType: item.fields.projectType,
    category: item.fields.category,
    image1Title: item.fields.image1Title || "",
    image2Title: item.fields.image2Title || "",
    situation: item.fields.situation || null,
    myScope: item.fields.myScope || null,
    whatIveDone: item.fields.whatIveDone || null,
    result: item.fields.result || null,
    keyLearning: item.fields.keyLearning || null,
    tags: item.fields.tags || [],
    thumbnail: parseAsset(item.fields.thumbnail),
    media: parseAssets(item.fields.media),
    heroVideo: parseAsset(item.fields.heroVideo, null),
    featured: item.fields.featured || false,
    year: item.fields.year,
    order: item.fields.order,
  }));
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug) || null;
}

export async function getProjectSlugs(): Promise<string[]> {
  const projects = await getProjects();
  return projects.map((p) => p.slug);
}

export async function getServices(): Promise<Service[]> {
  const entries = await client.getEntries({
    content_type: "service",
    order: ["fields.order"] as any,
  });
  if (!entries.items.length) return [];
  return entries.items.map((item: any) => item.fields as Service);
}

export async function getExperiences(): Promise<Experience[]> {
  const entries = await client.getEntries({
    content_type: "experience",
    order: ["-fields.order"] as any,
  });
  if (!entries.items.length) return [];
  return entries.items.map((item: any) => item.fields as Experience);
}


export async function getMarqueeItems(): Promise<MarqueeItem[]> {
  const entries = await client.getEntries({
    content_type: "marqueeItem",
    order: ["fields.order"] as any,
  });
  if (!entries.items.length) return [];
  return entries.items.map((item: any) => item.fields as MarqueeItem);
}

export async function getAchievement(): Promise<Achievement> {
  try {
    const entries = await client.getEntries({
      content_type: "achevement",
      limit: 1,
    });
    
    if (!entries.items.length) {
      return mockAchievement;
    }
    
    const fields = entries.items[0].fields as any;
    return {
      title: fields.title || "",
      description: fields.description || null,
      media1: parseAsset(fields.media1),
      media2: parseAsset(fields.media2),
    };
  } catch (error) {
    console.warn("Achievement content type not found or failed to fetch. Falling back to mock data.");
    return mockAchievement;
  }
}

export async function getLearn(): Promise<Learn> {
  try {
    const entries = await client.getEntries({
      content_type: "learn",
      limit: 1,
    });
    
    if (!entries.items.length) {
      return mockLearn;
    }
    
    const fields = entries.items[0].fields as any;
    return {
      title: fields.title || "",
      description: fields.description || null,
      media1: parseAsset(fields.media1),
      media2: parseAsset(fields.media2),
    };
  } catch (error) {
    console.warn("Learn content type not found or failed to fetch. Falling back to mock data.");
    return mockLearn;
  }
}
