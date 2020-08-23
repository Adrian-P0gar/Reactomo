import axios from "axios";

export async function getAllPokemons(urs) {
  const rsponse = await axios({
    url: urs,
    method: "GET",
  });
  return rsponse.data;
}
