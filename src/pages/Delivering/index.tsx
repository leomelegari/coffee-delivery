import { ChevronLeft, DollarSign, MapPin, Timer } from "lucide-react";
import { Helmet } from "react-helmet-async";

import DeliveringBoy from "../../assets/delivering-boy.svg";
import { Button } from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AddressContext } from "../../contexts/AddressContext";

export const Delivering = () => {
  const navigate = useNavigate();
  const { address } = useContext(AddressContext);
  const { state } = useLocation();

  const handleGoBack = () => {
    navigate("/checkout");
  };

  return (
    <div className="w-full max-w-[1120px] px-4 lg:px-0">
      <Helmet>
        <title>Coffee Delivery | Delivering</title>
      </Helmet>
      <div className="flex w-full max-w-[1120px] items-center gap-2 pb-8 pt-4 ">
        <Button
          onClick={handleGoBack}
          className="bg-card transition ease-in-out hover:bg-button"
        >
          <ChevronLeft strokeWidth={3} className="h-5 w-5 text-purple-dark" />
          <span>Voltar</span>
        </Button>
      </div>
      <div className="flex w-full max-w-[1120px] flex-col items-center justify-between lg:flex-row">
        <div className="flex flex-col">
          <span className="font-poppins text-3xl font-bold text-yellow-dark">
            Uhu! Pedido confirmado
          </span>
          <span className="mb-10 text-xl text-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </span>

          <div className="flex w-full items-center justify-center rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] border border-purple-normal">
            <div className="flex w-full flex-col gap-8 rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-background p-10">
              <div className="flex w-full items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-normal">
                  <MapPin className="h-4 w-4 text-background" />
                </div>
                <div>
                  <div>
                    <span className="text-base text-text">Entrega em</span>{" "}
                    <span className="text-base font-bold text-text">
                      {address?.logradouro}, {address?.numero}
                    </span>{" "}
                  </div>
                  <span className="text-base text-text">
                    {address?.bairro} - {address?.localidade}, {address?.uf}
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-normal">
                  <Timer className="h-4 w-4 text-background" />
                </div>
                <div>
                  <div>
                    <span className="text-base text-text">
                      Previsão de entrega
                    </span>
                  </div>
                  <span className="text-base font-bold text-text">
                    20 min - 30 min
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-dark">
                  <DollarSign className="h-4 w-4 text-background" />
                </div>
                <div>
                  <div>
                    <span className="text-base text-text">
                      Pagamento na entrega
                    </span>
                  </div>
                  <span className="text-base font-bold text-text">
                    {state.payment} (Troco para R${" "}
                    {state.exchange &&
                      state.exchange.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    )
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <img src={DeliveringBoy} alt="" />
        </div>
      </div>
    </div>
  );
};
