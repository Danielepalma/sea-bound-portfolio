import { r as reactExports, U as jsxRuntimeExports } from "./server-D8kZ5U2V.js";
import { u as useLang, a as useAuth, b as useNavigate, P as PageHeader } from "./router-C1wlfgR9.js";
import { s as supabase } from "./client-B8NoO8l8.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function LoginPage() {
  const {
    lang
  } = useLang();
  const {
    user,
    isAdmin
  } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [mode, setMode] = reactExports.useState("signin");
  const [err, setErr] = reactExports.useState(null);
  const [busy, setBusy] = reactExports.useState(false);
  if (user && isAdmin) {
    navigate({
      to: "/admin"
    });
  }
  const submit = async (e) => {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    const {
      error
    } = mode === "signin" ? await supabase.auth.signInWithPassword({
      email,
      password
    }) : await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`
      }
    });
    setBusy(false);
    if (error) setErr(error.message);
    else navigate({
      to: "/admin"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { icon: "🔐", title: lang === "it" ? "Area amministratore" : "Admin area", lead: lang === "it" ? "Accedi per gestire i materiali didattici." : "Sign in to manage teaching materials." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "nautical-card p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-display uppercase tracking-wider-2 text-navy mb-1", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), className: "w-full border border-gold/40 rounded px-3 py-2 text-sm bg-offwhite" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-display uppercase tracking-wider-2 text-navy mb-1", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", required: true, minLength: 6, value: password, onChange: (e) => setPassword(e.target.value), className: "w-full border border-gold/40 rounded px-3 py-2 text-sm bg-offwhite" })
      ] }),
      err && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-700 text-xs", children: err }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: busy, className: "btn-navy w-full", children: busy ? "..." : mode === "signin" ? lang === "it" ? "Accedi" : "Sign in" : lang === "it" ? "Registrati" : "Sign up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setMode(mode === "signin" ? "signup" : "signin"), className: "block w-full text-center text-xs text-gold-700 hover:text-navy underline-offset-2 hover:underline", children: mode === "signin" ? lang === "it" ? "Prima volta? Registrati" : "First time? Sign up" : lang === "it" ? "Hai già un account? Accedi" : "Already have an account? Sign in" })
    ] })
  ] });
}
export {
  LoginPage as component
};
