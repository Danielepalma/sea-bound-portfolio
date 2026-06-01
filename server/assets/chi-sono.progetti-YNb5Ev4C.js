import { U as jsxRuntimeExports } from "./server-D8kZ5U2V.js";
import { c as createLucideIcon, u as useLang, d as useEditable, P as PageHeader } from "./router-C1wlfgR9.js";
import { p as projects } from "./content-DzVdtPT7.js";
import { E as ExternalLink } from "./external-link-BahJmSA8.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./client-B8NoO8l8.js";
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode$1);
const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode);
function BadgePill({
  kind
}) {
  const {
    t
  } = useLang();
  if (kind === "horizon") return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill pill-blue", children: t("eu_horizon") });
  if (kind === "active") return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill pill-green", children: t("status_active") });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill pill-amber", children: t("eu_project") });
}
function ProjectsPage() {
  const {
    t,
    lang
  } = useLang();
  const list = Object.values(projects);
  const lead = useEditable("projects.lead");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { icon: "⚓", title: t("projects_title"), lead }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: list.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "nautical-card p-6 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-6 mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 flex md:block items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-24 w-24 md:h-28 md:w-28 rounded-md bg-white border border-gold/40 flex items-center justify-center p-2 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.logo, alt: `${p.name} logo`, className: "max-h-full max-w-full object-contain", loading: "lazy" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl uppercase tracking-wider-2 text-navy", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-navy font-semibold text-sm", children: p.sub[lang] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: p.badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(BadgePill, { kind: b }, b)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted font-mono mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.ref }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { size: 12, className: "text-gold-700" }),
              p.period[lang]
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-ink-muted leading-relaxed", children: p.long[lang] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display uppercase tracking-wider-2 text-xs text-navy mb-3", children: lang === "it" ? "Obiettivi" : "Objectives" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: p.objectives[lang].map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-ink-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16, className: "text-gold-700 mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o })
      ] }, o)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 pt-5 border-t border-gold/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.url, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 font-display uppercase tracking-wider-2 text-xs text-gold-700 hover:text-navy transition", children: [
        lang === "it" ? "Sito ufficiale" : "Official site",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 12 })
      ] }) })
    ] }, p.name)) })
  ] });
}
export {
  ProjectsPage as component
};
