import React, { Component } from "react";
import styled from "styled-components";

import HomeLogo from "./Home/HomeLogo.js";
import Footer from "./Home/Footer.js";
import construction from "./assets/construction.png";

const Splash = () => {
  return (
    <div>
      <HomeLogo />
      <Container>
        <Img src={construction} />
        <Htwo>We&#39;re making some improvements!</Htwo>
        <Hthree>We&#39;ll be back soon.</Hthree>
      </Container>
      <Footer />
    </div>
  );
};

export default Splash;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

const Img = styled.img`
  padding: 2rem;
`;

const Htwo = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
`;

const Hthree = styled.h3`
  font-sice: 1.2em;
  line-height: 2rem;
  padding-bottom: 13rem;
  text-align: center;
`;
