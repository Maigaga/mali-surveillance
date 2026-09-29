import type { Metadata } from "next";
import { DiagnosticWizard } from "@/components/diagnostic/diagnostic-wizard";
import { siteConfig } from "@/lib/site-config";

const brandName = siteConfig.companyName;

export const metadata: Metadata = {
  title: "Diagnostic vidéosurveillance",
  description: "Évaluez vos besoins en vidéosurveillance et obtenez une première recommandation adaptée à votre environnement.",
  alternates: { canonical: "/diagnostic" },
  openGraph: {
    title: `Diagnostic vidéosurveillance | ${brandName}`,
    description: "Évaluez vos besoins en vidéosurveillance et obtenez une première recommandation adaptée à votre environnement.",
    siteName: brandName,
    locale: "fr_FR",
    type: "website",
  },
};

export default function DiagnosticPage() {
  return <DiagnosticWizard />;
}
