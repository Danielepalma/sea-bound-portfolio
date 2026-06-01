import { U as jsxRuntimeExports } from "./server-D8kZ5U2V.js";
import { u as useLang, P as PageHeader } from "./router-C1wlfgR9.js";
import { M as MaterialsList } from "./MaterialsList-xnEC7h-T.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./client-B8NoO8l8.js";
import "./external-link-BahJmSA8.js";
import "./download-3xV878aC.js";
import "./file-spreadsheet-DOyNMqyj.js";
import "./file-text-Ck35KvmI.js";
function AppuntiPage() {
  const {
    lang,
    t
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { icon: "📝", title: lang === "it" ? "Appunti" : "Notes", lead: t("teaching_notes_lead") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MaterialsList, { area: "appunti" })
  ] });
}
export {
  AppuntiPage as component
};
