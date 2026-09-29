import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Cable,
  Check,
  ClipboardList,
  CloudSun,
  Eye,
  HardDrive,
  Laptop,
  Lightbulb,
  MapPin,
  Network,
  Radio,
  Settings2,
  ShieldCheck,
  Smartphone,
  Tablet,
  TestTube2,
  Wifi,
  Wrench,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/lib/site-config";

const brandName = siteConfig.companyName;

export const metadata: Metadata = {
  title: `Installation de vidéosurveillance à ${siteConfig.serviceArea}`,
  description: `Installation de systèmes de vidéosurveillance pour maisons, commerces, bureaux, entreprises et autres locaux à ${siteConfig.serviceArea}.`,
  alternates: { canonical: "/installation" },
  openGraph: {
    title: `Installation de vidéosurveillance à ${siteConfig.serviceArea} | ${brandName}`,
    description: "Une installation étudiée selon les zones à surveiller, les contraintes du site et votre besoin.",
    siteName: brandName,
    locale: "fr_FR",
    type: "website",
  },
};

const studyPoints = [
  { title: "Emplacement et angles", text: "Positionner chaque caméra pour observer les accès et zones retenus, en tenant compte des obstacles et des angles de vision.", icon: Eye },
  { title: "Couverture et distances", text: "Évaluer les surfaces, les distances et les détails attendus pour définir des points de vue utiles.", icon: MapPin },
  { title: "Vision nocturne", text: "Prendre en compte l’éclairage, les sources lumineuses, les obstacles et les capacités de vision de nuit du matériel.", icon: Lightbulb },
  { title: "Enregistrement", text: "Choisir le mode et la capacité de stockage selon le nombre de caméras, les réglages et la durée souhaitée.", icon: HardDrive },
  { title: "Réseau et alimentation", text: "Vérifier le câblage, la connectivité et l’alimentation nécessaires à l’emplacement prévu.", icon: Network },
  { title: "Consultation et suivi", text: "Étudier l’accès distant et garder à l’esprit les besoins d’entretien et d’évolution du système.", icon: Settings2 },
];

const technologies = [
  {
    title: "Caméras IP",
    icon: Network,
    points: [
      "Adaptées aux installations utilisant un réseau informatique.",
      "Permettent une configuration et une administration réseau selon le système retenu.",
      "Peuvent convenir aux projets organisés autour d’une architecture IP.",
    ],
  },
  {
    title: "Caméras analogiques",
    icon: Cable,
    points: [
      "Peuvent convenir à certains systèmes de vidéosurveillance existants.",
      "Une évolution peut être envisagée selon l’installation et les équipements présents.",
      "Le matériel déjà en place doit être vérifié avant de définir la configuration.",
    ],
  },
  {
    title: "Caméras Wi-Fi",
    icon: Wifi,
    points: [
      "Peuvent être utiles dans certaines configurations où le câblage est contraint.",
      "Le fonctionnement dépend de la couverture réseau et de l’environnement.",
      "La qualité de connexion et les besoins d’alimentation sont à étudier sur place.",
    ],
  },
];

const processSteps = [
  { title: "Échange sur le besoin", description: "Comprendre le site, vos objectifs et les zones importantes.", icon: ClipboardList },
  { title: "Étude de l’environnement", description: "Identifier les emplacements possibles, les angles, les distances et les contraintes.", icon: MapPin },
  { title: "Proposition de configuration", description: "Déterminer une configuration cohérente avec le projet et le matériel existant, le cas échéant.", icon: Settings2 },
  { title: "Installation", description: "Prévoir la pose, le câblage, les raccordements et la mise en place des équipements retenus.", icon: Cable },
  { title: "Configuration", description: "Configurer les caméras et l’enregistrement, ainsi que l’accès distant lorsqu’il est prévu.", icon: Network },
  { title: "Vérification", description: "Tester le fonctionnement et vérifier les vues et la couverture prévues.", icon: TestTube2 },
];

