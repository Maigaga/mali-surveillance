import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  CircleCheck,
  ClipboardCheck,
  Cog,
  Eye,
  LifeBuoy,
  Network,
  ScanSearch,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { solutions } from "@/data/solutions";
import { siteConfig } from "@/lib/site-config";

const brandName = siteConfig.companyName;
const pageTitle = `À propos | ${brandName}`;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description:
    "Découvrez notre approche et nos services de vidéosurveillance pour particuliers et professionnels.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: pageTitle,
    description:
      "Découvrez notre approche et nos services de vidéosurveillance pour particuliers et professionnels.",
    siteName: brandName,
    locale: "fr_FR",
    type: "website",
  },
};

const principles = [
  "Comprendre le besoin",
  "Étudier le site",
  "Proposer une solution adaptée",
  "Accompagner l'installation et son évolution",
];

const services = [
  {
    title: "Installation de vidéosurveillance",
    description:
      "Étudier les accès et les zones utiles, puis définir le positionnement et la configuration des équipements.",
    href: "/installation",
    icon: Camera,
  },
  {
    title: "Maintenance et dépannage",
    description:
      "Faire le point sur une installation existante et rechercher l’origine d’un dysfonctionnement.",
    href: "/maintenance",
    icon: Wrench,
  },
  {
    title: "Diagnostic CCTV",
    description:
      "Décrire une situation pour obtenir une première orientation sur les vérifications à envisager.",
    href: "/diagnostic",
    icon: ScanSearch,
  },
  {
    title: "Configuration et évolution",
    description:
      "Ajuster les réglages ou étudier une évolution en fonction des capacités du système en place.",
    href: "/installation",
    icon: Cog,
  },
  {
    title: "Accès à distance",
    description:
      "Une consultation à distance peut être configurée lorsque les équipements et la connexion le permettent.",
    href: "/installation",
    icon: Network,
  },
];

const approachIcons = [ClipboardCheck, Eye, CircleCheck, LifeBuoy];

