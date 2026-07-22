import ex1 from "@/assets/exclusive-1.jpg";
import ex2 from "@/assets/exclusive-2.jpg";
import ex3 from "@/assets/exclusive-3.jpg";

export function Exclusive() {
  return (
    <section className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <header className="mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="mr-3 inline-block h-px w-8 align-middle bg-primary" />
            02 — Exclusifs
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight md:text-6xl">
            Projets exclusifs
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Séries personnelles, panoramas et expérimentations. Un regard singulier, hors cadre commercial.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="aspect-[16/9] overflow-hidden rounded-md">
              <img src={ex1} alt="Panorama alpin" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="aspect-[4/5] overflow-hidden rounded-md">
              <img src={ex2} alt="Étude de lumière" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="aspect-[21/9] overflow-hidden rounded-md">
              <img src={ex3} alt="Silhouette dans la brume" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}