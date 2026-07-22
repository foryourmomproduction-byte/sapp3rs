import { collaborations } from "@/lib/projects";

export function Marquee() {
  const list = [...collaborations, ...collaborations];
  return (
    <section aria-label="Collaborations" className="border-y border-border/60 bg-background py-8 overflow-hidden">
      <div className="flex whitespace-nowrap marquee-track">
        {list.map((name, i) => (
          <div key={i} className="flex items-center gap-16 pr-16">
            <span className="font-display text-2xl font-medium tracking-tight text-muted-foreground md:text-3xl">
              {name}
            </span>
            <span className="h-1 w-1 rounded-full bg-primary/60" />
          </div>
        ))}
      </div>
    </section>
  );
}