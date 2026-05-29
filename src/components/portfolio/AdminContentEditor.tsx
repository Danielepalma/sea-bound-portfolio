import { useEffect, useMemo, useState } from "react";
import { Save, RotateCcw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { EDITABLE } from "@/lib/editable-keys";
import { usePageContent } from "@/hooks/use-page-content";
import { useAuth } from "@/hooks/use-auth";

type Row = { key: string; value_it: string; value_en: string };

export function AdminContentEditor() {
  const { user } = useAuth();
  const { values, refresh } = usePageContent();
  const [draft, setDraft] = useState<Record<string, { it: string; en: string }>>({});
  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  // seed draft from current DB or defaults
  useEffect(() => {
    const next: Record<string, { it: string; en: string }> = {};
    for (const [key, def] of Object.entries(EDITABLE)) {
      const row = values[key];
      next[key] = {
        it: row?.it ?? def.defaultIt,
        en: row?.en ?? def.defaultEn,
      };
    }
    setDraft(next);
  }, [values]);

  const groups = useMemo(() => {
    const g: Record<string, string[]> = {};
    for (const [key, def] of Object.entries(EDITABLE)) {
      (g[def.page] ??= []).push(key);
    }
    return g;
  }, []);

  const save = async (key: string) => {
    setSavingKey(key);
    setErr(null);
    const row: Row = {
      key,
      value_it: draft[key]?.it ?? "",
      value_en: draft[key]?.en ?? "",
    };
    const { error } = await supabase
      .from("page_content")
      .upsert({ ...row, updated_by: user?.id, updated_at: new Date().toISOString() });
    setSavingKey(null);
    if (error) {
      setErr(error.message);
      return;
    }
    await refresh();
  };

  const resetToDefault = (key: string) => {
    const def = EDITABLE[key];
    setDraft((d) => ({ ...d, [key]: { it: def.defaultIt, en: def.defaultEn } }));
  };

  return (
    <div className="space-y-8">
      {err && <p className="text-red-700 text-xs">{err}</p>}
      {Object.entries(groups).map(([page, keys]) => (
        <section key={page}>
          <h3 className="font-display uppercase tracking-wider-2 text-sm text-navy mb-3 pb-2 border-b border-gold/30">
            {page}
          </h3>
          <div className="space-y-4">
            {keys.map((key) => {
              const def = EDITABLE[key];
              const d = draft[key] ?? { it: "", en: "" };
              const Field = def.multiline ? "textarea" : "input";
              const sharedCls =
                "w-full px-3 py-2 rounded border border-gold/40 bg-offwhite text-sm font-mono";
              return (
                <div key={key} className="nautical-card p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <p className="font-display uppercase tracking-wider-2 text-xs text-navy">
                      {def.label}
                    </p>
                    <code className="text-[10px] text-ink-muted">{key}</code>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <label className="text-xs">
                      <span className="block text-navy mb-1">Italiano</span>
                      <Field
                        value={d.it}
                        rows={def.multiline ? 4 : undefined}
                        onChange={(e) =>
                          setDraft((s) => ({ ...s, [key]: { ...s[key], it: e.target.value } }))
                        }
                        className={sharedCls}
                      />
                    </label>
                    <label className="text-xs">
                      <span className="block text-navy mb-1">English</span>
                      <Field
                        value={d.en}
                        rows={def.multiline ? 4 : undefined}
                        onChange={(e) =>
                          setDraft((s) => ({ ...s, [key]: { ...s[key], en: e.target.value } }))
                        }
                        className={sharedCls}
                      />
                    </label>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => save(key)}
                      disabled={savingKey === key}
                      className="btn-navy inline-flex items-center gap-2 text-xs"
                    >
                      <Save size={12} /> {savingKey === key ? "…" : "Salva"}
                    </button>
                    <button
                      onClick={() => resetToDefault(key)}
                      className="text-xs text-gold-700 hover:text-navy inline-flex items-center gap-1"
                    >
                      <RotateCcw size={12} /> Default
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}