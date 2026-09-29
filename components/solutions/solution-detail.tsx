import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MapPin, ShieldCheck } from "lucide-react";
import type { Solution } from "@/data/solutions";
import { Button } from "@/components/ui/button";
import { WhatsAppSolutionLink } from "@/components/solutions/whatsapp-solution-link";

export function SolutionDetail({ solution }: { solution: Solution }) {
  const heading = solution.slug === "bureau-entreprise" ? "bureaux et entreprises" : solution.title.toLowerCase();
  const noun = solution.slug === "bureau-entreprise" ? "vos bureaux et locaux professionnels" : solution.slug === "maison" ? "votre maison" : solution.slug === "commerce" ? "votre commerce" : solution.slug === "entrepot" ? "votre entrepôt" : solution.slug === "ecole" ? "votre établissement scolaire" : "votre hôtel";
  const message = `Bonjour, je souhaite discuter d’une solution de vidéosurveillance pour ${noun}.`;

  return (
    <>
      <section className="bg-primary px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <nav aria-label="Fil d’Ariane" className="text-sm text-blue-200"><Link href="/solutions" className="hover:text-white hover:underline">Solutions</Link><span aria-hidden="true" className="px-2">/</span><span aria-current="page" className="text-white">{solution.title}</span></nav>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl"><span className="inline-flex size-12 items-center justify-center rounded-xl bg-white/10 text-blue-200"><solution.icon aria-hidden="true" className="size-6" /></span><p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Solution par environnement</p><h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Vidéosurveillance pour {heading}</h1><p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">{solution.description}</p></div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Button asChild variant="accent" size="lg"><Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link></Button><Button asChild variant="outline" size="lg" className="border-white/30 bg-white/5 text-white hover:bg-white/10"><Link href="/diagnostic">Faire le diagnostic CCTV <ArrowRight aria-hidden="true" /></Link></Button></div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Une réponse selon vos usages</p><h2 className="mt-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl">Pourquoi une solution adaptée à {solution.slug === "ecole" ? "votre école" : solution.slug === "hotel" ? "votre hôtel" : noun} ?</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">Les besoins dépendent de la configuration du site et de votre activité. L’étude permet de prioriser les accès et zones utiles, et de déterminer les conditions de prise de vue, d’enregistrement et de consultation.</p><ul className="mt-6 space-y-3">{solution.specificPoints.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-primary"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />{item}</li>)}</ul></div>
          <div className="rounded-xl border border-border bg-secondary/40 p-5 sm:p-7"><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-lg bg-white text-accent"><MapPin aria-hidden="true" className="size-5" /></span><h2 className="text-xl font-bold tracking-tight text-primary">Zones pouvant être surveillées</h2></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">La sélection se fait selon vos priorités ; toutes les zones ne sont pas nécessairement concernées.</p><ul className="mt-5 grid gap-2 sm:grid-cols-2">{solution.recommendedZones.map((zone) => <li key={zone} className="rounded-md border border-border/80 bg-white px-3 py-2.5 text-sm font-medium text-primary">{zone}</li>)}</ul></div>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-2 lg:gap-16">
          <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Préparer le projet</p><h2 className="mt-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl">Éléments à déterminer lors de l’étude</h2><ul className="mt-6 space-y-3">{solution.considerations.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />{item}</li>)}</ul></div>
          <div className="rounded-xl border border-border bg-white p-5 sm:p-7"><span className="flex size-11 items-center justify-center rounded-lg bg-[#edf3fc] text-primary"><ShieldCheck aria-hidden="true" className="size-5" /></span><h2 className="mt-4 text-xl font-bold tracking-tight text-primary">Installation adaptée à votre environnement</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">La configuration finale dépend d’une étude du site et de vos besoins réels. Le nombre de caméras, leurs emplacements, le stockage et les possibilités de consultation sont à préciser avec les contraintes d’éclairage, d’alimentation et de réseau propres à {noun}.</p><h3 className="mt-6 text-base font-semibold text-primary">Accompagnement possible</h3><ul className="mt-3 space-y-2">{solution.services.map((service) => <li key={service} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />{service}</li>)}</ul></div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="faq-title"><div className="mx-auto max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Questions fréquentes</p><h2 id="faq-title" className="mt-3 text-2xl font-bold tracking-tight text-primary sm:text-3xl">Vos questions sur la vidéosurveillance pour {heading}</h2><div className="mt-7 divide-y divide-border border-y border-border">{solution.faq.map(({ question, answer }) => <details key={question} className="group py-5"><summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-primary marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden">{question}<ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-accent transition-transform group-open:rotate-45" /></summary><p className="max-w-2xl pt-3 pr-8 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></div></section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20"><div className="mx-auto flex max-w-[1280px] flex-col gap-6 rounded-2xl bg-primary p-6 text-white sm:p-9 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">Parlons de votre besoin</p><h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Vous avez un projet de vidéosurveillance ?</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-blue-100">Décrivez votre site et les zones que vous souhaitez prendre en compte pour préparer la suite de votre projet.</p></div><div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center"><Button asChild variant="accent" size="lg"><Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link></Button><WhatsAppSolutionLink message={message} /></div></div></section>
    </>
  );
}
