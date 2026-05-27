import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { PageHeader } from "@/components/portfolio/Layout";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Accesso amministratore" }] }),
  component: LoginPage,
});

function LoginPage() {
  const { lang } = useLang();
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (user && isAdmin) {
    navigate({ to: "/admin" });
  }

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    const { error } =
      mode === "signin"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email,
            password,
            options: { emailRedirectTo: `${window.location.origin}/admin` },
          });
    setBusy(false);
    if (error) setErr(error.message);
    else navigate({ to: "/admin" });
  };

  return (
    <div className="max-w-md mx-auto">
      <PageHeader
        icon="🔐"
        title={lang === "it" ? "Area amministratore" : "Admin area"}
        lead={
          lang === "it"
            ? "Accedi per gestire i materiali didattici."
            : "Sign in to manage teaching materials."
        }
      />
      <form onSubmit={submit} className="nautical-card p-6 space-y-4">
        <div>
          <label className="block text-xs font-display uppercase tracking-wider-2 text-navy mb-1">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gold/40 rounded px-3 py-2 text-sm bg-offwhite"
          />
        </div>
        <div>
          <label className="block text-xs font-display uppercase tracking-wider-2 text-navy mb-1">
            Password
          </label>
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gold/40 rounded px-3 py-2 text-sm bg-offwhite"
          />
        </div>
        {err && <p className="text-red-700 text-xs">{err}</p>}
        <button type="submit" disabled={busy} className="btn-navy w-full">
          {busy
            ? "..."
            : mode === "signin"
              ? lang === "it"
                ? "Accedi"
                : "Sign in"
              : lang === "it"
                ? "Registrati"
                : "Sign up"}
        </button>
        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="block w-full text-center text-xs text-gold-700 hover:text-navy underline-offset-2 hover:underline"
        >
          {mode === "signin"
            ? lang === "it"
              ? "Prima volta? Registrati"
              : "First time? Sign up"
            : lang === "it"
              ? "Hai già un account? Accedi"
              : "Already have an account? Sign in"}
        </button>
      </form>
    </div>
  );
}