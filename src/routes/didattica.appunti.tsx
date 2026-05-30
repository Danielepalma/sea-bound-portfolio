import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio/Layout";
import { MaterialsList } from "@/components/portfolio/MaterialsList";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/didattica/appunti")({
  head: () => ({
    meta: [
      { title: "Appunti — Didattica della Navigazione" },
      { name: "description", content: "Dispense, appunti ed esercizi svolti." },
      { property: "og:title", content: "Appunti — Didattica" },
      { property: "og:description", content: "Dispense ed esercizi." },
    ],
  }),
  component: AppuntiPage,
});

function AppuntiPage() {
  const { lang, t } = useLang();
  return (
    <div>
      <PageHeader
        icon="📝"
        title={lang === "it" ? "Appunti" : "Notes"}
        lead={t("teaching_notes_lead")}
      />
      <MaterialsList area="appunti" />
    </div>
  );
}