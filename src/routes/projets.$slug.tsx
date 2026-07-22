import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/projets/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Projet — Sapp3Rs" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Sapp3Rs` },
        { name: "description", content: project.context },
        { property: "og:title", content: `${project.title} — Sapp3Rs` },
        { property: "og:description", content: project.context },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projets/${params.slug}` },
        { property: "og:image", content: project.cover },
        { name: "twitter:image", content: project.cover },
      ],
      links: [{ rel: "canonical", href: `/projets/${params.slug}` }],
    };
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-6 py-32 text-center">
      <h1 className="font-display text-4xl">Projet introuvable</h1>
      <Link to="/" className="mt-6 inline-block text-primary">← Retour aux projets</Link>
    </div>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <Link to="/" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary">← Retour</Link>
      <p className="mt-10 text-xs uppercase tracking-[0.3em] text-primary">{project.category}</p>
      <h1 className="font-display mt-4 text-5xl leading-none md:text-8xl">{project.title}</h1>
      <div className="mt-12 aspect-[16/10] w-full overflow-hidden rounded-md">
        <img src={project.cover} alt={project.title} className="h-full w-full object-cover" />
      </div>
      <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-16">
        <dl className="md:col-span-4 space-y-6 text-sm">
          <div><dt className="text-muted-foreground">Client</dt><dd>{project.client}</dd></div>
          <div><dt className="text-muted-foreground">Année</dt><dd>{project.year}</dd></div>
          <div><dt className="text-muted-foreground">Livrables</dt><dd>{project.deliverables.join(" · ")}</dd></div>
        </dl>
        <div className="md:col-span-8 space-y-8 text-lg">
          <div><p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Contexte</p><p>{project.context}</p></div>
          <div><p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Réponse</p><p>{project.response}</p></div>
          <div><p className="mb-2 text-xs uppercase tracking-[0.3em] text-primary">Résultat</p><p>{project.result}</p></div>
        </div>
      </div>
      <div className="mt-24 border-t border-border pt-12">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Autres projets</p>
        <div className="mt-6 flex flex-wrap gap-4">
          {projects.filter((p) => p.slug !== project.slug).slice(0, 3).map((p) => (
            <Link key={p.slug} to="/projets/$slug" params={{ slug: p.slug }} className="text-sm text-foreground/80 hover:text-primary">
              {p.title} →
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}