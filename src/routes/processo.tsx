import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/processo")({
  head: () => ({
    meta: [
      { title: "O Processo de Silkscreen | NAI SILK" },
      {
        name: "description",
        content:
          "Da arte-final à secagem: as etapas do processo artesanal de serigrafia usado na NAI SILK.",
      },
      { property: "og:title", content: "O Processo de Silkscreen | NAI SILK" },
      {
        property: "og:description",
        content: "Arte-final, fotolito, queima de tela, impressão e cura — etapa por etapa.",
      },
    ],
  }),
  component: ProcessoPage,
});

const STEPS = [
  { n: "01", title: "Arte-final", text: "A imagem é ajustada e as cores são separadas em camadas." },
  { n: "02", title: "Fotolito", text: "Cada camada é impressa em transparência para gravar a tela." },
  { n: "03", title: "Queima da tela", text: "A matriz emulsionada é exposta à luz e revelada com água." },
  { n: "04", title: "Registro", text: "As telas são alinhadas na base para que as cores encaixem." },
  { n: "05", title: "Impressão", text: "A tinta é puxada com rodo, uma passada por cor." },
  { n: "06", title: "Cura e revisão", text: "A peça é curada no calor e conferida antes de embalar." },
];

function ProcessoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle
        kicker="Bastidores"
        title="Como a tinta chega ao tecido"
        description="A serigrafia é um processo físico e manual. Cada etapa abaixo acontece dentro da oficina."
      />

      <ol className="mt-10 border-2 border-border">
        {STEPS.map((s, i) => (
          <li
            key={s.n}
            className={`flex flex-col gap-2 p-6 sm:flex-row sm:items-baseline sm:gap-8 ${
              i > 0 ? "border-t-2 border-border" : ""
            } ${i % 2 === 1 ? "bg-paper-deep" : "bg-card"}`}
          >
            <span className="font-display text-4xl font-black text-primary">{s.n}</span>
            <div>
              <h3 className="font-stencil text-lg uppercase tracking-[0.12em]">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
