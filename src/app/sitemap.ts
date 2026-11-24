import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

const routes = ["/", "/realisations/", "/offres/", "/a-propos/", "/contact/", "/mentions-legales/", "/confidentialite/", "/conditions/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: new URL(r, site.url).toString(),
    changeFrequency: "monthly",
    priority: r === "/" ? 1 : r.startsWith("/mentions") || r.startsWith("/confid") || r.startsWith("/condi") ? 0.2 : 0.8,
  }));
}
