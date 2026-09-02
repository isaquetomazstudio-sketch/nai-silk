import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";
import { QUOTE_STATUSES, QUOTE_STATUS_LABELS } from "@/lib/quotes";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Área do Proprietário | NAI SILK" },
      {
        name: "description",
        content:
          "Área administrativa da NAI SILK para gestão de pedidos de orçamento. Em construção.",
      },
      { property: "og:title", content: "Área do Proprietário | NAI SILK" },
      { property: "og:description", content: "Painel administrativo da NAI SILK." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle
        kicker="Reservado"
        title="Área do proprietário"
        description="Espaço reservado para o painel administrativo. Autenticação, banco de dados e notificações por e-mail serão implementados na próxima etapa."
      />

      <div className="mt-10 border-2 border-border bg-card p-6">
        <h3 className="font-stencil text-sm uppercase tracking-[0.16em]">
          Previsto para esta área
        </h3>
        <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>· Login exclusivo do proprietário</li>
          <li>· Lista de pedidos de orçamento</li>
          <li>· Visualização dos arquivos enviados</li>
          <li>· Atualização de status do pedido</li>
          <li>· Configurações editáveis do site</li>
          <li>· Notificações por e-mail</li>
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="font-stencil text-sm uppercase tracking-[0.16em]">
          Fluxo de status planejado
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {QUOTE_STATUSES.map((s) => (
            <span
              key={s}
              className="border-2 border-border bg-paper-deep px-3 py-1 font-type text-[0.7rem] uppercase tracking-[0.16em]"
            >
              {QUOTE_STATUS_LABELS[s]}
            </span>
          ))}
        </div>
      </div>

      <Link
        to="/"
        className="mt-10 inline-block border-2 border-border px-6 py-3 font-stencil text-sm uppercase tracking-[0.18em]"
      >
        Voltar ao site
      </Link>
    </div>
  );
}
