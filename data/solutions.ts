import type { LucideIcon } from "lucide-react";
import { Building2, House, Hotel, School, Store, Warehouse } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const serviceArea = siteConfig.serviceArea;

export type SolutionFaq = { question: string; answer: string };

export type Solution = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  href: string;
  available: boolean;
  idealFor: string[];
  specificPoints: string[];
  recommendedZones: string[];
  considerations: string[];
  services: string[];
  faq: SolutionFaq[];
  seoTitle: string;
  seoDescription: string;
};

export const solutions: Solution[] = [
  {
    slug: "maison",
    title: "Maison",
    shortDescription: "Surveillez votre domicile, vos accès, votre cour et les zones sensibles, de jour comme de nuit.",
    description: "Une installation domestique se construit autour des accès et des espaces que vous souhaitez surveiller. Le positionnement des caméras, l’éclairage, le passage des câbles et le mode de consultation sont à définir selon la configuration de votre habitation.",
    icon: House,
    href: "/solutions/maison",
    available: true,
    idealFor: ["Une maison avec portail et accès piéton séparés", "Une cour, un garage ou une terrasse à inclure dans la surveillance", "Des accès secondaires ou des dépendances à prendre en compte"],
    specificPoints: ["Distinguer le portail, l’entrée piétonne et les accès secondaires selon les vues nécessaires", "Étudier les angles sur la cour, le garage et la terrasse sans filmer au-delà des limites utiles", "Vérifier l’éclairage et la distance pour choisir les vues de nuit", "Définir l’enregistrement et la consultation sur téléphone selon le réseau disponible", "Prévoir une éventuelle extension selon la capacité du système retenu"],
    recommendedZones: ["Portail et entrée", "Cour", "Garage", "Terrasse", "Accès secondaires"],
    considerations: ["Champs de vision depuis les accès et limites de propriété", "Éclairage disponible et vision nocturne recherchée", "Protection des équipements exposés aux intempéries", "Cheminement des câbles et emplacement de l’enregistreur", "Disponibilité du réseau et besoin d’accès depuis un téléphone"],
    services: ["Repérage des accès et des zones à surveiller", "Installation et raccordement des caméras", "Configuration de l’enregistrement et de la consultation", "Accompagnement pour l’entretien et les évolutions"],
    faq: [
      { question: "Combien de caméras prévoir pour une maison ?", answer: "Le nombre dépend des accès, des angles de vue et des zones retenues. Une estimation à distance reste indicative ; le positionnement se confirme en étudiant la maison." },
      { question: "Peut-on surveiller une cour la nuit ?", answer: "C’est à étudier selon l’éclairage, les distances et les conditions du site. Le choix d’une caméra adaptée à la nuit se fait après vérification de ces éléments." },
      { question: "Puis-je consulter les images sur mon téléphone ?", answer: "Cela peut être configuré si le système, le réseau local et la connexion Internet disponible le permettent." },
      { question: "Où sont conservées les images ?", answer: "Elles peuvent être enregistrées sur un équipement prévu à cet effet. Sa capacité dépend du nombre de caméras, de la qualité d’image et de la durée de conservation souhaitée." },
    ],
    seoTitle: `Vidéosurveillance pour maison à ${serviceArea}`,
    seoDescription: `Découvrez les points à étudier pour installer des caméras autour d’une maison à ${serviceArea} : accès, cour, garage, vision nocturne et consultation à distance.`,
  },
  {
    slug: "commerce",
    title: "Commerce",
    shortDescription: "Protégez votre boutique, votre caisse, vos entrées et vos espaces de stockage.",
    description: "Dans une boutique, l’installation peut couvrir les entrées, la surface de vente et les espaces de stockage selon les priorités du commerce. Les angles doivent être définis pour observer les zones utiles sans gêner les circulations ni remplacer les procédures internes.",
    icon: Store,
    href: "/solutions/commerce",
    available: true,
    idealFor: ["Une boutique avec une ou plusieurs entrées", "Un point de vente avec caisse et réserve", "Un commerce souhaitant pouvoir faire évoluer son installation"],
    specificPoints: ["Observer les entrées et les cheminements de la clientèle", "Déterminer si la caisse nécessite un angle de vue distinct de la surface de vente", "Inclure la réserve ou le parking seulement si ces zones font partie des priorités", "Étudier les reflets, contre-jours et conditions de fermeture en soirée", "Dimensionner l’enregistrement selon le nombre de vues et la durée souhaitée"],
    recommendedZones: ["Entrée", "Caisse", "Surface de vente", "Réserve", "Couloir", "Parking ou extérieur"],
    considerations: ["Lisibilité des entrées et des cheminements clients", "Position et éclairage de la caisse", "Couverture distincte de la réserve et de la surface de vente", "Réglages en fonction des contre-jours et de la lumière nocturne", "Durée de conservation, stockage et accès aux images"],
    services: ["Étude des zones de vente et des accès", "Installation des caméras et de l’enregistreur", "Configuration des profils de consultation", "Maintenance et adaptation de l’installation"],
    faq: [
      { question: "Quelles zones d’une boutique peut-on surveiller ?", answer: "Selon le projet, les entrées, la caisse, la surface de vente, la réserve, un couloir ou le parking peuvent être étudiés. Toutes ces zones ne sont pas obligatoires." },
      { question: "Une caméra peut-elle couvrir la caisse et l’entrée ?", answer: "Cela dépend de la distance, de l’angle et des obstacles. Un repérage aide à savoir si un seul point de vue suffit ou si plusieurs vues sont nécessaires." },
      { question: "L’accès aux images depuis un téléphone est-il possible ?", answer: "Une consultation à distance peut être configurée lorsque les équipements et la connectivité disponibles sur place le permettent." },
      { question: "Peut-on ajouter des caméras plus tard ?", answer: "Une évolution est envisageable si l’enregistreur, le réseau, le câblage et l’alimentation disposent des capacités nécessaires. Ces points sont à vérifier avant l’extension." },
    ],
    seoTitle: `Vidéosurveillance pour commerce à ${serviceArea}`,
    seoDescription: `Étudiez une installation de vidéosurveillance pour votre commerce à ${serviceArea} : entrée, caisse, surface de vente, réserve et accès distant.`,
  },
  {
    slug: "bureau-entreprise",
    title: "Bureau & entreprise",
    shortDescription: "Contrôlez les accès, les espaces de travail et les zones sensibles de vos locaux.",
    description: "Les locaux professionnels réunissent souvent des espaces ouverts, des bureaux et des accès différents. La solution se définit à partir de l’organisation des locaux, des zones qui nécessitent une attention particulière et des personnes chargées de consulter les images.",
    icon: Building2,
    href: "/solutions/bureau-entreprise",
    available: true,
    idealFor: ["Des bureaux avec accueil et plusieurs accès", "Des locaux comportant des espaces de travail distincts", "Une entreprise ayant des zones techniques ou des espaces réservés"],
    specificPoints: ["Repérer l’accueil, les accès visiteurs et les circulations entre les espaces", "Identifier les zones techniques ou réservées qui nécessitent une attention particulière", "Choisir les vues des espaces de travail selon le besoin du site", "Définir les personnes autorisées à consulter les enregistrements", "Vérifier le réseau et la capacité du système en cas d’évolution des locaux"],
    recommendedZones: ["Accueil", "Entrées", "Couloirs", "Bureaux ou espaces communs", "Zones sensibles", "Parking"],
    considerations: ["Flux aux entrées et organisation des circulations", "Limites de chaque zone et angles de vision", "Positionnement adapté aux espaces de travail", "Droits d’accès aux images à définir par le responsable du site", "Intégration au réseau et possibilités d’évolution"],
    services: ["Analyse des accès et de l’organisation des locaux", "Installation et raccordement des équipements", "Configuration de l’enregistrement et des accès", "Accompagnement et maintenance selon les besoins"],
    faq: [
      { question: "Quelles zones d’une entreprise peuvent être couvertes ?", answer: "L’accueil, les entrées, les couloirs, certains espaces communs, les zones sensibles ou le parking peuvent être étudiés selon l’activité et les priorités du site." },
      { question: "Peut-on surveiller tous les bureaux ?", answer: "La couverture se définit en fonction des besoins réels et de l’organisation des locaux. Les espaces retenus et les accès aux images sont à valider avec le responsable de l’entreprise." },
      { question: "Le système peut-il être consulté à distance ?", answer: "Oui, sous réserve de la configuration des équipements, du réseau et d’une connexion Internet appropriée sur le site." },
      { question: "Comment prévoir une extension future ?", answer: "Il faut vérifier les capacités de l’enregistreur, du réseau, de l’alimentation et du câblage, puis garder ces contraintes à l’esprit lors de l’étude initiale." },
    ],
    seoTitle: `Vidéosurveillance pour bureaux et entreprises à ${serviceArea}`,
    seoDescription: `Découvrez les critères d’installation de caméras dans des bureaux ou locaux d’entreprise à ${serviceArea} : accès, accueil, circulations et zones sensibles.`,
  },
  {
    slug: "entrepot",
    title: "Entrepôt",
    shortDescription: "Surveillez les zones de stockage, les accès, les quais et les espaces à forte activité.",
    description: "Un entrepôt comporte des distances, des hauteurs et des mouvements qui influencent le choix des caméras. L’étude porte notamment sur les accès, les quais, les allées de circulation et les zones de stockage, ainsi que sur les conditions d’éclairage et de raccordement.",
    icon: Warehouse,
    href: "/solutions/entrepot",
    available: true,
    idealFor: ["Un site avec plusieurs accès ou quais", "Des espaces de stockage étendus ou des allées distinctes", "Un entrepôt avec une cour ou un périmètre à examiner"],
    specificPoints: ["Adapter les vues aux distances, aux hauteurs de montage et aux rayonnages", "Étudier séparément les accès, les quais et les allées de stockage", "Prendre en compte les mouvements d’engins et les obstacles qui changent l’angle de vue", "Vérifier l’éclairage des espaces de travail et des accès en dehors des horaires d’activité", "Protéger le câblage et les équipements exposés dans les zones extérieures"],
    recommendedZones: ["Accès", "Quais de chargement", "Zones de stockage", "Allées de circulation", "Périmètre", "Cour"],
    considerations: ["Distances, hauteur de montage et angle de vision", "Obstacles créés par les rayonnages ou les marchandises", "Éclairage des quais et des circulations", "Protection du câblage et de l’enregistreur", "Réseau, alimentation et capacité d’enregistrement"],
    services: ["Repérage des accès, quais et circulations", "Étude des vues utiles selon la hauteur et les obstacles", "Installation et configuration des équipements", "Maintenance et vérification du système"],
    faq: [
      { question: "Comment choisir des caméras pour un grand entrepôt ?", answer: "Les distances, la hauteur, l’éclairage et les obstacles sont déterminants. Une visite permet d’évaluer les vues disponibles et le nombre de points à couvrir." },
      { question: "Les quais peuvent-ils être surveillés la nuit ?", answer: "Cela peut être envisagé après vérification de l’éclairage, des distances et de l’exposition des équipements. Le besoin de vision nocturne doit être précisé lors de l’étude." },
      { question: "Comment surveiller les allées de stockage ?", answer: "Le positionnement se définit selon l’orientation des rayonnages, les angles de vue et les circulations. Des vues distinctes peuvent être utiles selon l’agencement." },
      { question: "Le stockage des images peut-il couvrir plusieurs caméras ?", answer: "La capacité d’enregistrement se dimensionne selon le nombre de caméras, leurs réglages et la durée de conservation visée." },
    ],
    seoTitle: `Vidéosurveillance pour entrepôt à ${serviceArea}`,
    seoDescription: `Préparez la surveillance d’un entrepôt à ${serviceArea} en étudiant les accès, quais, allées, zones de stockage, éclairage et enregistrement.`,
  },
  {
    slug: "ecole",
    title: "École",
    shortDescription: "Renforcez la surveillance des entrées, couloirs, cours et zones stratégiques.",
    description: "Pour un établissement scolaire, le projet doit partir des accès et des zones que la direction souhaite surveiller. La disposition des bâtiments, les horaires d’utilisation, les cours et les espaces administratifs déterminent les vues pertinentes et les personnes autorisées à accéder aux images.",
    icon: School,
    href: "/solutions/ecole",
    available: true,
    idealFor: ["Un établissement avec portail et entrées distinctes", "Un site composé de bâtiments, couloirs et cours", "Une direction souhaitant clarifier les zones et modalités d’accès aux images"],
    specificPoints: ["Étudier le portail, l’entrée et les circulations entre bâtiments", "Choisir les cours et couloirs à couvrir selon les usages de l’établissement", "Définir avec la direction les espaces pertinents et les personnes habilitées à consulter les images", "Vérifier l’éclairage extérieur selon les horaires d’ouverture", "Prévoir le stockage des images et les modalités de consultation pour les responsables"],
    recommendedZones: ["Portail", "Entrée", "Cour", "Couloirs", "Zones administratives", "Accès aux espaces sensibles"],
    considerations: ["Zones utiles à la sécurité du site et horaires d’utilisation", "Circulation des élèves, du personnel et des visiteurs", "Éclairage des accès et des espaces extérieurs", "Définition des personnes habilitées à consulter les images", "Validation du projet par la direction selon les règles applicables à l’établissement"],
    services: ["Échange avec la direction sur les besoins de l’établissement", "Repérage des accès et espaces à étudier", "Installation et configuration des équipements retenus", "Accompagnement et maintenance selon le fonctionnement du site"],
    faq: [
      { question: "Quelles zones d’une école peut-on examiner ?", answer: "Le portail, les entrées, certaines cours, les couloirs, les zones administratives ou des accès sensibles peuvent être examinés avec la direction." },
      { question: "Les caméras doivent-elles couvrir toutes les salles ?", answer: "Non. Les zones sont à choisir selon le besoin exprimé et l’organisation de l’établissement. Le périmètre de surveillance est à valider par la direction." },
      { question: "Qui pourra consulter les enregistrements ?", answer: "Les personnes habilitées et les modalités de consultation doivent être définies par l’établissement avant la mise en service." },
      { question: "Une consultation à distance est-elle possible ?", answer: "Elle peut être configurée selon le système retenu et les conditions du réseau et d’Internet disponibles sur le site." },
    ],
    seoTitle: `Vidéosurveillance pour école à ${serviceArea}`,
    seoDescription: `Étudiez les besoins de vidéosurveillance d’une école à ${serviceArea} : portail, entrées, cours, couloirs et espaces administratifs.`,
  },
  {
    slug: "hotel",
    title: "Hôtel",
    shortDescription: "Surveillez les accès, espaces communs, parkings et zones sensibles de votre établissement.",
    description: "Un hôtel combine accueil, circulations, espaces communs et accès de service. L’installation doit tenir compte de la disposition des lieux et des besoins de l’établissement, tout en définissant précisément les zones couvertes et les modalités d’accès aux images.",
    icon: Hotel,
    href: "/solutions/hotel",
    available: true,
    idealFor: ["Un établissement avec réception et accès de service", "Un hôtel comprenant plusieurs espaces communs", "Un site disposant d’un parking ou de circulations distinctes"],
    specificPoints: ["Étudier la réception, l’entrée principale et les accès de service comme des points distincts", "Couvrir les circulations et espaces communs retenus par la direction", "Prendre en compte le parking et les accès secondaires selon l’éclairage et les distances", "Définir avec soin les zones couvertes et les profils autorisés à consulter les images", "Organiser l’enregistrement et l’accès aux images en fonction du fonctionnement de l’établissement"],
    recommendedZones: ["Réception", "Entrée", "Couloirs et espaces communs", "Parking", "Accès secondaires", "Zones de service"],
    considerations: ["Séparation entre zones d’accueil, de circulation et de service", "Angles de vue et éclairage selon les horaires d’activité", "Zones filmées et accès aux images à valider avec la direction", "Réseau et emplacement sécurisé de l’enregistreur", "Durée d’enregistrement, maintenance et continuité électrique"],
    services: ["Analyse des accès et des circulations de l’établissement", "Installation des points de vue retenus", "Configuration de l’enregistrement et de la consultation", "Maintenance adaptée aux contraintes d’exploitation"],
    faq: [
      { question: "Quelles zones d’un hôtel peut-on surveiller ?", answer: "La réception, les entrées, certains couloirs, les espaces communs, les accès de service et le parking peuvent être évalués selon les priorités de la direction." },
      { question: "Peut-on surveiller les chambres ?", answer: "Les espaces couverts doivent être définis avec soin par la direction selon les besoins et les règles applicables à l’établissement. Le projet se concentre généralement sur les accès et circulations retenus." },
      { question: "Comment gérer plusieurs accès à l’établissement ?", answer: "On repère les accès principaux et secondaires, puis on étudie les vues et les angles nécessaires à partir de la configuration réelle des lieux." },
      { question: "La réception peut-elle consulter les images à distance ?", answer: "Des profils de consultation à distance peuvent être configurés si le matériel, les autorisations de l’établissement et la connectivité le permettent." },
    ],
    seoTitle: `Vidéosurveillance pour hôtel à ${serviceArea}`,
    seoDescription: `Découvrez les éléments à étudier pour un hôtel à ${serviceArea} : réception, entrées, espaces communs, parking, accès de service et stockage.`,
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}
