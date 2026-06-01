import { U as jsxRuntimeExports, $ as Outlet } from "./server-D8kZ5U2V.js";
import { S as SubNav } from "./SubNav-C1_bulK-.js";
import { u as useLang } from "./router-C1wlfgR9.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./client-B8NoO8l8.js";
function TeachingLayout() {
  const {
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SubNav, { label: t("teaching_subnav"), items: [{
      to: "/didattica/lezioni",
      label: t("nav_lessons")
    }, {
      to: "/didattica/esercitazioni",
      label: t("nav_exercises")
    }, {
      to: "/didattica/appunti",
      label: t("nav_notes")
    }, {
      to: "/didattica/calcolatori",
      label: t("nav_calculators")
    }, {
      to: "/didattica/formulari",
      label: t("nav_formularies")
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
export {
  TeachingLayout as component
};
