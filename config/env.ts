/**
 * Environment Variables Configuration & Validation
 *
 * Centralizes all process.env access to ensure type safety,
 * default fallbacks, and runtime warnings in development.
 */

function getEnvVar(key: string, fallback: string = ""): string {
  const value = process.env[key] ?? fallback;
  if (!value && process.env.NODE_ENV === "development") {
    console.warn(`[Config] Warning: Environment variable ${key} is not set.`);
  }
  return value;
}

export const env = {
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",

  emailjs: {
    serviceId: getEnvVar("NEXT_PUBLIC_EMAILJS_SERVICE_ID", "service_znwr8ye"),
    templateId: getEnvVar("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID", "template_qjlrgoq"),
    publicKey: getEnvVar("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", "R5Sryr64qjafmm-qy"),
  },

  site: {
    name: getEnvVar("NEXT_PUBLIC_SITE_NAME", "The Capital Market"),
    url: getEnvVar("NEXT_PUBLIC_SITE_URL", "https://thecapitalmarket.in"),
  },

  contact: {
    email: getEnvVar("NEXT_PUBLIC_CONTACT_EMAIL", "theecapitalmarket@gmail.com"),
    phone: getEnvVar("NEXT_PUBLIC_CONTACT_PHONE", "+91 80 4000 5678"),
    location: getEnvVar("NEXT_PUBLIC_CONTACT_LOCATION", "Bangalore, India"),
  },

  socials: {
    instagram: getEnvVar(
      "NEXT_PUBLIC_INSTAGRAM_URL",
      "https://www.instagram.com/theecapitalmarket?utm_source=qr&exln=ZXpoaDMyb2JkOHk1"
    ),
    youtube: getEnvVar(
      "NEXT_PUBLIC_YOUTUBE_URL",
      "https://www.youtube.com/@TheCapitalMarket-k5f"
    ),
    twitter: getEnvVar("NEXT_PUBLIC_TWITTER_URL", "https://twitter.com"),
    linkedin: getEnvVar("NEXT_PUBLIC_LINKEDIN_URL", "https://linkedin.com"),
    telegram: getEnvVar("NEXT_PUBLIC_TELEGRAM_URL", "https://telegram.org"),
  },
} as const;

export type EnvConfig = typeof env;
