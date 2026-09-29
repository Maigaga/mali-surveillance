import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";
import { getWhatsAppMessage, getWhatsAppUrl, siteConfig } from "@/lib/site-config";

const brandName = siteConfig.companyName;
const pageTitle = `Contact | ${brandName}`;
const pageDescription =
  `Contactez-nous pour votre projet d'installation, de maintenance ou de dépannage de vidéosurveillance à ${siteConfig.serviceArea}.`;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    siteName: brandName,
    locale: "fr_FR",
    type: "website",
  },
};

const isConfigured = (value: string) => value.trim() !== "" && !value.includes("COMPANY_");

const quickQuestions = [
  {
    question: "Comment demander un devis ?",
    answer: "Utilisez le formulaire de demande de devis pour transmettre les informations disponibles concernant votre projet.",
    href: "/devis",
    linkLabel: "Demander un devis",
  },
  {
    question: "Puis-je contacter l'entreprise sur WhatsApp ?",
    answer: isConfigured(siteConfig.whatsapp)
      ? "Oui, le numéro professionnel est configuré. Utilisez le bouton WhatsApp de cette page pour ouvrir une conversation."
      : "Le contact WhatsApp sera disponible dès que le numéro professionnel sera renseigné.",
  },
  {
    question: "Dois-je connaître le nombre de caméras nécessaires ?",
    answer: "Non. Vous pouvez décrire les zones et le besoin. Le nombre de caméras dépend de la configuration du site et peut être étudié avec le projet.",
  },
  {
    question: "Une visite du site est-elle nécessaire ?",
    answer: "Pas nécessairement pour une première orientation. Une étude plus détaillée peut toutefois être nécessaire selon la complexité du projet.",
  },
];

