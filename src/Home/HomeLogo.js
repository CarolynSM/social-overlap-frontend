import React, { Component } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const HomeLogo = () => (
  <LogoContainer>
    <Logo src={logo} />
    <LogoText>Social Overlap</LogoText>
  </LogoContainer>
);

export default HomeLogo;

const LogoContainer = styled.header`
  align-items: center;
  background-color: var(--black);
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1.5em 1rem;
`;

const LogoImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  height: 40%;
  width: 20%;
`;

const LogoText = styled.h1`
  color: white;
  font-family: var(--logo-font);
  font-size: 1.7em;
  padding-left: 1rem;
  text-transform: uppercase;
`;
