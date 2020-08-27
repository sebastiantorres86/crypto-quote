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
  margin-bottom: 1rem;
`;

const useCurrency = (label, initialState, options) => {
  // Custom hook state
  const [state, updateState] = useState(initialState);
  const Select = () => (
    <Fragment>
      <Label>{label}</Label>
      <Selected onChange={(e) => updateState(e.target.value)} value={state}>
        <option value="">- Select -</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </Selected>
    </Fragment>
  );

  // Return state, interface and function that modifies state
  return [state, Select];
};

export default useCurrency;
