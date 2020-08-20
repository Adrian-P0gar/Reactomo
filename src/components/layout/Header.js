import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Pokemns</h1>
      <Link className={"btn"} to="/">
        {" "}
        Pokemons{" "}
      </Link>{" "}
      |
      <Link className={"btn"} to="/types">
        {" "}
        Types{" "}
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default Header;
