import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  //updates the value of form and to whats being converted
  const [fromCurrency, setFromCurrency] = useState("🇺🇸 USD - United States");
  const [toCurrency, setToCurrency] = useState("🇳🇬 NGN - Nigeria");
  const [amount, setAmount] = useState("");


  const value = { fromCurrency, setFromCurrency, toCurrency, setToCurrency , amount, setAmount};
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>  
  );
};

export default CurrencyProvider;
