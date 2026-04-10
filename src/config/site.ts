import { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Your Name",
  title: "Your Name — Marketing Portfolio",
  tagline: "Game Marketing • Video & Livestream • Outdoor Activations",
  email: "hello@example.com",
  pdfLink: "#",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile/",
      icon: "linkedin",
    },
    {
      platform: "Email",
      url: "mailto:hello@example.com",
      icon: "mail",
    },
  ],
  contactIcons: [
    { src: "https://placehold.co/200x200/1a1714/c0593b?text=Icon+1", alt: "Brand 1" },
    { src: "https://placehold.co/200x200/1a1714/c0593b?text=Icon+2", alt: "Brand 2" },
    { src: "https://placehold.co/200x200/1a1714/c0593b?text=Icon+3", alt: "Brand 3" },
    { src: "https://placehold.co/200x200/1a1714/c0593b?text=Icon+4", alt: "Brand 4" },
  ],
};
