import Link from "next/link";
import { ArrowUpRight, Camera } from "lucide-react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { DesktopNavigation } from "./navigation";

const companyName = siteConfig.companyName;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label={`${companyName} — accueil`} className="flex min-w-0 items-center gap-3 rounded-md">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
            <Camera aria-hidden="true" className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block whitespace-nowrap text-xs font-bold leading-tight tracking-tight text-primary sm:text-base">{companyName}</span>
            <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:block">Vidéosurveillance</span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          <DesktopNavigation />
          <Button asChild variant="accent" size="sm">
            <Link href="/devis">Demander un devis <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
        </div>

        <div className="hidden items-center gap-4 lg:flex xl:hidden">
          <DesktopNavigation compact />
          <Button asChild variant="accent" size="sm"><Link href="/devis">Devis <ArrowUpRight aria-hidden="true" /></Link></Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild variant="accent" size="sm" className="h-10 px-3 sm:px-4">
            <Link href="/devis"><span className="hidden sm:inline">Demander un devis</span><span className="sm:hidden">Devis</span></Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
