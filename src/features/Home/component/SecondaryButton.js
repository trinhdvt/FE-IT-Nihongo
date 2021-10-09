import React from "react";
import styled from "styled-components";
import arrow from "../img/arrow.svg";

function Secondarybutton({ name }) {
	return (
		<SecondaryButonStyled>
			{name}
			<img src={arrow} alt="" />
		</SecondaryButonStyled>
	);
}

const SecondaryButonStyled = styled.button`
  background-color: #16194f;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  font-family: "Nunito", sans-serif;
  font-size: 1.2rem;
  color: white;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    padding-left: 0.9rem;
  }
`;
export default Secondarybutton;
