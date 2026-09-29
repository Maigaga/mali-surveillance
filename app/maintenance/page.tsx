import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Cable,
  Camera,
  Check,
  CircleAlert,
  ClipboardCheck,
  Eye,
  HardDrive,
  Network,
  ScanEye,
  Settings2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/lib/site-config";

const brandName = siteConfig.companyName;

export const metadata: Metadata = {
  title: `Maintenance vidéosurveillance à ${siteConfig.serviceArea}`,
  description: `Maintenance, diagnostic, dépannage et évolution des systèmes de vidéosurveillance à ${siteConfig.serviceArea}.`,
  alternates: { canonical: "/maintenance" },
  openGraph: {
    title: `Maintenance vidéosurveillance à ${siteConfig.serviceArea} | ${brandName}`,
    description: "Un service de maintenance et de dépannage adapté aux équipements et aux contraintes de votre installation.",
    siteName: brandName,
    locale: "fr_FR",
    type: "website",
  },
};

const warningSigns = [
  "Une caméra ne s’affiche plus",
  "La qualité de l’image s’est dégradée",
  "Une caméra apparaît hors ligne",
  "L’enregistrement semble interrompu",
  "Le disque de stockage est à vérifier",
  "La connexion réseau pose question",
  "L’accès distant ne fonctionne plus",
  "L’alimentation ou le câblage est à contrôler",
  "La configuration doit être revue",
];

const services = [
  { title: "Diagnostic", description: "Rechercher l’origine possible d’un dysfonctionnement à partir des équipements et de la configuration en place.", icon: ScanEye },
  { title: "Vérification des caméras", description: "Contrôler l’affichage, les vues, le positionnement et le fonctionnement des caméras concernées.", icon: Camera },
  { title: "Enregistrement et stockage", description: "Vérifier le système d’enregistrement, le support de stockage et la disponibilité des images.", icon: HardDrive },
  { title: "Réseau", description: "Examiner les connexions nécessaires au fonctionnement du système selon son architecture.", icon: Network },
  { title: "Configuration", description: "Ajuster certains paramètres des caméras ou de l’enregistreur après vérification du système.", icon: Settings2 },
  { title: "Accès à distance", description: "Vérifier les réglages de consultation sur un appareil distant lorsque cette fonction est prévue.", icon: Smartphone },
  { title: "Câblage et connexions", description: "Rechercher d’éventuels problèmes au niveau des raccordements et du cheminement des câbles.", icon: Cable },
  { title: "Évolution des équipements", description: "Étudier l’ajout ou le remplacement d’équipements selon la compatibilité de l’installation.", icon: Activity },
];

const checks = [
  "État général des caméras et visibilité des images",
  "Positionnement et couverture des zones prévues",
  "Connexions, câblage et alimentation",
  "Stockage et disponibilité des enregistrements",
  "Réseau et accès distant, lorsque cette fonction existe",
  "État général et configuration du système",
];

const incidents = [
  { issue: "Une caméra ne fonctionne plus", check: "Vérifier l’alimentation, la connexion, le câblage, l’équipement et sa configuration.", icon: Camera },
  { issue: "Les images ne sont plus enregistrées", check: "Examiner l’enregistreur, le support de stockage et les réglages d’enregistrement.", icon: HardDrive },
  { issue: "Les caméras ne sont plus visibles sur le téléphone", check: "Vérifier le réseau, la configuration et les conditions d’accès distant.", icon: Smartphone },
  { issue: "La qualité de l’image est mauvaise", check: "Contrôler la caméra, l’objectif, l’environnement, le câblage et les réglages.", icon: Eye },
  { issue: "Plusieurs caméras sont hors ligne", check: "Examiner l’infrastructure réseau et l’alimentation selon l’architecture installée.", icon: Network },
];

const interventionSteps = [
  "État des lieux",
  "Identification des problèmes",
  "Vérifications techniques",
  "Proposition d’action",
  "Intervention si nécessaire",
  "Vérification finale",
];

const evolutions = [
  "Ajouter des caméras",
  "Remplacer une caméra",
  "Améliorer une zone de couverture",
  "Modifier le stockage",
  "Revoir la configuration réseau",
  "Ajouter ou reconfigurer l’accès distant",
  "Remplacer certains équipements",
];

const goodPractices = [
  "Vérifier régulièrement que les caméras fonctionnent",
  "Confirmer que les enregistrements sont disponibles",
  "Surveiller l’état du stockage",
  "Protéger les accès au système",
  "Vérifier le réseau utilisé par l’installation",
  "Signaler rapidement les anomalies observées",
  "Conserver une configuration documentée lorsque c’est possible",
];

