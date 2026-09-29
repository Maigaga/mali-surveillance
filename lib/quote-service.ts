import type { QuoteRequest } from "@/types/quote";

export type QuoteServiceResult = {
  status: "prepared-for-whatsapp";
  request: QuoteRequest;
};

export interface QuoteService {
  submitQuote(request: QuoteRequest): Promise<QuoteServiceResult>;
}

/** Local draft service. Replace this implementation with an API call when a backend exists. */
export const quoteService: QuoteService = {
  async submitQuote(request) {
    return {
      status: "prepared-for-whatsapp",
      request: { ...request, zones: [...request.zones] },
    };
  },
};

export function createQuoteWhatsAppMessage(request: QuoteRequest): string {
  const lines = [
    "Bonjour, je souhaite demander un devis pour un projet de vidéosurveillance.",
    "",
    `Nom : ${request.name.trim()}`,
    `Téléphone : ${request.phone.trim()}`,
    `WhatsApp : ${request.whatsapp.trim()}`,
    ...(request.email.trim() ? [`Email : ${request.email.trim()}`] : []),
    `Ville : ${request.city.trim()}`,
    `Quartier / zone : ${request.area.trim()}`,
    ...(request.addressHint.trim() ? [`Indication : ${request.addressHint.trim()}`] : []),
    `Type de bâtiment : ${request.buildingType}`,
    `Besoin : ${request.need}`,
    `Nombre approximatif de caméras : ${request.cameraCount.trim() || "À préciser"}`,
    `Surface approximative : ${request.surface || "À préciser"}`,
    `Zones à surveiller : ${request.zones.length ? request.zones.join(", ") : "À préciser"}`,
    `Surveillance nocturne : ${request.nightMonitoring || "À préciser"}`,
    `Accès depuis smartphone : ${request.smartphoneAccess || "À préciser"}`,
    ...(request.description.trim() ? ["", `Description : ${request.description.trim()}`] : []),
    ...(request.contactPreference ? [`Préférence de contact : ${request.contactPreference}`] : []),
  ];

  return lines.join("\n");
}
