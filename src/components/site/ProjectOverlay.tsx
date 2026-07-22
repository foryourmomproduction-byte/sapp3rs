import { useEffect } from "react";
import type { Project } from "@/lib/projects";

export function ProjectOverlay({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const fillContact = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth" });
      const ta = document.getElementById("message") as HTMLTextAreaElement | null;
      if (ta && !ta.value) ta.value = `Je souhaite créer un projet similaire à ${project.title}.`;
    }, 100);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] overflow-y-auto bg-background/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="min-h-full" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md md:px-10">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Projet — {project.year}
          </span>
          <button
            onClick={onClose}
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Fermer"
          >
            Fermer <span aria-hidden>✕</span>
          </button>
        </div>

        <article className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">{project.category}</p>
          <h2 className="font-display text-5xl font-medium leading-none md:text-8xl">{project.title}</h2>

          <div className="mt-16 aspect-[16/10] w-full overflow-hidden rounded-md">
            <img src={project.cover} alt={project.title} className="h-full w-full object-cover" />
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <dl className="space-y-6 text-sm">
                <div>
                  <dt className="text-muted-foreground">Client</dt>
                  <dd className="mt-1 text-foreground">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Année</dt>
                  <dd className="mt-1 text-foreground">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Livrables</dt>
                  <dd className="mt-1 space-y-1 text-foreground">
                    {project.deliverables.map((d) => <div key={d}>{d}</div>)}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="space-y-10 md:col-span-8">
              <Block label="Contexte" text={project.context} />
              <Block label="Réponse" text={project.response} />
              <Block label="Résultat" text={project.result} />
            </div>
          </div>

          <div className="mt-24 border-t border-border pt-16 text-center">
            <p className="font-display text-3xl md:text-5xl">Et si c'était votre projet ?</p>
            <button
              onClick={fillContact}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Parlons de votre projet <span>→</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">{label}</p>
      <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">{text}</p>
    </div>
  );
}