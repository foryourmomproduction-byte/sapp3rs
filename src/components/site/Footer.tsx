import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-3xl md:text-5xl">Sapp3Rs<span className="text-primary">.</span></p>
            <p className="mt-3 text-sm text-muted-foreground">Photographe • Filmmaker</p>
            <p className="mt-1 text-sm text-muted-foreground">France • Europe • International</p>
          </div>
          <div className="md:col-span-3">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">Suivre</p>
            <ul className="space-y-2 text-sm">
              <li><a href="https://instagram.com/sapp3rs" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a></li>
              <li><a href="#contact" className="hover:text-primary">Parlons de votre projet</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">Légal</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/mentions-legales" className="hover:text-primary">Mentions légales</Link></li>
              <li><Link to="/confidentialite" className="hover:text-primary">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
          <p>© 2026 Sapp3Rs — Alexandre Boursier</p>
          <p>Basé en Haute-Savoie</p>
        </div>
      </div>
    </footer>
  );
}