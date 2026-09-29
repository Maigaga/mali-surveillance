"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactService,
  createContactWhatsAppMessage,
  type ContactDraft,
} from "@/lib/contact-service";
import { getWhatsAppUrl } from "@/lib/site-config";

type FieldName = keyof ContactDraft;
type ContactErrors = Partial<Record<FieldName, string>>;

const initialForm: ContactDraft = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

function validateContact(draft: ContactDraft): ContactErrors {
  const errors: ContactErrors = {};
  if (!draft.name.trim()) errors.name = "Veuillez indiquer votre nom.";

  const digits = draft.phone.replace(/\D/g, "");
  if (!draft.phone.trim()) {
    errors.phone = "Veuillez indiquer votre numéro de téléphone.";
  } else if (digits.length < 8 || !/^[0-9+().\s-]+$/.test(draft.phone)) {
    errors.phone = "Veuillez vérifier le format de votre numéro de téléphone.";
  }

  if (draft.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email.trim())) {
    errors.email = "Veuillez saisir une adresse e-mail valide.";
  }
  if (!draft.subject.trim()) errors.subject = "Veuillez indiquer le sujet de votre message.";
  if (!draft.message.trim()) errors.message = "Veuillez écrire votre message.";
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactDraft>(initialForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [preparedDraft, setPreparedDraft] = useState<ContactDraft | null>(null);
  const [isPreparing, setIsPreparing] = useState(false);
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (Object.keys(errors).length) errorSummaryRef.current?.focus();
  }, [errors]);

  useEffect(() => {
    if (preparedDraft) confirmationRef.current?.focus();
  }, [preparedDraft]);

  function updateField(field: FieldName, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setPreparedDraft(null);
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setIsPreparing(true);
    try {
      const result = await contactService.submitContact(form);
      if (result.status === "backend-not-configured") setPreparedDraft(result.draft);
    } finally {
      setIsPreparing(false);
    }
  }

  const whatsappHref = preparedDraft
    ? getWhatsAppUrl(createContactWhatsAppMessage(preparedDraft))
    : null;
  const fieldAttributes = (field: FieldName) => ({
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm sm:p-7 lg:p-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Formulaire de contact</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary">Décrivez votre besoin</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Le formulaire prépare un brouillon dans cette page. Il ne transmet ni n’enregistre votre message.
        </p>
      </div>

      {Object.keys(errors).length > 0 && (
        <div ref={errorSummaryRef} tabIndex={-1} role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 outline-none focus-visible:ring-2 focus-visible:ring-red-600">
          <p className="font-semibold">Vérifiez les champs suivants :</p>
          <ul className="mt-2 list-inside list-disc">
            {Object.values(errors).map((error) => <li key={error}>{error}</li>)}
          </ul>
        </div>
      )}

      <form className="mt-6 space-y-5" noValidate onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="text-sm font-semibold text-primary">Nom <span aria-hidden="true" className="text-red-600">*</span></label>
            <Input id="contact-name" name="name" autoComplete="name" required value={form.name} onChange={(event) => updateField("name", event.target.value)} className="mt-2" {...fieldAttributes("name")} />
            {errors.name && <p id="name-error" className="mt-1.5 text-sm font-medium text-red-700">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="contact-phone" className="text-sm font-semibold text-primary">Téléphone <span aria-hidden="true" className="text-red-600">*</span></label>
            <Input id="contact-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className="mt-2" {...fieldAttributes("phone")} />
            {errors.phone && <p id="phone-error" className="mt-1.5 text-sm font-medium text-red-700">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold text-primary">E-mail <span className="font-normal text-muted-foreground">(facultatif)</span></label>
          <Input id="contact-email" name="email" type="email" autoComplete="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className="mt-2" {...fieldAttributes("email")} />
          {errors.email && <p id="email-error" className="mt-1.5 text-sm font-medium text-red-700">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="contact-subject" className="text-sm font-semibold text-primary">Sujet <span aria-hidden="true" className="text-red-600">*</span></label>
          <Input id="contact-subject" name="subject" required value={form.subject} onChange={(event) => updateField("subject", event.target.value)} className="mt-2" {...fieldAttributes("subject")} />
          {errors.subject && <p id="subject-error" className="mt-1.5 text-sm font-medium text-red-700">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="contact-message" className="text-sm font-semibold text-primary">Message <span aria-hidden="true" className="text-red-600">*</span></label>
          <Textarea id="contact-message" name="message" required rows={5} value={form.message} onChange={(event) => updateField("message", event.target.value)} className="mt-2" {...fieldAttributes("message")} />
          {errors.message && <p id="message-error" className="mt-1.5 text-sm font-medium text-red-700">{errors.message}</p>}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" variant="accent" size="lg" disabled={isPreparing}>
            {isPreparing ? "Préparation…" : "Préparer le message"}
            <Send aria-hidden="true" />
          </Button>
          <p className="text-xs leading-relaxed text-muted-foreground">Aucun message ne sera envoyé sans votre action explicite.</p>
        </div>
      </form>

      {preparedDraft && (
        <div ref={confirmationRef} tabIndex={-1} role="status" aria-live="polite" className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4 outline-none focus-visible:ring-2 focus-visible:ring-accent sm:p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
            <div>
              <h3 className="font-semibold text-primary">Votre message a été préparé, mais pas envoyé.</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                La réception automatique n’est pas encore activée. Vous pouvez le transmettre en ouvrant WhatsApp ci-dessous, si le numéro professionnel est configuré.
              </p>
              {whatsappHref ? (
                <Button asChild variant="accent" className="mt-4">
                  <a href={whatsappHref} target="_blank" rel="noreferrer">Écrire sur WhatsApp <ArrowUpRight aria-hidden="true" /></a>
                </Button>
              ) : (
                <p className="mt-3 text-sm font-medium text-primary">Le message reste sur cette page : aucun canal direct n’est configuré pour le transmettre.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
