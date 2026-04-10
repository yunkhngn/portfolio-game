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
  Achievement,
  Learn,
} from "./types";
import { DEFAULT_PLACEHOLDER } from "./constants";
import * as config from "@/config";

const isContentfulConfigured =
  !!process.env.CONTENTFUL_SPACE_ID && !!process.env.CONTENTFUL_ACCESS_TOKEN;

const client = isContentfulConfigured 
  ? createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    })
  : null;

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
  return result.filter(Boolean);
}

function parseMetrics(input: any): { value: string; label: string }[] {
  if (!input) return [];

  const normalize = (item: any): { value: string; label: string } | null => {
    if (!item) return null;
    if (typeof item === "string") {
      const [value, label] = item.split("|").map((part) => part?.trim());
      if (value && label) return { value, label };
      const parts = item.trim().split(/\s+/);
      if (parts.length >= 2) {
        return { value: parts[0], label: parts.slice(1).join(" ") };
      }
      return null;
    }
    if (typeof item === "object") {
      const value = String(item.value ?? item.number ?? "").trim();
      const label = String(item.label ?? item.title ?? "").trim();
      if (!value || !label) return null;
      return { value, label };
    }
    return null;
  };

  if (typeof input === "string") {
    try {
      const parsed = JSON.parse(input);
      if (Array.isArray(parsed)) return parsed.map(normalize).filter(Boolean) as { value: string; label: string }[];
    } catch {
      return input
        .split("\n")
        .map((line) => normalize(line))
        .filter(Boolean) as { value: string; label: string }[];
    }
  }

  if (Array.isArray(input)) {
    return input.map(normalize).filter(Boolean) as { value: string; label: string }[];
  }

  return [];
}

export async function getSiteConfig(): Promise<SiteConfig> {
  if (!client) return config.siteConfig;
  try {
    const entries = await client.getEntries({
      content_type: "siteConfig",
      limit: 1,
    });
    if (!entries.items.length) return config.siteConfig;
    return entries.items[0].fields as unknown as SiteConfig;
  } catch {
    return config.siteConfig;
  }
}

export async function getHero(): Promise<HeroSection> {
  if (!client) return config.heroData;
  try {
    const entries = await client.getEntries({
      content_type: "heroSection",
      limit: 1,
    });
    if (!entries.items.length) return config.heroData;
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
  } catch {
    return config.heroData;
  }
}

export async function getAbout(): Promise<AboutSection> {
  if (!client) return config.aboutData;
  try {
    const entries = await client.getEntries({
      content_type: "aboutSection",
      limit: 1,
    });
    if (!entries.items.length) return config.aboutData;
    const fields = entries.items[0].fields as any;
    return {
      name: fields.name || "",
      education: fields.education || "",
      educationDetail: fields.educationDetail || "",
      bio: fields.bio || "",
      photo: parseAsset(fields.photo),
      skills: fields.skills || [],
      software: fields.software || [],
      experiences: fields.experiences || [],
    };
  } catch {
    return config.aboutData;
  }
}

export async function getProjects(): Promise<Project[]> {
  if (!client) return config.projectsData;
  try {
    const entries = await client.getEntries({
      content_type: "project",
      order: ["fields.order"] as any,
      include: 2,
    });
    if (!entries.items.length) return config.projectsData;
    return entries.items.map((item: any) => ({
      title: item.fields.title,
      slug: item.fields.slug,
      projectType: item.fields.projectType,
      category: item.fields.branding || item.fields.category || "",
      branding: item.fields.branding || "",
      appIcon: parseAsset(item.fields.appIcon, null),
      image1Title: item.fields.image1Title || "",
      image2Title: item.fields.image2Title || "",
      image2: parseAsset(item.fields.image2, null),
      image3: parseAsset(item.fields.image3, null),
      image4: parseAsset(item.fields.image4, null),
      video4: item.fields.video4 || "",
      metrics: parseMetrics(item.fields.metric || item.fields.metrics || item.fields.resultsMetrics || item.fields.stats),
      situation: item.fields.situation || null,
      myScope: item.fields.myScope || null,
      whatIveDone: item.fields.whatIveDone || null,
      result: item.fields.result || null,
      keyLearning: item.fields.keyLearning || null,
      tags: item.fields.tags || [],
      thumbnail: parseAsset(item.fields.thumbnail),
      assets: parseAssets(item.fields.assets || []),
      media: parseAssets(
        [
          ...(item.fields.media || []),
          item.fields.image2,
          item.fields.image3,
        ].filter(Boolean)
      ),
      heroVideo: parseAsset(item.fields.heroVideo, null),
      featured: item.fields.featured || false,
      year: item.fields.year,
      order: item.fields.order,
    }));
  } catch {
    return config.projectsData;
  }
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
  if (!client) return config.servicesData;
  try {
    const entries = await client.getEntries({
      content_type: "service",
      order: ["fields.order"] as any,
    });
    if (!entries.items.length) return config.servicesData;
    return entries.items.map((item: any) => item.fields as Service);
  } catch {
    return config.servicesData;
  }
}

