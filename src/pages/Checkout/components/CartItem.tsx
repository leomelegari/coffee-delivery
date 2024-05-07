import { Minus, Plus, Trash2 } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    tags: Array<string>;
    description: string;
    price: number;
    imageUrl: string;
    quantity?: number;
  };
}

export const CartItem = ({ item }: CartItemProps) => {
  const {
    removeItemFromCartByQuantity,
    addItemFromCartByQuantity,
    removeSingleItemFromCart,
  } = useContext(CartContext);

  return (
    <div className="flex flex-1 flex-col items-center gap-5 border-b-[1px] border-button py-8 sm:flex-row sm:items-start">
      <img src={item.imageUrl} alt="" className="sm:h-16 sm:w-16 " />
      <div className="flex flex-col gap-2">
        <span className="text-center text-base font-semibold text-subtitle sm:text-start">
          {item.name}
        </span>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 rounded-md bg-button px-2 py-1">
            <div className="h-full transition ease-in-out hover:rounded-sm hover:bg-hover">
              <button
                type="button"
                onClick={() => removeItemFromCartByQuantity(item)}
                className="h-full"
              >
                <Minus className="h-3 w-3 text-purple-normal" strokeWidth={3} />
              </button>
            </div>
            <span className="text-base"> {item.quantity} </span>
            <div className="h-full transition ease-in-out hover:rounded-sm hover:bg-hover">
              <button
                type="button"
                onClick={() => addItemFromCartByQuantity(item)}
                className="h-full"
              >
                <Plus className="h-3 w-3 text-purple-normal" strokeWidth={3} />
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeSingleItemFromCart(item)}
            className="flex flex-1 items-center justify-center gap-1 rounded-md bg-button px-2 py-1 text-xs font-semibold text-text transition ease-in-out hover:bg-hover"
          >
            <Trash2 className="h-4 w-4 text-purple-normal" />{" "}
            <span>REMOVER</span>
          </button>
        </div>
      </div>
      <div className="flex flex-1 justify-end">
        <span className="text-base font-bold text-text">
          R${" "}
          {(item.price * item.quantity!).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </span>
      </div>
    </div>
  );
};
