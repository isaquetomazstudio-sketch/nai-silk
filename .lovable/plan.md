# Gotas e respingos de tinta na tela inicial

## O que será feito

Adicionar pequenas gotas e respingos de tinta espalhados pela homepage, ocupando visualmente cerca de 15% da área, sem interferir na leitura. O efeito reforça a identidade artesanal/serigrafia já estabelecida.

## Mudanças

1. **Novo componente decorativo** — criar `src/components/site/InkSpeckles.tsx` com um grupo de SVGs leves (círculos, gotas e traços irregulares) em posições absolutas, todos com `pointer-events-none` e `aria-hidden="true"`.
2. **Distribuição na página inicial** — inserir o componente em três zonas de `src/routes/index.tsx`:
   - canto superior esquerdo da manchete;
   - bordas laterais da seção de pilares;
   - canto inferior direito da seção de chamada final.
3. **Aparência** — usar cores do tema com opacidade baixa (`primary/5` a `primary/15`, `ink/5` a `ink/10`) e tamanhos variados (8 px a 56 px) para parecer respingo real.
4. **Responsividade** — reduzir a densidade em telas menores (`hidden sm:block` em alguns elementos) para manter o conteúdo legível.
5. **Reutilização controlada** — não alterar o `InkSplatter` existente; os novos respingos complementam, não substituem, o grande splatter do hero.

## Critérios de aceitação

- A homepage carrega sem erros.
- Os respingos aparecem em preview e publicação.
- Nenhum respingo fica acima de texto ou botões clicáveis.
- A área coberta fica próxima de 15% da tela inicial em desktop, menos denso em mobile.
