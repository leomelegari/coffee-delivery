import menuList from "../../menu";
import { CoffeeCard } from "./CoffeeCard";

export const CoffeList = () => {
  return (
    <div className="mt-36 max-w-[1120px]">
      <div>
        <span className="font-poppins text-3xl font-bold text-subtitle">
          Nossos cafés
        </span>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-14 mb-40">
        {menuList.map((item) => {
          return <CoffeeCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};
