import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ClipboardList } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { solutions } from "@/data/solutions";
import { siteConfig } from "@/lib/site-config";

const brandName = siteConfig.companyName;

const factors = [
  "Nombre et emplacement des caméras",
  "Vision de jour et de nuit",
  "Couverture des zones sensibles",
  "Stockage des enregistrements",
  "Accès à distance",
  "Réseau informatique",
  "Alimentation électrique",
  "Protection des équipements",
  "Maintenance future",
];

const steps = [
  "Analyse du besoin",
  "Étude de l’environnement",
  "Proposition de solution",
  "Installation",
  "Configuration et mise en service",
  "Accompagnement et maintenance",
];

export const metadata: Metadata = {
  title: `Solutions de vidéosurveillance à ${siteConfig.serviceArea}`,
  description: `Découvrez nos solutions de vidéosurveillance pour maisons, commerces, bureaux, entreprises, entrepôts, écoles et hôtels à ${siteConfig.serviceArea}.`,
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: `Solutions de vidéosurveillance à ${siteConfig.serviceArea} | ${brandName}`,
    description: `Des installations étudiées selon votre environnement, vos accès et vos besoins de sécurité à ${siteConfig.serviceArea}.`,
    siteName: brandName,
    locale: "fr_FR",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-primary px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Nos solutions</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Des solutions de vidéosurveillance adaptées à vos besoins</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg">Maison, commerce, bureau, entrepôt ou établissement professionnel : nous concevons des installations adaptées à votre environnement et à vos besoins de sécurité.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg"><Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link></Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 bg-white/5 text-white hover:bg-white/10"><Link href="/diagnostic">Faire le diagnostic CCTV <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="solutions-title">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Des solutions par environnement</p><h2 id="solutions-title" className="mt-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl">Choisissez votre type de site</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">Chaque projet est étudié selon les accès, les usages et les zones que vous souhaitez surveiller.</p></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ title, shortDescription, href, icon: Icon }) => (
              <Card key={href} className="group border-border/80 bg-white shadow-sm transition-colors hover:border-blue-200">
                <CardContent className="flex h-full min-h-[220px] flex-col p-5 sm:p-6">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-[#edf3fc] text-primary"><Icon aria-hidden="true" className="size-5" /></span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-primary">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{shortDescription}</p>
                  <Link href={href} className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-accent hover:underline focus-visible:underline">Découvrir la solution <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="environment-title">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Une étude adaptée</p><h2 id="environment-title" className="mt-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl">Des installations pensées selon votre environnement</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">Le choix du matériel et son emplacement dépendent de la configuration du site, des usages et des conditions réelles sur place.</p></div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {factors.map((factor) => <li key={factor} className="flex min-h-14 items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-primary"><Check aria-hidden="true" className="size-4 shrink-0 text-accent" />{factor}</li>)}
          </ul>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="approach-title">
        <div className="mx-auto max-w-[1280px]"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Du premier échange au suivi</p><h2 id="approach-title" className="mt-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl">Notre approche</h2></div>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => <li key={step} className="flex min-h-20 items-start gap-4 border-t border-border py-5"><span className="text-sm font-bold tabular-nums text-accent">{String(index + 1).padStart(2, "0")}</span><span className="text-base font-semibold text-primary">{step}</span></li>)}
          </ol>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 rounded-2xl bg-primary p-6 text-white sm:p-9 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl"><span className="inline-flex size-10 items-center justify-center rounded-lg bg-white/10 text-blue-200"><ClipboardList aria-hidden="true" className="size-5" /></span><h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Vous ne savez pas encore quelle solution choisir ?</h2><p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">Répondez à quelques questions pour obtenir une première orientation concernant votre projet.</p></div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row"><Button asChild variant="accent" size="lg"><Link href="/diagnostic">Faire le diagnostic CCTV <ArrowRight aria-hidden="true" /></Link></Button><Button asChild variant="outline" size="lg" className="border-white/30 bg-white/5 text-white hover:bg-white/10"><Link href="/devis">Demander un devis</Link></Button></div>
        </div>
      </section>
    </>
  );
}
