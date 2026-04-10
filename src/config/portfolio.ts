import type {
  HeroSection,
  AboutSection,
  Project,
  Service,
  Experience,
  Testimonial,
  Achievement,
  Learn,
  MarqueeItem,
  BrandSection,
  Motto,
} from "@/lib/types";
import { BLOCKS, type Document } from "@contentful/rich-text-types";

function richText(text: string): Document {
  return {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [
      {
        nodeType: BLOCKS.PARAGRAPH,
        data: {},
        content: [{ nodeType: "text", value: text, marks: [], data: {} }]
      }
    ]
  };
}

function richListText(text: string): Document {
  return {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [
      {
        nodeType: BLOCKS.UL_LIST,
        data: {},
        content: text.split("\n").map(line => ({
          nodeType: BLOCKS.LIST_ITEM,
          data: {},
          content: [{
            nodeType: BLOCKS.PARAGRAPH,
            data: {},
            content: [{ nodeType: "text", value: line.trim(), marks: [], data: {} }]
          }]
        }))
      }
    ]
  };
}

const placeholder = (w: number, h: number, label: string) => ({
  url: `https://placehold.co/${w}x${h}/1a1714/c0593b?text=${encodeURIComponent(label)}`,
  title: label,
  width: w,
  height: h,
  contentType: "image/png",
});

export const heroData: HeroSection = {
  label: "Creative Strategist",
  headingLine1: "Creative",
  headingLine2: "Portfolio",
  name: "Your Name",
  year: "2026",
  floatingObjects: [
    {
      image: placeholder(400, 400, "🎮"),
      position: "top-left",
      size: "lg",
      rotate: -15,
    },
    {
      image: placeholder(400, 400, "🎬"),
      position: "top-right",
      size: "md",
      rotate: 10,
    },
    {
      image: placeholder(400, 400, "🎧"),
      position: "center-left",
      size: "md",
      rotate: -5,
    },
    {
      image: placeholder(400, 400, "📱"),
      position: "center-right",
      size: "lg",
      rotate: 8,
    },
    {
      image: placeholder(400, 400, "🎪"),
      position: "bottom-left",
      size: "md",
      rotate: 12,
    },
    {
      image: placeholder(400, 400, "⌚"),
      position: "bottom-right",
      size: "sm",
      rotate: -20,
    },
  ],
};

export const aboutData: AboutSection = {
  name: "Your Name",
  education: "Your University",
  educationDetail: "Degree in Awesome Things",
  bio: richText(
    "I am a results-driven professional with a passion for creative strategy and execution. My experience spans across integrated marketing campaigns, event management, and digital content creation. I specialize in building meaningful connections between brands and their audiences through innovative storytelling and interactive experiences."
  ),
  photo: placeholder(600, 800, "Your+Photo"),
  skills: [
    "Campaign Strategy",
    "Project Management",
    "Performance Marketing",
    "Content Creation",
    "Brand Development",
    "Social Media Management",
  ],
  software: [
    "Figma",
    "Photoshop",
    "Illustrator",
    "Premiere Pro",
    "Notion",
    "Jira",
  ],
  experiences: [
    {
      role: "Senior Strategist",
      company: "InnovateCo",
      period: "2024 - Present",
    },
    {
      role: "Creative Intern",
      company: "Design Studio",
      period: "2023 - 2024",
    },
  ],
};

export const projectsData: Project[] = [
  {
    title: "Global Launch Campaign",
    slug: "global-launch",
    projectType: "Game",
    category: "Brand Campaign",
    appIcon: placeholder(128, 128, "Logo"),
    situation: richText(
      "Spearheaded a multi-channel global launch for a flagship product, coordinating across design, promotion, and social teams. Built an interactive landing page and managed KOL activations that resulted in millions of impressions."
    ),
    tags: ["Strategy", "Execution", "Digital"],
    thumbnail: placeholder(800, 600, "Main+Thumbnail"),
    media: [
      placeholder(1200, 800, "Detail+1"),
      placeholder(1200, 800, "Detail+2"),
    ],
    featured: true,
    year: 2025,
    order: 1,
  },
];

export const servicesData: Service[] = [
  {
    title: "Creative Strategy",
    description: "End-to-end strategy and execution for high-impact brand campaigns and product launches.",
    icon: "gamepad",
    order: 1,
  },
];

export const experiencesData: Experience[] = [
  {
    role: "Senior Strategist",
    company: "InnovateCo",
    appIcon: placeholder(160, 160, "Firm"),
    startDate: "2024-01-01",
    description: "Leading creative initiatives and managing large-scale marketing projects.",
    order: 1,
  },
];

export const marqueeItemsData: MarqueeItem[] = [
  { text: "Creative Strategy", order: 1 },
  { text: "Brand Excellence", order: 2 },
  { text: "Digital Innovation", order: 3 },
];

export const achievementData: Achievement = {
  title: "PROJECT ALPHA",
  description: richListText(
    "Led the development of a groundbreaking prototype.\nConducted extensive market research and user testing.\nPresented successfully to stakeholders."
  ),
  media1: placeholder(1200, 800, "Proto+1"),
  media2: placeholder(1200, 800, "Proto+2"),
};

export const learnData: Learn = {
  title: "CONTINUOUS GROWTH",
  description: richListText(
    "Mastered new project management methodologies.\nDeepened understanding of audience psychology.\nAdvanced data analytical skills."
  ),
  media1: placeholder(1200, 800, "Learning+1"),
  media2: placeholder(1200, 800, "Learning+2"),
};

export const testimonialsData: Testimonial[] = [
  {
    name: "John Doe",
    role: "Director",
    company: "Global Tech",
    quote: "An exceptional professional who consistently delivers results beyond expectations.",
    order: 1,
  },
];

export const brandSectionsData: BrandSection[] = [
  { id: "brand1", label: "GLOBAL TECH", logo: "https://placehold.co/200x200/1a1714/c0593b?text=Tech" },
  { id: "brand2", label: "DESIGN STUDIO", logo: "https://placehold.co/200x200/1a1714/c0593b?text=Design" },
  { id: "brand3", label: "STARTUP HUB", logo: "https://placehold.co/200x200/1a1714/c0593b?text=Hub" },
  { id: "personal", label: "PERSONAL", logo: null },
];

export const mottoData: Motto = {
  quoteLines: [
    { text: "“Good design is honest.", accent: false },
    { text: " Great design", accent: true },
    { text: " is invisible.”", accent: false },
  ],
  author: "Dieter Rams",
};
