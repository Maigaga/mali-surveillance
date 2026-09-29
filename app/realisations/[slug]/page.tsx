import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getRealisationBySlug, realisations } from "@/data/realisations";
import { siteConfig } from "@/lib/site-config";

const brandName = siteConfig.companyName;

export function generateStaticParams() {
  return realisations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const realisation = getRealisationBySlug(slug);
  if (!realisation) return { title: "Réalisation introuvable" };

  return {
    title: `${realisation.title} | Réalisations vidéosurveillance à ${siteConfig.serviceArea}`,
    description: realisation.description,
    alternates: { canonical: `/realisations/${realisation.slug}` },
    openGraph: {
      title: `${realisation.title} | ${brandName}`,
      description: realisation.description,
      siteName: brandName,
      locale: "fr_FR",
      type: "article",
    },
  };
}

export default async function RealisationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const realisation = getRealisationBySlug(slug);
  if (!realisation) notFound();

  return (
    <>
      <section className="bg-primary px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1280px]">
          <Link href="/realisations" className="inline-flex min-h-10 items-center gap-2 text-sm font-medium text-blue-100 hover:text-white hover:underline focus-visible:underline"><ArrowLeft aria-hidden="true" className="size-4" />Toutes les réalisations</Link>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-blue-200">{realisation.category}</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{realisation.title}</h1>
          {realisation.location && <p className="mt-4 inline-flex items-center gap-2 text-sm text-blue-100"><MapPin aria-hidden="true" className="size-4" />{realisation.location}</p>}
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg">{realisation.description}</p>
        </div>
      </section>

      <article className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1280px]">
          {realisation.images.length > 0 && <div className="grid gap-4 sm:grid-cols-2">{realisation.images.map((image,index)=><div key={`${image.src}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary"><Image src={image.src} alt={image.alt} fill priority={index===0} sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" /></div>)}</div>}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
            {(realisation.context || realisation.need) && <div className="space-y-6">{realisation.context && <section><h2 className="text-xl font-bold text-primary">Contexte</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{realisation.context}</p></section>}{realisation.need && <section><h2 className="text-xl font-bold text-primary">Besoin</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{realisation.need}</p></section>}</div>}
            {(realisation.monitoredZones?.length || realisation.installedSolution || realisation.equipment?.length) ? <div className="space-y-6">{realisation.monitoredZones && realisation.monitoredZones.length > 0 && <section><h2 className="text-xl font-bold text-primary">Zones concernées</h2><ul className="mt-3 space-y-2">{realisation.monitoredZones.map((zone)=><li key={zone} className="text-sm leading-relaxed text-muted-foreground">{zone}</li>)}</ul></section>}{realisation.installedSolution && <section><h2 className="text-xl font-bold text-primary">Solution mise en place</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{realisation.installedSolution}</p></section>}{realisation.equipment && realisation.equipment.length > 0 && <section><h2 className="text-xl font-bold text-primary">Équipements mentionnés</h2><ul className="mt-3 space-y-2">{realisation.equipment.map((equipment)=><li key={equipment} className="text-sm leading-relaxed text-muted-foreground">{equipment}</li>)}</ul></section>}</div> : null}
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-muted-foreground">Un projet comparable à étudier ?</p><Button asChild variant="accent" size="lg"><Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link></Button></div>
        </div>
      </article>
    </>
  );
}
