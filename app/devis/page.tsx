import type { Metadata } from "next";
import { QuoteRequest } from "@/components/quote/quote-request";
import { siteConfig } from "@/lib/site-config";

const brandName = siteConfig.companyName;

export const metadata: Metadata = {
  title: "Demander un devis vidéosurveillance",
  description: "Demandez une estimation pour votre projet d'installation, de maintenance ou de dépannage de vidéosurveillance.",
  alternates: { canonical: "/devis" },
  openGraph: {
    title: `Demander un devis vidéosurveillance | ${brandName}`,
    description: "Demandez une estimation pour votre projet d'installation, de maintenance ou de dépannage de vidéosurveillance.",
    siteName: brandName,
    locale: "fr_FR",
    type: "website",
  },
};

export default function QuotePage() {
  return <QuoteRequest />;
}
