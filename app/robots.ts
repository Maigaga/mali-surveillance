import type { MetadataRoute } from "next";
import { getConfiguredSiteOrigin } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const origin = getConfiguredSiteOrigin();

  return {
    rules: { userAgent: "*", allow: "/" },
    ...(origin ? { sitemap: `${origin}/sitemap.xml` } : {}),
  };
}
