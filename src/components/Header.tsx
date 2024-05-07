import { MapPin, ShoppingCart } from "lucide-react";
import LogoHeader from "../assets/logo.svg";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { AddressContext } from "../contexts/AddressContext";

export const Header = () => {
  const { items } = useContext(CartContext);
  const { address } = useContext(AddressContext);

  const navigate = useNavigate();
  const handleCheckoutCart = () => {
    navigate("/checkout");
  };

  return (
    <div className="sticky top-0 m-auto h-28 w-full bg-white p-4 shadow-sm lg:p-0">
      <div className="m-auto flex h-full w-full max-w-[1120px] items-center justify-between">
        <div>
          <img src={LogoHeader} alt="coffee delivery logo" />
        </div>
        <div className="flex gap-3">
          <Button onClick={handleCheckoutCart} className="bg-purple-light">
            <MapPin className="h-5 w-5 text-purple-normal" />
            <span className="text-sm font-semibold text-purple-dark">
              {address && address.localidade
                ? `${address.localidade}, ${address.uf}`
                : "Não informado"}
            </span>
          </Button>
          <Button
            onClick={handleCheckoutCart}
            className="relative bg-yellow-light"
          >
            {items && items.length > 0 && (
              <span className="absolute mb-8 ml-8 h-5 w-5 rounded-full bg-yellow-dark">
                <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-white">
                  {items.length}
                </span>
              </span>
            )}
            <ShoppingCart className="h-5 w-5 text-yellow-dark" />
          </Button>
        </div>
      </div>
    </div>
  );
};
