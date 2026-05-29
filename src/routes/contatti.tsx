import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Compass, Linkedin } from "lucide-react";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";
import { useEditable } from "@/hooks/use-page-content";

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
  const { t, lang } = useLang();
  const email = useEditable("contact.email");
  const linkedin = useEditable("contact.linkedin");
  const location = useEditable("contact.location");
  const affiliation = useEditable("contact.affiliation");

  return (
    <div>
      <PageHeader icon="✉️" title={t("contact_title")} lead={t("contact_lead")} />

      <div className="grid md:grid-cols-2 gap-5">
        <a
          href={`mailto:${email}`}
          className="nautical-card p-6 group hover:-translate-y-0.5 transition-transform"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold">
              <Mail size={18} />
            </span>
            <h3 className="font-display text-sm uppercase tracking-wider-2 text-navy">
              Email
            </h3>
          </div>
          <p className="text-sm text-ink-muted break-all">{email}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-display uppercase tracking-wider-2 text-gold-700 group-hover:text-navy transition">
            {lang === "it" ? "Scrivimi" : "Write me"} →
          </span>
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="nautical-card p-6 group hover:-translate-y-0.5 transition-transform"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold">
              <Linkedin size={18} />
            </span>
            <h3 className="font-display text-sm uppercase tracking-wider-2 text-navy">
              LinkedIn
            </h3>
          </div>
          <p className="text-sm text-ink-muted">
            {lang === "it" ? "Profilo professionale" : "Professional profile"}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-display uppercase tracking-wider-2 text-gold-700 group-hover:text-navy transition">
            {lang === "it" ? "Apri" : "Open"} →
          </span>
        </a>

        <div className="nautical-card p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold">
              <MapPin size={18} />
            </span>
            <h3 className="font-display text-sm uppercase tracking-wider-2 text-navy">
              {t("location_label")}
            </h3>
          </div>
          <p className="text-sm text-ink-muted">{location}</p>
        </div>

        <div className="nautical-card p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold">
              <Compass size={18} />
            </span>
            <h3 className="font-display text-sm uppercase tracking-wider-2 text-navy">
              {t("affiliation_label")}
            </h3>
          </div>
          <p className="text-sm text-ink-muted leading-relaxed whitespace-pre-line">{affiliation}</p>
        </div>
      </div>
    </div>
  );
}