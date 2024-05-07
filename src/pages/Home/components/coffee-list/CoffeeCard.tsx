interface CoffeeCardProps {
  data: {
    id: number;
    name: string;
    tags: Array<string>;
    description: string;
    price: number;
    imageUrl: string;
  };
}

import { Minus, Plus, ShoppingCart } from "lucide-react";
import { TagName } from "./TagName";
import { Button } from "../../../../components/Button";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import toast from "react-hot-toast";

export const CoffeeCard = ({ data }: CoffeeCardProps) => {
  const { addItemToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState<number>(1);

  const handleAddItemToCart = () => {
    const updatedValues = { ...data, quantity: quantity };
    toast.success(`${data.name} adicionado ao carrinho!`);
    addItemToCart(updatedValues);
  };

  const addMoreQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="h-[310px] w-64 rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-card shadow-md dark:bg-title/80">
      <div className="mb-4 flex flex-col items-center justify-center  gap-3">
        <div className="-mt-4">
          <img src={data.imageUrl} alt="" className="w-[120px]" />
        </div>
        <div className="flex gap-1">
          {data.tags.map((tag, index) => {
            return <TagName key={index} tagName={tag} />;
          })}
        </div>
      </div>
      <div className="mb-8 flex flex-col items-center justify-center gap-2 px-2">
        <span className="text-center font-poppins text-xl font-bold text-subtitle/80 dark:text-yellow-dark/80">
          {data.name}
        </span>
        <span className="text-center text-sm text-label/50 dark:text-white/70">
          {data.description}
        </span>
      </div>
      <div className="flex items-center justify-between px-6">
        <div>
          <span className="text-sm text-text dark:text-white/70">R$</span>{" "}
          <span className="font-poppins text-2xl font-bold text-text dark:text-white/70">
            {data.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-md bg-button p-2">
            <button onClick={removeQuantity}>
              <Minus className="h-3 w-3 text-purple-normal" strokeWidth={3} />
            </button>
            <span className="text-base"> {quantity} </span>
            <button onClick={addMoreQuantity}>
              <Plus className="h-3 w-3 text-purple-normal" strokeWidth={3} />
            </button>
          </div>
          <Button
            onClick={handleAddItemToCart}
            className="group bg-purple-dark transition ease-in-out hover:bg-hover dark:bg-purple-normal/80 dark:hover:bg-purple-normal"
          >
            <ShoppingCart
              className="h-5 w-5 text-background group-hover:text-purple-normal group-hover:transition group-hover:ease-in-out dark:group-hover:text-background"
              strokeWidth={2}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
