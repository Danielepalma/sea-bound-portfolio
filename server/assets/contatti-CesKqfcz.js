import { U as jsxRuntimeExports } from "./server-D8kZ5U2V.js";
import { u as useLang, d as useEditable, P as PageHeader, M as MapPin, C as Compass } from "./router-C1wlfgR9.js";
import { M as Mail } from "./mail-BmUIzLpj.js";
import { L as Linkedin } from "./linkedin-Drvfzoxx.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./client-B8NoO8l8.js";
function ContactPage() {
  const {
    t,
    lang
  } = useLang();
  const email = useEditable("contact.email");
  const linkedin = useEditable("contact.linkedin");
  const location = useEditable("contact.location");
  const affiliation = useEditable("contact.affiliation");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { icon: "✉️", title: t("contact_title"), lead: t("contact_lead") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${email}`, className: "nautical-card p-6 group hover:-translate-y-0.5 transition-transform", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm uppercase tracking-wider-2 text-navy", children: "Email" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted break-all", children: email }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-2 text-xs font-display uppercase tracking-wider-2 text-gold-700 group-hover:text-navy transition", children: [
          lang === "it" ? "Scrivimi" : "Write me",
          " →"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: linkedin, target: "_blank", rel: "noopener noreferrer", className: "nautical-card p-6 group hover:-translate-y-0.5 transition-transform", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm uppercase tracking-wider-2 text-navy", children: "LinkedIn" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted", children: lang === "it" ? "Profilo professionale" : "Professional profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-2 text-xs font-display uppercase tracking-wider-2 text-gold-700 group-hover:text-navy transition", children: [
          lang === "it" ? "Apri" : "Open",
          " →"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nautical-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm uppercase tracking-wider-2 text-navy", children: t("location_label") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted", children: location })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nautical-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-10 w-10 rounded-full bg-navy text-gold-light flex items-center justify-center border border-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { size: 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm uppercase tracking-wider-2 text-navy", children: t("affiliation_label") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-muted leading-relaxed whitespace-pre-line", children: affiliation })
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};
