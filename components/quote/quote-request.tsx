"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardList,
  FileImage,
  MessageCircle,
  Pencil,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createQuoteWhatsAppMessage, quoteService } from "@/lib/quote-service";
import { validateQuote } from "@/lib/quote-validation";
import { getWhatsAppUrl } from "@/lib/site-config";
import {
  emptyQuoteForm,
  quoteBuildingTypes,
  quoteNeeds,
  quoteSurfaces,
  quoteZones,
  type ContactPreference,
  type QuoteFormData,
  type QuoteValidationErrors,
  type QuoteZone,
} from "@/types/quote";

type Phase = "form" | "review" | "ready";

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <p id={id} role="alert" className="mt-1.5 text-sm font-medium text-red-700">{message}</p> : null;
}

function FieldLabel({ htmlFor, required, children }: { htmlFor: string; required?: boolean; children: ReactNode }) {
  return <label htmlFor={htmlFor} className="text-sm font-semibold text-primary">{children}{required && <span aria-hidden="true" className="ml-1 text-red-600">*</span>}</label>;
}

function SummaryLine({ label, value }: { label: string; value?: string }) {
  return <div className="flex flex-col gap-0.5 py-2 sm:flex-row sm:justify-between sm:gap-4"><dt className="text-xs text-muted-foreground">{label}</dt><dd className="break-words text-sm font-medium text-primary sm:max-w-[60%] sm:text-right">{value?.trim() || "Non précisé"}</dd></div>;
}

function SummaryPanel({ form }: { form: QuoteFormData }) {
  const selectedZones = form.zones.length ? form.zones.join(", ") : "Non précisées";
  return (
    <Card className="h-fit rounded-2xl p-5 sm:p-6 lg:sticky lg:top-28">
      <div className="flex items-center gap-2">
        <span className="flex size-9 items-center justify-center rounded-lg bg-[#edf3fc] text-accent"><ClipboardList aria-hidden="true" className="size-5" /></span>
        <div><p className="font-semibold text-primary">Votre projet</p><p className="text-xs text-muted-foreground">Résumé mis à jour au fil du formulaire</p></div>
      </div>
      <dl className="mt-4 divide-y">
        <SummaryLine label="Nom" value={form.name} />
        <SummaryLine label="Téléphone" value={form.phone} />
        <SummaryLine label="Ville / zone" value={[form.city, form.area].filter(Boolean).join(" · ")} />
        <SummaryLine label="Bâtiment" value={form.buildingType} />
        <SummaryLine label="Besoin" value={form.need} />
        <SummaryLine label="Caméras" value={form.cameraCount ? `Environ ${form.cameraCount}` : "À préciser"} />
        <SummaryLine label="Zones" value={selectedZones} />
      </dl>
      <p className="mt-4 flex gap-2 rounded-xl bg-[#f5f8fc] p-3 text-xs leading-relaxed text-muted-foreground"><ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />Aucune demande n’est envoyée ni enregistrée avant votre choix de WhatsApp.</p>
    </Card>
  );
}

function ReviewSummary({ form }: { form: QuoteFormData }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="p-5 sm:p-6">
        <h3 className="font-bold text-primary">Coordonnées</h3>
        <dl className="mt-3 divide-y">
          <SummaryLine label="Nom" value={form.name} />
          <SummaryLine label="Téléphone" value={form.phone} />
          <SummaryLine label="WhatsApp" value={form.whatsapp} />
          <SummaryLine label="Email" value={form.email} />
        </dl>
      </Card>
      <Card className="p-5 sm:p-6">
        <h3 className="font-bold text-primary">Projet et localisation</h3>
        <dl className="mt-3 divide-y">
          <SummaryLine label="Type de bâtiment" value={form.buildingType} />
          <SummaryLine label="Besoin" value={form.need} />
          <SummaryLine label="Ville" value={form.city} />
          <SummaryLine label="Quartier / zone" value={form.area} />
          <SummaryLine label="Indication" value={form.addressHint} />
        </dl>
      </Card>
      <Card className="p-5 sm:p-6">
        <h3 className="font-bold text-primary">Besoin technique</h3>
        <dl className="mt-3 divide-y">
          <SummaryLine label="Caméras" value={form.cameraCount ? `Environ ${form.cameraCount}` : "À préciser"} />
          <SummaryLine label="Surface" value={form.surface} />
          <SummaryLine label="Zones à surveiller" value={form.zones.join(", ")} />
          <SummaryLine label="Surveillance nocturne" value={form.nightMonitoring} />
          <SummaryLine label="Accès smartphone" value={form.smartphoneAccess} />
          <SummaryLine label="Préférence de contact" value={form.contactPreference} />
        </dl>
      </Card>
      <Card className="p-5 sm:p-6">
        <h3 className="font-bold text-primary">Description</h3>
        <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-relaxed text-[#40536b]">{form.description.trim() || "Aucune description fournie."}</p>
      </Card>
    </div>
  );
}

