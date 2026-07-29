import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://litdigitalcreators.com"

  const routes = [
    "",
    "/about",
    "/corporate-training",
    "/hrdc-training",
    "/community",
    "/insights",
    "/insights/ai-for-leaders-malaysia",
    "/insights/petronas-lubricants",
    "/insights/upskilling-vs-rehiring",
    "/privacy-policy",
    "/terms-of-use",
    "/cookie-policy",
    "/pdpa-notice",
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))
}