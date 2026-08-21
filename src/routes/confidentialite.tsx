import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      {
        title: "Politique de confidentialité — Sapp3Rs",
      },
      {
        name: "description",
        content:
          "Politique de confidentialité et traitement des données personnelles du site Sapp3Rs.",
      },
      {
        property: "og:title",
        content: "Politique de confidentialité — Sapp3Rs",
      },
      {
        property: "og:description",
        content: "Politique de confidentialité et traitement des données personnelles.",
      },
      {
        property: "og:url",
        content: "/confidentialite",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/confidentialite",
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

      <h1 className="mt-8 font-display text-4xl md:text-6xl">Politique de confidentialité</h1>

      <div className="mt-12 space-y-10 text-foreground/80">
        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Responsable du traitement
          </h2>

          <div className="space-y-2">
            <p>
              Le responsable du traitement des données personnelles collectées sur ce site est :
            </p>

            <p>
              <strong className="text-foreground">Alexandre Boursier</strong>, entrepreneur
              individuel sous le régime de la micro-entreprise, exerçant sous le nom Sapp Invest et
              utilisant Sapp3Rs comme identité artistique.
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
            Données collectées
          </h2>

          <p>
            Lorsque vous utilisez le formulaire de contact, les informations suivantes peuvent être
            collectées :
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Prénom et nom</li>
            <li>Entreprise ou organisation</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone, si renseigné</li>
            <li>Localisation</li>
            <li>Nature du projet</li>
            <li>Budget indicatif</li>
            <li>Date ou période envisagée</li>
            <li>Contenu du message</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Finalité du traitement
          </h2>

          <p>
            Ces informations sont collectées uniquement afin de permettre à Sapp3Rs de prendre
            connaissance de votre demande, d'évaluer vos besoins et de vous répondre concernant
            votre projet.
          </p>

          <p className="mt-4">
            Les informations transmises ne sont pas utilisées à des fins de prospection commerciale
            non sollicitée.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Base légale
          </h2>

          <p>
            Le traitement des données transmises volontairement via le formulaire de contact repose
            sur la prise de contact à l'initiative de l'utilisateur et, lorsque cela est applicable,
            sur les mesures précontractuelles nécessaires à l'examen de sa demande.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Destinataires des données
          </h2>

          <p>
            Les données transmises via le formulaire sont destinées à Alexandre Boursier dans le
            cadre du traitement des demandes reçues sur le site.
          </p>

          <p className="mt-4">Les données ne sont ni vendues ni louées à des fins commerciales.</p>

          <p className="mt-4 text-sm text-muted-foreground">
            Les éventuels prestataires techniques utilisés pour assurer le fonctionnement du
            formulaire ou l'envoi des messages seront indiqués dans cette politique avant la mise en
            service définitive du formulaire.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Durée de conservation
          </h2>

          <p>
            Les données transmises dans le cadre d'une demande de contact sont conservées pendant la
            durée nécessaire au traitement de la demande et aux échanges qui peuvent en découler.
          </p>

          <p className="mt-4">
            Lorsqu'aucune relation commerciale ou aucun échange justifiant une conservation plus
            longue n'est établi, les données sont supprimées ou archivées conformément aux
            obligations légales applicables.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Vos droits
          </h2>

          <p>
            Conformément à la réglementation applicable en matière de protection des données
            personnelles, vous disposez notamment d'un droit d'accès, de rectification, d'effacement
            et, selon les conditions prévues par la réglementation, d'un droit à la limitation du
            traitement de vos données.
          </p>

          <p className="mt-4">
            Vous pouvez également vous opposer à certains traitements ou demander la portabilité de
            vos données lorsque ce droit est applicable.
          </p>

          <p className="mt-4">Pour exercer vos droits, vous pouvez envoyer votre demande à :</p>

          <p className="mt-3">
            <a
              href="mailto:foryourmom.production@gmail.com"
              className="text-foreground underline-offset-4 hover:text-primary hover:underline"
            >
              foryourmom.production@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Cookies et traceurs
          </h2>

          <p>
            À ce jour, le site n'utilise pas de traceur publicitaire, de pixel Meta ou TikTok, ni de
            système de newsletter.
          </p>

          <p className="mt-4">
            Aucun outil d'analyse d'audience tel que Google Analytics n'est actuellement activé.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Cette politique sera mise à jour si de nouveaux services, outils d'analyse, cookies ou
            traceurs sont ajoutés au site.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Contenus provenant de services tiers
          </h2>

          <p>
            Le site peut intégrer ou proposer des liens vers des contenus hébergés par des services
            tiers, notamment YouTube et Instagram.
          </p>

          <p className="mt-4">
            Ces services peuvent appliquer leurs propres politiques de confidentialité et leurs
            propres mécanismes de traitement des données. Leur utilisation est soumise à leurs
            conditions respectives.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground">
            Mise à jour de la politique
          </h2>

          <p>
            Cette politique de confidentialité peut être mise à jour afin de tenir compte de
            l'évolution du site, de ses fonctionnalités ou de la réglementation applicable.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">Dernière mise à jour : août 2026</p>
        </section>
      </div>
    </main>
  );
}
