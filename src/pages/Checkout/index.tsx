import "react-tooltip/dist/react-tooltip.css";

import {
  Banknote,
  CircleHelp,
  CreditCard,
  DollarSign,
  Landmark,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tooltip as ReactTooltip } from "react-tooltip";

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

const getAddressByCEP = async (cep: string): Promise<Address | null> => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    if (data.erro) {
      return null;
    }
    return {
      cep: data.cep,
      logradouro: data.logradouro,
      complemento: data.complemento,
      bairro: data.bairro,
      localidade: data.localidade,
      uf: data.uf,
    };
  } catch (error) {
    console.error("Erro ao buscar endereço:", error);
    return null;
  }
};

export const Checkout = () => {
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  const [error, setError] = useState("");

  // const [address, setAddress] = useState<Address | null>(null);
  // console.log("address ", address);

  const handleSearch = async () => {
    const result = await getAddressByCEP(cep);
    console.log("result ", result);

    if (!result) {
      setError("O CEP está correto?");
    } else {
      setError("");
      setRua(result.logradouro);
      setComplemento(result.complemento);
      setBairro(result.bairro);
      setCidade(result.localidade);
      setUf(result.uf);
    }
  };

  const handleBlur = async () => {
    if (cep) {
      await handleSearch();
    }
  };

  const handleSearchCEP = () => {
    window.open("https://buscacepinter.correios.com.br/app/endereco/index.php");
  };

  return (
    <div>
      <Helmet>
        <title>Coffee Delivery | Checkout</title>
      </Helmet>

      <div className="flex w-[640px] flex-col rounded-md bg-card p-10">
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
          <div className="flex items-center justify-between gap-3">
            <input
              type="text"
              placeholder="CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              onBlur={handleBlur}
              className="w-[200px] rounded-md bg-input p-3 text-sm text-text outline-none ring-1 ring-button placeholder:text-label focus-within:ring-1 focus-within:ring-purple-normal"
            />
            {error && (
              <div className="flex items-center gap-3">
                <span className="flex items-center  gap-1 text-sm text-red-500">
                  {error}
                  <CircleHelp
                    data-tooltip-id="cep-search"
                    data-tooltip-content={`Não encontramos esse CEP na base de dados dos Correios. Clique no botão ao lado e busque pelo seu CEP no site dos Correios.`}
                    className="h-4 w-4 text-purple-dark"
                  />
                </span>
                <button
                  onClick={handleSearchCEP}
                  className="flex flex-1 items-center justify-center gap-3 rounded-md bg-purple-normal p-4 text-xs font-semibold text-background"
                >
                  BUSCAR CEP
                </button>
                <ReactTooltip id="cep-search" />
              </div>
            )}
          </div>
          <div className="w-full">
            <input
              type="text"
              value={rua}
              placeholder="Rua"
              onChange={(e) => setRua(e.target.value)}
              className="w-full rounded-md bg-input p-3 text-sm text-text outline-none ring-1 ring-button placeholder:text-label focus-within:ring-1 focus-within:ring-purple-normal"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              value={numero}
              placeholder="Número"
              onChange={(e) => setNumero(e.target.value)}
              className="w-[200px] rounded-md bg-input p-3 text-sm text-text outline-none ring-1 ring-button placeholder:text-label focus-within:ring-1 focus-within:ring-purple-normal"
            />
            <input
              type="text"
              value={complemento}
              placeholder="Complemento"
              onChange={(e) => setComplemento(e.target.value)}
              className="flex-1 rounded-md bg-input p-3 text-sm text-text outline-none ring-1 ring-button placeholder:text-label focus-within:ring-1 focus-within:ring-purple-normal"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              value={bairro}
              placeholder="Bairro"
              onChange={(e) => setBairro(e.target.value)}
              className="w-[200px] rounded-md bg-input p-3 text-sm text-text outline-none ring-1 ring-button placeholder:text-label focus-within:ring-1 focus-within:ring-purple-normal"
            />
            <input
              type="text"
              value={cidade}
              placeholder="Cidade"
              onChange={(e) => setCidade(e.target.value)}
              className="w-[276px] rounded-md bg-input p-3 text-sm text-text outline-none ring-1 ring-button placeholder:text-label focus-within:ring-1 focus-within:ring-purple-normal"
            />
            <input
              type="text"
              value={uf}
              placeholder="UF"
              onChange={(e) => setUf(e.target.value)}
              className="w-[60px] rounded-md bg-input p-3 text-sm text-text outline-none ring-1 ring-button placeholder:text-label focus-within:ring-1 focus-within:ring-purple-normal"
            />
          </div>
        </div>
      </div>
      <div className="mt-3 flex w-[640px] flex-col gap-8 rounded-md bg-card p-10">
        <div className="flex gap-2">
          <DollarSign className="h-5 w-5 text-purple-normal" />
          <div className="flex flex-col">
            <span className="text-base font-semibold text-subtitle">
              Pagamento
            </span>
            <span className="text-sm text-text">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </div>
        <div className="flex w-full gap-3">
          <button className="flex flex-1 items-center justify-center gap-3 rounded-md bg-button p-4 text-xs font-semibold text-text">
            <CreditCard className="h-4 w-4 text-purple-normal" />{" "}
            <span>CARTÃO DE CRÉDITO</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-3 rounded-md bg-button p-4 text-xs font-semibold text-text">
            <Landmark className="h-4 w-4 text-purple-normal" />{" "}
            <span>CARTÃO DE DÉBITO</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-3 rounded-md bg-button p-4 text-xs font-semibold text-text">
            <Banknote className="h-4 w-4 text-purple-normal" />{" "}
            <span>DINHEIRO</span>
          </button>
        </div>
      </div>
    </div>
  );
};
