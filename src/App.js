import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import image from "./pablita-cryptocurrency.png";
import Form from "./Components/Form";
import Quote from "./Components/Quote";
import Spinner from "./Components/Spinner";

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 1rem;
    padding: 0;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  color: #3e64ff;
  text-align: left;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 50px;
  margin-top: 40px;

  &::after {
    content: "";
    width: 110px;
    height: 15px;
    background-color: #b2fcff;
    display: block;
    opacity: 0.6;
  }
  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 1;
    margin-top: 80px;
  }
`;

function App() {
  const [currency, saveCurrency] = useState("");
  const [crypto, saveCrypto] = useState("");
  const [result, saveResult] = useState({});
  const [loading, saveLoading] = useState(false);

  useEffect(() => {
    const quoteCrypto = async () => {
      // We avoid execution the first time
      if (currency === "") return;

      // Consult the API to get the quote
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;

      const result = await axios.get(url);

      // Display the spinner
      saveLoading(true);

      // Remove the spinner and display the result
      setTimeout(() => {
        // Change the state of loading
        saveLoading(false);

        // Save quote
        saveResult(result.data.DISPLAY[crypto][currency]);
      }, 3000);
    };

    quoteCrypto();
  }, [currency, crypto]);

  // Display spinner or result
  const component = loading ? <Spinner /> : <Quote result={result} />;

  return (
    <Container>
      <div>
        <Heading>Instant Cryptocurrency Quote</Heading>
        <Form saveCrypto={saveCrypto} saveCurrency={saveCurrency} />

        {component}
      </div>
      <div>
        <Image src={image} alt="cryptocurrency" />
      </div>
    </Container>
  );
}

export default App;
