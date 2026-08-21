import { createFileRoute } from "@tanstack/react-router";
import { projects, exclusiveProjects } from "@/lib/projects";

const BASE_URL = "https://sapp3rs.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const allProjects = [...projects, ...exclusiveProjects];

        const entries = [
          "/",
          "/mentions-legales",
          "/confidentialite",
          ...allProjects.map((project) => `/projets/${project.slug}`),
        ];

        const urls = entries
          .map(
            (path) => `  <url>
    <loc>${BASE_URL}${path}</loc>
  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
