import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";
import { InkSplatter } from "@/components/site/InkSplatter";
import { InkSpeckles } from "@/components/site/InkSpeckles";
import oficinaImg from "@/assets/oficina-serigrafia.jpg";
import trabalho1 from "@/assets/trabalho-image.png";
import trabalho2 from "@/assets/trabalho-image-2.png";
import trabalho3 from "@/assets/trabalho-image-3.png";
import trabalho4 from "@/assets/trabalho-image-4.png";
import trabalho5 from "@/assets/trabalho-image-5.png";
import trabalho6 from "@/assets/trabalho-image-6.png";

const WORKS = [
  { src: trabalho1, alt: "Camiseta branca com estampa Filhos do Fogo em serigrafia" },
  { src: trabalho2, alt: "Pilhas de camisas polo estampadas para empresa" },
  { src: trabalho3, alt: "Bermuda esportiva amarela com estampa Red Bull" },
  { src: trabalho4, alt: "Camiseta preta com estampa Bar Brahma" },
  { src: trabalho5, alt: "Mesa carrossel com camisetas CAM 500 em tiragem" },
  { src: trabalho6, alt: "Mesa carrossel com camisetas ENFIL em produção" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NAI SILK — Serigrafia e Estampas Personalizadas" },
      {
        name: "description",
        content:
          "NAI SILK: arte personalizada em camisetas pelo processo artesanal de serigrafia. Solicite um orçamento para sua estampa.",
      },
      { property: "og:title", content: "NAI SILK — Serigrafia e Estampas Personalizadas" },
      {
        property: "og:description",
        content: "Estampas personalizadas em camisetas pelo processo artesanal de silkscreen.",
      },
    ],
  }),
  component: Index,
});

const PILLARS = [
  {
    n: "01",
    title: "Serigrafia",
    text: "Telas, emulsão e rodo. Cada cor é impressa separadamente, camada sobre camada.",
  },
  {
    n: "02",
    title: "Indústria",
    text: "Estrutura para atender do lote pequeno à produção contínua com padrão constante.",
  },
  {
    n: "03",
    title: "Arte",
    text: "Arte-final tratada peça a peça: traço, registro e paleta pensados para o tecido.",
  },
  {
    n: "04",
    title: "RESULTADO",
    text: "Tinta firme, acabamento resistente e teste de qualidade antes da entrega.",
  },
];

function Index() {
  return (
    <div>
      {/* Manchete */}
      <section className="paper-grain relative overflow-hidden border-b-[3px] border-border">
        <InkSplatter className="pointer-events-none absolute -right-16 -top-20 size-72 text-primary/10 sm:size-96" />
        <InkSpeckles group="hero" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="flex flex-wrap items-center gap-3 border-y-2 border-border py-2 font-type text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
            <span>Edição Oficina</span>
            <span className="text-primary">·</span>
            <span>Silkscreen artesanal</span>
            <span className="text-primary">·</span>
            <span>Camisetas personalizadas</span>
          </div>

          <h1 className="ink-press mt-8 break-words font-display text-4xl font-black uppercase leading-[0.92] sm:text-6xl lg:text-7xl">
            Arte
            <span className="block text-primary">Personalizada</span>
            em Serigrafia
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            A NAI SILK imprime estampas em camisetas com o método clássico de silkscreen —
            tela por tela, cor por cor, sem pressa e sem atalho.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/orcamento"
              className="border-2 border-border bg-primary px-6 py-3 font-stencil text-sm uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Solicitar orçamento
            </Link>
            <Link
              to="/processo"
              className="border-2 border-border px-6 py-3 font-stencil text-sm uppercase tracking-[0.18em] transition-colors hover:bg-secondary"
            >
              Ver o processo
            </Link>
          </div>
        </div>
      </section>

      {/* Foto da oficina */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <figure className="border-[3px] border-border bg-card p-2 shadow-[8px_8px_0px_0px_hsl(var(--border))]">
          <img
            src={oficinaImg}
            alt="Oficina de serigrafia da NAI SILK com camisetas azuis em uma mesa carrossel"
            className="aspect-[16/10] w-full object-cover grayscale-[15%] sepia-[10%]"
            loading="lazy"
          />
          <figcaption className="mt-2 border-t-2 border-border pt-2 text-center font-type text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            Mesa carrossel da oficina · tiragem em andamento
          </figcaption>
        </figure>
      </section>

      {/* Pilares */}
      <section className="relative mx-auto max-w-6xl px-4 py-16">
        <InkSpeckles group="pillars" />
        <SectionTitle
          kicker="A marca"
          title="Serigrafia · Indústria · Arte · Impressão"
          description="Quatro princípios que orientam cada tiragem que sai da oficina."
        />
        <div className="mt-10 grid gap-px border-2 border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <article key={p.n} className="bg-card p-6">
              <span className="font-type text-xs tracking-[0.3em] text-primary">{p.n}</span>
              <h3 className="mt-3 font-display text-2xl font-black uppercase">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Nosso trabalho */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <SectionTitle
          kicker="Nosso trabalho"
          title="Peças que saíram da oficina"
          description="Registros de tiragens e estampas produzidas na NAI SILK."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {WORKS.map((w) => (
            <figure
              key={w.src}
              className="border-[3px] border-border bg-card p-2 shadow-[6px_6px_0px_0px_hsl(var(--border))]"
            >
              <img
                src={w.src}
                alt={w.alt}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>


      {/* Chamada */}
      <section className="relative halftone border-y-[3px] border-border bg-paper-deep">
        <InkSpeckles group="cta" />
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="ink-press font-display text-3xl font-black uppercase sm:text-4xl">
              Tem uma arte em mente?
            </h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              Envie os detalhes da peça e até 3 arquivos de referência. Retornamos com o
              orçamento da tiragem.
            </p>
          </div>
          <Link
            to="/orcamento"
            className="border-2 border-border bg-primary px-6 py-3 font-stencil text-sm uppercase tracking-[0.18em] text-primary-foreground"
          >
            Começar orçamento
          </Link>
        </div>
      </section>
    </div>
  );
}
