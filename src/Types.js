import React, { Component } from "react";
import axios from "axios";
class Types extends Component {
  state = {
    types: [],
  };

  componentDidMount() {
    axios.get(" https://pokeapi.co/api/v2/type").then((res) => {
      this.setState({ types: res.data.results });
    });
  }
  render() {
    return this.state.types.map((type) => <h3> {type.name} </h3>);
  }
}

export default Types;
