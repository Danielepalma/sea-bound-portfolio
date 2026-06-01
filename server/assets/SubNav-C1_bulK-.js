import { U as jsxRuntimeExports } from "./server-D8kZ5U2V.js";
import { e as useRouterState, L as Link } from "./router-C1wlfgR9.js";
function SubNav({
  items,
  label
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mb-8", children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[11px] uppercase tracking-wider-2 text-gold-700 mb-2", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 border-b border-gold/30 pb-3", children: items.map((i) => {
      const active = pathname === i.to;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: i.to,
          className: `px-4 py-1.5 rounded-full text-[11px] font-display uppercase tracking-wider-2 border transition ${active ? "bg-navy text-gold-light border-navy" : "bg-white text-navy border-gold/40 hover:border-gold hover:bg-offwhite"}`,
          children: i.label
        },
        i.to
      );
    }) })
  ] });
}
export {
  SubNav as S
};
