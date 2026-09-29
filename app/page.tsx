import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/cta-section";
import { DiagnosticSection } from "@/components/home/diagnostic-section";
import { FaqSection } from "@/components/home/faq-section";
import { HomeHero } from "@/components/home/home-hero";
import { InstallationSection } from "@/components/home/installation-section";
import { MaintenanceSection } from "@/components/home/maintenance-section";
import { ProcessSection } from "@/components/home/process-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ServicesSection } from "@/components/home/services-section";
import { SolutionsSection } from "@/components/home/solutions-section";
import { TrustStrip } from "@/components/home/trust-strip";
import { siteConfig } from "@/lib/site-config";

const brandName = siteConfig.companyName;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: {
    absolute: `Vidéosurveillance professionnelle à ${siteConfig.serviceArea} | ${siteConfig.companyName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `Vidéosurveillance professionnelle à ${siteConfig.serviceArea} | ${siteConfig.companyName}`,
    description: siteConfig.description,
    siteName: brandName,
    locale: "fr_FR",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <SolutionsSection />
      <ServicesSection />
      <DiagnosticSection />
      <ProcessSection />
      <InstallationSection />
      <ProjectsSection />
      <MaintenanceSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
