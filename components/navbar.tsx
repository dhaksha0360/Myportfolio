"use client";
import Link from "next/link";
import { Download, Github, Linkedin, Menu } from "lucide-react";
import { personal } from "@/data/personal";
import { achievements } from "@/data/achievements";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const baseLinks = ["About", "Skills", "Projects", "Research"];
const navLinks = [...baseLinks.slice(0, 2), ...(experiences.length ? ["Experience"] : []), ...baseLinks.slice(2), ...(education.length ? ["Education"] : []), ...(achievements.length ? ["Achievements"] : []), "Contact"];

export function Navbar() {
  const links = navLinks.map((item) => <a key={item} href={`/#${item.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item}</a>);
  return <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-7xl items-center px-5 lg:px-8">
      <Link href="/" className="mr-auto flex items-center gap-3 font-semibold"><span className="grid size-8 place-items-center rounded bg-primary text-xs text-primary-foreground">{personal.initials}</span><span>{personal.name}</span></Link>
      <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">{links}</nav>
      <div className="ml-5 hidden items-center gap-1 md:flex">
        {personal.github && <Button asChild variant="ghost" size="icon"><a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github className="size-[18px]" /></a></Button>}
        {personal.linkedin && <Button asChild variant="ghost" size="icon"><a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin className="size-[18px]" /></a></Button>}
        <ThemeToggle />
        {personal.cv && <Button asChild size="sm" className="ml-2"><a href={personal.cv} download><Download className="size-4" />Download CV</a></Button>}
      </div>
      <div className="ml-3 flex items-center gap-1 xl:hidden"><ThemeToggle /><Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" aria-label="Open navigation"><Menu className="size-5" /></Button></SheetTrigger><SheetContent><div className="mt-12 flex h-[calc(100%-3rem)] flex-col"><nav className="flex flex-col gap-1">{navLinks.map((item) => <SheetClose asChild key={item}><a href={`/#${item.toLowerCase()}`} className="border-b border-border py-4 text-lg font-medium">{item}</a></SheetClose>)}</nav><div className="mt-auto space-y-3">{personal.cv && <Button asChild className="w-full"><a href={personal.cv} download><Download className="size-4" />Download CV</a></Button>}</div></div></SheetContent></Sheet></div>
    </div>
  </header>;
}