const faq = [
  { question: "À quelle fréquence faut-il vérifier un système CCTV ?", answer: "La fréquence dépend du matériel, de l’environnement et de l’usage du système. Des contrôles réguliers peuvent être organisés selon les besoins du site, sans fréquence universelle." },
  { question: "Que faire si une caméra ne fonctionne plus ?", answer: "Vous pouvez noter le voyant ou le message affiché et vérifier si d’autres caméras sont concernées. Évitez de modifier les réglages sans connaître l’installation ; un diagnostic aide à examiner l’alimentation, la connexion et la configuration." },
  { question: "Pourquoi une caméra peut-elle être hors ligne ?", answer: "Cela peut être lié à l’alimentation, au câblage, au réseau, à l’équipement ou à sa configuration. La cause doit être vérifiée sur le système concerné." },
  { question: "Peut-on intervenir sur une installation existante ?", answer: "Oui, une intervention peut commencer par un état des lieux et des vérifications. La compatibilité et l’état du matériel déterminent les actions envisageables." },
  { question: "Peut-on ajouter des caméras à une installation existante ?", answer: "Cela dépend des capacités de l’enregistreur, du réseau, du câblage et de l’alimentation. Une vérification de l’installation permet d’évaluer la faisabilité." },
  { question: "Que faire si les enregistrements ne fonctionnent plus ?", answer: "La disponibilité du stockage, l’enregistreur et les paramètres d’enregistrement sont à examiner. Si des images sont importantes, évitez d’effacer ou de reformater le support avant vérification." },
  { question: "Peut-on rétablir l’accès aux caméras depuis un smartphone ?", answer: "C’est parfois possible après contrôle de la connexion Internet, du réseau, des réglages et de la sécurité des accès. Le résultat dépend de l’équipement et de la configuration existants." },
  { question: "Une installation ancienne peut-elle être modernisée ?", answer: "Une évolution peut être étudiée après identification du matériel, du câblage et des contraintes du site. Un ancien système n’est pas nécessairement réparable ou compatible avec tous les nouveaux équipements." },
];

