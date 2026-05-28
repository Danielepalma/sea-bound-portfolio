import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SubNav } from "@/components/portfolio/SubNav";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/chi-sono")({
  component: AboutLayout,
});

function AboutLayout() {
  const { t } = useLang();
  return (
    <div>
      <SubNav
        label={t("about_subnav")}
        items={[
          { to: "/chi-sono", label: t("nav_profile") },
          { to: "/chi-sono/progetti", label: t("nav_projects") },
          { to: "/chi-sono/formazione", label: t("nav_education") },
        ]}
      />
      <Outlet />
    </div>
  );
}