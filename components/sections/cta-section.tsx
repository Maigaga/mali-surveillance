import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

export function CtaSection() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 rounded-3xl bg-primary px-6 py-9 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Un projet de vidéosurveillance ?</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">Parlons de votre projet.</h2>
          <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">Expliquez-nous votre besoin et obtenez une première orientation pour votre système de vidéosurveillance.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="accent" size="lg"><Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link></Button>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
