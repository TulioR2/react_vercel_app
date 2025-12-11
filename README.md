# Biblioteca Harry Potter

Este projeto foi desenvolvido como atividade da disciplina Frontend Frameworks do curso de Analise e Desenvolvimento de Sistemas.

A aplicacao consiste em um site feito com React e Vite, que consome uma API publica de livros do universo Harry Potter. O objetivo e exibir informacoes sobre os livros, acessar detalhes e permitir que o usuario salve titulos como favoritos utilizando o LocalStorage.

## Funcionalidades e Telas

A aplicacao possui tres telas principais:

1. Pagina Inicial: Exibe um livro aleatorio e permite carregar outro.
2. Pagina de Detalhes: Onde o usuario encontra as informacoes completas do livro escolhido.
3. Pagina de Favoritos: Onde ficam armazenados os livros marcados pelo usuario.

### Imagens do Projeto

Pagina Inicial:
<img width="1919" height="1104" alt="tela3" src="https://github.com/user-attachments/assets/68d0feb2-6a99-499d-9cda-61116839ac8e" />

Pagina de Detalhes:
<img width="1918" height="1038" alt="tela 1" src="https://github.com/user-attachments/assets/9ccd8b4b-ffc2-4e8a-aca8-a5870eaed92c" />

Pagina de Favoritos:
<img width="1915" height="1042" alt="tela 2" src="https://github.com/user-attachments/assets/76dac65b-c3a0-46eb-bcd6-ad68b31a70b8" />
## API Utilizada

Os dados foram consumidos da seguinte API:
https://potterapi-fedeperin.vercel.app/pt/books

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- HTML/CSS
- Node.js
- React Router

## Como executar o projeto localmente

Para rodar o projeto em sua maquina, siga os passos abaixo no terminal:

1. Clonar o repositorio:
git clone https://github.com/seu-usuario/react_vercel_app.git

2. Entrar na pasta do projeto:
cd react_vercel_app

3. Instalar as dependencias:

npm install

4. Rodar o projeto:
npm run dev

A aplicacao ficara disponivel no navegador no endereco: http://localhost:5173

## Publicacao

O deploy foi realizado pelo Vercel utilizando os seguintes comandos:

vercel
vercel --prod

## Licenca

Este projeto utiliza a licenca Creative Commons Attribution 4.0 (CC BY 4.0), permitindo uso e adaptacao desde que os creditos sejam mantidos.