const infrastructurePoints = [
  "Câblage réseau et connectique",
  "Cheminement et organisation des câbles",
  "Alimentation des équipements",
  "Organisation du réseau selon le système",
  "Protection et emplacement du matériel",
  "Vérification de la connectivité",
];

const outdoorPoints = [
  "Pluie, poussière et exposition",
  "Chaleur et orientation des équipements",
  "Hauteur de pose et accessibilité pour l’entretien",
  "Éclairage nocturne et obstacles environnants",
];

const aftercare = [
  { title: "Ajouter des caméras", text: "Une extension dépend des capacités de l’enregistreur, du réseau, de l’alimentation et du câblage existants." },
  { title: "Remplacer ou reconfigurer", text: "Un équipement peut être remplacé ou réglé à nouveau après vérification de sa compatibilité avec le reste du système." },
  { title: "Étendre la couverture", text: "De nouvelles zones peuvent être étudiées selon les contraintes du site et la capacité de l’installation." },
  { title: "Entretenir et dépanner", text: "Des vérifications et une intervention peuvent être nécessaires pour maintenir le système en état de fonctionnement." },
];

const faq = [
  {
    question: "Combien de caméras faut-il pour mon site ?",
    answer: "Le nombre dépend des accès, des zones, des distances, des obstacles et du niveau de détail attendu. Une étude du site permet de préciser les emplacements et d’éviter une estimation fondée uniquement sur la surface.",
  },
  {
    question: "Quelle différence entre caméra IP et caméra analogique ?",
    answer: "Une caméra IP s’intègre à une architecture réseau. Une caméra analogique peut convenir à certains systèmes existants et s’appuie sur une autre architecture de raccordement. Le choix dépend notamment du matériel déjà installé et du projet.",
  },
  {
    question: "Peut-on regarder les caméras depuis un smartphone ?",
    answer: "Une consultation sur smartphone, tablette ou ordinateur peut être configurée si le matériel, le réseau, l’accès Internet et les réglages de sécurité le permettent.",
  },
  {
    question: "Quelle capacité de stockage faut-il ?",
    answer: "Elle dépend notamment du nombre de caméras, de la résolution, du taux d’enregistrement et de la durée de conservation souhaitée. La capacité doit être évaluée pour le système retenu.",
  },
  {
    question: "Les caméras fonctionnent-elles la nuit ?",
    answer: "Certains équipements disposent d’une vision infrarouge ou d’autres fonctions adaptées à la faible luminosité. La portée et le résultat varient selon l’éclairage, les obstacles et les conditions du site.",
  },
  {
    question: "Peut-on installer des caméras à l’extérieur ?",
    answer: "Oui, sous réserve de choisir un matériel adapté à l’exposition et de définir son emplacement en fonction de la pluie, de la poussière, de la chaleur, de la hauteur et de l’éclairage.",
  },
  {
    question: "Peut-on ajouter des caméras plus tard ?",
    answer: "C’est envisageable si l’enregistreur, le réseau, le câblage et l’alimentation ont les capacités nécessaires. Ces possibilités sont à vérifier avant d’ajouter des équipements.",
  },
  {
    question: "Faut-il obligatoirement avoir Internet ?",
    answer: "Internet n’est pas nécessaire pour toutes les fonctions locales d’un système. Il est généralement requis pour la consultation depuis l’extérieur du site ; cela dépend de l’équipement et de la configuration choisie.",
  },
];

