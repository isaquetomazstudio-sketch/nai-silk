import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Upload, X } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { MAX_QUOTE_FILES, emptyQuoteInput, type QuoteRequestInput } from "@/lib/quotes";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Solicitar Orçamento | NAI SILK Serigrafia" },
      {
        name: "description",
        content:
          "Envie os detalhes da sua estampa e até 3 arquivos de referência para receber um orçamento da NAI SILK.",
      },
      { property: "og:title", content: "Solicitar Orçamento | NAI SILK Serigrafia" },
      {
        property: "og:description",
        content: "Formulário de orçamento para estampas personalizadas em serigrafia.",
      },
    ],
  }),
  component: OrcamentoPage,
});

const fieldClass =
  "mt-1 w-full border-2 border-border bg-card px-3 py-2 text-sm outline-none focus:border-primary";
const labelClass = "font-stencil text-xs uppercase tracking-[0.16em]";

function OrcamentoPage() {
  const [form, setForm] = useState<QuoteRequestInput>(emptyQuoteInput);

  const setField = <K extends keyof QuoteRequestInput>(key: K, value: QuoteRequestInput[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    setForm((f) => ({
      ...f,
      files: [...f.files, ...Array.from(list)].slice(0, MAX_QUOTE_FILES),
    }));
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <SectionTitle
        kicker="Pedido"
        title="Solicitar orçamento"
        description="Preencha os dados da peça e anexe até 3 arquivos de referência. O envio ainda não está ativo: esta etapa entrega apenas a estrutura visual do formulário."
      />

      <form
        className="mt-10 space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <fieldset className="border-2 border-border bg-card p-6">
          <legend className="px-2 font-display text-lg font-black uppercase">Seus dados</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Nome</span>
              <input
                className={fieldClass}
                value={form.customerName}
                onChange={(e) => setField("customerName", e.target.value)}
              />
            </label>
            <label className="block">
              <span className={labelClass}>Telefone</span>
              <input
                className={fieldClass}
                value={form.phone}
                onChange={(e) => setField("phone", e.target.value)}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className={labelClass}>E-mail</span>
              <input
                type="email"
                className={fieldClass}
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
              />
            </label>
          </div>
        </fieldset>

        <fieldset className="border-2 border-border bg-card p-6">
          <legend className="px-2 font-display text-lg font-black uppercase">A estampa</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Tipo de peça</span>
              <input
                className={fieldClass}
                placeholder="Camiseta, moletom, uniforme..."
                value={form.garmentType}
                onChange={(e) => setField("garmentType", e.target.value)}
              />
            </label>
            <label className="block">
              <span className={labelClass}>Quantidade</span>
              <input
                type="number"
                min={10}
                className={fieldClass}
                value={form.quantity ?? ""}
                onChange={(e) =>
                  setField("quantity", e.target.value ? Number(e.target.value) : null)
                }
              />
            </label>
            <label className="block">
              <span className={labelClass}>Número de cores</span>
              <input
                type="number"
                min={1}
                className={fieldClass}
                value={form.colorCount ?? ""}
                onChange={(e) =>
                  setField("colorCount", e.target.value ? Number(e.target.value) : null)
                }
              />
            </label>
            <label className="block">
              <span className={labelClass}>Prazo desejado</span>
              <input
                type="date"
                className={fieldClass}
                value={form.deadline}
                onChange={(e) => setField("deadline", e.target.value)}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className={labelClass}>Detalhes</span>
              <textarea
                rows={5}
                className={fieldClass}
                placeholder="Posição da estampa, cores do tecido, observações..."
                value={form.details}
                onChange={(e) => setField("details", e.target.value)}
              />
            </label>
          </div>
        </fieldset>

        <fieldset className="border-2 border-border bg-card p-6">
          <legend className="px-2 font-display text-lg font-black uppercase">
            Arquivos ({form.files.length}/{MAX_QUOTE_FILES})
          </legend>

          <label className="halftone flex cursor-pointer flex-col items-center gap-2 border-2 border-dashed border-border bg-paper-deep px-4 py-10 text-center">
            <Upload className="size-6 text-primary" />
            <span className="font-stencil text-sm uppercase tracking-[0.16em]">
              Selecionar arquivos
            </span>
            <span className="font-type text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
              Até {MAX_QUOTE_FILES} arquivos por orçamento
            </span>
            <input
              type="file"
              multiple
              className="hidden"
              disabled={form.files.length >= MAX_QUOTE_FILES}
              onChange={(e) => {
                addFiles(e.target.files);
                e.target.value = "";
              }}
            />
          </label>

          {form.files.length > 0 && (
            <ul className="mt-4 space-y-2">
              {form.files.map((file, i) => (
                <li
                  key={`${file.name}-${i}`}
                  className="flex items-center justify-between gap-3 border-2 border-border px-3 py-2 text-sm"
                >
                  <span className="truncate">{file.name}</span>
                  <button
                    type="button"
                    aria-label={`Remover ${file.name}`}
                    onClick={() =>
                      setForm((f) => ({ ...f, files: f.files.filter((_, j) => j !== i) }))
                    }
                  >
                    <X className="size-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </fieldset>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled
            className="border-2 border-border bg-primary px-6 py-3 font-stencil text-sm uppercase tracking-[0.18em] text-primary-foreground disabled:opacity-60"
          >
            Enviar pedido
          </button>
          <p className="font-type text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
            Envio desativado nesta etapa
          </p>
        </div>
      </form>
    </div>
  );
}
