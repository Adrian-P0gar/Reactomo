import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAllPokemons } from "./components/GetPokemons";

const PokemonDetails = (props) => {
  const [state, setPokemonDetails] = useState();
  const [loading, setLoading] = useState(true);
  const routeParameter = props.match.params.pname;

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemons(
        `https://pokeapi.co/api/v2/pokemon/${routeParameter}`
      );
      setPokemonDetails(response);
      setLoading(false);
    }
    fetchData();
  }, [routeParameter]);

  console.log("????STATE DETAILS????????? " + JSON.stringify(state));
  const content = (
    <div>
      <div> {loading ? <h1>Loading...</h1> : <h1> Name: {state.name}</h1>}</div>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <p> Base experience: {state.base_experience}</p>
        )}
      </div>
      <div>
        {loading ? <h1>Loading...</h1> : <p> Weight: {state.weight}</p>}
      </div>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <p> First ability: {state.abilities[0].ability.name}</p>
        )}
      </div>
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <p> Second ability: {state.abilities[1].ability.name}</p>
        )}
      </div>
    </div>
  );

  return content;
};

export default PokemonDetails;
