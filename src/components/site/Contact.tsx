import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (sending) return;

    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstname: String(formData.get("firstname") ?? ""),
      lastname: String(formData.get("lastname") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      location: String(formData.get("location") ?? ""),
      type: String(formData.get("type") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      date: String(formData.get("date") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(result?.error ?? "Impossible d'envoyer votre message pour le moment.");
      }

      setSent(true);
      form.reset();
    } catch (submissionError) {
      console.error("Contact form error:", submissionError);

      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Une erreur est survenue. Merci de réessayer.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <header className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            04 — Contact
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight md:text-7xl">
            Parlons de votre projet.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Présentez-moi votre projet, vos objectifs et les contenus dont vous avez besoin. Je
            reviendrai vers vous rapidement afin d'en discuter directement.
          </p>
        </header>

        {sent ? (
          <div className="mx-auto max-w-lg rounded-md border border-primary/40 bg-primary/5 p-10 text-center">
            <p className="font-display text-2xl">Merci pour votre message.</p>

            <p className="mt-4 text-muted-foreground">
              Votre projet a bien été transmis. Je reviendrai vers vous rapidement afin d'en
              discuter.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-10">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Prénom" name="firstname" required autoComplete="given-name" />

              <Field label="Nom" name="lastname" required autoComplete="family-name" />

              <Field
                label="Entreprise ou organisation"
                name="company"
                autoComplete="organization"
              />

              <Field
                label="Email professionnel"
                name="email"
                type="email"
                required
                autoComplete="email"
              />

              <Field label="Téléphone (facultatif)" name="phone" type="tel" autoComplete="tel" />

              <Field
                label="Localisation"
                name="location"
                placeholder="Ville, pays"
                autoComplete="address-level2"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Select
                label="Nature du projet"
                name="type"
                options={[
                  "Photographie",
                  "Production vidéo",
                  "Photographie & vidéo",
                  "Création de contenu",
                  "Couverture d'événement",
                  "Banque d'images",
                  "Podcast",
                  "Autre",
                ]}
                required
              />

              <Select
                label="Budget"
                name="budget"
                options={[
                  "1 500 € — 3 000 €",
                  "3 000 € — 5 000 €",
                  "Plus de 5 000 €",
                  "Je n’ai pas encore défini mon budget",
                  "Autre",
                ]}
                required
              />
            </div>

            <Field label="Date ou période" name="date" placeholder="Ex. Automne 2026" />

            <div>
              <label
                htmlFor="message"
                className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                Parlez-moi de votre projet
              </label>

              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={6}
                className="w-full resize-none rounded-md border border-border bg-transparent px-4 py-4 text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>

            {/* Honeypot anti-spam : invisible pour les vrais utilisateurs */}
            <div
              aria-hidden="true"
              className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
            >
              <label htmlFor="website">Ne pas remplir ce champ</label>

              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <label className="flex items-start gap-3 text-xs text-muted-foreground">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-1 accent-[color:var(--primary)]"
              />

              <span>
                J'accepte que mes informations soient utilisées pour recevoir une réponse à ma
                demande.
              </span>
            </label>

            {error && (
              <div
                role="alert"
                className="rounded-md border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
              >
                {error}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-6">
              <p className="text-xs text-muted-foreground">Réponse sous 48 h ouvrées.</p>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Envoi…" : "Envoyer mon projet"}
                <span>→</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-md border border-border bg-transparent px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
      >
        <option value="" disabled>
          Sélectionner
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
