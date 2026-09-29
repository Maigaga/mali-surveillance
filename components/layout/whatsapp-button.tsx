import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppMessage, getWhatsAppUrl } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  variant?: "inline" | "floating" | "quiet";
  message?: string;
  className?: string;
};

export function WhatsAppButton({ variant = "inline", message, className }: WhatsAppButtonProps) {
  const whatsappHref = getWhatsAppUrl(message ?? getWhatsAppMessage());
  const href = whatsappHref ?? "/contact";
  const label = whatsappHref
    ? variant === "floating" ? "Nous contacter sur WhatsApp" : variant === "quiet" ? "Écrire sur WhatsApp" : "Parler sur WhatsApp"
    : variant === "floating" ? "Nous contacter" : "Voir les moyens de contact";

  if (variant === "floating") {
    return (
      <Link id="whatsapp-floating" href={href} aria-label={label} title={label} className={cn("fixed bottom-4 right-4 z-30 flex size-14 items-center justify-center rounded-full bg-[#147d50] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#147d50]/30 sm:bottom-6 sm:right-6", className)}>
        <MessageCircle aria-hidden="true" className="size-6" />
      </Link>
    );
  }

  if (variant === "quiet") {
    return (
      <Link
        href={href}
        aria-label={label}
        target={whatsappHref ? "_blank" : undefined}
        rel={whatsappHref ? "noreferrer" : undefined}
        className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium text-slate-200 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70", className)}
      >
        <MessageCircle aria-hidden="true" className="size-4" />{label}
      </Link>
    );
  }

  return (
    <Button asChild variant="outline" size="lg" className={cn("border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white", className)}>
      <Link href={href} target={whatsappHref ? "_blank" : undefined} rel={whatsappHref ? "noreferrer" : undefined}>
        <MessageCircle aria-hidden="true" />{label}
      </Link>
    </Button>
  );
}
