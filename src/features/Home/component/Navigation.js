import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import logo from "../img/logo.svg";
import { Fade } from "react-reveal";

function Navigation() {
	return (
		<Fade top>
			<NavigationStyled>
				<div className="logo">
					<img src={logo} alt="" />
				</div>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">Introduction</a>
					</li>
					<li>
						<a href="/">Pricing</a>
					</li>
				</ul>
				<PrimaryButton name={"Sign Up"} />
			</NavigationStyled>
		</Fade>
	);
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 10vh;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
  }
  ul {
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;

    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 40%;
  }
`;
export default Navigation;
