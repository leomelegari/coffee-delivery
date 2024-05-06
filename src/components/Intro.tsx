import { CoffeeIcon, Package, ShoppingCart, Timer } from "lucide-react";
import Coffee from "../assets/coffee.svg";

export const Intro = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gradient-pattern bg-contain bg-repeat">
      <div className="max-w-[1120px] flex justify-center items-center mt-[47px]">
        <div className="flex w-full flex-1 flex-col gap-16">
          <div className="flex flex-col m-auto gap-4">
            <span className="text-4xl font-bold text-title font-poppins leading-relaxed">
              Encontre o café perfeito para qualquer hora do dia
            </span>
            <span className="text-xl text-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>
          <div className="grid grid-cols-2 justify-center items-center gap-5">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 flex justify-center items-center rounded-full bg-yellow-dark">
                <ShoppingCart
                  className="w-4 h-4 text-background"
                  strokeWidth={3}
                />
              </div>
              <span className="text-base text-text font-semibold">
                Compra simples e segura
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 flex justify-center items-center rounded-full bg-text">
                <Package className="w-4 h-4 text-background" strokeWidth={3} />
              </div>
              <span className="text-base text-text font-semibold">
                Compra simples e segura
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 flex justify-center items-center rounded-full bg-yellow-normal">
                <Timer className="w-4 h-4 text-background" strokeWidth={3} />
              </div>
              <span className="text-base text-text font-semibold">
                Compra simples e segura
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 flex justify-center items-center rounded-full bg-purple-normal">
                <CoffeeIcon
                  className="w-4 h-4 text-background"
                  strokeWidth={3}
                />
              </div>
              <span className="text-base text-text font-semibold">
                Compra simples e segura
              </span>
            </div>
          </div>
        </div>
        <div className="flex m-auto justify-end">
          <img src={Coffee} alt="Coffee image" />
        </div>
      </div>
    </div>
  );
};