export default function AProposPage() {
  const serviceArea =
    siteConfig.serviceArea.trim() &&
    !siteConfig.serviceArea.includes("COMPANY_")
      ? siteConfig.serviceArea
      : null;

  return (
    <>
      <section className="relative overflow-hidden bg-primary px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute -right-24 top-0 hidden size-[28rem] rounded-full border border-white/10 lg:block" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-12 top-12 hidden size-80 rounded-full border border-white/10 lg:block" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">À propos</p>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              À propos de notre activité
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
              Des solutions de vidéosurveillance pensées pour répondre aux besoins réels des particuliers et des professionnels.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="accent" size="lg">
                <Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link href="/solutions">Découvrir nos solutions <ArrowRight aria-hidden="true" /></Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl" aria-label="Illustration abstraite d’un système de vidéosurveillance">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-5 shadow-2xl shadow-black/10 sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">Étude du site</p>
                  <p className="mt-1 text-sm font-medium text-white">Des vues définies selon le besoin</p>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-100"><Eye aria-hidden="true" className="size-5" /></span>
              </div>
              <div className="relative mt-5 flex aspect-[1.5] items-center justify-center overflow-hidden rounded-xl border border-dashed border-blue-200/30 bg-[#0a1b35]/70">
                <div className="absolute inset-x-8 bottom-0 h-1/2 border-x border-t border-blue-200/20" aria-hidden="true" />
                <div className="absolute left-1/2 top-1/2 size-[min(58vw,15rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/20 sm:size-60" aria-hidden="true" />
                <div className="absolute left-1/2 top-1/2 size-[min(38vw,10rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/20 sm:size-40" aria-hidden="true" />
                <div className="absolute left-[19%] top-[27%] flex size-9 items-center justify-center rounded-lg bg-blue-300/15 text-blue-100"><Camera aria-hidden="true" className="size-4" /></div>
                <div className="absolute right-[19%] top-[27%] flex size-9 items-center justify-center rounded-lg bg-blue-300/15 text-blue-100"><Camera aria-hidden="true" className="size-4" /></div>
                <div className="absolute bottom-[18%] left-1/2 flex size-9 -translate-x-1/2 items-center justify-center rounded-lg bg-blue-300/15 text-blue-100"><Camera aria-hidden="true" className="size-4" /></div>
                <div className="relative flex size-14 items-center justify-center rounded-2xl border border-blue-100/20 bg-blue-200/10 text-blue-100"><ScanSearch aria-hidden="true" className="size-7" /></div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-blue-100/80">Illustration abstraite — aucune photo d’intervention ni installation particulière n’est représentée.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading eyebrow="Notre approche" title="Une approche orientée terrain" description="Chaque installation de vidéosurveillance répond à un environnement particulier. Notre approche consiste à comprendre le site, identifier les zones importantes et proposer une configuration cohérente avec les besoins exprimés." />
          <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => {
              const Icon = approachIcons[index];
              return (
                <li key={principle} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-bold tracking-[0.12em] text-accent">0{index + 1}</span>
                    <Icon aria-hidden="true" className="size-5 text-accent" />
                  </div>
                  <h3 className="mt-7 text-base font-semibold leading-snug text-primary">{principle}</h3>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="bg-secondary/60 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading eyebrow="Nos services" title="Un accompagnement selon votre installation" description="De l’étude d’un nouveau projet au suivi d’un système existant, les interventions sont à définir selon le site et les équipements concernés." />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description, href, icon: Icon }) => (
              <Card key={title} className="rounded-xl border-border/80 shadow-sm">
                <CardContent className="flex h-full flex-col p-5 sm:p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#edf3fc] text-accent"><Icon aria-hidden="true" className="size-5" /></span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-primary">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  <Link href={href} className="mt-5 inline-flex min-h-10 w-fit items-center gap-2 text-sm font-semibold text-accent hover:underline focus-visible:underline">
                    En savoir plus <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading eyebrow="Pour qui ?" title="Des solutions pour différents environnements" description="Les priorités et les contraintes changent selon l’activité et l’agencement du site. Découvrez les points à étudier pour chaque environnement." />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ slug, title, shortDescription, icon: Icon, href }) => (
              <Link key={slug} href={href} className="group rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                <Card className="h-full rounded-xl border-border/80 shadow-sm transition-colors group-hover:border-accent/50">
                  <CardContent className="p-5 sm:p-6">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary"><Icon aria-hidden="true" className="size-5" /></span>
                    <h3 className="mt-4 flex items-center justify-between gap-3 text-lg font-semibold tracking-tight text-primary">{title}<ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{shortDescription}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1fr_0.75fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-200">Notre vision</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl">Construire des installations utiles, pas simplement multiplier les caméras</h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-blue-100 sm:text-base">Une installation efficace ne dépend pas uniquement du nombre de caméras. Le positionnement, les angles de vision, l’éclairage, le stockage, le réseau et les contraintes du site doivent être pris en compte.</p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-blue-100 sm:text-base">Notre objectif est de proposer des solutions compréhensibles, adaptées au contexte du site et évolutives lorsque cela est nécessaire.</p>
          </div>
          <div className="self-center rounded-xl border border-white/15 bg-white/[0.06] p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">Zone d’intervention</p>
            <p className="mt-3 text-lg font-semibold text-white">{serviceArea ? serviceArea : "Zone d'intervention : informations à préciser."}</p>
            <p className="mt-2 text-sm leading-relaxed text-blue-100">La zone sera précisée ici dès qu’elle sera renseignée dans la configuration du site.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px] rounded-2xl bg-secondary/70 px-5 py-10 text-center sm:px-10 sm:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">Un projet à étudier</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Vous avez un projet de vidéosurveillance ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">Parlez-nous de votre besoin et obtenez une première orientation pour votre projet.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="accent" size="lg"><Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link></Button>
            <Button asChild variant="outline" size="lg"><Link href="/diagnostic">Faire le diagnostic CCTV <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
