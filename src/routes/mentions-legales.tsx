import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Sapp3Rs" },
      { name: "description", content: "Mentions légales du site Sapp3Rs, identité créative d'Alexandre Boursier." },
      { property: "og:title", content: "Mentions légales — Sapp3Rs" },
      { property: "og:description", content: "Mentions légales du site Sapp3Rs." },
      { property: "og:url", content: "/mentions-legales" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 md:px-10">
      <Link to="/" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary">← Retour</Link>
      <h1 className="font-display mt-8 text-4xl md:text-6xl">Mentions légales</h1>
      <div className="mt-10 space-y-6 text-foreground/80">
        <p><strong className="text-foreground">Éditeur</strong> — Alexandre Boursier, exerçant sous l'identité Sapp3Rs. Photographe et filmmaker indépendant basé en Haute-Savoie, France.</p>
        <p><strong className="text-foreground">Contact</strong> — via le formulaire présent sur la page d'accueil.</p>
        <p><strong className="text-foreground">Hébergement</strong> — Hébergé sur infrastructure edge, Union européenne.</p>
        <p><strong className="text-foreground">Propriété intellectuelle</strong> — L'ensemble des images, vidéos et contenus présents sur ce site sont la propriété d'Alexandre Boursier ou de leurs ayants droit respectifs. Toute reproduction est interdite sans autorisation écrite.</p>
      </div>
    </main>
  );
}