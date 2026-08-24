import type { Project } from "@/lib/projects";

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-16">
      <div className="md:col-span-4">
        <dl className="space-y-6 text-sm">
          <div>
            <dt className="text-muted-foreground">Client</dt>
            <dd className="mt-1 text-foreground">{project.client}</dd>
          </div>

          <div>
            <dt className="text-muted-foreground">Livrables</dt>
            <dd className="mt-1 space-y-1 text-foreground">
              {project.deliverables.map((deliverable) => (
                <div key={deliverable}>{deliverable}</div>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <div className="space-y-10 md:col-span-8">
        <ContentBlock label="Contexte" text={project.context} />
        <ContentBlock label="Réponse" text={project.response} />
        <ContentBlock label="Résultat" text={project.result} />
      </div>
    </div>
  );
}

function ContentBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h2 className="mb-3 text-xs font-normal uppercase tracking-[0.3em] text-primary">{label}</h2>

      <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">{text}</p>
    </div>
  );
}
