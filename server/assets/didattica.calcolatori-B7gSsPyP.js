import { U as jsxRuntimeExports } from "./server-D8kZ5U2V.js";
import { c as createLucideIcon, u as useLang, P as PageHeader } from "./router-C1wlfgR9.js";
import { M as MaterialsList } from "./MaterialsList-xnEC7h-T.js";
import { c as calculators } from "./content-DzVdtPT7.js";
import { C as Calculator } from "./calculator-D8lpS7xD.js";
import { A as ArrowUpRight } from "./file-spreadsheet-DOyNMqyj.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./client-B8NoO8l8.js";
import "./external-link-BahJmSA8.js";
import "./download-3xV878aC.js";
import "./file-text-Ck35KvmI.js";
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function CalcolatoriPage() {
  const {
    t,
    lang
  } = useLang();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { icon: "🧮", title: t("teaching_calc_title"), lead: t("teaching_calc_lead") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5 mb-10", children: calculators.map((c) => {
      const featured = c.status === "featured";
      const soon = c.status === "soon";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `nautical-card p-6 flex flex-col ${featured ? "md:col-span-2 border-gold" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold text-lg", children: c.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base md:text-lg uppercase tracking-wider-2 text-navy", children: c.title[lang] })
          ] }),
          featured && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pill pill-gold inline-flex shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 11 }),
            " ",
            t("teaching_featured")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] text-ink-muted leading-relaxed mb-4", children: c.body[lang] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-5", children: c.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill pill-navy", children: tag }, tag)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: soon ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill pill-amber inline-flex", children: t("teaching_soon") }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: c.href, target: "_blank", rel: "noopener noreferrer", className: "btn-navy inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { size: 14 }),
          " ",
          t("teaching_open"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14 })
        ] }) })
      ] }, c.title.it);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base uppercase tracking-wider-2 text-navy mb-4", children: lang === "it" ? "Altri calcolatori caricati" : "Other uploaded calculators" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MaterialsList, { area: "calcolatori" })
  ] });
}
export {
  CalcolatoriPage as component
};
