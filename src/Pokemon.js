import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import React, { useState, useEffect } from "react";
import PokemonDetails from "./PokemonDetails";
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
const Container = styled.div`
  padding: 2px 16px;
`;

const Pokemon = (props) => {
  let url = "/pokemon/";
  // console.log(JSON.stringify(props.name) + "!?!?!!?!?!?!!? pula");
  // console.log(JSON.stringify(props.pokemons) + "!?!?!!?!?!?!!? pula mea");

  let content = (
    <Container>
      <Card>
        <div>
          <div>
            <img src={props.pokemons.sprites.front_default} alt="" />
          </div>
          <a href={url + props.pokemons.name}>{props.pokemons.name}</a>
        </div>
      </Card>
    </Container>
  );

  return content;
};

Pokemon.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default Pokemon;
