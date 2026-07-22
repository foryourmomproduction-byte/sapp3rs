export function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">À votre tour</p>
        <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-8xl">
          Créons quelque chose
          <br />
          <span className="italic text-primary">qui attire</span>.
        </h2>
        <a
          href="#contact"
          className="mt-12 inline-flex items-center gap-3 rounded-full border border-foreground/20 px-8 py-4 text-sm transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          Parlons de votre projet <span>→</span>
        </a>
      </div>
    </section>
  );
}