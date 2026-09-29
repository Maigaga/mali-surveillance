import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { solutions } from "@/data/solutions";

export function SolutionsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading eyebrow="Solutions par environnement" title="Une solution adaptée à votre environnement" description="Chaque bâtiment présente des besoins différents. Nous adaptons la configuration du système à votre environnement." />
          <Link href="/solutions" className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-semibold text-primary hover:text-accent md:mb-1 md:self-auto">Toutes les solutions <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
        </div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ title, description, href, icon: Icon, available }) => (
            <Card key={title} className="group border-border/80 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md motion-reduce:transform-none">
              <CardContent className="flex h-full min-h-[184px] flex-col p-5 sm:p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-[#edf3fc] text-primary transition-colors group-hover:bg-primary group-hover:text-white"><Icon aria-hidden="true" className="size-5" /></span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-primary">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                {available && href ? (
                  <Link href={href} className="mt-4 inline-flex min-h-9 items-center gap-1.5 text-sm font-semibold text-accent hover:underline focus-visible:underline">
                    Découvrir <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ) : (
                  <p className="mt-4 text-xs font-medium text-muted-foreground">Page dédiée à venir</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
