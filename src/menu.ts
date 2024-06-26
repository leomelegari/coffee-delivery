import Expresso from "./assets/database/expresso.svg";
import ExpressoAmericano from "./assets/database/americano.svg";
import ExpressoCremoso from "./assets/database/expresso-cremoso.svg";
import ExpressoGelado from "./assets/database/cafe-gelado.svg";
import CafeComLeite from "./assets/database/cafe-com-leite.svg";
import Latte from "./assets/database/late.svg";
import Capuccino from "./assets/database/capuccino.svg";
import Macchiato from "./assets/database/macchiato.svg";
import Mochacchino from "./assets/database/mochacchino.svg";
import ChocolateQuente from "./assets/database/chocolate-quente.svg";
import Cubano from "./assets/database/cubano.svg";
import Havaiano from "./assets/database/havaiano.svg";
import Arabe from "./assets/database/arabe.svg";
import Irlandes from "./assets/database/irlandes.svg";

function gerarNumeroAleatorio(): number {
  const numeroAleatorio: number = Math.random() * (15 - 5) + 5;
  const numeroArredondado: number = parseFloat(numeroAleatorio.toFixed(1));
  return numeroArredondado;
}

const menuList = [
  {
    id: 1,
    name: "Expresso Tradicional",
    tags: ["tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    price: gerarNumeroAleatorio(),
    imageUrl: Expresso,
  },
  {
    id: 2,
    name: "Expresso Americano",
    tags: ["tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: gerarNumeroAleatorio(),
    imageUrl: ExpressoAmericano,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    tags: ["tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    price: gerarNumeroAleatorio(),
    imageUrl: ExpressoCremoso,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    tags: ["tradicional", "gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: gerarNumeroAleatorio(),
    imageUrl: ExpressoGelado,
  },
  {
    id: 5,
    name: "Café com Leite",
    tags: ["tradicional", "com leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: gerarNumeroAleatorio(),
    imageUrl: CafeComLeite,
  },
  {
    id: 6,
    name: "Latte",
    tags: ["tradicional", "com leite"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: gerarNumeroAleatorio(),
    imageUrl: Latte,
  },
  {
    id: 7,
    name: "Capuccino",
    tags: ["tradicional", "com leite"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: gerarNumeroAleatorio(),
    imageUrl: Capuccino,
  },
  {
    id: 8,
    name: "Macchiato",
    tags: ["tradicional", "com leite"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: gerarNumeroAleatorio(),
    imageUrl: Macchiato,
  },
  {
    id: 9,
    name: "Mochacchino",
    tags: ["tradicional", "com leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: gerarNumeroAleatorio(),
    imageUrl: Mochacchino,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    tags: ["tradicional", "com leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: gerarNumeroAleatorio(),
    imageUrl: ChocolateQuente,
  },
  {
    id: 11,
    name: "Cubano",
    tags: ["especial", "alcoólico", "gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: gerarNumeroAleatorio(),
    imageUrl: Cubano,
  },
  {
    id: 12,
    name: "Havaiano",
    tags: ["especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: gerarNumeroAleatorio(),
    imageUrl: Havaiano,
  },
  {
    id: 13,
    name: "Árabe",
    tags: ["especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: gerarNumeroAleatorio(),
    imageUrl: Arabe,
  },
  {
    id: 14,
    name: "Irlandês",
    tags: ["especial", "alcoólico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: gerarNumeroAleatorio(),
    imageUrl: Irlandes,
  },
];

export default menuList;
