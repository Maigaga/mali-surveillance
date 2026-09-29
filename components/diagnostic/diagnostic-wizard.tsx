"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  HardDrive,
  MapPin,
  Network,
  RotateCcw,
  ScanEye,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createWhatsAppDiagnosticMessage, generateDiagnosticResult } from "@/lib/diagnostic-engine";
import { getWhatsAppUrl } from "@/lib/site-config";
import {
  buildingTypes,
  emptyDiagnosticAnswers,
  emptyDiagnosticContact,
  entryCounts,
  surfaceRanges,
  yesNoUnsure,
  zoneTypes,
  type BuildingType,
  type DiagnosticAnswers,
  type DiagnosticContact,
  type EntryCount,
  type SurfaceRange,
  type YesNoUnsure as YesNoUnsureType,
  type ZoneType,
} from "@/types/diagnostic";

type Phase = "intro" | "questions" | "contact" | "result";

const steps = [
  { title: "Quel type de bâtiment souhaitez-vous sécuriser ?", hint: "Choisissez le type de site qui se rapproche le plus de votre projet." },
  { title: "Quelle est la superficie approximative ?", hint: "Une estimation suffit pour obtenir une première orientation." },
  { title: "Combien d’entrées souhaitez-vous surveiller ?", hint: "Pensez aux accès principaux, secondaires et de service." },
  { title: "Quelles zones souhaitez-vous surveiller ?", hint: "Vous pouvez sélectionner plusieurs zones." },
  { title: "Avez-vous besoin d’une surveillance pendant la nuit ?", hint: "La lumière disponible et l’environnement seront à vérifier sur place." },
  { title: "Souhaitez-vous consulter vos caméras depuis votre téléphone ?", hint: "L’accès distant dépend de la configuration réseau et de la connectivité disponible." },
  { title: "Disposez-vous d’une connexion Internet sur le site ?", hint: "Une connexion locale et Internet ne sont pas nécessaires aux mêmes fonctions." },
] as const;

const choiceStyle = "group flex min-h-[58px] cursor-pointer items-center gap-3 rounded-xl border bg-white px-4 py-3 text-left transition duration-150 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-[#f8fbff] focus-within:ring-2 focus-within:ring-accent/30 motion-reduce:transform-none sm:min-h-[64px]";
const selectedStyle = "border-accent bg-[#f2f7ff] shadow-[0_0_0_1px_rgba(20,99,223,0.22)]";

function ChoiceIndicator({ checked, multiple = false }: { checked: boolean; multiple?: boolean }) {
  return (
    <span className={`flex size-5 shrink-0 items-center justify-center border transition-colors ${multiple ? "rounded-md" : "rounded-full"} ${checked ? "border-accent bg-accent text-white" : "border-slate-300 bg-white text-transparent group-hover:border-accent/70"}`}>
      {checked && <Check aria-hidden="true" className="size-3.5" />}
    </span>
  );
}

function SingleChoice<T extends string>({
  name,
  options,
  value,
  onChange,
  columns = 2,
}: {
  name: string;
  options: readonly T[];
  value: T | null;
  onChange: (value: T) => void;
  columns?: 1 | 2 | 3;
}) {
  const gridClass = columns === 1 ? "grid-cols-1" : columns === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2";
  return (
    <div role="radiogroup" aria-label={steps[name === "building" ? 0 : name === "surface" ? 1 : name === "entrances" ? 2 : name === "night" ? 4 : name === "remote" ? 5 : 6].title} className={`grid ${gridClass} gap-3`}>
      {options.map((option, index) => {
        const checked = value === option;
        const id = `${name}-choice-${index}`;
        return (
          <label key={option} htmlFor={id} className={`${choiceStyle} ${checked ? selectedStyle : ""}`}>
            <input id={id} type="radio" name={name} value={option} checked={checked} onChange={() => onChange(option)} className="peer sr-only" />
            <ChoiceIndicator checked={checked} />
            <span className="text-sm font-semibold text-primary sm:text-base">{option}</span>
          </label>
        );
      })}
    </div>
  );
}

