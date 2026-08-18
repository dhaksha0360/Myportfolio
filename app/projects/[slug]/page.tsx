import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectVisual } from "@/components/project-visual";
import { Footer } from "@/components/footer";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const project = getProject((await params).slug); return { title: project?.title ?? "Project", description: project?.description }; }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug); if (!project) notFound();
  return <main><section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16"><Button asChild variant="ghost" className="mb-10 -ml-4"><Link href="/#projects"><ArrowLeft className="size-4" />All projects</Link></Button><p className="font-mono text-xs uppercase tracking-[.18em] text-primary">Case study · {project.eyebrow}</p><h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">{project.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{project.description}</p><div className="mt-8 flex flex-wrap gap-3">{project.github && <Button asChild><a href={project.github}><Github className="size-4" />GitHub</a></Button>}{project.live && <Button asChild variant="outline"><a href={project.live}><ExternalLink className="size-4" />Live demo</a></Button>}</div><div className="mt-12"><ProjectVisual tone={project.tone} /></div></section><section className="border-y border-border"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24"><Content title="The problem" text={project.problem} /><Content title="The solution" text={project.solution} /></div></section><section className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:py-24"><div><h2 className="text-3xl font-semibold">Core features</h2><div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">{project.features.map((feature, i) => <div key={feature} className="bg-background p-5"><span className="font-mono text-xs text-primary">0{i + 1}</span><p className="mt-3 font-medium">{feature}</p></div>)}</div></div><div><h2 className="text-3xl font-semibold">Technology</h2><div className="mt-8 flex flex-wrap gap-2">{project.technologies.map((tech) => <Badge key={tech}>{tech}</Badge>)}</div><h2 className="mt-12 text-2xl font-semibold">Key challenges</h2><ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">{project.challenges.map((item) => <li key={item}>— {item}</li>)}</ul><h2 className="mt-12 text-2xl font-semibold">What I learned</h2><ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">{project.learnings.map((item) => <li key={item}>— {item}</li>)}</ul></div></section><Footer /></main>;
}
function Content({ title, text }: { title: string; text: string }) { return <div><p className="font-mono text-xs uppercase tracking-[.16em] text-primary">{title}</p><p className="mt-4 text-xl leading-8">{text}</p></div>; }
