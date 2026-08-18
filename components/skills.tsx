import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
export function Skills() { return <section id="skills" className="section-shell border-y border-border"><Reveal><SectionHeading eyebrow="02 / Toolkit" title="Technology with purpose." copy="A broad toolkit across web, mobile, data, and machine learning, used according to the shape of the problem." /></Reveal><div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">{skillGroups.map((group) => <Reveal key={group.title} className="bg-background p-6"><h3 className="mb-5 font-semibold">{group.title}</h3><div className="flex flex-wrap gap-2">{group.items.map((item) => <Badge key={item}>{item}</Badge>)}</div></Reveal>)}</div></section>; }