function ResultCard({ icon: Icon, label, value, emphasis = false }: { icon: typeof ScanEye; label: string; value: string; emphasis?: boolean }) {
  return (
    <article className={`rounded-2xl border p-5 sm:p-6 ${emphasis ? "border-blue-200 bg-[#f2f7ff]" : "bg-white"}`}>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-muted-foreground">
        <Icon aria-hidden="true" className="size-4 text-accent" />{label}
      </div>
      <p className={`mt-3 leading-relaxed ${emphasis ? "text-lg font-bold text-primary" : "text-sm text-[#40536b]"}`}>{value}</p>
    </article>
  );
}

export function DiagnosticWizard() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<DiagnosticAnswers>(emptyDiagnosticAnswers);
  const [contact, setContact] = useState<DiagnosticContact>(emptyDiagnosticContact);
  const [sameNumber, setSameNumber] = useState(false);
  const [error, setError] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (phase !== "intro") headingRef.current?.focus();
  }, [phase, step]);

  const progress = phase === "result" || phase === "contact" ? 100 : ((step + 1) / 8) * 100;
  const result = phase === "result" ? generateDiagnosticResult(answers) : null;
  const whatsappUrl = result
    ? getWhatsAppUrl(createWhatsAppDiagnosticMessage(answers, result, contact))
    : null;

  function start() {
    setError("");
    setPhase("questions");
    setStep(0);
  }

  function updateAnswer<K extends keyof DiagnosticAnswers>(key: K, value: DiagnosticAnswers[K]) {
    setAnswers((current) => ({ ...current, [key]: value }));
    setError("");
  }

  function goNext() {
    const answered = step === 0 ? answers.buildingType
      : step === 1 ? answers.surface
        : step === 2 ? answers.entrances
          : step === 3 ? answers.zones.length > 0
            : step === 4 ? answers.nightMonitoring
              : step === 5 ? answers.remoteViewing
                : answers.internet;

    if (!answered) {
      setError(step === 3 ? "Sélectionnez au moins une zone pour continuer." : "Choisissez une réponse pour continuer.");
      return;
    }
    setError("");
    if (step === steps.length - 1) setPhase("contact");
    else setStep((current) => current + 1);
  }

  function goPrevious() {
    setError("");
    if (phase === "contact") {
      setPhase("questions");
      setStep(steps.length - 1);
    } else if (phase === "questions" && step > 0) {
      setStep((current) => current - 1);
    } else {
      setPhase("intro");
    }
  }

  function updateContact<K extends keyof DiagnosticContact>(key: K, value: DiagnosticContact[K]) {
    setContact((current) => ({ ...current, [key]: value }));
    setError("");
  }

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const phoneLength = contact.phone.replace(/\D/g, "").length;
    const whatsappLength = contact.whatsapp.replace(/\D/g, "").length;
    if (phoneLength < 8 || phoneLength > 15 || whatsappLength < 8 || whatsappLength > 15) {
      setError("Vérifiez les numéros : indiquez entre 8 et 15 chiffres, avec l’indicatif du pays si nécessaire.");
      return;
    }
    setError("");
    setPhase("result");
  }

  function restart() {
    setAnswers({ ...emptyDiagnosticAnswers, zones: [] });
    setContact({ ...emptyDiagnosticContact });
    setSameNumber(false);
    setStep(0);
    setError("");
    setPhase("intro");
  }

  function toggleZone(zone: ZoneType) {
    const nextZones = answers.zones.includes(zone)
      ? answers.zones.filter((current) => current !== zone)
      : [...answers.zones, zone];
    updateAnswer("zones", nextZones);
  }

  return (
    <div className="bg-[linear-gradient(180deg,#f2f6fb_0%,#f7f9fc_38rem)]">
      <section className="px-4 pb-8 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-[1040px]">
          <Badge variant="accent" className="border-0">Diagnostic CCTV · première orientation</Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-primary sm:text-5xl lg:text-6xl">Quel système de vidéosurveillance vous faut-il ?</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Répondez à quelques questions et obtenez une première orientation adaptée à votre environnement.</p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24" aria-label="Assistant de diagnostic CCTV">
        <div className="mx-auto max-w-[1040px]">
          {phase === "intro" && (
            <div className="grid gap-8 overflow-hidden rounded-[2rem] border bg-white p-6 shadow-sm sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:p-12">
              <div>
                <p className="text-lg font-bold text-primary">Une première idée claire, avant l’étude du site.</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">Le parcours prend quelques minutes. Vos réponses servent à composer une recommandation indicative, sans remplacer une visite technique.</p>
                <Button size="lg" variant="accent" onClick={start} className="mt-7 w-full sm:w-auto">Commencer le diagnostic <ArrowRight aria-hidden="true" /></Button>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { icon: Clock3, title: "Quelques étapes", text: "Un parcours guidé et simple." },
                  { icon: ShieldCheck, title: "Sans engagement", text: "Une première orientation uniquement." },
                  { icon: Smartphone, title: "Pensé mobile", text: "Des choix faciles à sélectionner." },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-center gap-3 rounded-xl bg-[#f5f8fc] p-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-accent"><Icon aria-hidden="true" className="size-5" /></span>
                    <div><p className="text-sm font-semibold text-primary">{title}</p><p className="mt-0.5 text-xs text-muted-foreground">{text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {phase !== "intro" && phase !== "result" && (
            <div className="overflow-hidden rounded-[2rem] border bg-white shadow-sm">
              <div className="border-b px-5 py-5 sm:px-9 sm:py-6">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-semibold text-primary">Étape {phase === "contact" ? 8 : step + 1} / 8</span>
                  <span className="text-muted-foreground">{phase === "contact" ? "Votre recommandation" : "Votre projet"}</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e8edf4]" role="progressbar" aria-label="Progression du diagnostic" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
                  <div className="h-full rounded-full bg-accent transition-[width] duration-300 motion-reduce:transition-none" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {phase === "questions" && (
                <div className="p-5 sm:p-9 lg:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Votre environnement</p>
                  <h2 ref={headingRef} tabIndex={-1} className="mt-2 max-w-3xl text-2xl font-bold leading-tight text-primary outline-none sm:text-3xl">{steps[step].title}</h2>
                  <p className="mt-2 mb-6 text-sm leading-relaxed text-muted-foreground">{steps[step].hint}</p>

                  {step === 0 && <SingleChoice name="building" options={buildingTypes} value={answers.buildingType} onChange={(value) => updateAnswer("buildingType", value as BuildingType)} columns={3} />}
                  {step === 1 && <SingleChoice name="surface" options={surfaceRanges} value={answers.surface} onChange={(value) => updateAnswer("surface", value as SurfaceRange)} />}
                  {step === 2 && <SingleChoice name="entrances" options={entryCounts} value={answers.entrances} onChange={(value) => updateAnswer("entrances", value as EntryCount)} />}
                  {step === 3 && (
                    <fieldset>
                      <legend className="sr-only">Choisissez toutes les zones à surveiller</legend>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {zoneTypes.map((zone, index) => {
                          const checked = answers.zones.includes(zone);
                          const id = `zone-${index}`;
                          return (
                            <label key={zone} htmlFor={id} className={`${choiceStyle} ${checked ? selectedStyle : ""}`}>
                              <input id={id} type="checkbox" checked={checked} onChange={() => toggleZone(zone)} className="peer sr-only" />
                              <ChoiceIndicator checked={checked} multiple />
                              <span className="text-sm font-semibold text-primary">{zone}</span>
                            </label>
                          );
                        })}
                      </div>
                      <p className="mt-3 text-xs text-muted-foreground">{answers.zones.length ? `${answers.zones.length} zone${answers.zones.length > 1 ? "s" : ""} sélectionnée${answers.zones.length > 1 ? "s" : ""}` : "Sélectionnez au moins une zone."}</p>
                    </fieldset>
                  )}
                  {step === 4 && <SingleChoice name="night" options={yesNoUnsure} value={answers.nightMonitoring} onChange={(value) => updateAnswer("nightMonitoring", value as YesNoUnsureType)} />}
                  {step === 5 && (
                    <>
                      <SingleChoice name="remote" options={yesNoUnsure} value={answers.remoteViewing} onChange={(value) => updateAnswer("remoteViewing", value as YesNoUnsureType)} />
                      {answers.remoteViewing === "Oui" && <p className="mt-4 flex gap-2 rounded-xl bg-[#edf4ff] p-4 text-sm leading-relaxed text-[#345273]"><CircleHelp aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />La consultation sur téléphone peut nécessiter une configuration réseau adaptée et une connexion Internet disponible sur le site.</p>}
                    </>
                  )}
                  {step === 6 && <SingleChoice name="internet" options={yesNoUnsure} value={answers.internet} onChange={(value) => updateAnswer("internet", value as YesNoUnsureType)} />}

                  {error && <p role="alert" className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">{error}</p>}
                  <div className="mt-8 flex flex-col-reverse gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <Button variant="ghost" onClick={goPrevious} className="w-full sm:w-auto"><ArrowLeft aria-hidden="true" /> Précédent</Button>
                    <Button variant="accent" size="lg" onClick={goNext} className="w-full sm:w-auto">{step === steps.length - 1 ? "Continuer vers mes coordonnées" : "Suivant"} <ArrowRight aria-hidden="true" /></Button>
                  </div>
                </div>
              )}

              {phase === "contact" && (
                <form onSubmit={submitContact} className="p-5 sm:p-9 lg:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Dernière étape</p>
                  <h2 ref={headingRef} tabIndex={-1} className="mt-2 text-2xl font-bold text-primary outline-none sm:text-3xl">Recevez votre recommandation</h2>
                  <p className="mt-2 mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">Indiquez comment vous joindre afin de préparer votre orientation et, si vous le souhaitez, la demande à transmettre sur WhatsApp.</p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="text-sm font-semibold text-primary" htmlFor="diagnostic-name">Nom <span aria-hidden="true" className="text-red-600">*</span><Input id="diagnostic-name" autoComplete="name" required minLength={2} value={contact.name} onChange={(event) => updateContact("name", event.target.value)} className="mt-2" /></label>
                    <label className="text-sm font-semibold text-primary" htmlFor="diagnostic-phone">Téléphone <span aria-hidden="true" className="text-red-600">*</span><Input id="diagnostic-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Ex. +223 …" pattern="[0-9+(). -]{8,24}" required value={contact.phone} onChange={(event) => { updateContact("phone", event.target.value); if (sameNumber) updateContact("whatsapp", event.target.value); }} className="mt-2" /></label>
                    <div className="sm:col-span-2">
                      <label className="text-sm font-semibold text-primary" htmlFor="diagnostic-whatsapp">WhatsApp <span aria-hidden="true" className="text-red-600">*</span></label>
                      <Input id="diagnostic-whatsapp" type="tel" inputMode="tel" placeholder="Numéro WhatsApp avec indicatif" pattern="[0-9+(). -]{8,24}" required value={contact.whatsapp} onChange={(event) => updateContact("whatsapp", event.target.value)} className="mt-2" />
                      <label className="mt-2 inline-flex min-h-10 cursor-pointer items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" checked={sameNumber} onChange={(event) => { setSameNumber(event.target.checked); if (event.target.checked) updateContact("whatsapp", contact.phone); }} className="size-4 accent-[#1463df]" />Utiliser le même numéro que pour le téléphone</label>
                    </div>
                    <label className="text-sm font-semibold text-primary" htmlFor="diagnostic-location">Localisation <span aria-hidden="true" className="text-red-600">*</span><Input id="diagnostic-location" autoComplete="address-level2" placeholder="Ville ou quartier" required minLength={2} value={contact.location} onChange={(event) => updateContact("location", event.target.value)} className="mt-2" /></label>
                    <label className="text-sm font-semibold text-primary" htmlFor="diagnostic-email">Email <span className="font-normal text-muted-foreground">(optionnel)</span><Input id="diagnostic-email" type="email" autoComplete="email" placeholder="vous@exemple.com" value={contact.email} onChange={(event) => updateContact("email", event.target.value)} className="mt-2" /></label>
                  </div>
                  <p className="mt-5 rounded-xl bg-[#f5f8fc] p-4 text-xs leading-relaxed text-muted-foreground">Vos réponses et coordonnées restent dans cette session et ne sont pas enregistrées par le site. Elles ne seront ajoutées au message WhatsApp préparé que si vous choisissez ce bouton sur l’écran de résultat.</p>
                  {error && <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800">{error}</p>}
                  <div className="mt-8 flex flex-col-reverse gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="button" variant="ghost" onClick={goPrevious} className="w-full sm:w-auto"><ArrowLeft aria-hidden="true" /> Précédent</Button>
                    <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">Voir ma recommandation <ArrowRight aria-hidden="true" /></Button>
                  </div>
                </form>
              )}
            </div>
          )}

          {phase === "result" && result && (
            <div className="overflow-hidden rounded-[2rem] border bg-white shadow-sm">
              <div className="bg-primary px-5 py-8 text-white sm:px-9 sm:py-10 lg:px-10">
                <Badge className="border-white/20 bg-white/10 text-blue-100">Votre première orientation</Badge>
                <h2 ref={headingRef} tabIndex={-1} className="mt-4 text-3xl font-bold outline-none sm:text-4xl">Votre première recommandation</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-blue-100">Une synthèse indicative basée sur vos réponses, à confirmer selon les caractéristiques réelles du site.</p>
              </div>
              <div className="p-5 sm:p-9 lg:p-10">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <ResultCard icon={ScanEye} label="Surveillance" value={result.cameraCount} emphasis />
                  <ResultCard icon={ShieldCheck} label="Caméras" value={result.cameraTypes} />
                  <ResultCard icon={HardDrive} label="Enregistrement" value={result.recorder} />
                  <ResultCard icon={HardDrive} label="Stockage" value={result.storage} />
                  <ResultCard icon={Smartphone} label="Accès à distance" value={result.remoteAccess} />
                  <ResultCard icon={Network} label="Réseau" value={result.network} />
                  <ResultCard icon={Zap} label="Alimentation de secours" value={result.backupPower} />
                </div>

                {result.siteStudy && <p className="mt-5 flex gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950"><MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />Une étude du site est recommandée pour préciser le nombre et le positionnement des caméras.</p>}
                <p className="mt-5 flex gap-2 rounded-xl bg-[#f2f6fb] p-4 text-sm leading-relaxed text-[#43546a]"><CircleHelp aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />{result.caveat}</p>

                <div className="mt-8 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:flex-wrap">
                  <Button asChild variant="accent" size="lg" className="w-full sm:w-auto"><Link href="/devis">Demander un devis <ChevronRight aria-hidden="true" /></Link></Button>
                  {whatsappUrl ? (
                    <Button asChild variant="outline" size="lg" className="w-full border-[#16834f]/30 text-[#11683e] hover:bg-[#eef9f3] sm:w-auto"><a href={whatsappUrl} target="_blank" rel="noreferrer">Recevoir sur WhatsApp <ChevronRight aria-hidden="true" /></a></Button>
                  ) : (
                    <span className="inline-flex min-h-12 items-center rounded-lg border px-4 text-sm text-muted-foreground" title="Configurez le numéro WhatsApp de l’entreprise dans lib/site-config.ts">WhatsApp à configurer dans les coordonnées du site</span>
                  )}
                  <Button variant="ghost" size="lg" onClick={() => { setPhase("questions"); setStep(0); }} className="w-full sm:w-auto"><ArrowLeft aria-hidden="true" /> Modifier mes réponses</Button>
                  <Button variant="ghost" size="lg" onClick={restart} className="w-full sm:w-auto"><RotateCcw aria-hidden="true" /> Recommencer</Button>
                </div>
                {!whatsappUrl && <p className="mt-3 text-xs text-muted-foreground">Ajoutez le numéro WhatsApp professionnel dans la configuration du site pour activer le lien de partage.</p>}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
