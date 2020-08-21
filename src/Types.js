import React, { useState, useEffect } from "react";
import axios from "axios";

const Types = (props) => {
  const [state, setStateType] = useState({
    types: [],
  });

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type").then((res) => {
      console.log(res);
      setStateType({ types: res.data.results });
    });
  }, []);

  let content = state.types.map((type) => <h3> {type.name} </h3>);
  return content;
};

export default Types;
