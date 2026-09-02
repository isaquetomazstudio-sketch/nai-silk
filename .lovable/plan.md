# Remover link "Contato" do rodapé

## Objetivo
Remover a opção de navegação "Contato" de todos os rodapés do site, já que as informações de contato já aparecem na parte inferior de cada página.

## Estado atual
O componente `src/components/layout/SiteFooter.tsx` contém uma lista de links de navegação com os itens:
- Serviços
- Processo
- Solicitar orçamento
- Contato

O item "Contato" está hardcoded na linha 23.

## Alteração proposta
Remover o item `<li><Link to="/contato">Contato</Link></li>` do componente `SiteFooter.tsx`, mantendo os demais links de navegação inalterados.

## Não incluído nesta etapa
- Exclusão da rota `/contato` (ela pode ser desativada posteriormente, se necessário).
- Alterações no conteúdo do rodapé além da remoção do link.
