"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetPortal = DialogPrimitive.Portal;

function SheetOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return <DialogPrimitive.Overlay data-slot="sheet-overlay" className={cn("fixed inset-0 z-50 bg-[#071426]/55 data-[state=closed]:animate-out data-[state=open]:animate-in", className)} {...props} />;
}

function SheetContent({ className, children, side = "right", ...props }: React.ComponentProps<typeof DialogPrimitive.Content> & { side?: "top" | "right" | "bottom" | "left" }) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content data-slot="sheet-content" className={cn("fixed z-50 flex flex-col gap-6 bg-white p-6 shadow-xl outline-none data-[state=closed]:animate-out data-[state=open]:animate-in", side === "right" && "inset-y-0 right-0 h-full w-[min(22rem,90vw)] border-l", side === "left" && "inset-y-0 left-0 h-full w-[min(22rem,90vw)] border-r", side === "top" && "inset-x-0 top-0 border-b", side === "bottom" && "inset-x-0 bottom-0 border-t", className)} {...props}>
        {children}
        <DialogPrimitive.Close aria-label="Fermer le menu" className="absolute right-4 top-4 rounded-md p-2 text-muted-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><X className="size-4" /></DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="sheet-header" className={cn("flex flex-col gap-1.5", className)} {...props} />;
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title data-slot="sheet-title" className={cn("text-lg font-semibold text-primary", className)} {...props} />;
}

function SheetDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description data-slot="sheet-description" className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetDescription };
