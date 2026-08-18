import { cn } from "@/lib/utils";
export function ProjectVisual({ tone, compact = false }: { tone: string; compact?: boolean }) {
  return <div className={cn("project-visual relative overflow-hidden p-5", `tone-${tone}`, compact ? "aspect-[16/10]" : "aspect-[16/9]")} aria-hidden="true">
    <div className="absolute inset-x-[10%] top-[14%] h-[76%] border border-white/25 bg-[#101419]/90 shadow-2xl">
      <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-3"><i /><i /><i /></div>
      <div className="grid h-[calc(100%-36px)] grid-cols-[28%_1fr]">
        <div className="border-r border-white/10 p-3"><span className="block h-2 w-2/3 bg-white/15" /><span className="mt-3 block h-2 w-4/5 bg-white/10" /><span className="mt-3 block h-2 w-1/2 bg-white/10" /></div>
        <div className="p-4"><span className="block h-3 w-1/3 bg-white/75" /><div className="mt-4 grid grid-cols-3 gap-2"><span /><span /><span /></div><b className="mt-3 block h-[42%] border border-white/10 bg-white/5" /></div>
      </div>
    </div>
  </div>;
}
