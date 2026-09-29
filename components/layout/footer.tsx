import Link from "next/link";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Separator } from "@/components/ui/separator";
import { getWhatsAppUrl } from "@/lib/site-config";

const companyName = siteConfig.companyName;
const configured = (value: string) => value && !value.includes("COMPANY_");

export function Footer() {
  const whatsappHref = getWhatsAppUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1b30] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-16">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-3 rounded-md" aria-label={`${companyName} — accueil`}>
            <span className="flex size-10 items-center justify-center rounded-xl bg-white/10"><Camera aria-hidden="true" className="size-5" /></span>
            <span className="font-semibold tracking-tight">{companyName}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
            Installation, configuration et maintenance de systèmes de vidéosurveillance adaptés à vos besoins.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Navigation</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-300">
            {siteConfig.navigation.slice(0, 8).map((item) => <li key={item.href}><Link className="hover:text-white" href={item.href}>{item.label}</Link></li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Services</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {siteConfig.services.map((service) => <li key={service.href}><Link className="hover:text-white" href={service.href}>{service.label}</Link></li>)}
            <li><Link className="hover:text-white" href="/solutions">Solutions</Link></li>
          </ul>
        </div>

        <div id="contact">
          <h2 className="text-sm font-semibold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {configured(siteConfig.phone) && <li><a className="inline-flex items-center gap-2 hover:text-white" href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}><Phone aria-hidden="true" className="size-4" />{siteConfig.phone}</a></li>}
            {configured(siteConfig.email) && <li><a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true" className="size-4" />{siteConfig.email}</a></li>}
            {(configured(siteConfig.address) || configured(siteConfig.city)) && <li className="flex items-start gap-2"><MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />{[siteConfig.address, siteConfig.city].filter(configured).join(", ")}</li>}
            {whatsappHref && <li><a className="hover:text-white" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a></li>}
            <li><Link className="inline-flex min-h-9 items-center hover:text-white" href="/contact">Nous contacter</Link></li>
          </ul>
          <div className="mt-5 flex gap-2">
            {siteConfig.socialLinks.facebook && <a className="rounded-md px-2 py-1 text-xs hover:bg-white/10" href={siteConfig.socialLinks.facebook}>Facebook</a>}
            {siteConfig.socialLinks.instagram && <a className="rounded-md px-2 py-1 text-xs hover:bg-white/10" href={siteConfig.socialLinks.instagram}>Instagram</a>}
            {siteConfig.socialLinks.linkedin && <a className="rounded-md px-2 py-1 text-xs hover:bg-white/10" href={siteConfig.socialLinks.linkedin}>LinkedIn</a>}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8"><Separator className="bg-white/15" /></div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {year} {companyName}. Tous droits réservés.</p>
        <p>{configured(siteConfig.serviceArea) ? `Zone d’intervention : ${siteConfig.serviceArea}` : "Zone d'intervention : informations à préciser."}</p>
      </div>
    </footer>
  );
}
