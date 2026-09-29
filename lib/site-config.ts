const serviceArea = "Bamako et environs";

export const siteConfig = {
  companyName: "Mali Surveillance",
  slogan: "COMPANY_SLOGAN",
  description: `Installation, configuration et maintenance de systèmes de vidéosurveillance à ${serviceArea}.`,
  phone: "+223 94389479",
  whatsapp: "+22394389479",
  email: "maigabdoulaye9438@gmail.com",
  address: "BAMAKO-MALI",
  city: "BAMAKO",
  serviceArea,
  website: "COMPANY_WEBSITE",
  businessHours: "COMPANY_BUSINESS_HOURS",
  socialLinks: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Installation", href: "/installation" },
    { label: "Maintenance", href: "/maintenance" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Diagnostic", href: "/diagnostic" },
    { label: "À propos", href: "/a-propos" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Installation", href: "/installation" },
    { label: "Maintenance", href: "/maintenance" },
    { label: "Diagnostic CCTV", href: "/diagnostic" },
  ],
} as const;

export function getConfiguredSiteOrigin(): string | undefined {
  const website = siteConfig.website.trim();
  if (!website || website.includes("COMPANY_")) return undefined;

  try {
    const url = new URL(website);
    return url.protocol === "https:" || url.protocol === "http:" ? url.origin : undefined;
  } catch {
    return undefined;
  }
}

export function getWhatsAppUrl(message?: string): string | null {
  const number = siteConfig.whatsapp.replace(/\D/g, "");
  if (!number || number === "" || siteConfig.whatsapp.includes("COMPANY_")) {
    return null;
  }

  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${query}`;
}

export function getWhatsAppMessage(context?: string): string {
  const prefix = "Bonjour, je souhaite obtenir des informations sur vos solutions de vidéosurveillance.";
  return context ? `${prefix} ${context}` : prefix;
}
