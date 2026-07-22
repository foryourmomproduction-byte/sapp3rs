import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { ProjectsGrid } from "@/components/site/ProjectsGrid";
import { Exclusive } from "@/components/site/Exclusive";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sapp3Rs — Photographe & Filmmaker pour marques et événements" },
      { name: "description", content: "Sapp3Rs est l'identité créative d'Alexandre Boursier, photographe et filmmaker indépendant. J'aide les marques et les événements à créer des images qui attirent." },
      { property: "og:title", content: "Sapp3Rs — Photographe & Filmmaker" },
      { property: "og:description", content: "J'aide les marques et les événements à créer des images qui attirent." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Sapp3Rs",
        alternateName: "Alexandre Boursier",
        description: "Sapp3Rs est l'identité créative d'Alexandre Boursier, photographe et filmmaker indépendant basé en Haute-Savoie.",
        areaServed: ["France", "Europe", "International"],
        founder: { "@type": "Person", name: "Alexandre Boursier" },
        address: { "@type": "PostalAddress", addressRegion: "Haute-Savoie", addressCountry: "FR" },
        sameAs: ["https://instagram.com/sapp3rs"],
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <ProjectsGrid />
      <Exclusive />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
