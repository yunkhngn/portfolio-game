export const REVALIDATE_INTERVAL = 60;

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About Me", href: "#about" },
  { label: "Branding", href: "#branding" },
  { label: "My Journey", href: "#experience" },
  { label: "What Drives Me", href: "#what-drives-me" },
  { label: "Contact", href: "#contact" },
] as const;

export const DEFAULT_PLACEHOLDER = {
  url: "/placeholder.png",
  title: "Placeholder Asset",
  width: 800,
  height: 1200,
  contentType: "image/png",
} as const;
