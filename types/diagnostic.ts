export const buildingTypes = [
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

export type BuildingType = (typeof buildingTypes)[number];

export const surfaceRanges = [
  "Moins de 50 m²",
  "50 à 100 m²",
  "100 à 250 m²",
  "250 à 500 m²",
  "Plus de 500 m²",
  "Je ne sais pas",
] as const;

export type SurfaceRange = (typeof surfaceRanges)[number];

export const entryCounts = ["1", "2", "3", "4 ou plus", "Je ne sais pas"] as const;
export type EntryCount = (typeof entryCounts)[number];

export const zoneTypes = [
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
export type ZoneType = (typeof zoneTypes)[number];

export const yesNoUnsure = ["Oui", "Non", "Je ne sais pas"] as const;
export type YesNoUnsure = (typeof yesNoUnsure)[number];

export type DiagnosticAnswers = {
  buildingType: BuildingType | null;
  surface: SurfaceRange | null;
  entrances: EntryCount | null;
  zones: ZoneType[];
  nightMonitoring: YesNoUnsure | null;
  remoteViewing: YesNoUnsure | null;
  internet: YesNoUnsure | null;
};

export type DiagnosticContact = {
  name: string;
  phone: string;
  whatsapp: string;
  location: string;
  email: string;
};

export type DiagnosticResult = {
  cameraCount: string;
  cameraTypes: string;
  recorder: string;
  storage: string;
  remoteAccess: string;
  network: string;
  backupPower: string;
  siteStudy: boolean;
  caveat: string;
};

export const emptyDiagnosticAnswers: DiagnosticAnswers = {
  buildingType: null,
  surface: null,
  entrances: null,
  zones: [],
  nightMonitoring: null,
  remoteViewing: null,
  internet: null,
};

export const emptyDiagnosticContact: DiagnosticContact = {
  name: "",
  phone: "",
  whatsapp: "",
  location: "",
  email: "",
};
