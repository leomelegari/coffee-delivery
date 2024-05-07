import { CoffeeIcon, Package, ShoppingCart, Timer } from "lucide-react";
import Coffee from "../../../assets/coffee.svg";

export const Intro = () => {
  return (
    <div className="flex w-full items-center justify-center ">
      <div className="mt-[47px] flex max-w-[1120px] flex-col-reverse items-center justify-center px-4 lg:flex-row lg:px-0">
        <div className="flex w-full flex-1 flex-col gap-16">
          <div className="m-auto flex flex-col gap-4">
            <span className="text-center font-poppins text-2xl font-bold leading-relaxed text-title dark:text-purple-normal/80 sm:text-4xl lg:text-start">
              Encontre o café perfeito para qualquer hora do dia
            </span>
            <span className="text-center text-xl text-subtitle dark:text-purple-light lg:text-start">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>
          <div className="grid items-center justify-center gap-5 sm:grid-cols-2">
            <div className="flex items-center  gap-3 lg:justify-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-dark">
                <ShoppingCart
                  className="h-4 w-4 text-background"
                  strokeWidth={3}
                />
              </div>
              <span className="text-xl font-semibold text-text dark:text-card sm:text-base ">
                Compra simples e segura
              </span>
            </div>
            <div className="flex items-center  gap-3 lg:justify-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-text">
                <Package className="h-4 w-4 text-background" strokeWidth={3} />
              </div>
              <span className="text-xl font-semibold text-text dark:text-card sm:text-base">
                Embalagem mantém o café intacto
              </span>
            </div>
            <div className="flex items-center  gap-3 lg:justify-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-normal">
                <Timer className="h-4 w-4 text-background" strokeWidth={3} />
              </div>
              <span className="text-xl font-semibold text-text dark:text-card sm:text-base">
                Entrega rápida e rastreada
              </span>
            </div>
            <div className="flex items-center gap-3 lg:justify-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-normal">
                <CoffeeIcon
                  className="h-4 w-4 text-background"
                  strokeWidth={3}
                />
              </div>
              <span className="text-xl font-semibold text-text dark:text-card sm:text-base">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>
        <div className="m-auto flex justify-end">
          <img src={Coffee} alt="Coffee image" />
        </div>
      </div>
    </div>
  );
};
