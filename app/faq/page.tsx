import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CircleHelp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/lib/site-config";

const brandName = siteConfig.companyName;
const seoTitle = `FAQ vidéosurveillance à ${siteConfig.serviceArea} | ${brandName}`;
const seoDescription =
  "Questions fréquentes sur l'installation, les caméras, l'enregistrement, l'accès à distance et la maintenance des systèmes de vidéosurveillance.";

export const metadata: Metadata = {
  title: { absolute: seoTitle },
  description: seoDescription,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    siteName: brandName,
    locale: "fr_FR",
    type: "website",
  },
};

type FaqQuestion = {
  question: string;
  answer: string;
  links?: { label: string; href: string }[];
};

type FaqCategory = {
  id: string;
  title: string;
  questions: FaqQuestion[];
};

const categories: FaqCategory[] = [
  {
    id: "installation",
    title: "Installation",
    questions: [
      {
        question: "Combien de caméras faut-il pour mon site ?",
        answer:
          "Le nombre dépend de la superficie, des zones à surveiller, des angles de vision, des distances et du niveau de couverture recherché. Une étude du site permet de déterminer une configuration plus précise.",
      },
      {
        question: "Peut-on installer des caméras dans une maison ?",
        answer:
          "Oui. Une installation résidentielle peut notamment couvrir les accès, le portail, la cour, le garage ou d'autres zones selon la configuration du domicile.",
        links: [{ label: "Voir les solutions pour une maison", href: "/solutions/maison" }],
      },
      {
        question: "Peut-on installer des caméras dans un commerce ?",
        answer:
          "Oui. La configuration peut notamment prendre en compte les entrées, la caisse, la surface de vente, la réserve ou le parking.",
        links: [{ label: "Voir les solutions pour un commerce", href: "/solutions/commerce" }],
      },
      {
        question: "Peut-on installer des caméras à l'extérieur ?",
        answer:
          "Oui, lorsque les équipements et leur installation sont adaptés aux conditions extérieures. L'exposition, la poussière, la pluie, la chaleur, l'éclairage et l'emplacement doivent notamment être pris en compte.",
      },
    ],
  },
  {
    id: "cameras",
    title: "Caméras",
    questions: [
      {
        question: "Quelle différence entre une caméra IP et une caméra analogique ?",
        answer:
          "Une caméra IP transmet ses images sous forme numérique sur un réseau informatique. Une caméra analogique envoie un signal vidéo vers un enregistreur compatible, généralement par un câble dédié. Le choix dépend du système en place, du câblage et des besoins du site.",
      },
      {
        question: "Les caméras Wi-Fi sont-elles adaptées à tous les sites ?",
        answer:
          "Non. Leur pertinence dépend notamment de la couverture Wi-Fi, de la stabilité du réseau, de l'alimentation et de l'environnement.",
      },
      {
        question: "Les caméras fonctionnent-elles la nuit ?",
        answer:
          "Certaines caméras disposent de fonctions de vision nocturne. Les performances réelles dépendent notamment de l'éclairage, de la distance, de l'environnement et du modèle utilisé.",
      },
      {
        question: "Peut-on ajouter des caméras plus tard ?",
        answer:
          "Dans de nombreux cas, une installation peut être étendue, mais cela dépend de l'enregistreur, du réseau, du stockage, de l'alimentation et de l'architecture existante.",
        links: [{ label: "En savoir plus sur l'installation", href: "/installation" }],
      },
    ],
  },
  {
    id: "enregistrement",
    title: "Enregistrement",
    questions: [
      {
        question: "Combien de temps les images peuvent-elles être conservées ?",
        answer:
          "Cette durée dépend notamment du nombre de caméras, de leur résolution, du mode d'enregistrement, du débit vidéo et de la capacité de stockage.",
      },
      {
        question: "À quoi servent un NVR et un DVR ?",
        answer:
          "Ce sont des enregistreurs vidéo. Un NVR reçoit et enregistre les flux numériques de caméras IP, tandis qu'un DVR traite généralement les signaux de caméras analogiques compatibles. Le matériel doit correspondre aux caméras et à l'architecture retenues.",
      },
      {
        question: "Que se passe-t-il lorsque le stockage est plein ?",
        answer:
          "Selon le système et ses réglages, l'enregistrement circulaire peut remplacer automatiquement les séquences les plus anciennes. D'autres systèmes peuvent arrêter l'enregistrement ou signaler que le stockage est plein. Le comportement dépend de la configuration choisie.",
      },
    ],
  },
  {
    id: "acces-distance",
    title: "Accès à distance",
    questions: [
      {
        question: "Peut-on voir les caméras depuis un smartphone ?",
        answer:
          "Selon l'équipement et la configuration du système, il est possible de consulter les caméras depuis un smartphone ou un autre appareil distant.",
      },
      {
        question: "Faut-il obligatoirement Internet pour regarder les caméras ?",
        answer:
          "Une consultation sur place, depuis le réseau local, peut être possible sans accès à Internet si le système est configuré pour cela. Pour consulter les images depuis l'extérieur du site, une connexion Internet et une configuration adaptées sont généralement nécessaires.",
      },
      {
        question: "Que faire si l'accès à distance ne fonctionne plus ?",
        answer:
          "Vérifiez d'abord la connexion Internet et le réseau local, puis l'état des équipements, l'application et la configuration d'accès. Une mise à jour ou un changement de paramètres peut également être en cause. Si le problème persiste, un diagnostic aidera à orienter les vérifications.",
        links: [{ label: "Faire le diagnostic CCTV", href: "/diagnostic" }],
      },
    ],
  },
  {
    id: "reseau-internet",
    title: "Réseau et Internet",
    questions: [
      {
        question: "Les caméras IP utilisent-elles le réseau informatique ?",
        answer:
          "Oui. Les caméras IP communiquent par un réseau informatique, qui peut être filaire ou sans fil selon le matériel et l'installation. Le réseau doit être étudié en fonction du nombre de caméras, des flux vidéo et des autres équipements présents.",
      },
      {
        question: "Que se passe-t-il en cas de coupure Internet ?",
        answer:
          "La consultation depuis l'extérieur peut être interrompue. Le fonctionnement sur place et l'enregistrement local peuvent continuer si l'architecture, l'alimentation et les réglages le permettent. Le comportement exact dépend du système installé.",
      },
      {
        question: "Une connexion Internet rapide est-elle nécessaire ?",
        answer:
          "Le besoin dépend notamment du nombre de caméras, de la qualité des flux, du nombre de consultations à distance et de la configuration du réseau. Une estimation adaptée nécessite de connaître l'usage prévu et la connexion disponible.",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    questions: [
      {
        question: "Pourquoi entretenir un système de vidéosurveillance ?",
        answer:
          "Un entretien permet de vérifier l'état apparent des équipements, la qualité des vues, les connexions et les réglages d'enregistrement. La fréquence et les vérifications utiles dépendent de l'installation et de son environnement.",
        links: [{ label: "Découvrir la maintenance", href: "/maintenance" }],
      },
      {
        question: "Que faire si une caméra ne fonctionne plus ?",
        answer:
          "Vérifiez son alimentation, son câblage ou sa connexion réseau, puis les voyants et les messages de l'enregistreur. Évitez de modifier des réglages que vous ne connaissez pas. Si le problème persiste, un diagnostic peut aider à identifier les contrôles nécessaires.",
        links: [{ label: "Décrire le problème avec le diagnostic CCTV", href: "/diagnostic" }],
      },
      {
        question: "Peut-on intervenir sur une installation existante ?",
        answer:
          "Une installation existante peut être examinée. La possibilité d'intervenir dépend notamment de l'état des équipements, de leur compatibilité, du câblage et de l'accès aux réglages.",
        links: [{ label: "Découvrir la maintenance", href: "/maintenance" }],
      },
      {
        question: "Peut-on moderniser une ancienne installation ?",
        answer:
          "Une modernisation peut être envisagée après vérification des caméras, de l'enregistreur, du câblage, du réseau et de l'alimentation. Un diagnostic permet de déterminer quels éléments pourraient être conservés ou remplacés.",
        links: [{ label: "Demander une première orientation", href: "/devis" }],
      },
    ],
  },
  {
    id: "projet-devis",
    title: "Projet et devis",
    questions: [
      {
        question: "Comment obtenir un devis ?",
        answer:
          "Vous pouvez utiliser le formulaire de demande de devis afin de nous transmettre les informations disponibles concernant votre projet.",
        links: [{ label: "Demander un devis", href: "/devis" }],
      },
      {
        question: "Puis-je faire un diagnostic avant de demander un devis ?",
        answer:
          "Oui. Le diagnostic CCTV permet de décrire votre situation et d'obtenir une première orientation avant de préciser votre demande.",
        links: [{ label: "Faire le diagnostic CCTV", href: "/diagnostic" }],
      },
      {
        question: "Que faut-il fournir pour préparer une demande ?",
        answer:
          "Les informations utiles comprennent le type de site, sa localisation générale, sa superficie approximative, les zones à surveiller, le nombre de caméras existantes si applicable, le besoin d'accès à distance et une description de votre besoin. Vous pouvez transmettre les éléments dont vous disposez.",
        links: [{ label: "Accéder au formulaire de devis", href: "/devis" }],
      },
      {
        question: "Une visite du site est-elle toujours nécessaire ?",
        answer:
          "Pas nécessairement pour une première orientation. Selon la complexité du projet, une étude plus détaillée du site peut toutefois être nécessaire avant de définir précisément la configuration.",
      },
    ],
  },
];

const totalQuestions = categories.reduce(
  (total, category) => total + category.questions.length,
  0,
);

function QuestionList({ questions }: { questions: FaqQuestion[] }) {
  return (
    <Accordion type="single" collapsible className="rounded-xl border border-border bg-white px-5 shadow-sm sm:px-7">
      {questions.map(({ question, answer, links }, index) => (
        <AccordionItem key={question} value={`question-${index}`}>
          <AccordionTrigger className="min-h-16 py-5 text-left text-base font-semibold leading-snug text-primary sm:text-[1.0625rem]">
            {question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>{answer}</p>
            {links && (
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {links.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="inline-flex min-h-9 items-center gap-1.5 font-semibold text-accent hover:underline focus-visible:underline"
                  >
                    {link.label}
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="bg-primary px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Centre d’aide</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Questions fréquentes
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg">
              Retrouvez les réponses aux principales questions concernant l’installation, la configuration et la maintenance d’un système de vidéosurveillance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="accent" size="lg">
                <Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/diagnostic">Faire le diagnostic CCTV <ArrowRight aria-hidden="true" /></Link>
              </Button>
            </div>
          </div>
          <div className="hidden size-24 items-center justify-center rounded-3xl border border-white/15 bg-white/[0.06] text-blue-100 lg:flex" aria-hidden="true">
            <CircleHelp className="size-11" />
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14" aria-label="Catégories de questions">
        <nav className="mx-auto flex max-w-[1040px] flex-wrap gap-2" aria-label="Accès rapide aux catégories de FAQ">
          {categories.map(({ id, title }) => (
            <a key={id} href={`#${id}`} className="inline-flex min-h-10 items-center rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              {title}
            </a>
          ))}
        </nav>
      </section>

      <div className="mx-auto max-w-[1040px] space-y-12 px-4 pb-14 sm:space-y-14 sm:px-6 lg:px-8 lg:pb-20">
        {categories.map(({ id, title, questions }) => (
          <section key={id} id={id} className="scroll-mt-24">
            <SectionHeading title={title} />
            <div className="mt-5">
              <QuestionList questions={questions} />
            </div>
            {id === "maintenance" && (
              <div className="mt-7 flex flex-col gap-4 rounded-xl bg-secondary/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary">Besoin d’aide avec votre installation ?</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Décrivez la situation pour préparer la suite.</p>
                </div>
                <Button asChild variant="accent" className="shrink-0">
                  <Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link>
                </Button>
              </div>
            )}
          </section>
        ))}
      </div>

      <section className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1280px] rounded-2xl bg-secondary/70 px-5 py-10 text-center sm:px-10 sm:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">{totalQuestions} réponses classées par thème</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Vous ne trouvez pas la réponse à votre question ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Décrivez votre besoin et nous pourrons vous orienter vers la solution la plus adaptée à votre situation.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="accent" size="lg"><Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link></Button>
            <Button asChild variant="outline" size="lg"><Link href="/diagnostic">Faire le diagnostic CCTV <ArrowRight aria-hidden="true" /></Link></Button>
            <Button asChild variant="outline" size="lg"><Link href="/contact">Nous contacter <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
