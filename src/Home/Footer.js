import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterContainer>
    <small>&copy; 2018 Social Overlap</small>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
`;
