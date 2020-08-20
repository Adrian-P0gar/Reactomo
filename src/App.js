import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemon from "./Pokemon";
import Header from "./components/layout/Header.js";
import "./App.css";
import axios from "axios";
import Types from "./Types.js";
import PokemonDetails from "./PokemonDetails";

class App extends Component {
  state = {
    pokemon: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100").then((res) => {
      this.setState({ pokemon: res.data.results });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <Pokemon pokemons={this.state.pokemon} />
                </React.Fragment>
              )}
            />
            <Route path="/types" component={Types} />
            <Route
              path="/pokemon/:pname"
              component={PokemonDetails}
              pname={this.props.name}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
