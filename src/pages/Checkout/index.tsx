import { useContext, useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";

import {
  Banknote,
  ChevronLeft,
  CreditCard,
  DollarSign,
  Landmark,
  Loader2,
  MapPin,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { AddressContext } from "../../contexts/AddressContext";
import { CartContext } from "../../contexts/CartContext";
import { GetAddressByCEP } from "../../utils/getAddressByCEP";
import { CartItem } from "./components/CartItem";
import PaymentMethodButton from "./components/PaymentMethodButton";
import { twMerge } from "tailwind-merge";

const paymentFormSchema = z.object({
  cep: z.string().min(1),
  logradouro: z.string().min(1),
  numero: z.string().min(1),
  complemento: z.string().optional(),
  bairro: z.string().min(1),
  localidade: z.string().min(1),
  uf: z.string().min(1).max(2),
  paymentMethod: z.string(),
  exchange: z.string().nullable().optional(),
});

type PaymentFormData = z.infer<typeof paymentFormSchema>;

export const Checkout = () => {
  const { items, calculateTotal, clearCart } = useContext(CartContext);
  const { address, handleSetAddress } = useContext(AddressContext);

  const [submitting, setSubmitting] = useState(false);

  const [cepError, setCepError] = useState("");

  const [paymentSelected, setPaymentSelected] = useState("");
  const [paymentSelectedError, setPaymentSelectedError] = useState(false);

  const addressForm = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormSchema),
  });

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = addressForm;

  const navigate = useNavigate();

  useEffect(() => {
    if (address) {
      setValue("cep", address.cep);
      setValue("numero", address.numero);
      setValue("logradouro", address.logradouro);
      setValue("complemento", address.complemento);
      setValue("bairro", address.bairro);
      setValue("localidade", address.localidade);
      setValue("uf", address.uf);
    }
  }, [address, setValue]);

  const handleSearch = async (cep: string) => {
    const result = await GetAddressByCEP(cep);

    if (!result) {
      setCepError("O CEP está correto?");
    } else {
      setCepError("");
      setValue("cep", result.cep);
      setValue("logradouro", result.logradouro);
      setValue("complemento", result.complemento);
      setValue("bairro", result.bairro);
      setValue("localidade", result.localidade);
      setValue("uf", result.uf);
    }
  };

  const handleBlur = async () => {
    const cepValue = getValues("cep");
    if (cepValue) {
      await handleSearch(cepValue);
    }
  };

  const handleSearchCEP = () => {
    window.open("https://buscacepinter.correios.com.br/app/endereco/index.php");
  };

  const handlePaymentSelected = (title: string) => {
    if (title === "Dinheiro") {
      setValue("exchange", "0,00");
    }
    setValue("paymentMethod", title);
    setPaymentSelected(title);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const delivering = async ({
    bairro,
    cep,
    complemento,
    localidade,
    logradouro,
    numero,
    uf,
    paymentMethod,
    exchange,
  }: PaymentFormData) => {
    if (paymentMethod === "") {
      setPaymentSelectedError(true);
      return;
    }

    setSubmitting(true);

    await new Promise(() => {
      setTimeout(() => {
        setSubmitting(false);

        handleSetAddress({
          cep,
          bairro,
          complemento,
          numero,
          localidade,
          logradouro,
          uf,
        });

        clearCart();
        navigate("/delivering", {
          state: { payment: paymentMethod, exchange },
        });
      }, 2000);
    });
  };

  return (
    <>
      <div className="flex w-full items-center gap-2 p-4 lg:max-w-[1120px] lg:px-0">
        <Button
          onClick={handleGoBack}
          className="bg-card transition ease-in-out hover:bg-button"
        >
          <ChevronLeft strokeWidth={3} className="h-5 w-5 text-purple-dark" />
          <span>Voltar</span>
        </Button>
      </div>
      <form
        onSubmit={handleSubmit(delivering)}
        className="flex w-full flex-col justify-between px-4 lg:max-w-[1120px] lg:flex-row lg:px-0"
      >
        <Helmet>
          <title>Coffee Delivery | Checkout</title>
        </Helmet>

        <div className="flex flex-col flex-wrap">
          <span className="mb-4 font-poppins text-lg font-bold">
            Complete seu pedido
          </span>
          <div className="flex flex-col rounded-md  bg-card p-10 shadow-md lg:w-[640px]">
            <div className="flex gap-2">
              <MapPin className="h-5 w-5 text-yellow-dark" />
              <div className="flex flex-col">
                <span className="text-base font-semibold text-subtitle">
                  Endereço de Entrega
                </span>
                <span className="text-sm text-text">
                  Informe o endereço onde deseja receber seu pedido
                </span>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col justify-between gap-3 md:flex-row lg:items-center">
                <Input
                  placeholder="CEP"
                  handleBlur={handleBlur}
                  mask="CEP"
                  className={
                    errors && errors.cep
                      ? "rounded-md ring-red-500 focus-within:ring-1 focus-within:ring-red-500"
                      : "lg:w-[200px]"
                  }
                  {...register("cep")}
                />
                {cepError && (
                  <div className="flex items-center gap-3">
                    <span className="flex items-center  gap-1 text-sm text-red-500">
                      {cepError}
                    </span>
                    <button
                      onClick={handleSearchCEP}
                      className="flex flex-1 items-center justify-center gap-3 rounded-md bg-button p-4 text-xs font-semibold text-text transition ease-in-out hover:bg-hover md:text-sm"
                    >
                      VERIFICAR CEP
                    </button>
                  </div>
                )}
              </div>
              <div className="w-full">
                <Input
                  placeholder="Rua"
                  className={
                    errors && errors.logradouro
                      ? "rounded-md ring-red-500 focus-within:ring-1 focus-within:ring-red-500"
                      : "w-full"
                  }
                  {...register("logradouro")}
                />
              </div>
              <div className="flex flex-col flex-wrap gap-3 md:flex-row">
                <Input
                  placeholder="Número"
                  className={
                    errors && errors.numero
                      ? "flex-1 rounded-md ring-red-500 focus-within:ring-1 focus-within:ring-red-500 "
                      : "flex-1 lg:w-[200px]"
                  }
                  {...register("numero")}
                />
                <Input
                  placeholder="Complemento"
                  className={
                    errors && errors.complemento
                      ? "rounded-md ring-red-500 focus-within:ring-1 focus-within:ring-red-500"
                      : "flex flex-1 items-center"
                  }
                  {...register("complemento")}
                >
                  <span className="pr-2 text-xs italic text-label">
                    Opcional
                  </span>
                </Input>
              </div>
              <div className="flex flex-col flex-wrap gap-3 md:flex-row">
                <Input
                  placeholder="Bairro"
                  className={
                    errors && errors.bairro
                      ? "flex-1 rounded-md ring-red-500 focus-within:ring-1 focus-within:ring-red-500 lg:w-[200px]"
                      : "flex-1 lg:w-[200px]"
                  }
                  {...register("bairro")}
                />
                <Input
                  placeholder="Cidade"
                  className={
                    errors && errors.localidade
                      ? "flex-1 rounded-md ring-red-500 focus-within:ring-1 focus-within:ring-red-500 lg:w-[276px]"
                      : "flex-1 lg:w-[276px]"
                  }
                  {...register("localidade")}
                />
                <Input
                  placeholder="UF"
                  className={
                    errors && errors.uf
                      ? "flex-1 rounded-md ring-red-500 focus-within:ring-1 focus-within:ring-red-500 lg:w-[60px]"
                      : "flex-1 lg:w-[60px]"
                  }
                  {...register("uf")}
                />
              </div>
            </div>
          </div>
          <div
            className={twMerge(
              "mt-7 flex flex-col gap-8 rounded-md  bg-card p-10 shadow-md lg:w-[640px]",
              paymentSelectedError === true && "border border-red-500",
            )}
          >
            <div className="flex gap-2 ">
              <DollarSign className="h-5 w-5 text-purple-normal" />
              <div className="flex flex-col">
                <span className="text-base font-semibold text-subtitle">
                  Pagamento
                </span>
                <span className="text-sm text-text">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>
            <div className="flex w-full flex-wrap gap-3 md:flex-nowrap">
              <PaymentMethodButton
                type="button"
                title="Crédito"
                className="text-xs"
                icon={<CreditCard className="h-4 w-4 text-purple-normal" />}
                setPaymentSelected={handlePaymentSelected}
                paymentSelected={paymentSelected}
                {...register("paymentMethod")}
              />
              <PaymentMethodButton
                type="button"
                title="Débito"
                className="text-xs"
                icon={<Landmark className="h-4 w-4 text-purple-normal" />}
                setPaymentSelected={handlePaymentSelected}
                paymentSelected={paymentSelected}
                {...register("paymentMethod")}
              />
              <PaymentMethodButton
                type="button"
                title="Dinheiro"
                className="text-xs"
                icon={<Banknote className="h-4 w-4 text-purple-normal" />}
                setPaymentSelected={handlePaymentSelected}
                paymentSelected={paymentSelected}
                {...register("paymentMethod")}
              />
            </div>
          </div>
        </div>
        <div className="mb-6 flex flex-col lg:mb-0">
          <span className="mb-4 mt-4 font-poppins text-lg font-bold lg:mt-0">
            Cafés selecionados
          </span>
          <div className="rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px]  bg-card px-10 pb-8 pt-2 shadow-md lg:w-[448px]">
            <div className="flex max-h-[380px] flex-wrap justify-center gap-4 overflow-y-scroll pr-3 sm:flex sm:flex-col sm:flex-nowrap sm:justify-normal sm:gap-0 ">
              {items.map((item, i) => {
                return <CartItem key={i} item={item} />;
              })}
            </div>
            {items && items.length >= 1 ? (
              <>
                <div className="flex flex-col gap-3 py-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-text">Total de itens</span>
                    <span className="text-base text-text">
                      R${" "}
                      {calculateTotal().toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                  {paymentSelected === "Dinheiro" && (
                    <div className="flex justify-between">
                      <span className="text-sm text-text">Troco para </span>
                      <div className="flex w-28 gap-2 rounded-md bg-input p-1 text-sm text-text  outline-none ring-1 ring-button placeholder:text-label focus-within:ring-1 focus-within:ring-purple-normal">
                        <span>R$</span>
                        <Input
                          type="text"
                          className="w-full border-none bg-transparent p-0 text-end outline-none ring-0 ring-transparent focus-within:ring-0 focus-within:ring-transparent"
                          {...register("exchange")}
                        />
                      </div>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-sm text-text">Entrega</span>
                    <span className="text-base text-text">R$ 3,50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-subtitle">
                      Total
                    </span>
                    <span className="text-xl font-bold text-subtitle">
                      R${" "}
                      {(calculateTotal() + 3.5).toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={twMerge(
                    "w-full rounded-md bg-yellow-normal px-2 py-3 text-sm font-semibold text-white transition ease-in-out hover:bg-yellow-dark",
                    submitting &&
                      "cursor-progress bg-button text-subtitle hover:bg-button",
                  )}
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="animate-spin text-title" />{" "}
                      Confirmando pedido...
                    </span>
                  ) : (
                    "CONFIRMAR PEDIDO"
                  )}
                </button>
              </>
            ) : (
              <div className="flex h-[200px] w-full flex-col items-center justify-center gap-8">
                <div className="flex flex-col items-center justify-center gap-4">
                  <span className="text-center font-poppins text-lg text-purple-normal">
                    Você ainda não adicionou nenhum item
                  </span>
                  <span className="text-center text-base text-text">
                    Clique no botão abaixo para adicionar itens ao seu carrinho
                  </span>
                </div>
                <button
                  onClick={handleGoBack}
                  className="w-full rounded-md bg-yellow-normal px-2 py-3 text-base font-semibold text-white transition ease-in-out hover:bg-yellow-dark"
                >
                  ADICIONAR ITENS
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};
