"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Ouvrir le menu de navigation" className="lg:hidden">
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" aria-describedby="mobile-nav-description">
        <SheetHeader className="pr-9">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription id="mobile-nav-description">Accédez aux rubriques du site.</SheetDescription>
        </SheetHeader>
        <nav aria-label="Navigation mobile" className="flex flex-col gap-1">
          {siteConfig.navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <SheetClose asChild key={item.href}>
                <Link href={item.href} aria-current={active ? "page" : undefined} className={cn("rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-secondary", active ? "bg-secondary text-primary" : "text-muted-foreground")}>
                  {item.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
        <SheetClose asChild>
          <Button asChild variant="accent" className="mt-auto w-full"><Link href="/devis">Demander un devis</Link></Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
