import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio/Layout";
import { MaterialsList } from "@/components/portfolio/MaterialsList";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/didattica/esercitazioni")({
  head: () => ({
    meta: [
      { title: "Esercitazioni — Didattica della Navigazione" },
      { name: "description", content: "Compiti, esercizi guidati e giochi didattici divisi per argomento." },
      { property: "og:title", content: "Esercitazioni — Didattica" },
      { property: "og:description", content: "Compiti, esercizi e giochi didattici." },
    ],
  }),
  component: EsercitazioniPage,
});

function EsercitazioniPage() {
  const { t } = useLang();
  return (
    <div>
      <PageHeader
        icon="🎯"
        title={t("teaching_exercises_title")}
        lead={t("teaching_exercises_lead")}
      />
      <MaterialsList area="esercitazioni" />
    </div>
  );
}