import { ClipboardList, Compass, Settings2, TestTube2 } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";

const steps = [
  { number: "01", title: "Analyse du besoin", description: "Clarifier les objectifs, les usages et les zones à surveiller.", icon: ClipboardList },
  { number: "02", title: "Étude de l’environnement", description: "Prendre en compte les accès, les distances, la lumière et le réseau.", icon: Compass },
  { number: "03", title: "Installation et configuration", description: "Mettre en place les équipements et régler le système retenu.", icon: Settings2 },
  { number: "04", title: "Tests et accompagnement", description: "Vérifier les fonctions et expliquer les usages essentiels.", icon: TestTube2 },
];

export function ProcessSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow="Notre méthode" title="Une installation pensée étape par étape" description="Un cadre clair pour choisir, installer et prendre en main votre système de vidéosurveillance." />
        <ol className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <li key={number} className="relative rounded-2xl border bg-[#fbfcfe] p-5 sm:p-6">
              <div className="flex items-center justify-between"><span className="text-sm font-bold tracking-[0.14em] text-accent">{number}</span><Icon aria-hidden="true" className="size-5 text-[#8aa3c1]" /></div>
              <h3 className="mt-8 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
