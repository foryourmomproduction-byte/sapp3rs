import { useState } from "react";

import { exclusiveProjects, type Project } from "@/lib/projects";

import { ProjectOverlay } from "./ProjectOverlay";

export function Exclusive() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <header className="mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-primary" />
            02 — Exclusifs
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight md:text-6xl">
            Projets exclusifs
          </h2>

          <p className="mt-6 max-w-xl text-muted-foreground">
            Documentaire · Œuvre d'art · Série personnelle
          </p>
        </header>

        <div className="space-y-8">
          {exclusiveProjects.map((project) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setActive(project)}
              className="group relative block w-full overflow-hidden rounded-md bg-card text-left"
            >
              <div className="aspect-[16/7] w-full overflow-hidden">
                <img
                  src={project.cover}
                  alt={`${project.title} — ${project.category}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-10">
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {project.category}
                  </p>

                  <h3 className="font-display text-2xl font-medium leading-tight md:text-5xl">
                    {project.title}
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
