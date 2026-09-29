import Link from "next/link";
import { ArrowRight, Camera, Check, Cctv, Grid2X2, ShieldCheck, Smartphone } from "lucide-react";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

const cameraPositions = [
  "left-8 top-8",
  "right-8 top-8",
  "left-8 bottom-8",
  "right-8 bottom-8",
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1b30] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.11) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.11) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="pointer-events-none absolute -right-40 -top-52 size-[34rem] rounded-full border border-blue-100/10" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:min-h-[640px] lg:grid-cols-[1fr_0.92fr] lg:gap-10 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <Badge variant="accent" className="border border-white/10 bg-white/10 text-blue-100">{siteConfig.companyName} · {siteConfig.serviceArea}</Badge>
          <h1 className="mt-6 text-[2.55rem] font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[3.6rem]">
            Protégez ce qui compte vraiment.
          </h1>
          <h2 className="mt-5 max-w-xl text-lg font-semibold leading-snug text-blue-100 sm:text-xl lg:text-2xl">
            Solutions de vidéosurveillance professionnelles, pensées pour vos locaux.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Installation, configuration et maintenance de systèmes de vidéosurveillance adaptés à votre maison, commerce ou entreprise.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="accent" size="lg" className="w-full sm:w-auto">
              <Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white sm:w-auto">
              <Link href="/diagnostic">Faire le diagnostic CCTV</Link>
            </Button>
          </div>
          <WhatsAppButton variant="quiet" className="mt-3 -ml-3" />
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
          <div className="relative aspect-[1.12/1] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#102946] p-4 shadow-[0_32px_90px_rgba(0,0,0,0.3)] sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(57,111,183,.2),transparent_58%)]" aria-hidden="true" />
            <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-[#0b1b30]/55 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-blue-100"><Cctv aria-hidden="true" className="size-5" /></span>
                  <div><p className="text-xs font-semibold">Vue de surveillance</p><p className="mt-0.5 text-[0.65rem] text-slate-400">Aperçu illustratif</p></div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[0.65rem] font-medium text-emerald-100"><span className="size-1.5 rounded-full bg-emerald-300" /> Système prêt</span>
              </div>

              <div className="relative my-4 min-h-0 flex-1 overflow-hidden rounded-xl border border-white/10 bg-[#10233a]">
                <div className="absolute inset-0 opacity-50" aria-hidden="true" style={{ backgroundImage: "linear-gradient(rgba(178,204,238,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(178,204,238,.09) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                <div className="absolute inset-[16%] rounded-[42%] border border-dashed border-blue-200/30" />
                <div className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100/20 bg-blue-200/[0.04] sm:size-36">
                  <div className="absolute inset-3 rounded-full border border-blue-100/15" />
                  <div className="flex size-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-lg sm:size-20"><ShieldCheck aria-hidden="true" className="size-9 text-blue-100 sm:size-11" /></div>
                </div>
                {cameraPositions.map((position, index) => (
                  <span key={position} className={`absolute ${position} flex size-8 items-center justify-center rounded-lg border border-white/15 bg-[#16385f] text-blue-100 shadow-lg sm:size-9`} aria-label={`Repère de caméra ${index + 1}`}>
                    <Camera aria-hidden="true" className="size-4" />
                  </span>
                ))}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-md bg-[#071426]/80 px-2.5 py-1.5 text-[0.65rem] text-slate-200"><Grid2X2 aria-hidden="true" className="size-3.5 text-blue-200" /> Couverture à définir selon les lieux</div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5"><Smartphone aria-hidden="true" className="size-4 shrink-0 text-blue-200" /><span className="text-[0.7rem] text-slate-200">Accès à distance possible</span></div>
                <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5"><Check aria-hidden="true" className="size-4 shrink-0 text-emerald-300" /><span className="text-[0.7rem] text-slate-200">Installation professionnelle</span></div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-2 hidden rounded-xl border border-white/10 bg-white px-4 py-3 text-primary shadow-lg sm:block lg:-right-5">
            <div className="flex items-center gap-3"><ShieldCheck aria-hidden="true" className="size-5 text-accent" /><span className="text-xs font-semibold">Une configuration adaptée au site</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
