import { U as jsxRuntimeExports } from "./server-D8kZ5U2V.js";
import { c as createLucideIcon, u as useLang, d as useEditable, P as PageHeader } from "./router-C1wlfgR9.js";
import { e as education } from "./content-DzVdtPT7.js";
import { G as GraduationCap } from "./graduation-cap-zDKxE8aY.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./client-B8NoO8l8.js";
const __iconNode$1 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$1);
const __iconNode = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const ClipboardList = createLucideIcon("clipboard-list", __iconNode);
const icons = [GraduationCap, Award, ClipboardList];
function EducationPage() {
  const {
    t,
    lang
  } = useLang();
  const lead = useEditable("education.lead");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { icon: "🎓", title: t("education_title"), lead }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pl-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-2 top-2 bottom-2 w-[2px] timeline-line rounded" }),
      education.map((e, i) => {
        const Icon = icons[i] ?? GraduationCap;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-8 last:mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-7 top-1.5 h-4 w-4 rounded-full bg-gold-gradient ring-4 ring-white" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "nautical-card p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, className: "text-gold mt-1 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display uppercase tracking-wider-2 text-sm text-navy", children: e.title[lang] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-mono text-gold-700", children: e.year })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gold-700 font-semibold", children: e.sub[lang] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-muted italic mt-0.5", children: e.inst }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted mt-3 leading-relaxed", children: e.body[lang] })
            ] })
          ] }) })
        ] }, i);
      })
    ] })
  ] });
}
export {
  EducationPage as component
};
