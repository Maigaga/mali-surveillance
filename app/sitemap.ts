import type { MetadataRoute } from "next";
import { realisations } from "@/data/realisations";
import { solutions } from "@/data/solutions";
import { getConfiguredSiteOrigin } from "@/lib/site-config";

const publicRoutes = [
  "/",
  "/solutions",
  "/installation",
  "/maintenance",
  "/realisations",
  "/a-propos",
  "/faq",
  "/contact",
  "/diagnostic",
  "/devis",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getConfiguredSiteOrigin();
  if (!origin) return [];

  const paths = [
    ...publicRoutes,
    ...solutions.map((solution) => solution.href),
    ...realisations.map((realisation) => `/realisations/${realisation.slug}`),
  ];

  return [...new Set(paths)].map((path) => ({ url: new URL(path, origin).toString() }));
}
