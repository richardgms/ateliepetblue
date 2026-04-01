# Plano Completo de SEO - Ateliê Pet Blue

## Contexto

Este documento consolida a revisão do projeto atual e descreve o plano que eu executaria para deixar o SEO do Ateliê Pet Blue mais profissional, previsível e consistente para busca orgânica local.

Projeto revisado:
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/app/favicon.ico`

Estado atual observado:
- existe apenas a home pública
- o footer já recebeu uma melhoria inicial de SEO local
- ainda não há `robots.txt`
- ainda não há `sitemap.xml`
- a metadata global está básica
- o build atual depende de fonte remota via `next/font/google`, o que pode quebrar a compilação offline
- o site ainda não tem uma camada completa de SEO local, técnico e semântico

## Objetivo

Transformar o site em uma base de SEO local sólida para o Ateliê Pet Blue, com foco em:

- ranquear para buscas de intenção local em Santa Rita/PB
- reforçar autoridade do negócio em banho e tosa, veterinária, acessórios, medicamentos e rações
- melhorar indexação, rastreabilidade e apresentação em resultados de busca
- evitar problemas de build, metadata incompleta e sinais fracos de relevância local

## Diagnóstico

### O que já está bom

- A home apresenta o nome da marca de forma consistente.
- Existe CTA claro para WhatsApp.
- O footer já contém endereço, telefone, horário e menção geográfica.
- Há um JSON-LD inicial de negócio local no footer.

### O que ainda falta

- metadata de página mais completa
- canonical consistente
- `robots.txt`
- `sitemap.xml`
- Open Graph e Twitter Cards
- estrutura de páginas para intenções específicas
- reforço de SEO local fora do footer
- revisão de performance e dependências remotas
- eventual separação de conteúdo em páginas locais por serviço

## Estratégia

Para este projeto, eu seguiria esta ordem:

1. Fundamento técnico
2. Indexação e rastreamento
3. Metadata e compartilhamento social
4. SEO local e schema
5. Conteúdo e arquitetura de páginas
6. Performance e estabilidade
7. Validação final

---

## Fase 1 - Fundamento técnico

### 1.1 Corrigir a dependência remota da fonte

Hoje o build falha quando a fonte Google não pode ser carregada.

Plano:
- remover a dependência que obriga fetch remoto, se necessário
- usar fonte local ou fallback seguro do sistema
- garantir que `next build` rode sem depender de internet

Arquivos envolvidos:
- `src/app/layout.tsx`

Motivo:
- SEO e performance dependem de build estável
- um site que não compila corretamente não é uma base confiável para indexação

### 1.2 Completar metadata global

Plano:
- definir `title` com variações de marca e intenção local
- definir `description` clara e localizada
- adicionar `metadataBase`
- adicionar `openGraph`
- adicionar `twitter`
- adicionar `alternates.canonical`

Arquivos envolvidos:
- `src/app/layout.tsx`

Exemplo de intenção:
- marca
- serviço principal
- cidade/estado

Exemplo de foco:
- Ateliê Pet Blue
- banho e tosa
- veterinário
- Santa Rita/PB

---

## Fase 2 - Indexação e rastreamento

### 2.1 Criar `robots.txt`

Plano:
- permitir rastreamento do site público
- bloquear áreas internas, se existirem
- apontar para o sitemap

Resultado esperado:
- os robôs encontram o sitemap facilmente
- o site fica mais claro para indexação

### 2.2 Criar `sitemap.xml`

Plano:
- listar todas as URLs públicas indexáveis
- incluir a home
- incluir futuras páginas de serviço e localização
- usar `lastModified` quando possível

Resultado esperado:
- descoberta mais rápida das páginas
- melhor cobertura de indexação

### 2.3 Canonical por página

Plano:
- canonical da home apontando para a URL principal
- canonical em futuras páginas de serviço e localização
- evitar duplicidade entre páginas parecidas

---

## Fase 3 - SEO local

### 3.1 Consolidar NAP

NAP = Name, Address, Phone.

Plano:
- manter o nome do negócio exatamente igual em todo o site
- manter o telefone em formato consistente
- manter o endereço em formato consistente
- manter o mesmo padrão visual e textual no footer e na home

### 3.2 Reforçar o footer como sinal local

Já iniciado, mas eu ainda refinaria:

- nome da empresa
- endereço completo
- telefone clicável
- WhatsApp clicável
- link para Google Maps
- horários de funcionamento
- lista curta de serviços locais

### 3.3 Criar schema local mais robusto

Plano:
- manter JSON-LD de negócio local
- usar o tipo mais adequado ao negócio
- incluir endereço, telefone, área atendida, horário, redes sociais
- se houver dados confiáveis, incluir latitude/longitude e URL da ficha do Google Business Profile

Schema sugerido:
- `PetStore`
- eventualmente `LocalBusiness` ou tipo mais específico, se fizer sentido

### 3.4 Criar páginas locais por intenção

Se o projeto crescer, eu criaria páginas dedicadas como:

- `/banho-e-tosa-santa-rita`
- `/veterinario-santa-rita`
- `/acessorios-pet-santa-rita`
- `/rações-e-medicamentos`
- `/contato`

Cada página deve ter:
- um único foco principal
- conteúdo único
- heading claro
- CTA local
- schema apropriado

---

## Fase 4 - Metadata e social

### 4.1 Metadata por página

Plano:
- title único e específico
- description com proposta de valor e localidade
- Open Graph com título, descrição e imagem
- Twitter Card consistente

### 4.2 Imagem de compartilhamento

Plano:
- criar uma imagem OG da marca
- usar proporção adequada para compartilhamento
- manter consistência visual com a identidade do site

### 4.3 Favicons e ícones

Plano:
- revisar favicon
- garantir que o ícone fique bom em navegação, abas e compartilhamento

---

## Fase 5 - Conteúdo e arquitetura

### 5.1 Ajustar a home para intenção local

Plano:
- melhorar o H1 para incluir marca + proposta local
- reforçar a cidade e o tipo de serviço
- evitar linguagem genérica demais
- inserir termos que o cliente realmente busca

Termos-alvo prováveis:
- pet shop em Santa Rita
- banho e tosa em Santa Rita
- veterinário em Santa Rita
- acessórios pet Santa Rita PB
- ração para cães e gatos Santa Rita PB

### 5.2 Melhorar a hierarquia de headings

Plano:
- um H1 principal
- H2 para serviços
- H2 para diferenciais
- H2 para CTA final
- evitar headings usados só por estética

### 5.3 Criar conteúdo de apoio

Plano:
- FAQ local
- página de serviços
- página de localização
- conteúdo de dúvidas comuns sobre banho, tosa e cuidados

### 5.4 Internal linking

Plano:
- linkar a home para páginas de serviço
- linkar páginas de serviço de volta para contato
- usar âncoras descritivas, não genéricas

---

## Fase 6 - Performance e estabilidade

### 6.1 Revisar imagens

Plano:
- verificar peso e dimensões
- usar `next/image` corretamente
- garantir `alt` descritivo
- evitar imagens grandes sem necessidade

### 6.2 Revisar CSS e JS

Plano:
- evitar excesso de animação onde não agrega
- manter a home leve
- reduzir custo de renderização se possível

### 6.3 Revisar build

Plano:
- garantir que `npm run lint` passe
- garantir que `npm run build` passe sem dependência de rede
- garantir que o deploy não dependa de recursos externos frágeis

---

## Fase 7 - Verificação

### 7.1 Checklist técnico

- `npm run lint`
- `npm run build`
- validar `robots.txt`
- validar `sitemap.xml`
- validar metadata no HTML renderizado
- validar JSON-LD com ferramenta de teste de schema

### 7.2 Checklist de SEO local

- nome da empresa igual em todo o site
- endereço igual em todo o site
- telefone clicável em todo o site
- mapa acessível no footer
- horários claros
- cidade/estado presentes no conteúdo
- páginas de serviço com foco real

### 7.3 Checklist de SERP

- title claro
- description clicável
- imagem social correta
- página rastreável
- conteúdo específico para Santa Rita/PB

---

## Plano de execução recomendado

### Prioridade alta

1. Remover a dependência de fonte remota que quebra o build
2. Completar metadata global
3. Criar `robots.txt`
4. Criar `sitemap.xml`
5. Consolidar schema local no site

### Prioridade média

6. Refinar a home para intenção local
7. Criar páginas de serviço
8. Adicionar Open Graph e Twitter Cards
9. Revisar internal linking

### Prioridade baixa, mas importante

10. Criar FAQ e conteúdo educativo
11. Produzir imagem OG dedicada
12. Instrumentar Search Console e monitoramento

---

## Entregáveis finais que eu buscaria

- SEO técnico mínimo completo
- SEO local consistente
- footer otimizado e semântico
- metadata adequada
- sitemap e robots funcionais
- páginas focadas em intenção
- build estável e previsível
- base pronta para crescimento orgânico

---

## Observação importante

Este projeto é de negócio local. Então eu priorizaria:

- relevância geográfica
- confiança
- consistência de informações
- clareza comercial
- performance

Mais do que volume de conteúdo, o que vai trazer resultado aqui é precisão local e estrutura técnica limpa.
