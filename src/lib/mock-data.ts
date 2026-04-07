import type {
  SiteConfig,
  HeroSection,
  AboutSection,
  Project,
  Service,
  Experience,
  Testimonial,
  MarqueeItem,
} from "./types";
import { BLOCKS, type Document } from "@contentful/rich-text-types";

function richText(text: string): Document {
  return {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [
      {
        nodeType: BLOCKS.PARAGRAPH,
        data: {},
        content: [{ nodeType: "text", value: text, marks: [], data: {} }],
      },
    ],
  };
}

const placeholder = (w: number, h: number, label: string) => ({
  url: `https://placehold.co/${w}x${h}/1a1714/c0593b?text=${encodeURIComponent(label)}`,
  title: label,
  width: w,
  height: h,
  contentType: "image/png",
});

export const mockSiteConfig: SiteConfig = {
  name: "Ly Gia Huy",
  title: "Gia Huy — Marketing Portfolio",
  tagline: "Game Marketing • Video & Livestream • Outdoor Activations",
  email: "huygia171204@gmail.com",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/ly-gia-huy/",
      icon: "linkedin",
    },
    {
      platform: "Email",
      url: "mailto:huygia171204@gmail.com",
      icon: "mail",
    },
  ],
};

export const mockHero: HeroSection = {
  heading: "Where Games Meet the Real World",
  subheading:
    "Marketing creative specializing in game campaigns, livestream production, and large-scale outdoor activations. 30+ projects managed. 125M+ impressions delivered.",
  backgroundImage: placeholder(1920, 1080, "Hero+BG"),
  ctaText: "See My Work",
};

export const mockAbout: AboutSection = {
  bio: richText(
    "I am a Marketing professional with a strong passion for the gaming industry and player communities. I specialize in how games build emotional connections with players through creative campaigns, community engagement, and viral content. Currently majoring in E-commerce Marketing at the University of Economics Ho Chi Minh City (UEH) with a GPA of 3.75/4, I have managed and organized 30+ projects of various scales — from game launch campaigns at VNGGAMES to large-scale student festivals with 8,000+ attendees. My work spans integrated campaign execution, KOL livestream production, OOH roadshows, and cross-functional team coordination."
  ),
  photo: placeholder(600, 800, "Gia+Huy"),
  skills: [
    "Integrated Campaign Execution",
    "Project & Event Management",
    "Marketing Performance Analysis",
    "Content SEO",
    "Social Design",
    "Communication Planning",
    "AI-Driven Social Media",
    "Livestream Production",
    "OOH & Roadshow",
  ],
};

