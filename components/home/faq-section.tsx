import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

export function FaqSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="FAQ" title="Vos questions, nos réponses" description="Quelques repères généraux pour mieux comprendre les systèmes de vidéosurveillance." />
          <Link href="/faq" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:text-accent">Voir toutes les questions <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
        </div>
        <Accordion type="single" collapsible className="divide-y border-y">
          {faqItems.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`} className="border-0">
              <AccordionTrigger className="py-5 text-left text-sm font-semibold text-primary sm:text-base">{question}</AccordionTrigger>
              <AccordionContent className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
