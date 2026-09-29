import type { DiagnosticAnswers, DiagnosticContact, DiagnosticResult } from "@/types/diagnostic";

const surfaceCameraRanges: Record<string, [number, number] | null> = {
  "Moins de 50 m²": [2, 4],
  "50 à 100 m²": [3, 6],
  "100 à 250 m²": [4, 8],
  "250 à 500 m²": [6, 12],
  "Plus de 500 m²": [10, 16],
  "Je ne sais pas": null,
};

const outdoorZones = new Set(["Entrée", "Parking", "Cour", "Périmètre"]);
const indoorZones = new Set(["Caisse", "Couloir", "Entrepôt", "Bureau"]);

export function generateDiagnosticResult(answers: DiagnosticAnswers): DiagnosticResult {
  const range = answers.surface ? surfaceCameraRanges[answers.surface] : null;
  const broadSite = ["Entreprise", "Entrepôt", "École", "Hôtel", "Autre"].includes(answers.buildingType ?? "");
  const siteStudy = !range || answers.surface === "Plus de 500 m²" || broadSite || answers.entrances === "Je ne sais pas";

  let cameraCount = "Une étude du site est recommandée pour estimer le nombre de caméras.";
  if (range) {
    let [minimum, maximum] = range;
    if (answers.entrances === "3") maximum += 1;
    if (answers.entrances === "4 ou plus") {
      minimum += 1;
      maximum += 2;
    }
    if (answers.zones.length > 4) maximum += 2;
    cameraCount = `Environ ${minimum} à ${maximum} caméras`;
  }

  const exterior = answers.zones.some((zone) => outdoorZones.has(zone));
  const interior = answers.zones.some((zone) => indoorZones.has(zone));
  const cameraTypes = exterior && interior
    ? "Caméras dôme à l’intérieur et modèles adaptés à l’extérieur."
    : exterior
      ? "Caméras adaptées à l’extérieur."
      : interior
        ? "Caméras dôme ou compactes pour l’intérieur, selon les zones à couvrir."
        : "Types et angles de caméra à confirmer selon l’agencement et l’éclairage du site.";
  const nightAdvice = answers.nightMonitoring === "Oui"
    ? "Prévoir des caméras offrant une vision nocturne adaptée."
    : answers.nightMonitoring === "Non"
      ? "La capacité nocturne n’est pas prioritaire selon votre réponse."
      : "Les conditions d’éclairage nocturne restent à vérifier sur le site.";

  const remoteAccess = answers.remoteViewing === "Oui"
    ? "Consultation depuis smartphone à configurer, sous réserve de connectivité et de réglages réseau adaptés."
    : answers.remoteViewing === "Non"
      ? "Consultation à distance non prioritaire d’après votre réponse."
      : "Besoin d’accès distant à préciser avant de choisir la configuration.";

  const network = answers.remoteViewing === "Oui" || answers.internet === "Oui"
    ? "Prévoir une vérification du réseau local et de la connexion Internet pour l’accès à distance."
    : answers.internet === "Non"
      ? "Un enregistrement local reste envisageable ; l’accès à distance dépendra d’une connectivité disponible."
      : "Disponibilité du réseau et d’Internet à vérifier selon les fonctions souhaitées.";

  return {
    cameraCount,
    cameraTypes: `${cameraTypes} ${nightAdvice}`,
    recorder: "Un enregistreur NVR/DVR et des capacités compatibles avec les caméras seront à dimensionner selon l’installation.",
    storage: "Capacité de stockage à définir selon le nombre de caméras, la qualité d’image et la durée de conservation souhaitée.",
    remoteAccess,
    network,
    backupPower: "Une alimentation de secours (onduleur) peut être étudiée selon la stabilité électrique et l’autonomie souhaitée.",
    siteStudy,
    caveat: "Cette recommandation est indicative. Une visite ou une étude technique peut être nécessaire pour confirmer la configuration finale.",
  };
}

export function createWhatsAppDiagnosticMessage(
  answers: DiagnosticAnswers,
  result: DiagnosticResult,
  contact?: DiagnosticContact,
): string {
  const lines = [
    "Bonjour, je souhaite échanger au sujet d’un diagnostic CCTV.",
    `Bâtiment : ${answers.buildingType ?? "Non précisé"}`,
    `Surface : ${answers.surface ?? "Non précisée"}`,
    `Entrées : ${answers.entrances ?? "Non précisé"}`,
    `Zones : ${answers.zones.length ? answers.zones.join(", ") : "Non précisées"}`,
    `Surveillance nocturne : ${answers.nightMonitoring ?? "Non précisée"}`,
    `Accès à distance : ${answers.remoteViewing ?? "Non précisé"}`,
    `Internet sur site : ${answers.internet ?? "Non précisé"}`,
    `Première orientation : ${result.cameraCount}`,
  ];

  if (contact) {
    lines.push(`Nom : ${contact.name.trim()}`, `Téléphone : ${contact.phone.trim()}`, `WhatsApp : ${contact.whatsapp.trim()}`, `Localisation : ${contact.location.trim()}`);
    if (contact.email.trim()) lines.push(`Email : ${contact.email.trim()}`);
  }

  return lines.join("\n");
}
