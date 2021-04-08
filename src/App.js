import "./style/global.css";
import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { api } from "./service/api";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // #TODO: Aprender a fazer a paginação utilizando essa api.

  useEffect(() => {
    api
      .get(`pokemons?page=${nextPage}`)
      .then((response) => response.data)
      .then((data) => {
        setLoading(true);
        setPokemons(data.data);
        setLoading(false);
        console.log(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [nextPage]);

  console.log(pokemons);
  const handleChangePageNext = () => {
    setNextPage(nextPage + 1);
  };

  const handleChangePageDown = () => {
    setNextPage(nextPage - 1);
  };

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
            key={pokemon.id}
            loading={loading}
          />
        ))}
        {/* #TODO: Fazer a paginação */}
        <div className="Container-Buttons">
          <button onClick={handleChangePageNext}>Próxima página</button>
          <button onClick={handleChangePageDown}>Voltar página</button>
        </div>
      </div>
    </>
  );
}

export default App;
