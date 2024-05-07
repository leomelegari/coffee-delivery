<strong style="text-align: center; display: block; font-size: 36px">Coffee Delivery ☕🛵</strong>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executando-o-projeto">Executando o projeto</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

<p align="center">
  <a href="https://coffee-delivery-seven-wheat.vercel.app/" target="_blank">Clique aqui</a> para acessar a versão web
</p>

## 🖥️ Projeto

Projeto solicitado como desafio para finalização do segundo módulo da Trilha de React 2022. É uma aplicação de delivery de cafés, onde você poderá selecionar os produtos que deseja comprar, poderá gerenciar os itens do carrinho (adicionando ou removendo um por um), adicionar um endereço de entrega, dentre outras coisas que estão descritas na parte de <a href="#-features">features</a>.

## 📲 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias/bibliotecas:

<table border="0">
 <tr>
<td> JavaScript</td>
<td> React.JS</td>
<td> Vite</td>
<td> Typescript</td>
<td> React Hook Form</td>
 </tr>
 <tr>
<td> React Router Dom</td>
<td> React Hot Toast</td>
<td> Zod</td>
<td> React Helmet Async</td>
<td> Tailwind CSS</td>
</tr>

</table>

## 🌟 Features

### Geral
- [ ] Dark mode (Feature futura)
- [x] Mobile-first

### Tela principal (Home)
- [x] Adicionar itens ao carrinho através da tela home
- [x] Poder selecionar a quantidade de itens a serem inseridos no carrinho

### Checkout
- [x] Alterar a quantidade de itens adicionados no carrinho pelos botões + e -
- [x] Lógica para não permitir que a quantidade de itens seja igual ou menor a 0
- [x] Ao atingir 0, fazer com que o item seja excluído do carrinho
- [x] Caso o método de pagamento seja "Dinheiro", criar novo campo para o usuário informar se haverá troco e para quantos reais será o troco
- [x] Remover item do carrinho pelo botão "remover"
- [x] Ao remover todos os itens do carrinho, adicionar uma mensagem de carrinho vazio e colocar um botão "Adicionar itens", que o levará para a tela inicial

### Delivering
- [x] Exibir endereço da entrega no card
- [x] Exibir previsão de entrega no card
- [x] Exibir pagamento selecionado no card

## 👨🏻‍💻 Executando o projeto

- 1º - clone o repositório para seu computador;
- 2º - no local clonado, abra o terminal e execute **npm install** para instalar as dependências do projeto;
- 3º - abra o projeto com o comando 'code .'

## 💻 Acessando a versão web

Para acessar a versão web basta executar o comando **npm run dev** dentro da raiz do projeto e abrir seu navegador em http://localhost:5173/