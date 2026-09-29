export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  imageAlt: string;
  href?: string;
};

// À compléter avec des projets réels, leurs images et les informations validées par l’entreprise.
export const projects: Project[] = [];
