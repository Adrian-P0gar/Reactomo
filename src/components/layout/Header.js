import React from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  font: "sans-serif",
  background: "green",
};

const Button = styled.button`
  font-family: ${(props) => props.theme.font};
  font-size: 1.3rem;
  border-color: white;
  border-radius: 50px;
  padding: 7px 10px;
  background: yellow;
  color: #fff;
  &:hover {
    background: blue;
  }
`;

const H1 = styled.h1`
  font-family: "sans-serif";
`;

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <header style={headerStyle}>
        <H1>Pokemons</H1>
        <Link to="/">
          <Button>Pokemons</Button>
        </Link>{" "}
        |{" "}
        <Link to="/types">
          <Button>Types</Button>
        </Link>
      </header>
    </ThemeProvider>
  );
}

const headerStyle = {
  background: "#696969",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default Header;
