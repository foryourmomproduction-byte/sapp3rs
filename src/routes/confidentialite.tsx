import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Sapp3Rs" },
      { name: "description", content: "Politique de confidentialité et traitement des données du site Sapp3Rs." },
      { property: "og:title", content: "Politique de confidentialité — Sapp3Rs" },
      { property: "og:description", content: "Traitement des données personnelles." },
      { property: "og:url", content: "/confidentialite" },
    ],
    links: [{ rel: "canonical", href: "/confidentialite" }],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 md:px-10">
      <Link to="/" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary">← Retour</Link>
      <h1 className="font-display mt-8 text-4xl md:text-6xl">Politique de confidentialité</h1>
      <div className="mt-10 space-y-6 text-foreground/80">
        <p>Les données transmises via le formulaire de contact (nom, email, description du projet) sont utilisées uniquement pour répondre à votre demande.</p>
        <p>Elles ne sont ni revendues, ni cédées à des tiers. Vous pouvez à tout moment demander leur suppression via le formulaire de contact.</p>
        <p>Ce site respecte les principes du RGPD. Aucun traceur publicitaire n'est utilisé.</p>
      </div>
    </main>
  );
}