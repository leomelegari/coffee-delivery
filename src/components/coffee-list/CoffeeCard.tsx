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

export const CoffeeCard = ({ data }: CoffeeCardProps) => {
  return (
    <div className="h-[310px] w-64 rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-card">
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
        <span className="text-center font-poppins text-xl font-bold text-subtitle">
          {data.name}
        </span>
        <span className="text-center text-sm text-label">
          {data.description}
        </span>
      </div>
      <div className="flex items-center justify-between px-6">
        <div>
          <span className="text-sm text-text">R$</span>{" "}
          <span className="font-poppins text-2xl font-bold text-text">
            {data.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-md bg-button p-2">
            <button>
              <Minus className="h-3 w-3 text-purple-normal" strokeWidth={3} />
            </button>
            <span className="text-base"> 1 </span>
            <button>
              <Plus className="h-3 w-3 text-purple-normal" strokeWidth={3} />
            </button>
          </div>
          <button className="flex items-center justify-center rounded-md bg-purple-dark p-2">
            <ShoppingCart className="h-5 w-5 text-background" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};
