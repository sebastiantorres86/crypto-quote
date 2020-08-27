import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Poppins", sans-serif;
  color: #5edfff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.4rem;
  display: block;
`;

const Selected = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 25px;
  border: none;
  font-size: 1.2rem;
  color: #3e64ff;
`;

const useCrypto = (label, initialState, options) => {

  // console.log(options)

  // Custom hook state
  const [state, updateState] = useState(initialState);
  const SelectCrypto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Selected onChange={(e) => updateState(e.target.value)} value={state}>
        <option value="">- Select -</option>
        {options.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </Selected>
    </Fragment>
  );

  // Return state, interface and function that modifies state
  return [state, SelectCrypto];
};

export default useCrypto;