export default function MaintenancePage() {
  return (
    <>
      <section className="bg-primary px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Maintenance · {siteConfig.serviceArea}</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Maintenance et dépannage de vos systèmes de vidéosurveillance</h1>
            <p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">Un système de vidéosurveillance doit rester fonctionnel dans le temps. Nous intervenons pour identifier les problèmes, maintenir les équipements et accompagner l’évolution de votre installation.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="accent" size="lg"><Link href="/devis">Demander une intervention <ArrowRight aria-hidden="true" /></Link></Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/5 text-white hover:bg-white/10"><Link href="/diagnostic">Faire le diagnostic CCTV <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-blue-100">Maintenance <span aria-hidden="true">•</span> Diagnostic <span aria-hidden="true">•</span> Dépannage <span aria-hidden="true">•</span> Configuration <span aria-hidden="true">•</span> Évolution</p>
          </div>

          <figure className="mx-auto w-full max-w-[540px] rounded-xl border border-white/15 bg-white/[0.06] p-4 sm:p-6">
            <div className="flex items-center justify-between gap-3 border-b border-white/15 pb-4"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">Schéma de principe</p><p className="mt-1 text-sm font-semibold text-white">Points à vérifier sur une installation</p></div><ShieldCheck aria-hidden="true" className="size-5 shrink-0 text-blue-200" /></div>
            <div className="grid grid-cols-2 gap-3 py-6 sm:gap-4 sm:py-8">
              {[
                { label: "Caméras", Icon: Camera },
                { label: "Enregistrement", Icon: HardDrive },
                { label: "Réseau", Icon: Network },
                { label: "Raccordements", Icon: Cable },
              ].map(({ label, Icon }) => <div key={label} className="flex min-h-20 items-center gap-3 rounded-lg border border-white/15 bg-white/5 p-3 text-sm font-medium text-blue-50"><Icon aria-hidden="true" className="size-5 shrink-0 text-blue-200" />{label}</div>)}
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-white/10 px-3 py-3 text-xs leading-relaxed text-blue-100"><ClipboardCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-blue-200" />Diagnostic et vérifications à adapter au matériel et au site concernés</div>
            <figcaption className="mt-3 text-xs leading-relaxed text-blue-200">Illustration indicative — elle ne représente pas une intervention réalisée.</figcaption>
          </figure>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Repérer une anomalie</p><h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Une installation nécessite un suivi dans le temps</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">Avec l’usage et les conditions du site, certains éléments peuvent nécessiter une vérification. Cette liste présente des cas possibles, pas des problèmes attribués à des clients ou à une installation en particulier.</p></div>
          <ul className="grid gap-3 sm:grid-cols-2">{warningSigns.map((item) => <li key={item} className="flex min-h-14 items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary"><CircleAlert aria-hidden="true" className="size-4 shrink-0 text-accent" />{item}</li>)}</ul>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]"><SectionHeading eyebrow="Ce qui peut être vérifié" title="Nos services de maintenance" description="Le périmètre d’une intervention est défini selon le problème signalé, l’équipement et la configuration de votre système." />
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{services.map(({title,description,icon:Icon})=><Card key={title} className="rounded-xl border-border bg-white shadow-none"><CardContent className="p-5"><span className="flex size-10 items-center justify-center rounded-lg bg-[#edf3fc] text-primary"><Icon aria-hidden="true" className="size-5" /></span><h3 className="mt-4 font-semibold text-primary">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p></CardContent></Card>)}</div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Suivi préventif</p><h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Prévenir les problèmes avant qu’ils ne deviennent critiques</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">Une maintenance préventive peut aider à repérer certains signes d’usure ou de mauvais fonctionnement. Des vérifications régulières peuvent être organisées selon les besoins du site, sans formule ni fréquence universelle.</p></div>
          <div className="rounded-xl border border-border bg-secondary/40 p-5 sm:p-7"><h3 className="text-lg font-semibold text-primary">Points pouvant être vérifiés</h3><ul className="mt-5 grid gap-3 sm:grid-cols-2">{checks.map((item)=><li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-primary"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />{item}</li>)}</ul></div>
        </div>
      </section>

      <section className="bg-primary px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]"><SectionHeading eyebrow="Premières pistes" title="Un problème avec votre système ?" description="Selon le symptôme, plusieurs éléments peuvent être concernés. Ces exemples indiquent des pistes de vérification, pas des solutions garanties." className="text-white [&_h2]:text-white [&_p:last-child]:text-blue-100" />
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{incidents.map(({issue,check,icon:Icon})=><article key={issue} className="rounded-xl border border-white/15 bg-white/[0.06] p-5"><div className="flex items-center gap-3"><Icon aria-hidden="true" className="size-5 shrink-0 text-blue-200" /><h3 className="font-semibold text-white">{issue}</h3></div><p className="mt-4 border-t border-white/15 pt-4 text-sm leading-relaxed text-blue-100"><span className="font-semibold text-white">À vérifier : </span>{check}</p></article>)}</div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Système déjà en place</p><h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Votre installation existe déjà ?</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">Une intervention peut également commencer par un diagnostic de l’installation existante afin d’identifier les équipements, les problèmes éventuels et les améliorations possibles.</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">La possibilité de réparer ou de réutiliser un équipement dépend de son état, de sa compatibilité et de la configuration du site.</p></div>
          <ol className="grid gap-3 sm:grid-cols-2">{interventionSteps.map((step,index)=><li key={step} className="flex min-h-16 items-center gap-4 border-b border-border py-3"><span className="text-sm font-bold tabular-nums text-accent">{String(index+1).padStart(2,"0")}</span><span className="font-medium text-primary">{step}</span></li>)}</ol>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Adapter au besoin</p><h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Faire évoluer votre installation</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">L’ajout, le remplacement ou la reconfiguration d’équipements est à étudier en fonction de l’installation existante, de sa capacité et des contraintes du site.</p><Button asChild variant="outline" size="lg" className="mt-6"><Link href="/devis">Parler de mon projet <ArrowRight aria-hidden="true" /></Link></Button></div><ul className="grid gap-3 sm:grid-cols-2">{evolutions.map((item)=><li key={item} className="flex min-h-14 items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary"><ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-accent" />{item}</li>)}</ul></div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Au quotidien</p><h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Quelques bonnes pratiques</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Des contrôles simples peuvent aider à remarquer une anomalie et à faciliter les vérifications ultérieures.</p></div><div><ul className="grid gap-3 sm:grid-cols-2">{goodPractices.map((item)=><li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-primary"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />{item}</li>)}</ul><p className="mt-6 rounded-lg border border-blue-200/70 bg-secondary/40 px-4 py-3 text-sm leading-relaxed text-primary">Les vérifications exactes dépendent de l’architecture et du matériel installés.</p></div></div>
      </section>

      <section className="bg-secondary/50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="maintenance-faq-title">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">FAQ</p><h2 id="maintenance-faq-title" className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Questions sur la maintenance</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">Des repères généraux pour mieux comprendre les vérifications possibles.</p></div><Accordion type="single" collapsible className="divide-y border-y border-border bg-transparent">{faq.map(({question,answer},index)=><AccordionItem key={question} value={`maintenance-faq-${index}`} className="border-0"><AccordionTrigger className="py-5 text-left text-sm font-semibold text-primary sm:text-base">{question}</AccordionTrigger><AccordionContent className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div>
      </section>

      <section className="px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-20"><div className="mx-auto flex max-w-[1280px] flex-col gap-6 rounded-2xl bg-primary p-6 text-white sm:p-9 xl:flex-row xl:items-center xl:justify-between"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">Décrivez le problème</p><h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Votre système présente un problème ?</h2><p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">Décrivez-nous votre installation et le problème rencontré afin de préparer une première orientation.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Button asChild variant="accent" size="lg"><Link href="/devis">Demander une intervention <ArrowRight aria-hidden="true" /></Link></Button><Button asChild variant="outline" size="lg" className="border-white/30 bg-white/5 text-white hover:bg-white/10"><Link href="/diagnostic">Faire le diagnostic CCTV</Link></Button></div></div></section>
    </>
  );
}
