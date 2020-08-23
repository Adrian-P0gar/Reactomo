import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokemon from "./Pokemon";
import Header from "./components/layout/Header.js";
import "./App.css";
import Types from "./Types.js";
import PokemonDetails from "./PokemonDetails";
import { getAllPokemons } from "./components/GetPokemons";
import { Button, Card } from "react-bootstrap";

const App = (props) => {
  const [pokemons, setPokemonChars] = useState();
  const [loading, setLoading] = useState(true);
  const firstUrl = "https://pokeapi.co/api/v2/pokemon?limit=5";
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemons(firstUrl);
      setPokemonChars(response.results);
      await getPokemonsDetails(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const getPokemonsDetails = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemonIterator) => {
        let pokemonsRecords = await getAllPokemons(pokemonIterator.url);

        return pokemonsRecords;
      })
    );
    setPokemonChars(_pokemonData);
  };

  let content = (
    <Router>
      <div className="App">
        <div className="container">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <div className="grid">
              <Header />
              <Route
                exact
                path="/"
                render={(props) => (
                  <React.Fragment>
                    <div className="grid">
                      {pokemons.map((pokemon, i) => {
                        return <Pokemon key={i} pokemons={pokemon} />;
                      })}
                    </div>
                  </React.Fragment>
                )}
              />
              <Route path="/types" component={Types} />
              <Route
                path="/pokemon/:pname"
                component={PokemonDetails}
                pname={props.name}
              />{" "}
            </div>
          )}
        </div>
      </div>
    </Router>
  );
  return content;
};
export default App;
