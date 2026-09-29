import Link from "next/link";
import { ArrowRight, Check, CircleHelp, Home, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const previewChoices = [
  { icon: Home, label: "Maison" },
  { icon: Store, label: "Commerce" },
];

export function DiagnosticSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 overflow-hidden rounded-[2rem] border bg-[#edf3fc] p-5 sm:p-8 lg:grid-cols-[1fr_0.88fr] lg:gap-14 lg:p-12">
        <div className="max-w-xl">
          <Badge variant="accent" className="border-0">Diagnostic CCTV</Badge>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-primary sm:text-4xl">Combien de caméras vous faut-il ?</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">Vous ne savez pas combien de caméras installer ni quelle configuration choisir ? Répondez à quelques questions et obtenez une première recommandation.</p>
          <p className="mt-4 text-sm leading-relaxed text-[#465d78]">Recommandation indicative — une étude du site peut être nécessaire pour confirmer la configuration finale.</p>
          <Button asChild variant="accent" size="lg" className="mt-6 w-full sm:w-auto">
            <Link href="/diagnostic">Faire mon diagnostic <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </div>

        <div className="mx-auto w-full max-w-[460px] rounded-2xl border bg-white p-4 shadow-[0_20px_60px_rgba(16,40,70,0.12)] sm:p-5">
          <div className="flex items-start justify-between gap-4 border-b pb-4">
            <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Aperçu du parcours</p><p className="mt-1 text-sm font-semibold text-primary">Parlons de votre site</p></div>
            <span className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold text-secondary-foreground">Étape 1 / 4</span>
          </div>
          <div className="py-5">
            <p className="text-sm font-semibold text-primary">Quel type de lieu souhaitez-vous équiper ?</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {previewChoices.map(({ icon: Icon, label }) => (
                <div key={label} className={`flex min-h-[88px] flex-col justify-between rounded-xl border px-3 py-3 ${label === "Maison" ? "border-accent bg-[#f4f8ff]" : "bg-white"}`}>
                  <Icon aria-hidden="true" className="size-5 text-accent" />
                  <span className="flex items-center justify-between text-sm font-medium text-primary">{label}{label === "Maison" && <Check aria-hidden="true" className="size-4 text-accent" />}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><CircleHelp aria-hidden="true" className="size-3.5" /> Première orientation</span>
            <span className="inline-flex min-h-9 items-center gap-1 rounded-lg bg-primary px-3 text-xs font-semibold text-white">Continuer <ArrowRight aria-hidden="true" className="size-3.5" /></span>
          </div>
        </div>
      </div>
    </section>
  );
}
