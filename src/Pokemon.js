import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Pokemon extends Component {
  render() {
    let url = "/pokemon/";
    return this.props.pokemons.map((pokemon) => (
      <h3>
        {" "}
        <a href={url + pokemon.name} key={pokemon.name}>
          {" "}
          {pokemon.name}{" "}
        </a>
      </h3>
    ));
  }
}

Pokemon.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default Pokemon;
