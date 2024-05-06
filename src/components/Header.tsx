import { MapPin, ShoppingCart } from "lucide-react";
import LogoHeader from "../assets/logo.svg";

export const Header = () => {
  return (
    <div className="h-28 flex justify-between items-center w-full max-w-[1120px]">
      <div>
        <img src={LogoHeader} alt="coffee delivery logo" />
      </div>
      <div className="flex gap-3">
        <div className="p-2 flex justify-center items-center gap-1 rounded-md bg-purple-light">
          <MapPin className="w-5 h-5 text-purple-normal" />
          <span className="text-sm text-purple-dark font-semibold">
            Porto Alegre, RS
          </span>
        </div>
        <div className="p-2 flex justify-center items-center rounded-md bg-yellow-light">
          <ShoppingCart className="w-5 h-5 text-yellow-dark" />
        </div>
      </div>
    </div>
  );
};
