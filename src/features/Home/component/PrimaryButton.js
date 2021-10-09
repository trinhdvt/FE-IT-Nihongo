import React from "react";
import styled from "styled-components";

function PrimaryButton({ name }) {
	return <ButtonStyled>{name}</ButtonStyled>;
}
const ButtonStyled = styled.button`
  background-color: #f44e77;
  padding: 0.7rem 1.5rem;
  font-family: "Nunito", sans-serif;
  font-size: 1.2rem;
  color: white;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
`;
export default PrimaryButton;
