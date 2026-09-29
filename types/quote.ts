export const quoteBuildingTypes = [
  "Maison",
  "Appartement",
  "Boutique",
  "Bureau",
  "Entreprise",
  "Entrepôt",
  "École",
  "Hôtel",
  "Autre",
] as const;

export type QuoteBuildingType = (typeof quoteBuildingTypes)[number];

export const quoteNeeds = [
  "Nouvelle installation",
  "Extension d’une installation existante",
  "Remplacement de caméras",
  "Maintenance",
  "Dépannage",
  "Configuration / accès à distance",
  "Autre",
] as const;

export type QuoteNeed = (typeof quoteNeeds)[number];
export type ContactPreference = "WhatsApp" | "Téléphone" | "Email";

export const quoteSurfaces = [
  "Moins de 50 m²",
  "50 à 100 m²",
  "100 à 250 m²",
  "250 à 500 m²",
  "Plus de 500 m²",
  "Je ne sais pas",
] as const;

export const quoteZones = [
  "Entrée",
  "Parking",
  "Cour",
  "Caisse",
  "Couloir",
  "Entrepôt",
  "Bureau",
  "Périmètre",
  "Autre",
] as const;
export type QuoteZone = (typeof quoteZones)[number];

export type QuoteFormData = {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  city: string;
  area: string;
  addressHint: string;
  buildingType: QuoteBuildingType | "";
  need: QuoteNeed | "";
  cameraCount: string;
  surface: (typeof quoteSurfaces)[number] | "";
  zones: QuoteZone[];
  nightMonitoring: "Oui" | "Non" | "À préciser" | "";
  smartphoneAccess: "Oui" | "Non" | "À préciser" | "";
  description: string;
  contactPreference: ContactPreference | "";
};

export type QuoteRequest = QuoteFormData;
export type QuoteValidationErrors = Partial<Record<keyof QuoteFormData | "form", string>>;

export const emptyQuoteForm: QuoteFormData = {
  name: "",
  phone: "",
  whatsapp: "",
  email: "",
  city: "",
  area: "",
  addressHint: "",
  buildingType: "",
  need: "",
  cameraCount: "",
  surface: "",
  zones: [],
  nightMonitoring: "",
  smartphoneAccess: "",
  description: "",
  contactPreference: "",
};
