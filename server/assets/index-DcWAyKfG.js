import { U as jsxRuntimeExports } from "./server-D8kZ5U2V.js";
import { c as createLucideIcon, u as useLang, d as useEditable, m as motion, C as Compass, L as Link } from "./router-C1wlfgR9.js";
import { F as FileText } from "./file-text-Ck35KvmI.js";
import { C as Calculator } from "./calculator-D8lpS7xD.js";
import { G as GraduationCap } from "./graduation-cap-zDKxE8aY.js";
import { M as Mail } from "./mail-BmUIzLpj.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./client-B8NoO8l8.js";
const __iconNode$4 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",
      key: "wuwx1p"
    }
  ]
];
const Sigma = createLucideIcon("sigma", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function Index() {
  const {
    t
  } = useLang();
  const heroTitle = useEditable("home.hero.title");
  const heroBody = useEditable("home.hero.body");
  const teachingCards = [{
    to: "/didattica/lezioni",
    icon: BookOpen,
    label: t("nav_lessons"),
    body: t("teaching_lessons_lead")
  }, {
    to: "/didattica/esercitazioni",
    icon: Target,
    label: t("nav_exercises"),
    body: t("teaching_exercises_lead")
  }, {
    to: "/didattica/appunti",
    icon: FileText,
    label: t("nav_notes"),
    body: t("teaching_notes_lead")
  }, {
    to: "/didattica/calcolatori",
    icon: Calculator,
    label: t("nav_calculators"),
    body: t("teaching_calc_lead")
  }, {
    to: "/didattica/formulari",
    icon: Sigma,
    label: t("nav_formularies"),
    body: t("teaching_formulari_lead")
  }];
  const secondary = [{
    to: "/chi-sono",
    icon: User,
    label: t("nav_about")
  }, {
    to: "/cv",
    icon: GraduationCap,
    label: t("nav_cv")
  }, {
    to: "/contatti",
    icon: Mail,
    label: t("nav_contact")
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.section, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.6
    }, className: "bg-navy-gradient text-white rounded-md p-8 md:p-10 mb-10 border border-gold/30 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-[11px] uppercase tracking-wider-2 text-gold mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "inline mr-2", size: 14 }),
        " ",
        heroTitle
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-4xl text-gold-light mb-4 leading-tight", children: heroTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 max-w-2xl leading-relaxed mb-6", children: heroBody }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/didattica/lezioni", className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-navy font-display uppercase tracking-wider-2 text-xs hover:opacity-90 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 14 }),
        " ",
        t("home_teaching_cta"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title text-xl mb-6", children: t("nav_teaching") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-5 mb-12", children: teachingCards.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 16
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.4,
      delay: i * 0.05
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: "nautical-card p-6 block group h-full hover:-translate-y-1 transition-transform", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { size: 18 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display uppercase tracking-wider-2 text-sm text-navy", children: c.label })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted leading-relaxed mb-4 line-clamp-3", children: c.body }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-gold-700 font-display uppercase tracking-wider-2 text-[11px] group-hover:gap-2.5 transition-all", children: [
        t("read_more"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
      ] })
    ] }) }, c.to)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title text-xl mb-6", children: t("home_more") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: secondary.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.to, className: "nautical-card p-4 flex items-center gap-3 hover:-translate-y-0.5 transition-transform", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-full bg-offwhite border border-gold/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { size: 16, className: "text-gold-700" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display uppercase tracking-wider-2 text-xs text-navy", children: c.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12, className: "ml-auto text-gold-700" })
    ] }, c.to)) })
  ] });
}
export {
  Index as component
};
