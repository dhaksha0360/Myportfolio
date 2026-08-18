import { Braces, BrainCircuit, Database, PanelsTopLeft } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const capabilities = [
  { icon: PanelsTopLeft, title: "Product-minded frontend", text: "Responsive, accessible interfaces built around real user workflows." },
  { icon: Braces, title: "Full-stack systems", text: "Typed applications, API integration, and maintainable service architecture." },
  { icon: Database, title: "Data foundations", text: "Relational and document data models designed for dependable software." },
  { icon: BrainCircuit, title: "Applied machine learning", text: "Practical ML workflows with attention to explainability and product value." },
];
export function About() { return <section id="about" className="section-shell"><Reveal><SectionHeading eyebrow="01 / About" title="Software engineering, end to end." copy="I focus on the useful middle ground between polished interfaces and dependable systems: understanding the problem, choosing the right tools, and carrying the solution through to a thoughtful user experience." /></Reveal><div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">{capabilities.map(({ icon: Icon, title, text }) => <Reveal key={title} className="border-b border-r border-border p-6"><Icon className="mb-8 size-6 text-primary" /><h3 className="font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></Reveal>)}</div></section>; }
