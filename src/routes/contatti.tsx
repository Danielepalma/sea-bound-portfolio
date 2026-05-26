import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Compass, Linkedin, Send } from "lucide-react";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Daniele Palma Esposito" },
      { name: "description", content: "Contatti per collaborazioni di ricerca e interventi accademici." },
      { property: "og:title", content: "Contatti — Daniele Palma Esposito" },
      { property: "og:description", content: "Contatti professionali e link LinkedIn." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <div>
      <PageHeader icon="✉️" title={t("contact_title")} lead={t("contact_lead")} />

      <div className="grid md:grid-cols-[2fr_1fr] gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
            (e.target as HTMLFormElement).reset();
          }}
          className="nautical-card p-6 md:p-8 space-y-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="h-9 w-9 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold">
              <Mail size={16} />
            </span>
            <h3 className="font-display text-base uppercase tracking-wider-2 text-navy">
              {t("form_send")}
            </h3>
          </div>
          <div>
            <label className="block text-xs font-display uppercase tracking-wider-2 text-navy mb-1.5">
              {t("form_name")}
            </label>
            <input
              required
              type="text"
              className="w-full px-3 py-2.5 rounded border border-gold/40 bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-display uppercase tracking-wider-2 text-navy mb-1.5">
              {t("form_email")}
            </label>
            <input
              required
              type="email"
              className="w-full px-3 py-2.5 rounded border border-gold/40 bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-display uppercase tracking-wider-2 text-navy mb-1.5">
              {t("form_message")}
            </label>
            <textarea
              required
              rows={5}
              className="w-full px-3 py-2.5 rounded border border-gold/40 bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 text-sm"
            />
          </div>
          <button type="submit" className="btn-navy inline-flex items-center gap-2">
            <Send size={14} /> {sent ? t("form_sent") : t("form_send")}
          </button>
        </form>

        <div className="space-y-4">
          <div className="nautical-card p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-9 w-9 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold">
                <MapPin size={16} />
              </span>
              <h3 className="font-display text-sm uppercase tracking-wider-2 text-navy">
                {t("location_label")}
              </h3>
            </div>
            <p className="text-sm text-ink-muted">📍 {t("location")}</p>
          </div>
          <div className="nautical-card p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-9 w-9 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold">
                <Compass size={16} />
              </span>
              <h3 className="font-display text-sm uppercase tracking-wider-2 text-navy">
                {t("affiliation_label")}
              </h3>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed">{t("affiliation_body")}</p>
          </div>
          <a
            href="https://www.linkedin.com/in/daniele-palma-esposito-402055153/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy w-full inline-flex items-center justify-center gap-2"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}