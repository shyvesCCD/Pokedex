import "./style/global.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => setPokemon(data.results))
      .catch((err) => {
        throw new Error(`Erro na Api ${err}`);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="Container-Content">
        {pokemons.map((pokemon) => (
          <Card pok={pokemon.name} />
        ))}
      </div>
    </>
  );
}

export default App;
