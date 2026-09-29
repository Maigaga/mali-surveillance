"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function DesktopNavigation({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const items = siteConfig.navigation;

  return (
    <nav aria-label="Navigation principale" className="flex items-center gap-0.5">
      {items.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={cn("rounded-md px-2 py-2 text-xs font-medium transition-colors hover:bg-secondary hover:text-primary 2xl:px-2.5 2xl:text-[0.8125rem]", compact && "px-1.5 text-[0.68rem]", active ? "bg-secondary text-primary" : "text-muted-foreground")}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
