import Link from "next/link";
import { ArrowRight, Camera, Cable, HardDrive, Network, Smartphone, Video, Wifi, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";

const supportingServices = [
  { number: "02", title: "Caméras IP", icon: Network },
  { number: "03", title: "Caméras analogiques", icon: Video },
  { number: "04", title: "Caméras Wi-Fi", icon: Wifi },
  { number: "05", title: "NVR / DVR et stockage", icon: HardDrive },
  { number: "06", title: "Accès à distance", icon: Smartphone },
  { number: "07", title: "Maintenance", icon: Wrench },
  { number: "08", title: "Dépannage", icon: Cable },
];

export function ServicesSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading eyebrow="Services" title="De l’installation à la maintenance" description="Du choix des équipements au suivi de votre système, les différentes étapes sont pensées ensemble." />
        <div className="mt-9 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl bg-primary p-6 text-white sm:p-8 lg:min-h-[440px]">
            <div className="absolute -bottom-24 -right-16 size-72 rounded-full border border-white/10" aria-hidden="true" />
            <div className="absolute -bottom-12 -right-4 size-52 rounded-full border border-white/10" aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">01 · Service principal</p>
              <span className="mt-7 flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10"><Camera aria-hidden="true" className="size-7" /></span>
              <h3 className="mt-6 max-w-sm text-2xl font-bold leading-tight tracking-tight sm:text-3xl">Installation de caméras</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-blue-100 sm:text-base">Positionnement, raccordement et configuration selon les caractéristiques de vos locaux et les zones à couvrir.</p>
            </div>
            <Link href="/installation" className="relative mt-8 inline-flex min-h-11 w-fit items-center gap-2 rounded-md font-semibold text-white hover:text-blue-200">
              Découvrir l’installation <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>

          <div className="rounded-3xl border bg-[#f9fbfd] p-4 sm:p-6 lg:p-7">
            <div className="grid sm:grid-cols-2">
              {supportingServices.map(({ number, title, icon: Icon }, index) => (
                <div key={number} className={`flex min-h-[94px] items-center gap-3 border-border/80 px-2 py-4 sm:px-4 ${index < 6 ? "border-b" : ""} ${index % 2 === 0 ? "sm:border-r" : ""}`}>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-white text-accent shadow-sm"><Icon aria-hidden="true" className="size-[1.125rem]" /></span>
                  <div><p className="text-[0.65rem] font-bold tracking-[0.14em] text-muted-foreground">{number}</p><h3 className="mt-1 text-sm font-semibold text-primary sm:text-base">{title}</h3></div>
                </div>
              ))}
            </div>
            <p className="mt-4 px-2 text-xs leading-relaxed text-muted-foreground sm:px-4">Les équipements et les fonctions retenus dépendent de l’installation et du besoin étudiés.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
