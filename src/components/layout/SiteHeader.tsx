import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/processo", label: "Processo" },
  { to: "/orcamento", label: "Orçamento" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b-[3px] border-border bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="halftone flex size-11 items-center justify-center border-2 border-border bg-primary">
            <span className="font-stencil text-lg font-bold uppercase text-primary-foreground">
              NS
            </span>
          </span>
          <span className="leading-none">
            <span className="ink-press block font-display text-xl font-black uppercase tracking-tight">
              NAI SILK
            </span>
            <span className="font-type text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
              Arte Personalizada · Serigrafia
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary border-primary" }}
              className="border-b-2 border-transparent pb-1 font-stencil text-sm uppercase tracking-[0.14em] transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/admin"
            className="font-type text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary"
          >
            Área do proprietário
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="border-2 border-border p-2 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t-2 border-border bg-paper-deep px-4 py-3 md:hidden">
          {[...NAV, { to: "/admin", label: "Área do proprietário" } as const].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="border-b border-border/40 py-3 font-stencil text-sm uppercase tracking-[0.14em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
