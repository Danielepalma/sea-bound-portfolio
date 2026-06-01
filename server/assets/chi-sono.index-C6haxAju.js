import { U as jsxRuntimeExports } from "./server-D8kZ5U2V.js";
import { c as createLucideIcon, u as useLang, d as useEditable, P as PageHeader } from "./router-C1wlfgR9.js";
import { s as skills } from "./content-DzVdtPT7.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./client-B8NoO8l8.js";
const __iconNode = [
  ["path", { d: "M12 6v16", key: "nqf5sj" }],
  ["path", { d: "m19 13 2-1a9 9 0 0 1-18 0l2 1", key: "y7qv08" }],
  ["path", { d: "M9 11h6", key: "1fldmi" }],
  ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }]
];
const Anchor = createLucideIcon("anchor", __iconNode);
const profilePhoto = "/assets/profile-B6D0C8YM.jpg";
function AboutPage() {
  const {
    t
  } = useLang();
  const lead = useEditable("about.lead");
  const p1 = useEditable("about.p1");
  const p2 = useEditable("about.p2");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { icon: "🧭", title: t("about_title"), lead }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1fr_2fr] gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nautical-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profilePhoto, alt: "Daniele Palma Esposito", width: 400, height: 400, loading: "lazy", className: "w-full aspect-square object-cover rounded-md border border-gold/40" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill pill-gold", children: "ISSNOVA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill pill-navy", children: t("teaching_role") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nautical-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base uppercase tracking-wider-2 text-navy", children: t("bio_card_title") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-relaxed text-ink-muted whitespace-pre-line", children: p1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-relaxed text-ink-muted mt-3 whitespace-pre-line", children: p2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-display uppercase tracking-wider-2 text-xs text-navy mb-3", children: t("skills_label") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pill pill-gold", children: s }, s)) })
      ] })
    ] })
  ] });
}
export {
  AboutPage as component
};
