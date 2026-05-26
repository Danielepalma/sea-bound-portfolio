import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daniele Palma Esposito — Ricercatore e Docente di Navigazione" },
      {
        name: "description",
        content:
          "Portfolio di Daniele Palma Esposito, ricercatore in sostenibilità dei trasporti presso ISSNOVA e docente di Navigazione all'ITTL. Progetti europei MASS, AENEAS, FLEXSHIP.",
      },
      { property: "og:title", content: "Daniele Palma Esposito — Navigazione & Ricerca" },
      {
        property: "og:description",
        content:
          "Ricercatore in sostenibilità dei trasporti marittimi e docente di Navigazione. Progetti Horizon Europe, GNSS, MASS, Sensor Fusion.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <PortfolioPage />;
}