export default function InstallationPage() {
  return (
    <>
      <section className="bg-primary px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Installation · {siteConfig.serviceArea}</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Installation de vidéosurveillance professionnelle</h1>
            <p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">Une installation pensée pour couvrir les zones importantes de votre site, avec une configuration adaptée à votre environnement et à vos besoins.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="accent" size="lg"><Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link></Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/5 text-white hover:bg-white/10"><Link href="/diagnostic">Faire le diagnostic CCTV <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-blue-100">Maison <span aria-hidden="true">•</span> Commerce <span aria-hidden="true">•</span> Bureau <span aria-hidden="true">•</span> Entreprise <span aria-hidden="true">•</span> Entrepôt <span aria-hidden="true">•</span> École <span aria-hidden="true">•</span> Hôtel</p>
          </div>

          <figure className="mx-auto w-full max-w-[540px] rounded-xl border border-white/15 bg-white/[0.06] p-4 sm:p-6">
            <div className="flex items-center justify-between gap-3 border-b border-white/15 pb-4">
              <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">Schéma de principe</p><p className="mt-1 text-sm font-semibold text-white">Des équipements organisés autour du site</p></div>
              <ShieldCheck aria-hidden="true" className="size-5 shrink-0 text-blue-200" />
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 py-7 sm:gap-5 sm:py-9">
              <div className="space-y-3">
                {["Vue sur un accès", "Vue sur une zone", "Vue extérieure"].map((label) => <div key={label} className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 p-2.5 text-xs text-blue-50 sm:p-3"><Camera aria-hidden="true" className="size-4 shrink-0 text-blue-200" /><span>{label}</span></div>)}
              </div>
              <div className="flex flex-col items-center gap-2 text-blue-200"><span className="h-px w-5 bg-blue-300 sm:w-8" /><Cable aria-hidden="true" className="size-4" /><span className="h-px w-5 bg-blue-300 sm:w-8" /></div>
              <div className="flex min-h-36 flex-col items-center justify-center rounded-lg border border-white/20 bg-white/10 p-3 text-center sm:min-h-40 sm:p-4"><HardDrive aria-hidden="true" className="size-8 text-blue-200" /><p className="mt-3 text-sm font-semibold text-white">Enregistreur</p><p className="mt-1 text-xs leading-relaxed text-blue-100">NVR ou DVR selon la configuration</p></div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2.5 text-xs leading-relaxed text-blue-100"><Network aria-hidden="true" className="size-4 shrink-0 text-blue-200" />Réseau, alimentation et stockage à étudier pour chaque site</div>
            <figcaption className="mt-3 text-xs leading-relaxed text-blue-200">Illustration technique indicative — elle ne représente pas une installation réalisée.</figcaption>
          </figure>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading eyebrow="Au-delà de la pose" title="Une installation pensée dans son ensemble" description="Une installation cohérente prend en compte le site, les usages et les équipements qui doivent fonctionner ensemble." />
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {studyPoints.map(({ title, text, icon: Icon }) => <Card key={title} className="rounded-xl border-border/80 shadow-none"><CardContent className="flex h-full gap-4 p-5"><span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#edf3fc] text-primary"><Icon aria-hidden="true" className="size-5" /></span><div><h3 className="font-semibold text-primary">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div></CardContent></Card>)}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading eyebrow="Choix du système" title="Des équipements adaptés à votre environnement" description="Chaque technologie peut répondre à certains projets selon le matériel disponible, les contraintes du site et le mode de raccordement." />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {technologies.map(({ title, icon: Icon, points }) => <Card key={title} className="rounded-xl border-border bg-white shadow-none"><CardContent className="p-5 sm:p-6"><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-lg bg-[#edf3fc] text-primary"><Icon aria-hidden="true" className="size-5" /></span><h3 className="text-lg font-semibold text-primary">{title}</h3></div><ul className="mt-5 space-y-3">{points.map((point) => <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />{point}</li>)}</ul></CardContent></Card>)}
          </div>
          <p className="mt-6 rounded-lg border border-blue-200/70 bg-white px-4 py-4 text-sm leading-relaxed text-primary"><strong>À retenir :</strong> le choix du matériel dépend de la configuration du site, des zones à surveiller, des contraintes réseau, de l’alimentation et du niveau de surveillance recherché.</p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="recording-title">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">NVR · DVR · capacité</p><h2 id="recording-title" className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Enregistrement et conservation des images</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">Les images sont enregistrées sur un support dont la capacité doit correspondre aux caractéristiques du système et à la durée de conservation recherchée.</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">La durée réelle dépend notamment du nombre de caméras, de la résolution, du taux d’enregistrement et de la capacité de stockage. Elle se détermine lors de l’étude, sans durée garantie à l’avance.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="rounded-xl border-border shadow-none"><CardContent className="p-5"><div className="flex items-center gap-3"><HardDrive aria-hidden="true" className="size-5 text-accent" /><h3 className="font-semibold text-primary">NVR</h3></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Peut être utilisé avec certaines architectures de caméras IP. Le modèle et les capacités doivent être adaptés au système retenu.</p></CardContent></Card>
            <Card className="rounded-xl border-border shadow-none"><CardContent className="p-5"><div className="flex items-center gap-3"><HardDrive aria-hidden="true" className="size-5 text-accent" /><h3 className="font-semibold text-primary">DVR</h3></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Peut convenir à certains systèmes analogiques. La compatibilité dépend des équipements et du câblage déjà présents.</p></CardContent></Card>
            <div className="rounded-xl border border-border bg-secondary/40 p-5 sm:col-span-2"><div className="flex items-center gap-3"><ShieldCheck aria-hidden="true" className="size-5 text-primary" /><h3 className="font-semibold text-primary">Un disque adapté au besoin</h3></div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Le support de stockage se choisit selon le volume d’images et les conditions d’utilisation attendues. Une capacité plus grande ne suffit pas, à elle seule, à déterminer une durée de conservation précise.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20" aria-labelledby="night-title">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">Conditions de lumière</p><h2 id="night-title" className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">Surveiller également lorsque la lumière baisse</h2><p className="mt-4 text-sm leading-relaxed text-blue-100 sm:text-base">Une vue nocturne dépend du niveau de lumière, de la distance, des obstacles, des sources lumineuses proches et des capacités de l’équipement retenu. La vision infrarouge peut être utile selon les conditions, sans garantir un résultat identique sur tous les sites.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{["Éclairage disponible et zones d’ombre", "Portée de vision nocturne recherchée", "Obstacles, murs et végétation", "Reflets et sources lumineuses proches"].map((point) => <div key={point} className="flex min-h-16 items-center gap-3 rounded-lg border border-white/15 bg-white/5 p-4 text-sm font-medium text-white"><CloudSun aria-hidden="true" className="size-5 shrink-0 text-blue-200" />{point}</div>)}</div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="remote-title">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Selon la configuration</p><h2 id="remote-title" className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Consulter vos caméras à distance</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">Un smartphone, une tablette ou un ordinateur peuvent permettre de consulter les caméras depuis l’extérieur du site lorsque l’équipement, le réseau et la connexion Internet sont configurés pour cela. L’accès doit également tenir compte de la sécurité du système.</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">La consultation à distance n’est donc pas automatique : sa faisabilité se vérifie avec la configuration réellement disponible.</p></div>
          <div className="flex flex-wrap gap-3">{[{label:"Smartphone",Icon:Smartphone},{label:"Tablette",Icon:Tablet},{label:"Ordinateur",Icon:Laptop}].map(({label,Icon}) => <span key={label} className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-border bg-white px-4 text-sm font-medium text-primary"><Icon aria-hidden="true" className="size-4 text-accent" />{label}</span>)}</div>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]"><SectionHeading eyebrow="Une méthode claire" title="Notre processus d’installation" description="De l’échange initial aux vérifications, chaque étape précise les besoins et la configuration du projet." />
          <ol className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{processSteps.map(({title,description,icon:Icon},index) => <li key={title} className="flex gap-4 rounded-xl border border-border bg-white p-5"><span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#edf3fc] text-primary"><Icon aria-hidden="true" className="size-5" /></span><div><p className="text-xs font-bold tabular-nums tracking-[0.12em] text-accent">{String(index+1).padStart(2,"0")}</p><h3 className="mt-1 font-semibold text-primary">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="wiring-title">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-2 lg:items-center lg:gap-14"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Câblage et connectivité</p><h2 id="wiring-title" className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Une installation propre commence aussi par son infrastructure</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">Le cheminement des câbles, les raccordements, le réseau et l’alimentation contribuent à la cohérence de l’installation. Ils sont étudiés selon la configuration des lieux et les équipements prévus.</p></div><ul className="grid gap-3 sm:grid-cols-2">{infrastructurePoints.map((point) => <li key={point} className="flex min-h-14 items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary"><Check aria-hidden="true" className="size-4 shrink-0 text-accent" />{point}</li>)}</ul></div>
      </section>

      <section className="bg-secondary/50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="outdoor-title">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Intérieur et extérieur</p><h2 id="outdoor-title" className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Pour les espaces intérieurs comme extérieurs</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">Une installation à l’extérieur doit tenir compte de l’exposition réelle et de l’accès aux équipements. Le choix du matériel et de son emplacement dépend du site et des conditions rencontrées.</p></div><ul className="grid gap-3 sm:grid-cols-2">{outdoorPoints.map((point) => <li key={point} className="flex min-h-16 items-center gap-3 rounded-lg border border-border bg-white p-4 text-sm font-medium text-primary"><CloudSun aria-hidden="true" className="size-5 shrink-0 text-accent" />{point}</li>)}</ul></div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="evolution-title">
        <div className="mx-auto max-w-[1280px]"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><SectionHeading eyebrow="Suivi du système" title="Une installation doit pouvoir évoluer" description="Les changements de site ou de besoins peuvent nécessiter une adaptation du système." /><Link href="/maintenance" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-accent hover:underline focus-visible:underline">Découvrir la maintenance <ArrowUpRight aria-hidden="true" className="size-4" /></Link></div><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{aftercare.map(({title,text},index) => <Card key={title} className="rounded-xl border-border/80 shadow-none"><CardContent className="p-5"><span className="flex size-9 items-center justify-center rounded-lg bg-[#edf3fc] text-accent">{index===3?<Wrench aria-hidden="true" className="size-4"/>:index===0?<Radio aria-hidden="true" className="size-4"/>:<Settings2 aria-hidden="true" className="size-4"/>}</span><h3 className="mt-4 font-semibold text-primary">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></CardContent></Card>)}</div></div>
      </section>

      <section className="bg-secondary/50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="installation-faq-title">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">FAQ</p><h2 id="installation-faq-title" className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Questions sur l’installation</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Des réponses générales pour vous aider à préparer votre projet.</p></div><Accordion type="single" collapsible className="divide-y border-y border-border bg-transparent">{faq.map(({question,answer},index)=><AccordionItem key={question} value={`installation-faq-${index}`} className="border-0"><AccordionTrigger className="py-5 text-left text-sm font-semibold text-primary sm:text-base">{question}</AccordionTrigger><AccordionContent className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div>
      </section>

      <section className="px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-20"><div className="mx-auto flex max-w-[1280px] flex-col gap-6 rounded-2xl bg-primary p-6 text-white sm:p-9 md:items-start xl:flex-row xl:items-center xl:justify-between"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">Un projet à étudier ?</p><h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Vous avez un projet de vidéosurveillance ?</h2><p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">Décrivez-nous votre besoin et obtenez une première orientation pour votre projet.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Button asChild variant="accent" size="lg"><Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link></Button><Button asChild variant="outline" size="lg" className="border-white/30 bg-white/5 text-white hover:bg-white/10"><Link href="/diagnostic">Faire le diagnostic CCTV</Link></Button></div></div></section>
    </>
  );
}
