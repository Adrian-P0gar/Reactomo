import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetails = (props) => {
  const [state, setPokemonDetails] = useState({ detail: {} });

  const routeParameter = props.match.params.pname;
  console.log(props.match.params.pname);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${routeParameter}`)
      .then((res) => {
        console.log(res + "!!!!!!!!!!!!!!!!!");
        setPokemonDetails({ detail: res.data });
      });
  }, [routeParameter]);

  // componentDidMount() {
  //   console.log(JSON.stringify(this.props.match.params.pname, null, 2));
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pname}`)
  //     .then((d) => {
  //       this.setState({ detail: d.data });
  //     });
  // }

  const content = Object.keys(state.detail).map((d) => (
    <article>
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
