import Link from "next/link";
import { ArrowRight, Check, CircleAlert, HardDrive, Network, ScanEye, Settings2, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const maintenanceItems = [
  { label: "Maintenance préventive", icon: Settings2 },
  { label: "Diagnostic du système", icon: ScanEye },
  { label: "Dépannage", icon: Wrench },
  { label: "Vérification du stockage", icon: HardDrive },
  { label: "Vérification du réseau", icon: Network },
  { label: "Remplacement d’équipements", icon: CircleAlert },
];

export function MaintenanceSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid grid-cols-1 max-w-[1280px] gap-8 rounded-[2rem] border bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-12">
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-accent">Suivi technique</p>
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-primary sm:text-4xl">Votre système doit rester opérationnel.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">Une installation de vidéosurveillance nécessite également un suivi régulier pour préserver la qualité d’image, le stockage, le réseau et l’accès aux équipements.</p>
          <Button asChild variant="outline" size="lg" className="mt-6 w-full sm:w-auto"><Link href="/maintenance">Découvrir la maintenance <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {maintenanceItems.map(({ label, icon: Icon }) => (
            <li key={label} className="flex min-h-[76px] items-center gap-3 rounded-xl border bg-[#fbfcfe] px-4 py-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#edf3fc] text-accent"><Icon aria-hidden="true" className="size-[1.125rem]" /></span>
              <span className="text-sm font-medium text-primary">{label}</span>
              <Check aria-hidden="true" className="ml-auto size-4 shrink-0 text-emerald-600" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
