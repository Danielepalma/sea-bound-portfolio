import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio/Layout";
import { MaterialsList } from "@/components/portfolio/MaterialsList";
import { useLang } from "@/lib/i18n";

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
  const { t } = useLang();
  return (
    <div>
      <PageHeader
        icon="∑"
        title={t("teaching_formulari_title")}
        lead={t("teaching_formulari_lead")}
      />
      <MaterialsList area="formulari" />
    </div>
  );
}