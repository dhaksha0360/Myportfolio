import Image from "next/image";
import { ArrowDownRight, ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import { personal } from "@/data/personal";
import { Button } from "@/components/ui/button";

export function Hero() {
  return <section id="home" className="border-b border-border">
    <div className="mx-auto grid min-h-[calc(100svh-64px)] max-w-7xl items-stretch lg:grid-cols-[1.05fr_.95fr]">
      <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:py-24">
        <div className="mb-8 flex items-center gap-3 text-sm text-muted-foreground"><span className="size-2 rounded-full bg-teal-500" />Based in {personal.location} · Open to opportunities</div>
        <p className="mb-5 font-mono text-sm text-primary">Hi, I&apos;m {personal.name}.</p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl xl:text-7xl">I engineer software that feels <span className="text-muted-foreground">clear, capable, and human.</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">{personal.summary}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild className="h-11 px-5"><a href="#projects">View projects <ArrowDownRight className="size-4" /></a></Button>
          {personal.cv && <Button asChild variant="outline" className="h-11 px-5"><a href={personal.cv} download><Download className="size-4" />Download CV</a></Button>}
          <Button asChild variant="outline" className="h-11 px-5"><a href="#contact">Contact me <ArrowRight className="size-4" /></a></Button>
        </div>
        {(personal.email || personal.github || personal.linkedin) && <div className="mt-10 flex gap-2">
          {personal.email && <Button asChild variant="ghost" size="icon"><a href={`mailto:${personal.email}`} aria-label="Email"><Mail className="size-5" /></a></Button>}
          {personal.github && <Button asChild variant="ghost" size="icon"><a href={personal.github} aria-label="GitHub"><Github className="size-5" /></a></Button>}
          {personal.linkedin && <Button asChild variant="ghost" size="icon"><a href={personal.linkedin} aria-label="LinkedIn"><Linkedin className="size-5" /></a></Button>}
        </div>}
      </div>
      <div className="relative min-h-[520px] overflow-hidden border-t border-border lg:border-l lg:border-t-0">
        <Image src="/profile/hero-studio.png" alt="Creative developer working in a refined studio" fill priority sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
        <div className="absolute inset-x-5 bottom-5 border border-white/20 bg-black/75 p-5 text-white backdrop-blur-md sm:inset-x-8">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-sm"><span>Frontend + Backend + AI</span><ArrowRight className="size-4 text-[#ff6d4a]" /><span className="text-right">Real-world solutions</span></div>
        </div>
      </div>
    </div>
  </section>;
}
