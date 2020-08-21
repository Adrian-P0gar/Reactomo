import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemon from "./Pokemon";
import Header from "./components/layout/Header.js";
import "./App.css";
import axios from "axios";
import Types from "./Types.js";
import PokemonDetails from "./PokemonDetails";

const App = (props) => {
  const [data, setPokemonChars] = useState({ pokemon: [] });

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((res) => {
        console.log(res);
        setPokemonChars({ pokemon: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let content = (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Pokemon pokemons={data.pokemon} />
              </React.Fragment>
            )}
          />
          <Route path="/types" component={Types} />
          <Route
            path="/pokemon/:pname"
            component={PokemonDetails}
            pname={props.name}
          />
        </div>
      </div>
    </Router>
  );
  return content;
};
export default App;
