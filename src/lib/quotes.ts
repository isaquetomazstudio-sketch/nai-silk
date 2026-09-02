/**
 * Contratos de dados do fluxo de orçamentos.
 *
 * Esta etapa é apenas estrutura visual: nenhuma persistência é feita ainda.
 * Estes tipos foram desenhados para mapear diretamente as tabelas do backend
 * (Lovable Cloud / Supabase) na próxima etapa.
 */

export const QUOTE_STATUSES = [
  "novo",
  "em_analise",
  "orcado",
  "aprovado",
  "em_producao",
  "concluido",
  "cancelado",
] as const;

export type QuoteStatus = (typeof QUOTE_STATUSES)[number];

export const QUOTE_STATUS_LABELS: Record<QuoteStatus, string> = {
  novo: "Novo",
  em_analise: "Em análise",
  orcado: "Orçado",
  aprovado: "Aprovado",
  em_producao: "Em produção",
  concluido: "Concluído",
  cancelado: "Cancelado",
};

export const MAX_QUOTE_FILES = 3;

export type QuoteRequestInput = {
  customerName: string;
  email: string;
  phone: string;
  garmentType: string;
  quantity: number | null;
  colorCount: number | null;
  deadline: string;
  details: string;
  /** Máximo de MAX_QUOTE_FILES arquivos por orçamento. */
  files: File[];
};

export type QuoteRequest = QuoteRequestInput & {
  id: string;
  status: QuoteStatus;
  createdAt: string;
};

export const emptyQuoteInput: QuoteRequestInput = {
  customerName: "",
  email: "",
  phone: "",
  garmentType: "",
  quantity: null,
  colorCount: null,
  deadline: "",
  details: "",
  files: [],
};
