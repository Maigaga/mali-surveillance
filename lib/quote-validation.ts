import type { QuoteFormData, QuoteValidationErrors } from "@/types/quote";

function hasValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "").length;
  return digits >= 8 && digits <= 15 && /^[0-9+().\s-]+$/.test(value.trim());
}

export function validateQuote(request: QuoteFormData): QuoteValidationErrors {
  const errors: QuoteValidationErrors = {};

  if (request.name.trim().length < 2) errors.name = "Veuillez renseigner votre nom complet.";
  if (!hasValidPhone(request.phone)) errors.phone = "Veuillez renseigner un numéro de téléphone valide.";
  if (!hasValidPhone(request.whatsapp)) errors.whatsapp = "Veuillez renseigner un numéro WhatsApp valide.";
  if (request.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.email.trim())) {
    errors.email = "Veuillez vérifier votre adresse email.";
  }
  if (!request.city.trim()) errors.city = "Veuillez renseigner votre ville.";
  if (!request.area.trim()) errors.area = "Veuillez renseigner le quartier ou la zone.";
  if (!request.buildingType) errors.buildingType = "Veuillez sélectionner le type de bâtiment.";
  if (!request.need) errors.need = "Veuillez sélectionner votre besoin.";
  if (request.cameraCount && (!/^\d+$/.test(request.cameraCount) || Number(request.cameraCount) < 1)) {
    errors.cameraCount = "Indiquez un nombre entier de caméras supérieur à zéro, ou laissez ce champ vide.";
  }

  return errors;
}
