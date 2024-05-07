# React + Tailwind + TypeScript - Coffee Delivery

```js
interface AppProps {
  status: string;
}

export function App ({status = 'Building... 🚧👷‍♂️'}: AppProps) {
  return (
    <div>
      <span>{status}</span>
    </div>
  )
}
```

## Funcionalidades

### Geral
- [] Dark mode (Feature futura)
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

