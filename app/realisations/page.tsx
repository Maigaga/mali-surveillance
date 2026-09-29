import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Camera, Check, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { realisations } from "@/data/realisations";
import { siteConfig } from "@/lib/site-config";

const brandName = siteConfig.companyName;

export const metadata: Metadata = {
  title: `Réalisations vidéosurveillance à ${siteConfig.serviceArea}`,
  description: realisations.length
    ? "Découvrez les installations de vidéosurveillance réalisées pour différents types de sites et environnements."
    : "Portfolio en cours de constitution. Les installations de vidéosurveillance seront présentées lorsque leurs informations auront été validées.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: `Réalisations vidéosurveillance à ${siteConfig.serviceArea} | ${brandName}`,
    description: realisations.length
      ? "Des exemples d’installations réelles de vidéosurveillance, documentées selon les informations disponibles."
      : `Notre portfolio de vidéosurveillance à ${siteConfig.serviceArea} est en cours de constitution.`,
    siteName: brandName,
    locale: "fr_FR",
    type: "website",
  },
};

const criteria = [
  "Type de site",
  "Zones surveillées",
  "Environnement intérieur ou extérieur",
  "Technologie utilisée, si connue et publiable",
  "Contraintes réseau",
  "Stockage des enregistrements",
  "Accès à distance, si prévu",
];

export default function RealisationsPage() {
  const hasRealisations = realisations.length > 0;

  return (
    <>
      <section className="bg-primary px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Portfolio</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Nos réalisations</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg">
            {hasRealisations
              ? "Découvrez quelques installations de vidéosurveillance réalisées selon les besoins et les contraintes de chaque site."
              : "Notre portfolio est en cours de constitution. Les installations seront présentées ici lorsque leurs informations et leurs visuels auront été validés."}
          </p>
        </div>
      </section>

      {hasRealisations ? (
        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-label="Installations réalisées">
          <div className="mx-auto grid max-w-[1280px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {realisations.map((realisation) => {
              const cover = realisation.images[0];
              return (
                <Card key={realisation.id} className="overflow-hidden rounded-xl border-border/80 shadow-sm">
                  <div className="relative aspect-[4/3] bg-secondary">
                    {cover ? (
                      <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
                    ) : (
                      <div className="flex size-full items-center justify-center text-muted-foreground" aria-label="Aucune photo publiée pour cette réalisation"><Camera aria-hidden="true" className="size-8" /></div>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{realisation.category}</p>
                    <h2 className="mt-2 text-lg font-semibold tracking-tight text-primary">{realisation.title}</h2>
                    {realisation.location && <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin aria-hidden="true" className="size-4" />{realisation.location}</p>}
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{realisation.description}</p>
                    <Link href={`/realisations/${realisation.slug}`} className="mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-accent hover:underline focus-visible:underline">Voir le projet <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-[1280px] items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Portfolio</p>
              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Notre portfolio est en cours de constitution</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">Nous ajouterons progressivement ici les installations réalisées afin de vous présenter des exemples concrets de nos interventions.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="accent" size="lg"><Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link></Button>
                <Button asChild variant="outline" size="lg"><Link href="/solutions">Découvrir nos solutions <ArrowRight aria-hidden="true" /></Link></Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-border bg-secondary/50 p-5 sm:p-8" aria-label="Illustration abstraite de critères d’une installation">
              <div className="flex items-center justify-between gap-3 border-b border-border pb-4"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Une étude adaptée</p><p className="mt-1 text-sm font-semibold text-primary">Chaque site a ses propres contraintes</p></div><ShieldCheck aria-hidden="true" className="size-5 shrink-0 text-accent" /></div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {["Accès et circulation", "Angles de vue", "Réseau et stockage", "Environnement du site"].map((item) => <li key={item} className="flex min-h-14 items-center gap-3 rounded-lg border border-border bg-white px-3 py-3 text-sm font-medium text-primary"><span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#edf3fc] text-accent"><Check aria-hidden="true" className="size-4" /></span>{item}</li>)}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Composition illustrative — aucune réalisation ni photo de chantier n’est représentée.</p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-secondary/50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div><SectionHeading eyebrow="Pour comprendre un projet" title="Chaque installation est différente" description="Le nombre de caméras, leur emplacement, la technologie utilisée et la configuration du système dépendent du site, des zones à surveiller et des besoins du client." /></div>
          <ul className="grid gap-3 sm:grid-cols-2">{criteria.map((criterion) => <li key={criterion} className="flex min-h-14 items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary"><Check aria-hidden="true" className="size-4 shrink-0 text-accent" />{criterion}</li>)}</ul>
        </div>
      </section>

      <section className="px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 rounded-2xl bg-primary p-6 text-white sm:p-9 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">Votre projet</p><h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Vous avez un projet similaire ?</h2><p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">Décrivez-nous votre besoin pour obtenir une première orientation adaptée à votre site.</p></div>
          <div className="flex flex-col gap-3 sm:flex-row"><Button asChild variant="accent" size="lg"><Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link></Button><Button asChild variant="outline" size="lg" className="border-white/30 bg-white/5 text-white hover:bg-white/10"><Link href="/diagnostic">Faire le diagnostic CCTV</Link></Button></div>
        </div>
      </section>
    </>
  );
}