export const mockProjects: Project[] = [
  {
    title: "Sword Chronicles: Awaken — Hero Launch",
    slug: "sword-chronicles-hero-launch",
    projectType: "Game",
    category: "Campaign",
    description: richText(
      "Supported the marketing campaign for the new hero Ton Thuong Huong SP release in Sword Chronicles: Awaken. Collaborated with Promotion and Design teams on landing page concept, minigame logic, reward structure, and CTA video clips. Highlight promotional content featuring Juky San cosplay achieved 1,500+ reactions. Landing page posts generated 1,000+ reactions on social media."
    ),
    tags: ["Landing Page", "Minigame", "Key Visual", "Social Media"],
    thumbnail: placeholder(800, 600, "Sword+Chronicles"),
    media: [
      placeholder(1200, 800, "SC+Landing+Page"),
      placeholder(1200, 800, "SC+Key+Visual"),
    ],
    featured: true,
    year: 2025,
    order: 1,
  },
  {
    title: "Crossfire: Legends — Roadshow Campaign",
    slug: "crossfire-legends-roadshow",
    projectType: "Outdoor",
    category: "OOH & Activation",
    description: richText(
      "Large-scale OOH and roadshow activation across Ho Chi Minh City for the Crossfire: Legends game launch. Planned visual concepts for LED OOH screens, coordinated deployment across 139-143 LED placements including Nguyen Hue Walking Street and Bach Dang Wharf. Executed roadshow across 11 locations with cosplay and mascot activations at Saigon Central Post Office and Thu Thiem Riverside Park. Achieved 125M total impressions and 50K user interactions."
    ),
    tags: ["OOH", "Roadshow", "LED", "Cosplay", "125M Impressions"],
    thumbnail: placeholder(800, 600, "CF+Roadshow"),
    media: [
      placeholder(1200, 800, "CF+OOH"),
      placeholder(1200, 800, "CF+Activation"),
    ],
    featured: true,
    year: 2025,
    order: 2,
  },
  {
    title: "Crossfire: Legends — 7 Days Mega Live",
    slug: "crossfire-legends-megalive",
    projectType: "Clip",
    category: "Livestream Production",
    description: richText(
      "Managed a 7-day Megalive (56 hours) followed by a 23-day livestream series (46 hours) for the Crossfire: Legends launch. Developed KOL booking plan targeting entertainment creators to expand FPS audience. Worked on-site briefing hosts and KOLs, adjusting live content in real time. Coordinated with production house on timelines, in-stream codes, and visual overlays. Achieved 3.76M total views and 9.72M engagement interactions. Set a benchmark for Megalive formats in game marketing."
    ),
    tags: ["Megalive", "KOL", "56 Hours", "3.76M Views", "9.72M Engagements"],
    thumbnail: placeholder(800, 600, "CF+Megalive"),
    media: [
      placeholder(1200, 800, "CF+Live+Studio"),
      placeholder(1200, 800, "CF+Live+Stream"),
    ],
    featured: true,
    year: 2025,
    order: 3,
  },
  {
    title: "UEH Youth Festival 2024: CITYVERSE",
    slug: "ueh-youth-festival-2024",
    projectType: "Outdoor",
    category: "Event Production",
    description: richText(
      "Project leader for UEH's annual Youth Festival celebrating the 93rd anniversary of the Ho Chi Minh Communist Youth Union. Managed 13 booths recreating five world-famous streets and a concert night with 10 performances. Developed communication strategy, managed concert night script, collaborated with 5 departments on festival space design, and coordinated 3D LED stage visuals. Achieved 6,000+ attendees and 250,000 online reach."
    ),
    tags: [
      "Project Leader",
      "Festival",
      "Concert",
      "6000+ Attendees",
      "3D LED",
    ],
    thumbnail: placeholder(800, 600, "UEH+Festival"),
    media: [
      placeholder(1200, 800, "UEH+Stage"),
      placeholder(1200, 800, "UEH+Booths"),
    ],
    featured: true,
    year: 2024,
    order: 4,
  },
  {
    title: "Noi Vong Tay Lon 2024 — Freshman Welcome",
    slug: "noi-vong-tay-lon-2024",
    projectType: "Outdoor",
    category: "Event Production",
    description: richText(
      "Led project planning and execution for UEH's freshman welcome week — a large-scale multi-activity event. Developed content plans for booths, flashmob, sports events, and concert night. Supervised Technical Department during concert (LED systems, stage effects, artist coordination). Executed multi-channel communication across Facebook, Instagram, YouTube, TikTok, and community groups. Successfully delivered event with 8,000 attendees and 350,000 online reach."
    ),
    tags: [
      "8000 Attendees",
      "Multi-channel",
      "Concert",
      "Flashmob",
      "350K Reach",
    ],
    thumbnail: placeholder(800, 600, "NVTL+2024"),
    media: [
      placeholder(1200, 800, "NVTL+Gala"),
      placeholder(1200, 800, "NVTL+Concert"),
    ],
    featured: true,
    year: 2024,
    order: 5,
  },
  {
    title: "VTV-Hyundai E-commerce Platform",
    slug: "vtv-hyundai-ecommerce",
    projectType: "Clip",
    category: "E-commerce & Content",
    description: richText(
      "Three months operating an e-commerce platform at VTV-Hyundai, contributing to over 16 million VND in revenue. Produced SEO-optimized content with consistent brand logo placement. Ran Shopee ads driving significant traffic. Coordinated livestream production with MCs and KOCs for product reviews. Supported FMCG campaigns achieving 70%+ conversion rate and revenue growth within 2 months. Analyzed customer insights via Shopee dashboard for advertising optimization."
    ),
    tags: [
      "E-commerce",
      "SEO",
      "Shopee Ads",
      "Livestream",
      "16M+ VND Revenue",
    ],
    thumbnail: placeholder(800, 600, "VTV+Hyundai"),
    media: [
      placeholder(1200, 800, "VTV+Dashboard"),
      placeholder(1200, 800, "VTV+Content"),
    ],
    featured: false,
    year: 2025,
    order: 6,
  },
];

