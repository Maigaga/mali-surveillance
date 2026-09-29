import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Portfolio" title="Nos réalisations" description="Les projets seront présentés ici lorsque leurs informations et visuels auront été fournis et validés." />
          <Link href="/realisations" className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-semibold text-primary hover:text-accent sm:self-auto">Voir toutes nos réalisations <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {projects.length > 0 ? projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="relative aspect-[4/3] bg-secondary"><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
              <div className="p-5"><p className="text-xs font-medium text-accent">{project.category}</p><h3 className="mt-1 font-semibold text-primary">{project.title}</h3><p className="mt-1 text-sm text-muted-foreground">{project.location}</p></div>
            </Card>
          )) : (
            <Card className="border-dashed bg-[#f8fafc] p-5 sm:p-6 md:col-span-3">
              <p className="text-sm leading-relaxed text-muted-foreground">Aucune réalisation n’est publiée pour le moment. Les projets seront ajoutés après validation de leurs informations et visuels.</p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
