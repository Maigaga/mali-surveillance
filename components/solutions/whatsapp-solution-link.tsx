import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site-config";

export function WhatsAppSolutionLink({ message }: { message: string }) {
  const href = getWhatsAppUrl(message);
  if (!href) {
    return <div className="max-w-xs"><span aria-disabled="true" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-5 text-sm font-semibold text-white/75"><MessageCircle aria-hidden="true" className="size-4" />WhatsApp indisponible</span><p className="mt-2 text-xs leading-relaxed text-blue-100">Le numéro professionnel de l’entreprise doit être renseigné pour activer ce contact.</p></div>;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/35 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"><MessageCircle aria-hidden="true" className="size-4" />WhatsApp<span className="sr-only"> (ouvre une nouvelle fenêtre)</span></a>;
}
