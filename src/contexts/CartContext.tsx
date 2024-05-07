import { ReactNode, createContext, useEffect, useState } from "react";

interface CartContextData {
  items: ItemsCartProps[];
  addItemToCart: (item: ItemsCartProps) => void;
  calculateTotal: () => number;
  removeItemFromCartByQuantity: (item: ItemsCartProps) => void;
  addItemFromCartByQuantity: (item: ItemsCartProps) => void;
  removeSingleItemFromCart: (item: ItemsCartProps) => void;
  clearCart: () => void;
}

interface ItemsCartProps {
  id: number;
  name: string;
  tags: Array<string>;
  description: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<ItemsCartProps[]>([]);

  useEffect(() => {
    const savedItems = localStorage.getItem("@coffeeDelivery:cart");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("@coffeeDelivery:cart", JSON.stringify(items));
  // }, [items]);

  const addItemToCart = (data: ItemsCartProps) => {
    const itemIndex = items.findIndex((item) => item.id === data.id);

    if (itemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[itemIndex].quantity! += data.quantity!;
      setItems(updatedItems);
      localStorage.setItem(
        "@coffeeDelivery:cart",
        JSON.stringify(updatedItems),
      );
    } else {
      setItems((prevItems) => {
        localStorage.setItem(
          "@coffeeDelivery:cart",
          JSON.stringify([...prevItems, { ...data }]),
        );
        return [...prevItems, { ...data }];
      });
    }
  };

  const removeSingleItemFromCart = (data: ItemsCartProps) => {
    const itemIndex = items.findIndex((item) => item.id === data.id);

    const updatedItems = [...items];

    if (itemIndex !== -1) {
      updatedItems.splice(itemIndex, 1);
      setItems(updatedItems);
      localStorage.setItem(
        "@coffeeDelivery:cart",
        JSON.stringify(updatedItems),
      );
    }
  };

  const removeItemFromCartByQuantity = (data: ItemsCartProps) => {
    const itemIndex = items.findIndex((item) => item.id === data.id);

    if (itemIndex !== -1) {
      const updatedItems = [...items];
      if (updatedItems[itemIndex].quantity! > 1) {
        updatedItems[itemIndex].quantity! -= 1;
      } else {
        updatedItems.splice(itemIndex, 1);
      }
      setItems(updatedItems);
      localStorage.setItem(
        "@coffeeDelivery:cart",
        JSON.stringify(updatedItems),
      );
    }
  };

  const addItemFromCartByQuantity = (data: ItemsCartProps) => {
    const itemIndex = items.findIndex((item) => item.id === data.id);

    if (itemIndex !== -1) {
      const updatedItems = [...items];
      if (updatedItems[itemIndex].quantity! >= 1) {
        updatedItems[itemIndex].quantity!++;
      }
      setItems(updatedItems);
      localStorage.setItem(
        "@coffeeDelivery:cart",
        JSON.stringify(updatedItems),
      );
    }
  };

  const calculateTotal = () => {
    if (items) {
      const total = items.reduce((acc, item) => {
        const itemTotal = item.quantity! * item.price;
        return acc + itemTotal;
      }, 0);
      return total;
    }
    return 0;
  };

  const clearCart = () => {
    setItems([]);
    localStorage.setItem("@coffeeDelivery:cart", "");
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItemToCart,
        removeSingleItemFromCart,
        removeItemFromCartByQuantity,
        addItemFromCartByQuantity,
        clearCart,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
