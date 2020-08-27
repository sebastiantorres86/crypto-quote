import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useCurrency from "../Hooks/useCurrency";
import useCrypto from "../Hooks/useCrypto";
import Error from "../Components/Error";
import axios from "axios";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #3e64ff;
  border: none;
  width: 100%;
  border-radius: 25px;
  color: #fff;
  transition: background-color 0.3s ease;
  outline: none;

  &:hover {
    background-color: #5edfff;
    cursor: pointer;
  }

`;

const Form = ({ saveCurrency, saveCrypto }) => {
  // State of the cryptocurrency list
  const [cryptoList, saveCryptos] = useState([]);
  const [error, saveError] = useState(false);

  const CURRENCIES = [
    { code: "USD", name: "American Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Pound Sterling" },
    { code: "ARS", name: "Argentine Peso" },
  ];

  // Use useCurrency
  const [currency, SelectCurrencies] = useCurrency(
    "Choose your currency",
    "",
    CURRENCIES
  );

  // Use useCrypto
  const [crypto, SelectCrypto] = useCrypto(
    "Choose your Cryptocurrency",
    "",
    cryptoList
  );

  // Execute API call
  useEffect(() => {
    const consultAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const result = await axios.get(url);

      saveCryptos(result.data.Data);
    };
    consultAPI();
  }, []);

  // When the user submits
  const quoteCurrency = (e) => {
    e.preventDefault();

    // Validate if both fields are full
    if (currency === "" || crypto === "") {
      saveError(true);
      return;
    }

    // Pass the value to the main component
    saveError(false);
    saveCurrency(currency);
    saveCrypto(crypto);
  };

  return (
    <form onSubmit={quoteCurrency}>
      {error ? <Error message="All fields are required" /> : null}
      <SelectCurrencies />

      <SelectCrypto />

      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
