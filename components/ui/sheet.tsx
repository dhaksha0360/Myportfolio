"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;
export function SheetContent({ children }: { children: React.ReactNode }) {
  return <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm data-[state=open]:animate-in" /><Dialog.Content className="fixed inset-y-0 right-0 z-50 w-[min(88vw,360px)] border-l border-border bg-background p-6 shadow-2xl"><Dialog.Title className="sr-only">Navigation menu</Dialog.Title><Dialog.Close className="absolute right-4 top-4 grid size-10 place-items-center rounded-md hover:bg-muted" aria-label="Close menu"><X className="size-5" /></Dialog.Close>{children}</Dialog.Content></Dialog.Portal>;
}