export async function getExperiences(): Promise<Experience[]> {
  if (!client) return config.experiencesData;
  try {
    const entries = await client.getEntries({
      content_type: "experience",
      order: ["-fields.order"] as any,
    });
    if (!entries.items.length) return config.experiencesData;
    return entries.items.map((item: any) => ({
      role: item.fields.role || "",
      company: item.fields.company || "",
      appIcon: parseAsset(item.fields.appIcon, null),
      startDate: item.fields.startDate || "",
      endDate: item.fields.endDate || "",
      description: item.fields.description || "",
      order: item.fields.order || 0,
    }));
  } catch {
    return config.experiencesData;
  }
}

export async function getMarqueeItems(): Promise<MarqueeItem[]> {
  if (!client) return config.marqueeItemsData;
  try {
    const entries = await client.getEntries({
      content_type: "marqueeItem",
      order: ["fields.order"] as any,
    });
    if (!entries.items.length) return config.marqueeItemsData;
    return entries.items.map((item: any) => item.fields as MarqueeItem);
  } catch {
    return config.marqueeItemsData;
  }
}

export async function getBrandSections(): Promise<BrandSection[]> {
  if (!client) return config.brandSectionsData;
  try {
    const entries = await client.getEntries({
      content_type: "brandSection",
      order: ["fields.order"] as any,
    });
    if (!entries.items.length) return config.brandSectionsData;
    return entries.items.map((item: any) => ({
      id: item.fields.id || item.sys.id,
      label: item.fields.label || "",
      logo: parseAsset(item.fields.logo, null)?.url || null,
    }));
  } catch {
    return config.brandSectionsData;
  }
}

export async function getMotto(): Promise<Motto> {
  if (!client) return config.mottoData;
  try {
    const entries = await client.getEntries({
      content_type: "motto",
      limit: 1,
    });
    if (!entries.items.length) return config.mottoData;
    const fields = entries.items[0].fields as any;
    return {
      quoteLines: fields.quoteLines || config.mottoData.quoteLines,
      author: fields.author || config.mottoData.author,
    };
  } catch {
    return config.mottoData;
  }
}

export async function getAchievement(): Promise<Achievement> {
  if (!client) return config.achievementData;
  try {
    const entries = await client.getEntries({
      content_type: "achevement",
      limit: 1,
    });
    
    if (!entries.items.length) {
      return config.achievementData;
    }
    
    const fields = entries.items[0].fields as any;
    return {
      title: fields.title || "",
      description: fields.description || null,
      media1: parseAsset(fields.media1),
      media2: parseAsset(fields.media2),
    };
  } catch {
    return config.achievementData;
  }
}

export async function getLearn(): Promise<Learn> {
  if (!client) return config.learnData;
  try {
    const entries = await client.getEntries({
      content_type: "learn",
      limit: 1,
    });
    
    if (!entries.items.length) {
      return config.learnData;
    }
    
    const fields = entries.items[0].fields as any;
    return {
      title: fields.title || "",
      description: fields.description || null,
      media1: parseAsset(fields.media1),
      media2: parseAsset(fields.media2),
    };
  } catch {
    return config.learnData;
  }
}
