import { useEffect } from "react";
import { X, ExternalLink, Download } from "lucide-react";
import { useLang } from "@/lib/i18n";

function extOf(path: string) {
  return (path.split(".").pop() ?? "").toLowerCase();
}

export function MaterialPreview({
  url,
  title,
  onClose,
}: {
  url: string;
  title: string;
  onClose: () => void;
}) {
  const { t } = useLang();
  const ext = extOf(url.split("?")[0]);
  const isPdf = ext === "pdf";
  const isImage = ["png", "jpg", "jpeg", "webp", "gif", "svg"].includes(ext);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-md shadow-xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-gold/30 bg-offwhite">
          <h3 className="font-display text-sm uppercase tracking-wider-2 text-navy truncate">
            {title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs inline-flex items-center gap-1 text-gold-700 hover:text-navy"
            >
              <ExternalLink size={12} /> {t("open_label")}
            </a>
            <a
              href={url}
              download
              className="text-xs inline-flex items-center gap-1 text-gold-700 hover:text-navy"
            >
              <Download size={12} /> {t("download_label")}
            </a>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-gold/20 text-navy"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        <div className="flex-1 min-h-0 bg-offwhite">
          {isPdf ? (
            <iframe src={url} title={title} className="w-full h-[80vh] border-0" />
          ) : isImage ? (
            <div className="w-full h-full flex items-center justify-center p-4 overflow-auto">
              <img src={url} alt={title} className="max-w-full max-h-[80vh] object-contain" />
            </div>
          ) : (
            <div className="p-10 text-center text-sm text-ink-muted">
              {t("no_preview_available")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}