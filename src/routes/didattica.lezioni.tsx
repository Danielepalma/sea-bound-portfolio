import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/portfolio/Layout";
import { MaterialsList } from "@/components/portfolio/MaterialsList";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/didattica/lezioni")({
  head: () => ({
    meta: [
      { title: "Lezioni — Didattica della Navigazione" },
      { name: "description", content: "Lezioni e presentazioni per gli studenti dell'ITTL." },
      { property: "og:title", content: "Lezioni — Didattica" },
      { property: "og:description", content: "Lezioni per gli studenti." },
    ],
  }),
  component: LezioniPage,
});

function LezioniPage() {
  const { lang } = useLang();
  return (
    <div>
      <PageHeader
        icon="📖"
        title={lang === "it" ? "Lezioni" : "Lessons"}
        lead={
          lang === "it"
            ? "Slide, presentazioni e lezioni svolte in classe."
            : "Slides, presentations and in-class lessons."
        }
      />
      <MaterialsList area="lezioni" />
    </div>
  );
}