import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetails = (props, pdetail) => {
  const [state, setPokemonDetails] = useState({ detail: {} });
  console.log(JSON.stringify(pdetail) + " props for pokemon details");

  const routeParameter = props.match.params.pname;
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${routeParameter}`)
      .then((res) => {
        setPokemonDetails({ detail: res.data });
      });
  }, [routeParameter]);

  const content = Object.keys(state.detail).map((d) => (
    <article>
      {/* <h1>
        {" "}
        {state.detail ? state.detail.abilities[0].ability.name : ""}{" "}
        !!!!!!!!!!!!!!!{" "}
      </h1> */}
      <h1>{d}</h1>
      {state.detail[d].constructor === Array &&
        state.detail[d].map((det) =>
          Object.values(det).map((v) => <p>{JSON.stringify(v)}</p>)
        )}
      {state.detail[d].constructor !== Array && (
        <p>{JSON.stringify(state.detail[d], null, 2)}</p>
      )}
    </article>
  ));
  return content;
};
export default PokemonDetails;
