import heroVideo from "@/assets/hero.mp4";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-24 md:px-10 md:pb-32">
        <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="inline-block h-px w-8 bg-primary" />
          Photographe • Filmmaker
        </div>

        <h1 className="font-display max-w-5xl text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-tight">
          J&apos;aide les marques et les événements
          <br />
          à créer des images qui{" "}
          <span className="italic text-primary">attirent</span>.
        </h1>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#projets"
            className="group inline-flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-foreground"
          >
            <span className="inline-block h-px w-10 bg-foreground/40 transition-all group-hover:w-16 group-hover:bg-primary" />
            Découvrir les projets
          </a>
        </div>
      </div>
    </section>
  );
}