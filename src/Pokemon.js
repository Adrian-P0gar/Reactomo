import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Pokemon = (props) => {
  let url = "/pokemon/";
  let content = props.pokemons.map((pokemon) => (
    <h3>
      {" "}
      <a href={url + pokemon.name} key={pokemon.name}>
        {" "}
        {pokemon.name}{" "}
      </a>
    </h3>
  ));
  return content;
};

Pokemon.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default Pokemon;
