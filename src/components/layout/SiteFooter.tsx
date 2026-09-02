import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="rule-thick mt-20 bg-paper-deep">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="ink-press font-display text-2xl font-black uppercase">NAI SILK</h2>
          <p className="mt-2 font-type text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Arte Personalizada · Serigrafia
          </p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Estampas personalizadas em camisetas pelo processo artesanal de silkscreen.
          </p>
        </div>

        <div>
          <h3 className="font-stencil text-sm uppercase tracking-[0.18em]">Navegação</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/servicos" className="hover:text-primary">Serviços</Link></li>
            <li><Link to="/processo" className="hover:text-primary">Processo</Link></li>
            <li><Link to="/orcamento" className="hover:text-primary">Solicitar orçamento</Link></li>
            <li><Link to="/contato" className="hover:text-primary">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-stencil text-sm uppercase tracking-[0.18em]">Dados da oficina</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Telefone, endereço, e-mail e redes sociais serão configurados pelo proprietário na
            área administrativa.
          </p>
        </div>
      </div>

      <div className="border-t-2 border-border">
        <div className="mx-auto max-w-6xl px-4 py-4 font-type text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          © {new Date().getFullYear()} NAI SILK — Serigrafia · Indústria · Arte · Impressão
        </div>
      </div>
    </footer>
  );
}
