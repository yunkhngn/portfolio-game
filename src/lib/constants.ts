export const REVALIDATE_INTERVAL = 60;

export const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Achievement", href: "#achievement" },
  { label: "Learn", href: "#learn" },
  { label: "Contact", href: "#contact" },
] as const;

export const DEFAULT_PLACEHOLDER = {
  url: "/placeholder.png",
  title: "Placeholder Asset",
  width: 800,
  height: 1200,
  contentType: "image/png",
} as const;
