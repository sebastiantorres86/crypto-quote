import React from 'react';
import styled from '@emotion/styled'

const ErrorMessage = styled.p`
  background-color: #eb8f8f;
  padding: 1rem;
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Poppins", sans-serif;
  border-radius: 35px;
`

const Error = ({message}) => {
  return ( 
    <ErrorMessage>{message}</ErrorMessage>
   );
}
 
export default Error;