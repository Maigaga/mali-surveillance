import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail } from "@/components/solutions/solution-detail";
import { getSolutionBySlug, solutions } from "@/data/solutions";
import { siteConfig } from "@/lib/site-config";

const brandName = siteConfig.companyName;

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: "Solution introuvable" };

  return {
    title: solution.seoTitle,
    description: solution.seoDescription,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: {
      title: `${solution.seoTitle} | ${brandName}`,
      description: solution.seoDescription,
      siteName: brandName,
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
  return <SolutionDetail solution={solution} />;
}
