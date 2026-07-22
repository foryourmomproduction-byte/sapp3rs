import { useEffect, useState } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import madyard from "@/assets/project-madyard.jpg";
import onair from "@/assets/project-onair.jpg";

const slides = [hero1, hero2, madyard, hero3, onair];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {slides.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          fetchPriority={idx === 0 ? "high" : "low"}
          loading={idx === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1600ms] ease-out ${
            i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-24 md:px-10 md:pb-32">
        <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="inline-block h-px w-8 bg-primary" />
          Photographe • Filmmaker
        </div>
        <h1 className="font-display max-w-5xl text-[clamp(2.5rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-tight">
          J'aide les marques et les événements
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
          <div className="ml-auto hidden items-center gap-2 text-xs text-muted-foreground md:flex">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`h-px transition-all duration-500 ${
                  i === idx ? "w-10 bg-primary" : "w-4 bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}