import Link from "next/link";
import { ArrowRight, Cable, Check, HardDrive, Network, ScanEye } from "lucide-react";
import { Button } from "@/components/ui/button";

const installationPoints = ["Positionnement des caméras", "Câblage et raccordements", "NVR / DVR et stockage", "Réseau et accès distant", "Tests des équipements"];

export function InstallationSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-3xl bg-[#eaf0f7] p-5 sm:p-8">
          <div className="absolute right-0 top-0 size-52 -translate-y-1/3 translate-x-1/3 rounded-full border border-primary/10" aria-hidden="true" />
          <div className="relative rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between border-b pb-4">
              <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Schéma illustratif</p><p className="mt-1 text-sm font-semibold text-primary">Équipements coordonnés</p></div>
              <ScanEye aria-hidden="true" className="size-5 text-accent" />
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 py-7">
              <div className="space-y-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#edf3fc] text-primary"><ScanEye aria-hidden="true" className="size-5" /></span>
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#edf3fc] text-primary"><ScanEye aria-hidden="true" className="size-5" /></span>
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#edf3fc] text-primary"><ScanEye aria-hidden="true" className="size-5" /></span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-300"><span className="h-1 w-10 rounded-full bg-blue-200 sm:w-16" /><Cable aria-hidden="true" className="size-4" /><span className="h-1 w-10 rounded-full bg-blue-200 sm:w-16" /></div>
              <div className="flex min-h-[156px] flex-col items-center justify-center rounded-xl border bg-[#f8fafc] p-3 text-center sm:p-4">
                <HardDrive aria-hidden="true" className="size-8 text-accent" />
                <p className="mt-3 text-sm font-semibold text-primary">Enregistreur</p>
                <p className="mt-1 text-xs text-muted-foreground">NVR / DVR selon le système</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#edf3fc] px-3 py-2.5 text-xs text-[#405975]"><Network aria-hidden="true" className="size-4 shrink-0 text-accent" />Réseau, stockage et consultation configurés selon le besoin</div>
          </div>
        </div>

        <div className="max-w-xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-accent">Installation professionnelle</p>
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] text-primary sm:text-4xl">Une installation propre. Une surveillance fiable.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">La qualité d’un système dépend aussi de son implantation, de ses réglages et de la cohérence entre les équipements.</p>
          <ul className="mt-6 grid gap-x-5 gap-y-3 sm:grid-cols-2">
            {installationPoints.map((point) => <li key={point} className="flex items-start gap-2.5 text-sm text-[#34465c]"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#e5effd] text-accent"><Check aria-hidden="true" className="size-3.5" /></span>{point}</li>)}
          </ul>
          <Button asChild variant="outline" size="lg" className="mt-7 h-auto min-h-12 w-full whitespace-normal px-4 py-3 text-center sm:w-auto sm:px-6"><Link href="/installation">Découvrir notre méthode d’installation <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </div>
    </section>
  );
}