export function QuoteRequest() {
  const [phase, setPhase] = useState<Phase>("form");
  const [form, setForm] = useState<QuoteFormData>({ ...emptyQuoteForm, zones: [] });
  const [errors, setErrors] = useState<QuoteValidationErrors>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [serviceError, setServiceError] = useState("");
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const phaseHeadingRef = useRef<HTMLHeadingElement>(null);
  const shouldFocusErrors = useRef(false);

  useEffect(() => {
    if (shouldFocusErrors.current && Object.keys(errors).length) {
      errorSummaryRef.current?.focus();
      shouldFocusErrors.current = false;
    }
  }, [errors]);

  useEffect(() => {
    if (phase !== "form") phaseHeadingRef.current?.focus();
  }, [phase]);

  function updateField<K extends keyof QuoteFormData>(key: K, value: QuoteFormData[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[key];
      delete next.form;
      return next;
    });
    setServiceError("");
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateQuote(form);
    setErrors(nextErrors);
    setAttemptedSubmit(true);
    if (Object.keys(nextErrors).length) {
      shouldFocusErrors.current = true;
      return;
    }
    setPhase("review");
  }

  async function prepareQuote() {
    setServiceError("");
    try {
      const prepared = await quoteService.submitQuote(form);
      if (prepared.status === "prepared-for-whatsapp") setPhase("ready");
    } catch {
      setServiceError("La demande n’a pas pu être préparée. Vérifiez les informations et réessayez.");
    }
  }

  const whatsappUrl = phase === "ready" ? getWhatsAppUrl(createQuoteWhatsAppMessage(form)) : null;
  const fieldErrorProps = (key: keyof QuoteFormData) => ({
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  function toggleZone(zone: QuoteZone) {
    updateField("zones", form.zones.includes(zone)
      ? form.zones.filter((current) => current !== zone)
      : [...form.zones, zone]);
  }

  return (
    <div className="bg-[linear-gradient(180deg,#f2f6fb_0%,#f7f9fc_34rem)]">
      <section className="px-4 pb-8 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-[1200px]">
          <Badge variant="accent" className="border-0">Demande de devis · vidéosurveillance</Badge>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl">Parlons de votre projet de vidéosurveillance.</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">Décrivez-nous votre besoin. Ces informations nous permettront de mieux comprendre votre projet et de vous orienter vers une solution adaptée.</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#3b526f]">
            {["Analyse de votre besoin", "Solution adaptée à votre environnement", "Installation et maintenance"].map((item) => <span key={item} className="inline-flex items-center gap-2"><Check aria-hidden="true" className="size-4 text-accent" />{item}</span>)}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24" aria-label="Demande de devis">
        <div className="mx-auto grid max-w-[1200px] items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8">
          {phase === "form" && (
            <form noValidate onSubmit={handleFormSubmit} className="space-y-5">
              {attemptedSubmit && Object.keys(errors).length > 0 && (
                <div ref={errorSummaryRef} tabIndex={-1} role="alert" aria-live="assertive" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900 outline-none">
                  <p className="font-bold">Quelques informations sont à vérifier :</p>
                  <ul className="mt-2 list-inside list-disc space-y-1">{Object.values(errors).filter(Boolean).map((message) => <li key={message}>{message}</li>)}</ul>
                </div>
              )}

              <Card className="p-5 sm:p-7">
                <div className="mb-5 flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#edf3fc] text-accent">01</span><div><h2 className="text-lg font-bold text-primary">Coordonnées</h2><p className="mt-1 text-sm text-muted-foreground">Comment pouvons-nous vous joindre ?</p></div></div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><FieldLabel htmlFor="quote-name" required>Nom complet</FieldLabel><Input id="quote-name" autoComplete="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} {...fieldErrorProps("name")} className="mt-2"/><FieldError id="name-error" message={errors.name}/></div>
                  <div><FieldLabel htmlFor="quote-phone" required>Téléphone</FieldLabel><Input id="quote-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Ex. +223 …" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} {...fieldErrorProps("phone")} className="mt-2"/><FieldError id="phone-error" message={errors.phone}/></div>
                  <div><FieldLabel htmlFor="quote-whatsapp" required>WhatsApp</FieldLabel><Input id="quote-whatsapp" type="tel" inputMode="tel" placeholder="Numéro avec indicatif pays" value={form.whatsapp} onChange={(event) => updateField("whatsapp", event.target.value)} {...fieldErrorProps("whatsapp")} className="mt-2"/><FieldError id="whatsapp-error" message={errors.whatsapp}/></div>
                  <div><FieldLabel htmlFor="quote-email">Email <span className="font-normal text-muted-foreground">(optionnel)</span></FieldLabel><Input id="quote-email" type="email" autoComplete="email" placeholder="vous@exemple.com" value={form.email} onChange={(event) => updateField("email", event.target.value)} {...fieldErrorProps("email")} className="mt-2"/><FieldError id="email-error" message={errors.email}/></div>
                </div>
              </Card>

              <Card className="p-5 sm:p-7">
                <div className="mb-5 flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#edf3fc] text-accent">02</span><div><h2 className="text-lg font-bold text-primary">Localisation</h2><p className="mt-1 text-sm text-muted-foreground">La ville et le quartier suffisent pour commencer.</p></div></div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><FieldLabel htmlFor="quote-city" required>Ville</FieldLabel><Input id="quote-city" autoComplete="address-level2" value={form.city} onChange={(event) => updateField("city", event.target.value)} {...fieldErrorProps("city")} className="mt-2"/><FieldError id="city-error" message={errors.city}/></div>
                  <div><FieldLabel htmlFor="quote-area" required>Quartier / zone</FieldLabel><Input id="quote-area" placeholder="Ex. ACI 2000" value={form.area} onChange={(event) => updateField("area", event.target.value)} {...fieldErrorProps("area")} className="mt-2"/><FieldError id="area-error" message={errors.area}/></div>
                  <div className="sm:col-span-2"><FieldLabel htmlFor="quote-addressHint">Adresse ou indication complémentaire <span className="font-normal text-muted-foreground">(optionnel)</span></FieldLabel><Input id="quote-addressHint" autoComplete="street-address" placeholder="Repère utile (facultatif)" value={form.addressHint} onChange={(event) => updateField("addressHint", event.target.value)} className="mt-2"/></div>
                </div>
              </Card>

              <Card className="p-5 sm:p-7">
                <div className="mb-5 flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#edf3fc] text-accent">03</span><div><h2 className="text-lg font-bold text-primary">Type de projet</h2><p className="mt-1 text-sm text-muted-foreground">Quel type de bâtiment souhaitez-vous sécuriser ?</p></div></div>
                <div>
                  <span id="building-type-label" className="text-sm font-semibold text-primary">Type de bâtiment <span aria-hidden="true" className="ml-1 text-red-600">*</span></span>
                  <Select value={form.buildingType} onValueChange={(value) => updateField("buildingType", value as QuoteFormData["buildingType"])}>
                    <SelectTrigger id="quote-buildingType" aria-labelledby="building-type-label" aria-invalid={Boolean(errors.buildingType)} aria-describedby={errors.buildingType ? "buildingType-error" : undefined} className="mt-2 h-12"><SelectValue placeholder="Sélectionnez un type de bâtiment"/></SelectTrigger>
                    <SelectContent>{quoteBuildingTypes.map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}</SelectContent>
                  </Select>
                  <FieldError id="buildingType-error" message={errors.buildingType}/>
                </div>
              </Card>

              <Card className="p-5 sm:p-7">
                <div className="mb-5 flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#edf3fc] text-accent">04</span><div><h2 className="text-lg font-bold text-primary">Votre besoin</h2><p className="mt-1 text-sm text-muted-foreground">Qu’aimeriez-vous faire ?</p></div></div>
                <div>
                  <span id="need-label" className="text-sm font-semibold text-primary">Quel est votre besoin ? <span aria-hidden="true" className="ml-1 text-red-600">*</span></span>
                  <Select value={form.need} onValueChange={(value) => updateField("need", value as QuoteFormData["need"])}>
                    <SelectTrigger id="quote-need" aria-labelledby="need-label" aria-invalid={Boolean(errors.need)} aria-describedby={errors.need ? "need-error" : undefined} className="mt-2 h-12"><SelectValue placeholder="Sélectionnez votre besoin"/></SelectTrigger>
                    <SelectContent>{quoteNeeds.map((need) => <SelectItem key={need} value={need}>{need}</SelectItem>)}</SelectContent>
                  </Select>
                  <FieldError id="need-error" message={errors.need}/>
                </div>
              </Card>

              <Card className="p-5 sm:p-7">
                <div className="mb-5 flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#edf3fc] text-accent">05</span><div><h2 className="text-lg font-bold text-primary">Informations techniques <span className="font-normal text-muted-foreground">(optionnel)</span></h2><p className="mt-1 text-sm text-muted-foreground">Même une estimation ou « je ne sais pas » nous aide à préparer l’échange.</p></div></div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><FieldLabel htmlFor="quote-cameraCount">Nombre approximatif de caméras</FieldLabel><Input id="quote-cameraCount" type="number" min="1" inputMode="numeric" placeholder="Ex. 4" value={form.cameraCount} onChange={(event) => updateField("cameraCount", event.target.value)} {...fieldErrorProps("cameraCount")} className="mt-2"/><FieldError id="cameraCount-error" message={errors.cameraCount}/><p className="mt-1.5 text-xs text-muted-foreground">Laissez vide si vous ne savez pas.</p></div>
                  <div>
                    <span id="surface-label" className="text-sm font-semibold text-primary">Surface approximative</span>
                    <Select value={form.surface} onValueChange={(value) => updateField("surface", value as QuoteFormData["surface"])}>
                      <SelectTrigger id="quote-surface" aria-labelledby="surface-label" className="mt-2 h-12"><SelectValue placeholder="À préciser"/></SelectTrigger>
                      <SelectContent>{quoteSurfaces.map((surface) => <SelectItem key={surface} value={surface}>{surface}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <fieldset className="sm:col-span-2">
                    <legend className="mb-2 text-sm font-semibold text-primary">Zones à surveiller</legend>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {quoteZones.map((zone) => {
                        const checked = form.zones.includes(zone);
                        return <label key={zone} className={`flex min-h-11 cursor-pointer items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm transition-colors hover:border-accent/50 ${checked ? "border-accent bg-[#f2f7ff] text-primary" : "bg-white text-[#40536b]"}`}><input type="checkbox" checked={checked} onChange={() => toggleZone(zone)} className="size-4 accent-[#1463df]"/>{zone}</label>;
                      })}
                    </div>
                  </fieldset>
                  <div>
                    <span id="night-label" className="text-sm font-semibold text-primary">Besoin de surveillance nocturne</span>
                    <Select value={form.nightMonitoring} onValueChange={(value) => updateField("nightMonitoring", value as QuoteFormData["nightMonitoring"])}>
                      <SelectTrigger id="quote-night" aria-labelledby="night-label" className="mt-2 h-12"><SelectValue placeholder="À préciser"/></SelectTrigger>
                      <SelectContent>{["Oui", "Non", "À préciser"].map((value) => <SelectItem key={value} value={value}>{value}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div>
                    <span id="smartphone-label" className="text-sm font-semibold text-primary">Accès depuis smartphone</span>
                    <Select value={form.smartphoneAccess} onValueChange={(value) => updateField("smartphoneAccess", value as QuoteFormData["smartphoneAccess"])}>
                      <SelectTrigger id="quote-smartphone" aria-labelledby="smartphone-label" className="mt-2 h-12"><SelectValue placeholder="À préciser"/></SelectTrigger>
                      <SelectContent>{["Oui", "Non", "À préciser"].map((value) => <SelectItem key={value} value={value}>{value}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                </div>
                <p className="mt-5 flex flex-wrap items-center gap-x-1 text-sm text-muted-foreground"><span>Vous ne savez pas quoi choisir ?</span><Link href="/diagnostic" className="inline-flex min-h-10 items-center gap-1 font-semibold text-accent underline-offset-4 hover:underline">Faire le diagnostic CCTV <ArrowRight aria-hidden="true" className="size-4"/></Link></p>
              </Card>

              <Card className="p-5 sm:p-7">
                <div className="mb-5 flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#edf3fc] text-accent">06</span><div><h2 className="text-lg font-bold text-primary">Description du projet</h2><p className="mt-1 text-sm text-muted-foreground">Quelques détails nous aideront à comprendre le contexte.</p></div></div>
                <FieldLabel htmlFor="quote-description">Décrivez votre projet ou votre problème <span className="font-normal text-muted-foreground">(optionnel)</span></FieldLabel>
                <Textarea id="quote-description" rows={5} maxLength={2000} placeholder="Exemple : je souhaite installer des caméras dans une boutique avec une surveillance de l’entrée, de la caisse et de l’extérieur." value={form.description} onChange={(event) => updateField("description", event.target.value)} className="mt-2"/>
                <p className="mt-1.5 text-right text-xs text-muted-foreground">{form.description.length} / 2 000</p>
              </Card>

              <Card className="p-5 sm:p-7">
                <div className="mb-4 flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#edf3fc] text-accent">07</span><div><h2 className="text-lg font-bold text-primary">Photos du site <span className="font-normal text-muted-foreground">(facultatif)</span></h2><p className="mt-1 text-sm text-muted-foreground">Quelques photos pourront aider à comprendre les zones concernées.</p></div></div>
                <label htmlFor="quote-photos" className="flex min-h-20 cursor-not-allowed items-center gap-4 rounded-xl border border-dashed bg-[#f8fafc] px-4 py-4 opacity-75 sm:px-5"><span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-muted-foreground"><FileImage aria-hidden="true" className="size-5"/></span><span><span className="block text-sm font-semibold text-primary">Sélection de photos temporairement indisponible</span><span className="mt-1 block text-xs leading-relaxed text-muted-foreground">L’envoi d’images sera activé lorsqu’un service sécurisé de réception sera disponible.</span></span></label>
                <input id="quote-photos" type="file" accept="image/*" multiple disabled aria-describedby="quote-photos-help" className="sr-only"/>
                <p id="quote-photos-help" className="sr-only">Le téléversement de photos n’est pas activé actuellement.</p>
              </Card>

              <Card className="p-5 sm:p-7">
                <div className="mb-5 flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#edf3fc] text-accent">08</span><div><h2 className="text-lg font-bold text-primary">Préférence de contact</h2><p className="mt-1 text-sm text-muted-foreground">Comment préférez-vous être recontacté ?</p></div></div>
                <fieldset>
                  <legend className="sr-only">Choisissez votre préférence de contact</legend>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {(["WhatsApp", "Téléphone", "Email"] as const).map((choice: ContactPreference) => <label key={choice} className={`flex min-h-12 cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors hover:border-accent/50 ${form.contactPreference === choice ? "border-accent bg-[#f2f7ff] text-primary" : "bg-white text-[#40536b]"}`}><input type="radio" name="contactPreference" value={choice} checked={form.contactPreference === choice} onChange={() => updateField("contactPreference", choice)} className="size-4 accent-[#1463df]"/>{choice}</label>)}
                  </div>
                </fieldset>
              </Card>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button type="submit" size="lg" variant="accent" className="w-full sm:w-auto">Vérifier ma demande <ArrowRight aria-hidden="true"/></Button>
              </div>
            </form>
          )}

          {phase === "review" && (
            <section className="space-y-5 lg:col-span-2">
              <Card className="p-5 sm:p-7">
                <Badge variant="accent" className="border-0">Vérification</Badge>
                <h2 ref={phaseHeadingRef} tabIndex={-1} className="mt-3 text-2xl font-bold text-primary outline-none sm:text-3xl">Vérifier ma demande</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Relisez les informations avant de préparer le message. Vous pourrez encore les modifier ensuite.</p>
              </Card>
              <ReviewSummary form={form}/>
              {serviceError && <p role="alert" className="rounded-lg bg-red-50 p-4 text-sm font-medium text-red-800">{serviceError}</p>}
              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                <Button variant="outline" size="lg" onClick={() => setPhase("form")} className="w-full sm:w-auto"><ArrowLeft aria-hidden="true"/> Modifier ma demande</Button>
                <Button variant="accent" size="lg" onClick={prepareQuote} className="w-full sm:w-auto">Préparer le message WhatsApp <Send aria-hidden="true"/></Button>
              </div>
            </section>
          )}

          {phase === "ready" && (
            <section className="lg:col-span-2">
              <Card className="mx-auto max-w-3xl overflow-hidden">
                <div className="bg-primary px-6 py-8 text-white sm:px-10 sm:py-10">
                  <span className="flex size-12 items-center justify-center rounded-full bg-white/10 text-emerald-200"><CheckCircle2 aria-hidden="true" className="size-7"/></span>
                  <h2 ref={phaseHeadingRef} tabIndex={-1} className="mt-5 text-3xl font-bold outline-none sm:text-4xl">Votre demande a été préparée.</h2>
                  <p className="mt-3 max-w-xl leading-relaxed text-blue-100">Vous pouvez maintenant l’envoyer directement sur WhatsApp. Rien n’a encore été transmis.</p>
                </div>
                <div className="p-6 sm:p-10">
                  <ReviewSummary form={form}/>
                  <p className="mt-5 rounded-xl bg-[#f5f8fc] p-4 text-sm leading-relaxed text-muted-foreground">Le message sera prérempli avec le résumé de votre projet. Vous gardez la possibilité de le relire et de le modifier dans WhatsApp avant l’envoi.</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    {whatsappUrl ? <Button asChild size="lg" className="w-full bg-[#147d50] text-white hover:bg-[#106940] sm:w-auto"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true"/> Envoyer sur WhatsApp <ArrowRight aria-hidden="true"/></a></Button> : <p role="status" className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">Le numéro WhatsApp professionnel doit être renseigné dans la configuration du site pour activer cet envoi.</p>}
                    <Button variant="outline" size="lg" onClick={() => setPhase("form")} className="w-full sm:w-auto"><Pencil aria-hidden="true"/> Modifier ma demande</Button>
                    <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto"><Link href="/"><ArrowLeft aria-hidden="true"/> Retour à l’accueil</Link></Button>
                  </div>
                  {!whatsappUrl && <p className="mt-3 text-xs text-muted-foreground">Configurez siteConfig.whatsapp dans lib/site-config.ts avec l’indicatif du pays suivi du numéro.</p>}
                </div>
              </Card>
            </section>
          )}

          {phase === "form" && <aside className="order-last lg:order-none"><SummaryPanel form={form}/></aside>}
          {phase !== "form" && <aside className="hidden" aria-hidden="true"/>}
        </div>
      </section>
    </div>
  );
}
