import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      {
        title: "Mentions légales — Sapp3Rs",
      },
      {
        name: "description",
        content: "Mentions légales du site Sapp3Rs, identité artistique d'Alexandre Boursier.",
      },
      {
        property: "og:title",
        content: "Mentions légales — Sapp3Rs",
      },
      {
        property: "og:description",
        content: "Mentions légales du site Sapp3Rs.",
      },
      {
        property: "og:url",
        content: "/mentions-legales",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/mentions-legales",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 md:px-10">
      <Link
        to="/"
        className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary"
      >
        ← Retour
      </Link>

      <h1 className="mt-8 font-display text-4xl md:text-6xl">Mentions légales</h1>

      <div className="mt-12 space-y-10 text-foreground/80">
        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Éditeur du site
          </h2>

          <div className="space-y-2">
            <p>
              <strong className="text-foreground">Alexandre Boursier</strong>, entrepreneur
              individuel sous le régime de la micro-entreprise.
            </p>

            <p>
              Nom de l'activité : <strong className="text-foreground">Sapp Invest</strong>
            </p>

            <p>
              Identité artistique : <strong className="text-foreground">Sapp3Rs</strong>
            </p>

            <p>
              SIRET : <strong className="text-foreground">935 397 174 00019</strong>
            </p>

            <p>
              27 Rue de Fontainebleau
              <br />
              93220 Gagny
              <br />
              France
            </p>

            <p>
              E-mail :{" "}
              <a
                href="mailto:foryourmom.production@gmail.com"
                className="text-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                foryourmom.production@gmail.com
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Directeur de la publication
          </h2>

          <p>
            <strong className="text-foreground">Alexandre Boursier</strong>
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Hébergement
          </h2>

          <div className="space-y-2">
            <p>
              Le site est publié et hébergé via <strong className="text-foreground">Lovable</strong>
              .
            </p>

            <p className="text-sm text-muted-foreground">
              Les coordonnées précises de l'hébergeur seront indiquées conformément aux informations
              fournies par le service d'hébergement utilisé pour la publication du site.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Propriété intellectuelle
          </h2>

          <div className="space-y-4">
            <p>
              L'ensemble des photographies, vidéos, textes, éléments graphiques, éléments visuels et
              contenus présents sur ce site sont protégés par les dispositions applicables en
              matière de propriété intellectuelle.
            </p>

            <p>
              Sauf mention contraire, les contenus créés par Sapp3Rs sont la propriété d'Alexandre
              Boursier ou sont utilisés avec l'autorisation de leurs ayants droit.
            </p>

            <p>
              Toute reproduction, représentation, modification, distribution ou exploitation, totale
              ou partielle, des contenus présents sur ce site est interdite sans autorisation
              préalable.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Liens et contenus externes
          </h2>

          <p>
            Le site peut contenir des liens ou intégrer des contenus provenant de services tiers,
            notamment Instagram et YouTube. Sapp3Rs ne peut être tenu responsable du contenu ou du
            fonctionnement de ces services externes.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Données personnelles
          </h2>

          <p>
            Le traitement des données personnelles collectées via le formulaire de contact est
            détaillé dans la{" "}
            <Link
              to="/confidentialite"
              className="text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              Politique de confidentialité
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Contact
          </h2>

          <p>Pour toute question relative au site ou à son contenu, vous pouvez contacter :</p>

          <p className="mt-3">
            <a
              href="mailto:foryourmom.production@gmail.com"
              className="text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              foryourmom.production@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
