import { U as jsxRuntimeExports, $ as Outlet } from "./server-D8kZ5U2V.js";
import { S as SubNav } from "./SubNav-C1_bulK-.js";
import { u as useLang } from "./router-C1wlfgR9.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./client-B8NoO8l8.js";
function AboutLayout() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubNav, { label: t("about_subnav"), items: [{
      to: "/chi-sono",
      label: t("nav_profile")
    }, {
      to: "/chi-sono/progetti",
      label: t("nav_projects")
    }, {
      to: "/chi-sono/formazione",
      label: t("nav_education")
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
export {
  AboutLayout as component
};
