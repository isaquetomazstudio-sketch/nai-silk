import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços de Serigrafia | NAI SILK" },
      {
        name: "description",
        content:
          "Estampa em camisetas, uniformes, tiragens em série e arte-final para serigrafia na NAI SILK.",
      },
      { property: "og:title", content: "Serviços de Serigrafia | NAI SILK" },
      {
        property: "og:description",
        content: "Estampa em camisetas, uniformes e tiragens em série com silkscreen artesanal.",
      },
    ],
  }),
  component: ServicosPage,
});

const SERVICES = [
  {
    title: "Camisetas personalizadas",
    text: "Estampa avulsa ou em lote, em peças fornecidas por você ou pela oficina.",
  },
  {
    title: "Uniformes e equipes",
    text: "Identidade aplicada em frente, costas e manga.",
  },
  {
    title: "Tiragens em série",
    text: "Produção repetível de coleções, campanhas e eventos mantendo o mesmo registro de cor.",
  },
  {
    title: "Arte-final para tela",
    text: "Preparação e separação de cores do seu arquivo para queima de tela e impressão.",
  },
  {
    title: "Estampa multicor",
    text: "Sobreposição de camadas de tinta com registro manual, incluindo bases para tecido escuro.",
  },
  {
    title: "Amostra de prova",
    text: "Peça-piloto impressa antes da tiragem para aprovação de cor e posicionamento.",
  },
];

function ServicosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle
        kicker="Oficina"
        title="Serviços"
        description="O que a NAI SILK produz. Valores e prazos são definidos por orçamento, conforme arte, quantidade e número de cores."
      />

      <div className="mt-10 grid gap-px border-2 border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <article key={s.title} className="bg-card p-6">
            <h3 className="font-display text-xl font-black uppercase">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </article>
        ))}
      </div>

      <div className="rule-thick mt-12 py-8">
        <p className="font-type text-sm uppercase tracking-[0.18em] text-muted-foreground">
          
        </p>
        <Link
          to="/orcamento"
          className="mt-5 inline-block border-2 border-border bg-primary px-6 py-3 font-stencil text-sm uppercase tracking-[0.18em] text-primary-foreground"
        >
          Solicitar orçamento
        </Link>
      </div>
    </div>
  );
}
