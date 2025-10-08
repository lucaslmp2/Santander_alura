# Santander_alura — Projetos de lógica e exercícios de JavaScript

Repositório com exercícios e projetos do curso de lógica e Git/GitHub (Alura). Contém várias pastas com aulas práticas e projetos iniciais em JavaScript, HTML e CSS — prontos para abrir no navegador ou executar via servidor local.

## Conteúdo

- `3386-git-github-projeto_inicial/` — projeto inicial usado na disciplina de Git/GitHub.
- `logica-js-aula_1/` até `logica-js-aula_5/` — exercícios e exemplos das aulas 1 a 5.
- `logica-js-projeto_inicial/` — projeto final/inicial de lógica em JavaScript.
- Arquivos estáticos: `index.html`, `app.js`, `style.css` em cada pasta com assets dentro de `img/`.

> Observação: a estrutura acima é um resumo — explore cada pasta para ver os arquivos e práticas associadas.

## Como usar

Opções rápidas para visualizar os projetos no navegador:

1. Abrir diretamente
   - Navegue até a pasta desejada e dê um duplo clique em `index.html` para abrir no navegador.

2. Usar um servidor local (recomendado para evitar problemas com requisições locais e rotas)
   - Com Python 3 instalado (PowerShell):

```powershell
# execute na pasta que contém os arquivos (ex: 'logica-js-aula_1')
python -m http.server 8000
# depois abra http://localhost:8000 no navegador
```

   - Com Node.js (usando o pacote http-server via npx):

```powershell
# execute na pasta do projeto
npx http-server . -p 8000
# depois abra http://localhost:8000 no navegador
```

3. Usar a extensão Live Server do VS Code
   - Recomendado para desenvolvimento rápido: instale a extensão "Live Server" e clique em "Go Live".

## Estrutura e convenções

- `index.html` — arquivo HTML principal de cada exemplo.
- `app.js` — código JavaScript que implementa a lógica do exercício/projeto.
- `style.css` — estilos CSS.
- `img/` — imagens e assets usados pelos exemplos.

## Boas práticas

- Faça branches para mudanças significativas (ex: `feature/minha-aula`).
- Commite mensagens curtas e descritivas.
- Mantenha cópias de segurança dos arquivos se trabalha com OneDrive para evitar conflitos de sincronização durante desenvolvimento.

## Como contribuir

1. Fork ou clone o repositório.
2. Crie uma branch com um nome descritivo.
3. Adicione/edite arquivos e faça commits pequenos e claros.
4. Abra um pull request descrevendo a mudança.
