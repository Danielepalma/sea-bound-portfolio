import { createFileRoute } from "@tanstack/react-router";
import { Sigma } from "lucide-react";
import { PageHeader } from "@/components/portfolio/Layout";
import { MaterialsList } from "@/components/portfolio/MaterialsList";
import { useLang } from "@/lib/i18n";
import { formulari } from "@/lib/content";

export const Route = createFileRoute("/didattica/formulari")({
  head: () => ({
    meta: [
      { title: "Formulari — Didattica della Navigazione" },
      { name: "description", content: "Formulari di navigazione, statica della nave e astronomia nautica." },
      { property: "og:title", content: "Formulari — Didattica" },
      { property: "og:description", content: "Formulari di riferimento." },
    ],
  }),
  component: FormulariPage,
});

function FormulariPage() {
  const { t, lang } = useLang();
  return (
    <div>
      <PageHeader
        icon="∑"
        title={t("teaching_formulari_title")}
        lead={t("teaching_formulari_lead")}
      />

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {formulari.map((g) => (
          <article key={g.title.it} className="nautical-card p-6">
            <h4 className="font-display text-base uppercase tracking-wider-2 text-navy mb-4 pb-3 border-b border-gold/30 flex items-center gap-2">
              <Sigma size={14} className="text-gold-700" />
              {g.title[lang]}
            </h4>
            <ul className="space-y-4">
              {g.formulas.map((f) => (
                <li key={f.name.it}>
                  <p className="font-display text-[13px] text-navy mb-1">{f.name[lang]}</p>
                  <p className="font-mono text-[13px] bg-offwhite border border-gold/30 rounded px-3 py-2 text-navy">
                    {f.expression}
                  </p>
                  <p className="text-[11px] text-ink-muted mt-1 font-mono">{f.legend[lang]}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h3 className="font-display text-base uppercase tracking-wider-2 text-navy mb-4">
        {lang === "it" ? "Formulari caricati" : "Uploaded formularies"}
      </h3>
      <MaterialsList area="formulari" />
    </div>
  );
}