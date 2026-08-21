import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const ALLOWED_ORIGIN = "https://sapp3rs.lovable.app";

const RATE_LIMIT = {
  maxRequests: 3,
  windowMs: 10 * 60 * 1000,
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

// Limitation en mémoire.
// C'est une première barrière anti-abus.
const rateLimitStore = new Map<string, RateLimitEntry>();

const contactSchema = z.object({
  firstname: z.string().trim().min(1).max(100),
  lastname: z.string().trim().min(1).max(100),
  company: z.string().trim().max(150).optional(),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(50).optional(),
  location: z.string().trim().max(150).optional(),
  type: z.string().trim().min(1).max(100),
  budget: z.string().trim().min(1).max(100),
  date: z.string().trim().max(100),
  message: z.string().trim().min(10).max(5000),

  // Honeypot anti-spam.
  // Doit toujours rester vide pour un vrai utilisateur.
  website: z.string().trim().max(0).optional(),
});

function isAllowedOrigin(origin: string | null) {
  if (!origin) {
    return true;
  }

  if (origin === ALLOWED_ORIGIN) {
    return true;
  }

  if (origin.startsWith("http://localhost:") || origin.startsWith("http://127.0.0.1:")) {
    return true;
  }

  return false;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  const realIp = request.headers.get("x-real-ip");

  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);

  if (!existing || now >= existing.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT.windowMs,
    });

    return {
      allowed: true,
      retryAfterSeconds: 0,
    };
  }

  if (existing.count >= RATE_LIMIT.maxRequests) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;

  return {
    allowed: true,
    retryAfterSeconds: 0,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function valueOrFallback(value: string | undefined, fallback = "Non renseigné") {
  return value?.trim() ? value.trim() : fallback;
}

function buildEmailHtml(data: z.infer<typeof contactSchema>) {
  const firstname = escapeHtml(data.firstname);
  const lastname = escapeHtml(data.lastname);
  const company = escapeHtml(valueOrFallback(data.company));
  const email = escapeHtml(data.email);
  const phone = escapeHtml(valueOrFallback(data.phone));
  const location = escapeHtml(valueOrFallback(data.location));
  const type = escapeHtml(data.type);
  const budget = escapeHtml(data.budget);
  const date = escapeHtml(valueOrFallback(data.date));
  const message = escapeHtml(data.message).replaceAll("\n", "<br />");

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>Nouveau projet — Sapp3Rs</title>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#0a0a0a;
    color:#f5f5f5;
    font-family:Arial,Helvetica,sans-serif;
  "
>
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="background:#0a0a0a;"
  >
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            max-width:680px;
            background:#111111;
            border:1px solid #2a2a2a;
          "
        >
          <tr>
            <td style="padding:32px 36px 20px;">
              <div
                style="
                  font-size:12px;
                  letter-spacing:4px;
                  text-transform:uppercase;
                  color:#999999;
                  margin-bottom:16px;
                "
              >
                Nouveau projet
              </div>

              <div
                style="
                  font-size:34px;
                  line-height:1.15;
                  font-weight:700;
                  color:#ffffff;
                "
              >
                Sapp3Rs<span style="color:#ff6b00;">.</span>
              </div>

              <div
                style="
                  margin-top:10px;
                  font-size:14px;
                  color:#888888;
                "
              >
                Nouvelle demande reçue depuis le site.
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:0 36px;">
              <div style="height:1px;background:#2a2a2a;"></div>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 36px 8px;">
              <div
                style="
                  font-size:11px;
                  letter-spacing:2px;
                  text-transform:uppercase;
                  color:#ff6b00;
                  margin-bottom:16px;
                "
              >
                Contact
              </div>

              <div
                style="
                  font-size:22px;
                  line-height:1.35;
                  font-weight:700;
                  color:#ffffff;
                  margin-bottom:8px;
                "
              >
                ${firstname} ${lastname}
              </div>

              <div
                style="
                  font-size:15px;
                  line-height:1.7;
                  color:#c8c8c8;
                "
              >
                ${company}
              </div>

              <div
                style="
                  font-size:15px;
                  line-height:1.7;
                  color:#c8c8c8;
                "
              >
                ${location}
              </div>

              <div style="margin-top:14px;">
                <a
                  href="mailto:${email}"
                  style="
                    color:#ff6b00;
                    text-decoration:none;
                    font-size:15px;
                  "
                >
                  ${email}
                </a>
              </div>

              <div
                style="
                  margin-top:6px;
                  font-size:15px;
                  color:#c8c8c8;
                "
              >
                ${phone}
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 36px 8px;">
              <div
                style="
                  font-size:11px;
                  letter-spacing:2px;
                  text-transform:uppercase;
                  color:#ff6b00;
                  margin-bottom:16px;
                "
              >
                Projet
              </div>

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
              >
                <tr>
                  <td
                    width="50%"
                    style="
                      padding:0 14px 16px 0;
                      vertical-align:top;
                    "
                  >
                    <div
                      style="
                        font-size:11px;
                        text-transform:uppercase;
                        letter-spacing:1px;
                        color:#777777;
                        margin-bottom:6px;
                      "
                    >
                      Nature
                    </div>

                    <div
                      style="
                        font-size:15px;
                        color:#ffffff;
                      "
                    >
                      ${type}
                    </div>
                  </td>

                  <td
                    width="50%"
                    style="
                      padding:0 0 16px 14px;
                      vertical-align:top;
                    "
                  >
                    <div
                      style="
                        font-size:11px;
                        text-transform:uppercase;
                        letter-spacing:1px;
                        color:#777777;
                        margin-bottom:6px;
                      "
                    >
                      Budget
                    </div>

                    <div
                      style="
                        font-size:15px;
                        color:#ffffff;
                      "
                    >
                      ${budget}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    colspan="2"
                    style="padding-top:2px;"
                  >
                    <div
                      style="
                        font-size:11px;
                        text-transform:uppercase;
                        letter-spacing:1px;
                        color:#777777;
                        margin-bottom:6px;
                      "
                    >
                      Date / période
                    </div>

                    <div
                      style="
                        font-size:15px;
                        color:#ffffff;
                      "
                    >
                      ${date}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 36px 36px;">
              <div
                style="
                  font-size:11px;
                  letter-spacing:2px;
                  text-transform:uppercase;
                  color:#ff6b00;
                  margin-bottom:16px;
                "
              >
                Message
              </div>

              <div
                style="
                  padding:22px;
                  background:#0a0a0a;
                  border:1px solid #262626;
                  font-size:15px;
                  line-height:1.8;
                  color:#dddddd;
                "
              >
                ${message}
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:0 36px 32px;">
              <a
                href="mailto:${email}"
                style="
                  display:inline-block;
                  padding:13px 20px;
                  background:#ff6b00;
                  color:#000000;
                  text-decoration:none;
                  font-size:14px;
                  font-weight:700;
                "
              >
                Répondre à ${firstname} →
              </a>
            </td>
          </tr>

          <tr>
            <td
              style="
                padding:22px 36px;
                border-top:1px solid #2a2a2a;
                font-size:11px;
                line-height:1.6;
                color:#666666;
              "
            >
              Demande reçue via sapp3rs.lovable.app
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function buildEmailText(data: z.infer<typeof contactSchema>) {
  return [
    "NOUVEAU PROJET — SAPP3RS",
    "",
    `Prénom : ${data.firstname}`,
    `Nom : ${data.lastname}`,
    `Entreprise : ${valueOrFallback(data.company)}`,
    `Email : ${data.email}`,
    `Téléphone : ${valueOrFallback(data.phone)}`,
    `Localisation : ${valueOrFallback(data.location)}`,
    "",
    `Nature du projet : ${data.type}`,
    `Budget : ${data.budget}`,
    `Date / période : ${valueOrFallback(data.date)}`,
    "",
    "MESSAGE :",
    data.message,
    "",
    `Répondre à : ${data.email}`,
  ].join("\n");
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const origin = request.headers.get("origin");

          if (!isAllowedOrigin(origin)) {
            return Response.json(
              {
                error: "Origine non autorisée.",
              },
              {
                status: 403,
              },
            );
          }

          const clientIp = getClientIp(request);
          const rateLimit = checkRateLimit(clientIp);

          if (!rateLimit.allowed) {
            return Response.json(
              {
                error: "Trop de demandes. Merci de patienter quelques minutes avant de réessayer.",
              },
              {
                status: 429,
                headers: {
                  "Retry-After": String(rateLimit.retryAfterSeconds),
                },
              },
            );
          }

          const contentType = request.headers.get("content-type") ?? "";

          if (!contentType.includes("application/json")) {
            return Response.json(
              {
                error: "Format de requête invalide.",
              },
              {
                status: 415,
              },
            );
          }

          const body = await request.json();

          const result = contactSchema.safeParse(body);

          if (!result.success) {
            return Response.json(
              {
                error: "Certains champs sont invalides ou manquants.",
              },
              {
                status: 400,
              },
            );
          }

          const data = result.data;

          if (data.website) {
            return Response.json({
              success: true,
            });
          }

          const resendApiKey = process.env.RESEND_API_KEY;

          if (!resendApiKey) {
            console.error("RESEND_API_KEY is not configured.");

            return Response.json(
              {
                error: "Service d'envoi non configuré.",
              },
              {
                status: 500,
              },
            );
          }

          const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendApiKey}`,
              "Content-Type": "application/json",
              "User-Agent": "sapp3rs-portfolio/1.0",
            },
            body: JSON.stringify({
              from: "Sapp3Rs <onboarding@resend.dev>",
              to: ["foryourmom.production@gmail.com"],
              reply_to: data.email,
              subject: `Nouveau projet — ${data.firstname} ${data.lastname}`,
              html: buildEmailHtml(data),
              text: buildEmailText(data),
            }),
          });

          if (!resendResponse.ok) {
            const errorBody = await resendResponse.text();

            console.error("Resend error:", errorBody);

            return Response.json(
              {
                error: "Impossible d'envoyer le message pour le moment.",
              },
              {
                status: 502,
              },
            );
          }

          return Response.json({
            success: true,
          });
        } catch (error) {
          console.error("Contact route error:", error);

          return Response.json(
            {
              error: "Une erreur est survenue lors de l'envoi.",
            },
            {
              status: 500,
            },
          );
        }
      },
    },
  },
});
