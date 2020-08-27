import React from "react";
import styled from "@emotion/styled";

const ResultDiv = styled.div`
  background-color: #3e64ff;
  color: #ecfcff;
  padding: 1rem 2rem;
  border-radius: 25px;
  margin-top: 1rem;
`;

const Info = styled.p`
  font-size: 18px;
  position: relative;

  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
    &::after {
    content: "";
    width: 150px;
    height: 15px;
    background-color: #b2fcff;
    display: block;
    opacity: 0.6;
  }
  }
`;

const Quote = ({ result }) => {
  if (Object.keys(result).length === 0) return null;

  console.log(result);

  return (
    <ResultDiv>
      <Price>
        The price is: <br /> <span>{result.PRICE}</span>
      </Price>
      <Info>
        High of the day: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        Low of the day: <span>{result.LOWDAY}</span>
      </Info>
      <Info>
        24hs Variation: <span>{result.CHANGEPCT24HOUR}%</span>
      </Info>
      <Info>
        Last Update: <span>{result.LASTUPDATE}</span>
      </Info>
    </ResultDiv>
  );
};

export default Quote;
