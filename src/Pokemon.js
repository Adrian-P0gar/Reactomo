import PropTypes from "prop-types";
import React from "react";
import { Button, Card } from "react-bootstrap";

const Pokemon = (props) => {
  let url = "/pokemon/";

  let content = (
    <Card style={{ width: "10rem" }} className="box">
      <Card.Img variant="top" src={props.pokemons.sprites.front_default} />
      <Card.Body>
        <Card.Title>{props.pokemons.name}</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">
          {" "}
          <a href={url + props.pokemons.name}>Details</a>
        </Button>
      </Card.Body>
    </Card>
  );

  return content;
};

Pokemon.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default Pokemon;
