import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const brandName = siteConfig.companyName;

export const metadata: Metadata = {
  title: {
    default: `${brandName} | Vidéosurveillance professionnelle`,
    template: `%s | ${brandName}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: brandName,
    title: `${brandName} | Vidéosurveillance professionnelle`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1b30",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className="min-h-screen font-sans antialiased">
        <a
          href="#contenu"
          className="sr-only z-50 rounded-md bg-white p-3 text-primary focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  );
}
