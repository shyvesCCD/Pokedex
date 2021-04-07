import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokedex20201.herokuapp.com/pokemons?page=",
});
