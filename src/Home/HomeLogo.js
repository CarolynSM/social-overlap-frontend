import React, { Component } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const HomeLogo = () => (
  <LogoContainer>
    <LogoImgContainer>
      <Logo src={logo} />
    </LogoImgContainer>
    <LogoText>Social Overlap</LogoText>
  </LogoContainer>
);

export default HomeLogo;

const LogoContainer = styled.header`
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 2rem;
`;

const LogoImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  height: 40%;
  padding: 2rem;
  width: 40%;
`;

const LogoText = styled.h1`
  color: white;
  font-family: var(--logo-font);
  font-size: 2.3em;
  text-align: center;
  text-transform: uppercase;
`;
