import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";

const Header = () => {
  return (
    <Nav>
      <WebTitle to="/">
        {" "}
        <MovieIcon /> MyShows
      </WebTitle>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: 5em;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3em;
  background-color: rgba(var(--cherryRed), 0.8);
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.7);
`;

const MovieIcon = styled(BiCameraMovie)``;

const WebTitle = styled(Link)`
  color: rgba(var(--milkWhite));
  font-size: 2em;
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
