export type RealisationImage = {
  src: string;
  alt: string;
};

export type Realisation = {
  id: string;
  slug: string;
  title: string;
  category: string;
  // Localité générale uniquement si elle peut être rendue publique ; jamais d’adresse privée.
  location?: string;
  description: string;
  images: RealisationImage[];
  equipment?: string[];
  featured?: boolean;
  context?: string;
  need?: string;
  monitoredZones?: string[];
  installedSolution?: string;
};

// N’ajouter ici que des installations réelles et validées pour publication.
// Les photos locales pourront être rangées dans public/images/realisations/.
export const realisations: Realisation[] = [];

export function getRealisationBySlug(slug: string): Realisation | undefined {
  return realisations.find((realisation) => realisation.slug === slug);
}
