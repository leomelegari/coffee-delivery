import menuList from "../../../../menu";
import { CoffeeCard } from "./CoffeeCard";

export const CoffeList = () => {
  return (
    <div className="mt-36 flex w-full max-w-[1120px] flex-col items-center px-4 lg:px-0">
      <div className="flex w-full ">
        <span className="font-poppins text-3xl font-bold text-subtitle dark:text-purple-normal/80">
          Nossos cafés
        </span>
      </div>
      <div className="mb-40 mt-14 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menuList.map((item) => {
          return <CoffeeCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};
