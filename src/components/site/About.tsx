const about = "/assets/optimized/about.jpg";

export function About() {
  return (
    <section id="apropos" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-md">
            <img
              src={about}
              alt="Sapp3Rs en tournage"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pt-12">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-primary" />
            03 — À propos
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight md:text-6xl">
            Sapp3Rs, mon identité créative.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85 md:text-xl">
            <p>
              Je suis <span className="text-foreground">Sapp3Rs, photographe et filmmaker,</span>{" "}
              fondateur de For Your Mom - Production.
            </p>

            <p>
              Je travaille autour du sport, de l'aventure et des projets qui ont quelque chose à
              raconter. De la photographie à la production vidéo, je cherche avant tout à créer des
              images fortes, sincères et pensées pour durer.
            </p>

            <p className="text-muted-foreground">
              J'accompagne les marques et les organisateurs d'événements dans la création de
              contenus qui donnent une identité forte à leurs projets, de la couverture terrain au
              film documentaire, en passant par la création de contenus pour les réseaux.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="https://www.instagram.com/_sapp3rs_/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-foreground/80 hover:text-primary"
            >
              Instagram ↗
            </a>

            <a
              href="https://www.linkedin.com/in/alexandre-boursier-a21b87387/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-foreground/80 hover:text-primary"
            >
              LinkedIn ↗
            </a>

            <a
              href="#contact"
              className="ml-auto inline-flex items-center gap-2 text-sm text-primary"
            >
              Parlons de votre projet →
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm">
            <div>
              <p className="text-muted-foreground">Basé</p>
              <p className="mt-1">France</p>
            </div>

            <div className="text-right">
              <p className="text-muted-foreground">Disponible</p>
              <p className="mt-1">France • Europe • Monde</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
