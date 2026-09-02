import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | NAI SILK Serigrafia" },
      {
        name: "description",
        content: "Fale com a NAI SILK sobre estampas personalizadas em serigrafia.",
      },
      { property: "og:title", content: "Contato | NAI SILK Serigrafia" },
      {
        property: "og:description",
        content: "Canais de contato da oficina de serigrafia NAI SILK.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle
        kicker="Fale com a oficina"
        title="Contato"
        description="Os canais oficiais serão cadastrados pelo proprietário na área administrativa e aparecerão aqui automaticamente."
      />

      <div className="mt-10 grid gap-px border-2 border-border bg-border sm:grid-cols-3">
        {["Telefone / WhatsApp", "E-mail", "Endereço da oficina"].map((label) => (
          <div key={label} className="bg-card p-6">
            <h3 className="font-stencil text-sm uppercase tracking-[0.16em]">{label}</h3>
            <p className="mt-2 font-type text-xs uppercase tracking-[0.16em] text-muted-foreground">
              A definir
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-muted-foreground">
        Enquanto isso, o caminho mais direto é o formulário de orçamento — ele já reúne os
        dados da peça e as referências da arte.
      </p>
      <Link
        to="/orcamento"
        className="mt-5 inline-block border-2 border-border bg-primary px-6 py-3 font-stencil text-sm uppercase tracking-[0.18em] text-primary-foreground"
      >
        Ir para o orçamento
      </Link>
    </div>
  );
}
