import { useState } from "react";
import { projects, type Project } from "@/lib/projects";
import { ProjectOverlay } from "./ProjectOverlay";

const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-6", "md:col-span-6", "md:col-span-12"];

export function ProjectsGrid() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <section id="projets" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <header className="mb-16 flex items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-primary" />
              01 — Sélection
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight md:text-6xl">
              Projets sélectionnés
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
            Une sélection de collaborations récentes avec des marques et des organisateurs d'événements.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {projects.map((p, idx) => (
            <button
              key={p.slug}
              onClick={() => setActive(p)}
              className={`group relative block overflow-hidden rounded-md bg-card text-left ${spans[idx] ?? "md:col-span-6"}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden md:aspect-[16/10]">
                <img
                  src={p.cover}
                  alt={`${p.title} — ${p.category}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {p.category}
                  </p>
                  <h3 className="font-display text-2xl font-medium leading-tight md:text-4xl">
                    {p.title}
                  </h3>
                </div>
                <span className="hidden shrink-0 items-center gap-2 text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100 md:inline-flex">
                  Voir le projet
                  <span className="inline-block h-px w-6 bg-primary" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <ProjectOverlay project={active} onClose={() => setActive(null)} />
    </section>
  );
}