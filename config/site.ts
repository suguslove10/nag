import { env } from "./env";

export const siteConfig = {
  name: env.site.name,
  description:
    "A structured curriculum in market microstructure, orderflow, and risk-managed execution — built for NSE, BSE, and global correlated markets, taught by mentors who trade what they teach.",
  url: env.site.url,
  keywords: [
    "Indian trading academy",
    "NSE trading course",
    "BSE trading course",
    "orderflow trading",
    "DOM depth of market",
    "Nifty futures course",
    "trading mentorship India",
    "market structure course",
  ],
  contact: {
    email: env.contact.email,
    phone: env.contact.phone,
    location: env.contact.location,
  },
  socials: env.socials,
  mainNav: [
    { label: "Learning System", href: "#learning-system" },
    { label: "Programs", href: "#pricing" },
    { label: "Mentors", href: "#mentorship" },
    { label: "Markets", href: "#live-data" },
  ],
  footerNav: [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#" },
        { label: "Learning System", href: "#learning-system" },
        { label: "Mentorship", href: "#mentorship" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Programs",
      links: [
        { label: "Indian Market Foundation", href: "#pricing" },
        { label: "Forex Foundation", href: "#pricing" },
        { label: "Complete Trader Program", href: "#pricing" },
        { label: "1-to-1 Mentorship", href: "#mentorship-pricing" },
      ],
    },
    {
      title: "Legal & Compliance",
      links: [
        { label: "Risk Disclosure", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Refund Policy", href: "#" },
      ],
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
