import { r as reactExports, U as jsxRuntimeExports } from "./server-D8kZ5U2V.js";
import { s as supabase } from "./client-B8NoO8l8.js";
import { c as createLucideIcon, u as useLang, X } from "./router-C1wlfgR9.js";
import { E as ExternalLink } from "./external-link-BahJmSA8.js";
import { D as Download } from "./download-3xV878aC.js";
import { A as ArrowUpRight, F as FileSpreadsheet } from "./file-spreadsheet-DOyNMqyj.js";
import { F as FileText } from "./file-text-Ck35KvmI.js";
const __iconNode = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode);
function extOf(path) {
  return (path.split(".").pop() ?? "").toLowerCase();
}
function MaterialPreview({
  url,
  title,
  onClose
}) {
  const { t } = useLang();
  const ext = extOf(url.split("?")[0]);
  const isPdf = ext === "pdf";
  const isImage = ["png", "jpg", "jpeg", "webp", "gif", "svg"].includes(ext);
  reactExports.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white rounded-md shadow-xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 px-5 py-3 border-b border-gold/30 bg-offwhite", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm uppercase tracking-wider-2 text-navy truncate", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-xs inline-flex items-center gap-1 text-gold-700 hover:text-navy",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 12 }),
                      " ",
                      t("open_label")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: url,
                    download: true,
                    className: "text-xs inline-flex items-center gap-1 text-gold-700 hover:text-navy",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 12 }),
                      " ",
                      t("download_label")
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: onClose,
                    className: "p-1 rounded hover:bg-gold/20 text-navy",
                    "aria-label": "Close",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-h-0 bg-offwhite", children: isPdf ? /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: url, title, className: "w-full h-[80vh] border-0" }) : isImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center p-4 overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: url, alt: title, className: "max-w-full max-h-[80vh] object-contain" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-ink-muted", children: t("no_preview_available") }) })
          ]
        }
      )
    }
  );
}
const IMG_EXT = /\.(png|jpe?g|gif|webp|svg|avif)$/i;
function MaterialIcon({ kind }) {
  if (kind === "xls") return /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { size: 18, className: "text-gold-700" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 18, className: "text-gold-700" });
}
function MaterialsList({ area }) {
  const { lang, t } = useLang();
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [preview, setPreview] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setLoading(true);
    supabase.from("materials").select("*").eq("area", area).order("topic_order").order("topic").order("sort_order").then(({ data }) => {
      setItems(data ?? []);
      setLoading(false);
    });
  }, [area]);
  const groups = reactExports.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const m of items) {
      const key = (m.topic ?? "").trim();
      const label = key.length > 0 ? key : t("materials_general_group");
      const g = map.get(label) ?? { label, order: m.topic_order ?? 0, items: [] };
      g.items.push(m);
      map.set(label, g);
    }
    return [...map.values()].sort((a, b) => a.order - b.order || a.label.localeCompare(b.label));
  }, [items, t]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-muted text-sm italic", children: "…" });
  }
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ink-muted text-sm italic", children: lang === "it" ? "Nessun materiale disponibile al momento." : "No materials available yet." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[13px] uppercase tracking-wider-2 text-gold-700 border-b border-gold/30 pb-1 mb-3", children: g.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: g.items.map((m) => {
        const url = supabase.storage.from("materials").getPublicUrl(m.file_path).data.publicUrl;
        const title = lang === "it" ? m.title_it : m.title_en;
        const meta = lang === "it" ? m.meta_it : m.meta_en;
        const thumbUrl = m.thumbnail_path ? supabase.storage.from("materials").getPublicUrl(m.thumbnail_path).data.publicUrl : IMG_EXT.test(m.file_path) ? url : null;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "nautical-card p-4 flex items-start gap-3 group hover:-translate-y-0.5 transition-transform min-w-0",
            children: [
              thumbUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setPreview({ url, title }),
                  className: "h-16 w-16 shrink-0 rounded-md overflow-hidden border border-gold/50 bg-offwhite",
                  "aria-label": t("preview_label"),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: thumbUrl, alt: "", loading: "lazy", className: "h-full w-full object-cover" })
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 shrink-0 rounded-full bg-offwhite border border-gold/50 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MaterialIcon, { kind: m.icon }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm text-navy leading-snug", children: title }),
                meta && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-ink-muted mt-1 font-mono", children: meta }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-2 text-[11px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setPreview({ url, title }),
                      className: "inline-flex items-center gap-1 text-gold-700 hover:text-navy",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 12 }),
                        " ",
                        t("preview_label")
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-1 text-gold-700 hover:text-navy",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 12 }),
                        " ",
                        t("open_label")
                      ]
                    }
                  )
                ] })
              ] })
            ]
          },
          m.id
        );
      }) })
    ] }, g.label)) }),
    preview && /* @__PURE__ */ jsxRuntimeExports.jsx(MaterialPreview, { url: preview.url, title: preview.title, onClose: () => setPreview(null) })
  ] });
}
export {
  MaterialsList as M
};