export const mockServices: Service[] = [
  {
    title: "Game Marketing",
    description:
      "End-to-end campaign execution for game launches — landing pages, minigames, KOL activations, communication planning, and cross-functional team coordination.",
    icon: "gamepad",
    order: 1,
  },
  {
    title: "Livestream & Video Production",
    description:
      "Large-scale livestream campaigns (Megalive format), KOL booking and management, on-site production coordination, CTA video clips, and viral content creation.",
    icon: "film",
    order: 2,
  },
  {
    title: "Event & Outdoor Activation",
    description:
      "Festival production, roadshow execution, OOH campaign planning, stage management, and experiential marketing across multiple locations and scales.",
    icon: "mountain",
    order: 3,
  },
  {
    title: "Communication Planning",
    description:
      "Multi-channel strategy across social media, community groups, and paid media. Campaign seeding, content calendars, and performance measurement.",
    icon: "megaphone",
    order: 4,
  },
  {
    title: "E-commerce & SEO",
    description:
      "Platform operation (Shopee), SEO-optimized content, ad campaigns, customer insight analysis, and conversion optimization for FMCG and retail brands.",
    icon: "chart",
    order: 5,
  },
  {
    title: "Project Management",
    description:
      "30+ projects managed across entertainment, education, and marketing. Cross-department coordination, budget planning, timeline management, and stakeholder communication.",
    icon: "compass",
    order: 6,
  },
];

export const mockExperiences: Experience[] = [
  {
    role: "Brand Collaborator",
    company: "VNGGAMES",
    startDate: "2025-09-01",
    description:
      "Executing marketing campaigns for game launches including Sword Chronicles: Awaken and Crossfire: Legends. Managing landing pages, OOH roadshows, Megalive livestream production, and KOL coordination. Delivered 125M+ impressions and 3.76M+ livestream views.",
    order: 4,
  },
  {
    role: "E-commerce Marketing Intern",
    company: "VTV-Hyundai",
    startDate: "2025-03-01",
    endDate: "2025-07-01",
    description:
      "Operated e-commerce platform contributing to 16M+ VND revenue. Ran Shopee ads, produced SEO content, coordinated livestream production with KOCs, and supported FMCG campaigns achieving 70%+ conversion rate.",
    order: 3,
  },
  {
    role: "Vice Head — Movement Department",
    company: "UEH Youth Union & Student Association",
    startDate: "2024-03-01",
    endDate: "2025-12-01",
    description:
      "Organized and supported 35+ events and campaigns in entertainment and education with 700,000+ total participants. Led flagship events including UEH Youth Festival (6,000+ attendees) and Noi Vong Tay Lon (8,000 attendees).",
    order: 2,
  },
  {
    role: "E-commerce Marketing Student",
    company: "University of Economics HCMC (UEH)",
    startDate: "2022-09-01",
    endDate: "2026-04-01",
    description:
      "GPA: 3.75/4. Notable coursework: E-commerce Business Strategy (9.1/10), Consumer Behavior (9.8/10), Digital Marketing (8.8/10). National Top 4 — New Generation Students 2024.",
    order: 1,
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    name: "Placeholder Review",
    role: "Supervisor",
    company: "VNGGAMES",
    quote:
      "Huy brought exceptional energy and cross-functional coordination skills to every campaign. His ability to manage complex livestream productions and outdoor activations simultaneously was impressive.",
    order: 1,
  },
  {
    name: "Placeholder Review",
    role: "Marketing Manager",
    company: "VTV-Hyundai",
    quote:
      "A fast learner who quickly mastered our e-commerce operations. His SEO content strategy and Shopee ad optimization contributed meaningfully to our revenue targets.",
    order: 2,
  },
  {
    name: "Placeholder Review",
    role: "Faculty Advisor",
    company: "UEH",
    quote:
      "One of the most dedicated student leaders we have had. Managing 35+ events with hundreds of thousands of participants while maintaining a 3.75 GPA is remarkable.",
    order: 3,
  },
];

export const mockMarqueeItems: MarqueeItem[] = [
  { text: "Game Marketing", order: 1 },
  { text: "Livestream Production", order: 2 },
  { text: "Outdoor Activations", order: 3 },
  { text: "Event Management", order: 4 },
  { text: "Communication Planning", order: 5 },
  { text: "E-commerce", order: 6 },
  { text: "125M+ Impressions", order: 7 },
  { text: "30+ Projects", order: 8 },
];
