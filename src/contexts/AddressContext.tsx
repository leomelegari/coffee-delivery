import { ReactNode, createContext, useEffect, useState } from "react";

interface AddressContextData {
  address: AddressProps | undefined;
  handleSetAddress: (data: AddressProps) => void;
}

interface AddressProps {
  cep: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const AddressContext = createContext({} as AddressContextData);

interface AddressContextProviderProps {
  children: ReactNode;
}
export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [address, setAddres] = useState<AddressProps>();

  useEffect(() => {
    const savedItems = localStorage.getItem("@coffeeDelivery:address");
    if (savedItems) {
      setAddres(JSON.parse(savedItems));
    }
  }, []);

  const handleSetAddress = (data: AddressProps) => {
    setAddres(data);
    localStorage.setItem("@coffeeDelivery:address", JSON.stringify(data));
  };

  return (
    <AddressContext.Provider value={{ address, handleSetAddress }}>
      {children}
    </AddressContext.Provider>
  );
}
