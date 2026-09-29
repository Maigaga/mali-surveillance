export type ContactDraft = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactServiceResult = {
  status: "backend-not-configured";
  draft: ContactDraft;
};

export interface ContactService {
  submitContact(draft: ContactDraft): Promise<ContactServiceResult>;
}

/** Keeps a cleaned draft in the current page state; it does not send or persist it. */
export const contactService: ContactService = {
  async submitContact(draft) {
    return {
      status: "backend-not-configured",
      draft: {
        name: draft.name.trim(),
        phone: draft.phone.trim(),
        email: draft.email.trim(),
        subject: draft.subject.trim(),
        message: draft.message.trim(),
      },
    };
  },
};

export function createContactWhatsAppMessage(draft: ContactDraft): string {
  return [
    "Bonjour, je souhaite avoir des informations sur vos solutions de vidéosurveillance.",
    "",
    `Nom : ${draft.name}`,
    `Téléphone : ${draft.phone}`,
    ...(draft.email ? [`E-mail : ${draft.email}`] : []),
    `Sujet : ${draft.subject}`,
    "",
    `Message : ${draft.message}`,
  ].join("\n");
}
