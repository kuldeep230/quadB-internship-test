import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>2021 &copy; All Rights Reserved</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  text-align: center;
  margin: 2em 0;
  p {
    color: rgba(var(--grey));
  }
`;
