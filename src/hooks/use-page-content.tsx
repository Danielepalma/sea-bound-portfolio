import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";
import { EDITABLE } from "@/lib/editable-keys";

type Row = { key: string; value_it: string; value_en: string };
type Map = Record<string, { it: string; en: string }>;

type Ctx = {
  values: Map;
  loading: boolean;
  refresh: () => Promise<void>;
};

const PageContentCtx = createContext<Ctx | null>(null);

export function PageContentProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState<Map>({});
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    const { data } = await supabase.from("page_content").select("key,value_it,value_en");
    const map: Map = {};
    for (const r of (data ?? []) as Row[]) {
      map[r.key] = { it: r.value_it ?? "", en: r.value_en ?? "" };
    }
    setValues(map);
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const ctx = useMemo(() => ({ values, loading, refresh }), [values, loading, refresh]);
  return <PageContentCtx.Provider value={ctx}>{children}</PageContentCtx.Provider>;
}

function usePageContentCtx() {
  const c = useContext(PageContentCtx);
  if (!c) throw new Error("PageContentProvider missing");
  return c;
}

/**
 * Return the live (DB) value for a given content key, falling back to the
 * default declared in src/lib/editable-keys.ts.
 */
export function useEditable(key: string): string {
  const { lang } = useLang();
  const { values } = usePageContentCtx();
  const def = EDITABLE[key];
  const row = values[key];
  const v = row ? (lang === "it" ? row.it : row.en) : "";
  if (v && v.trim().length > 0) return v;
  if (!def) return "";
  return lang === "it" ? def.defaultIt : def.defaultEn;
}

export function usePageContent() {
  return usePageContentCtx();
}