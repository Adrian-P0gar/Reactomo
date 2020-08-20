import React, { Component } from "react";
import { match } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";

class PokemonDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {},
    };
  }

  componentDidMount() {
    console.log(JSON.stringify(this.props.match.params.pname, null, 2));
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.pname}`)
      .then((d) => {
        this.setState({ detail: d.data });
      });
  }

  render() {
    return Object.keys(this.state.detail).map((d) => (
      <article>
        <h1>{d}</h1>
        {this.state.detail[d].constructor === Array &&
          this.state.detail[d].map((det) =>
            Object.values(det).map((v) => <p>{JSON.stringify(v)}</p>)
          )}
        {this.state.detail[d].constructor !== Array && (
          <p>{JSON.stringify(this.state.detail[d], null, 2)}</p>
        )}
      </article>
    ));
  }
}
export default PokemonDetails;
