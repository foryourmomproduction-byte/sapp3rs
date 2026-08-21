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

const SITE_URL = "https://sapp3rs.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Sapp3Rs — Photographe & Filmmaker pour marques et événements",
      },
      {
        name: "description",
        content:
          "Sapp3Rs est photographe et filmmaker, fondateur de For Your Mom Production. Création de contenus photo et vidéo pour marques et organisateurs d'événements, en France et à l'international.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:title",
        content: "Sapp3Rs — Photographe & Filmmaker pour marques et événements",
      },
      {
        property: "og:description",
        content:
          "Création de contenus photo et vidéo pour marques et organisateurs d'événements, en France et à l'international.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: SITE_URL,
      },
      {
        property: "og:site_name",
        content: "Sapp3Rs",
      },
      {
        property: "og:image",
        content: `${SITE_URL}/og-image.jpg`,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/og-image.jpg`,
      },
    ],

    links: [
      {
        rel: "canonical",
        href: SITE_URL,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Sapp3Rs",
          alternateName: "For Your Mom Production",
          description:
            "Photographe et filmmaker pour marques et organisateurs d'événements. Création de contenus photo, vidéo, documentaire et réseaux sociaux en France, en Europe et à l'international.",
          url: SITE_URL,
          areaServed: [
            {
              "@type": "Country",
              name: "France",
            },
            {
              "@type": "Place",
              name: "Europe",
            },
            {
              "@type": "Place",
              name: "International",
            },
          ],
          sameAs: [
            "https://www.instagram.com/_sapp3rs_/",
            "https://www.linkedin.com/in/alexandre-boursier-a21b87387/",
          ],
        }),
      },
    ],
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