export default function ContactPage() {
  const whatsappHref = getWhatsAppUrl(getWhatsAppMessage());
  const phone = isConfigured(siteConfig.phone) ? siteConfig.phone : null;
  const email = isConfigured(siteConfig.email) ? siteConfig.email : null;
  const addressParts = [siteConfig.address, siteConfig.city].filter(isConfigured);
  const address = addressParts.length ? addressParts.join(", ") : null;
  const serviceArea = isConfigured(siteConfig.serviceArea) ? siteConfig.serviceArea : null;
  const businessHours = isConfigured(siteConfig.businessHours) ? siteConfig.businessHours : null;
  const formattedWhatsapp = siteConfig.whatsapp.replace(
    /^(\+223)(\d{2})(\d{2})(\d{2})(\d{2})$/,
    "$1 $2 $3 $4 $5",
  );

  const contactCards = [
    ...(phone ? [{ title: "Téléphone", value: phone, href: `tel:${phone.replace(/[^\d+]/g, "")}`, external: false, icon: Phone }] : []),
    ...(whatsappHref ? [{ title: "WhatsApp", value: formattedWhatsapp, href: whatsappHref, external: true, icon: MessageCircle }] : []),
    ...(email ? [{ title: "E-mail", value: email, href: `mailto:${email}`, external: false, icon: Mail }] : []),
    ...(address ? [{ title: "Adresse", value: address, href: null, external: false, icon: MapPin }] : []),
    ...(serviceArea ? [{ title: "Zone d’intervention", value: serviceArea, href: null, external: false, icon: MapPin }] : []),
    ...(businessHours ? [{ title: "Horaires", value: businessHours, href: null, external: false, icon: Clock3 }] : []),
  ];

  return (
    <>
      <section className="bg-primary px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">Contact</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Contactez-nous</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Une question, un projet d’installation ou un problème avec votre système de vidéosurveillance ? Présentez-nous votre besoin.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild variant="accent" size="lg"><Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link></Button>
            <Button asChild variant="outline" size="lg" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link href="/diagnostic">Faire le diagnostic CCTV <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading eyebrow="Nous joindre" title="Choisissez votre moyen de contact" description="Les coordonnées ci-dessous sont celles renseignées pour l’entreprise. Les informations manquantes sont indiquées comme telles." />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map(({ title, value, href, icon: Icon, external }) => (
              <Card key={title} className="rounded-xl border-border/80 shadow-sm">
                <CardContent className="flex h-full items-start gap-4 p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#edf3fc] text-accent"><Icon aria-hidden="true" className="size-5" /></span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-primary">{title}</h3>
                    {href ? (
                      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="mt-1 inline-block break-words text-sm text-accent underline-offset-4 hover:underline focus-visible:underline">{value}</a>
                    ) : (
                      <p className="mt-1 break-words text-sm text-muted-foreground">{value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="overflow-hidden rounded-2xl border-[#d3e8dc] bg-[#f3faf6] shadow-sm">
              <CardContent className="flex h-full flex-col items-start gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#147d50] text-white"><MessageCircle aria-hidden="true" className="size-6" /></span>
                  <div>
                    <h2 className="text-lg font-bold text-primary">Parler avec nous sur WhatsApp</h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">Pour une demande rapide, vous pouvez nous contacter directement sur WhatsApp.</p>
                    {!whatsappHref && <p className="mt-3 text-sm font-medium text-primary">Le contact WhatsApp sera disponible dès que le numéro professionnel sera renseigné.</p>}
                  </div>
                </div>
                {whatsappHref && (
                  <Button asChild className="shrink-0 bg-[#147d50] text-white hover:bg-[#116a44]">
                    <a href={whatsappHref} target="_blank" rel="noreferrer">Écrire sur WhatsApp <ArrowUpRight aria-hidden="true" /></a>
                  </Button>
                )}
              </CardContent>
            </Card>
            <div className="flex flex-col justify-center rounded-2xl border border-border bg-secondary/50 p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Un premier échange</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Vous pouvez aussi demander une première orientation à partir de votre besoin ou de votre installation existante.</p>
              <Link href="/diagnostic" className="mt-4 inline-flex min-h-10 w-fit items-center gap-2 text-sm font-semibold text-accent hover:underline focus-visible:underline">Faire le diagnostic CCTV <ArrowRight aria-hidden="true" className="size-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Écrivez-nous</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Un formulaire sans faux envoi</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">Vous pouvez préparer votre message ici. Aucun e-mail ni aucune requête serveur ne sera envoyé : la réception automatique n’est pas encore activée.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-[1280px] gap-5 lg:grid-cols-2">
          <Card className="rounded-2xl border-border/80 shadow-sm">
            <CardContent className="p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Votre projet</p>
              <h2 className="mt-2 text-xl font-bold text-primary">Vous avez déjà une idée de votre projet ?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Utilisez notre formulaire de demande de devis pour nous transmettre les informations essentielles concernant votre installation.</p>
              <Button asChild variant="accent" className="mt-5"><Link href="/devis">Demander un devis <ArrowRight aria-hidden="true" /></Link></Button>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-border/80 shadow-sm">
            <CardContent className="p-5 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Besoin d’une première orientation ?</p>
              <h2 className="mt-2 text-xl font-bold text-primary">Décrivez votre installation ou votre besoin</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Le diagnostic CCTV vous aide à préciser les éléments utiles pour la suite de votre projet.</p>
              <Button asChild variant="outline" className="mt-5"><Link href="/diagnostic">Faire le diagnostic CCTV <ArrowRight aria-hidden="true" /></Link></Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[900px]">
          <SectionHeading eyebrow="FAQ courte" title="Quelques réponses avant de nous écrire" />
          <Accordion type="single" collapsible className="mt-7 rounded-xl border border-border bg-white px-5 shadow-sm sm:px-7">
            {quickQuestions.map(({ question, answer, href, linkLabel }, index) => (
              <AccordionItem key={question} value={`contact-faq-${index}`}>
                <AccordionTrigger className="min-h-16 py-5 text-left text-base font-semibold leading-snug text-primary">{question}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>{answer}</p>
                  {href && <Link href={href} className="mt-3 inline-flex min-h-9 items-center gap-1.5 font-semibold text-accent hover:underline focus-visible:underline">{linkLabel}<ArrowUpRight aria-hidden="true" className="size-4" /></Link>}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Link href="/faq" className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-accent hover:underline focus-visible:underline">Voir toutes les questions <ArrowRight aria-hidden="true" className="size-4" /></Link>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1280px] rounded-2xl bg-primary px-5 py-9 text-white sm:px-9 sm:py-11">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">À découvrir</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Explorez nos solutions de vidéosurveillance</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-blue-100">Consultez les services et les environnements pris en compte dans les projets présentés sur le site.</p>
            </div>
            <Button asChild variant="outline" size="lg" className="border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link href="/solutions">Découvrir les solutions <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
