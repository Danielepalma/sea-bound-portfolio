import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SubNav } from "@/components/portfolio/SubNav";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/didattica")({
  component: TeachingLayout,
});

function TeachingLayout() {
  const { t } = useLang();
  return (
    <div>
      <SubNav
        label={t("teaching_subnav")}
        items={[
          { to: "/didattica/lezioni", label: t("nav_lessons") },
          { to: "/didattica/esercitazioni", label: t("nav_exercises") },
          { to: "/didattica/appunti", label: t("nav_notes") },
          { to: "/didattica/calcolatori", label: t("nav_calculators") },
          { to: "/didattica/formulari", label: t("nav_formularies") },
        ]}
      />
      <Outlet />
    </div>
  );
}