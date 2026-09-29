import { Building2, CircleCheck, Smartphone, Wrench } from "lucide-react";

const benefits = [
  { icon: CircleCheck, label: "Installation adaptée à vos besoins" },
  { icon: Smartphone, label: "Accès à distance depuis votre téléphone" },
  { icon: Wrench, label: "Maintenance et dépannage" },
  { icon: Building2, label: "Solutions pour particuliers et professionnels" },
];

export function TrustStrip() {
  return (
    <section aria-label="Les avantages de nos solutions" className="border-b bg-white">
      <div className="mx-auto grid max-w-[1440px] gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-7">
        {benefits.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-sm font-medium text-[#34465c]">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#edf3fc] text-accent"><Icon aria-hidden="true" className="size-[1.125rem]" /></span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
