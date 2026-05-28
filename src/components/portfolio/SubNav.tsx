import { Link, useRouterState } from "@tanstack/react-router";

export function SubNav({
  items,
  label,
}: {
  items: { to: string; label: string }[];
  label?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="mb-8">
      {label && (
        <p className="font-display text-[11px] uppercase tracking-wider-2 text-gold-700 mb-2">
          {label}
        </p>
      )}
      <div className="flex flex-wrap gap-2 border-b border-gold/30 pb-3">
        {items.map((i) => {
          const active = pathname === i.to;
          return (
            <Link
              key={i.to}
              to={i.to}
              className={`px-4 py-1.5 rounded-full text-[11px] font-display uppercase tracking-wider-2 border transition ${
                active
                  ? "bg-navy text-gold-light border-navy"
                  : "bg-white text-navy border-gold/40 hover:border-gold hover:bg-offwhite"
              }`}
            >
              {i.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}