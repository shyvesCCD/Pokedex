import "./style/global.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { api } from "./service/api";

function App() {
  const [pokemons, setPokemons] = useState([]);
  // const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    api.get("1").then((response) => setPokemons(response.data.data));
  }, []);

  // const handleChangePage = () => {
  //   setNextPage(nextPage + 1);
  // };
  console.log(pokemons);
  return (
    <>
      <Header />
      <div className="Container-Content">
        {pokemons.map((pokemon) => (
          <Card
            name={pokemon.name}
            image={pokemon.image_url}
            height={pokemon.height}
            weight={pokemon.weight}
            kind={pokemon.kind}
          />
        ))}
        {/* <button onClick={() => handleChangePage}>Próxima página</button> */}
      </div>
    </>
  );
}

export default App;
