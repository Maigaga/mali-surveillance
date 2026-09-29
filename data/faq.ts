export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Combien de caméras faut-il pour une maison ?",
    answer:
      "Le nombre dépend des accès, des espaces à surveiller, des angles de vue et des éventuels obstacles. Une première liste de zones prioritaires aide à définir une configuration ; une étude du site peut être nécessaire pour la confirmer.",
  },
  {
    question: "Peut-on regarder les caméras depuis son téléphone ?",
    answer:
      "C’est possible avec un équipement compatible et une configuration d’accès à distance. Selon le système choisi, une connexion Internet sur le site et sur le téléphone est nécessaire.",
  },
  {
    question: "Quelle différence entre caméra IP et caméra analogique ?",
    answer:
      "Une caméra IP transmet la vidéo par réseau, tandis qu’une caméra analogique est généralement reliée à un enregistreur par câble coaxial. Le choix dépend notamment du câblage existant et de la configuration souhaitée.",
  },
  {
    question: "Les caméras fonctionnent-elles la nuit ?",
    answer:
      "Certaines caméras disposent d’une vision nocturne infrarouge. Le résultat dépend du modèle, de l’éclairage et de l’environnement ; ces conditions sont à prendre en compte lors du choix et du positionnement.",
  },
  {
    question: "Combien de temps les vidéos sont-elles conservées ?",
    answer:
      "La durée varie selon la capacité de stockage, le nombre de caméras, la qualité vidéo et le mode d’enregistrement. Elle se définit avec les paramètres du système et le besoin du site.",
  },
  {
    question: "Peut-on installer des caméras dans un commerce ?",
    answer:
      "Oui. La configuration peut être étudiée selon les accès, les espaces de vente et les zones à couvrir, en tenant compte de l’agencement du commerce.",
  },
  {
    question: "Faut-il obligatoirement avoir Internet ?",
    answer:
      "Un enregistreur peut, selon sa configuration, conserver les images localement sans accès Internet. La consultation à distance et certaines fonctions connectées nécessitent généralement une connexion.",
  },
  {
    question: "Proposez-vous la maintenance après installation ?",
    answer:
      "Oui. La maintenance et le dépannage font partie des services proposés. Le suivi peut inclure des vérifications de l’image, du stockage, du réseau et des équipements selon le système installé.",
  },
];
