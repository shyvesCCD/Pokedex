import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { api } from "./service/api";
import Buttons from "./components/Buttons";
import { GlobalStyle } from "./style/global";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    api
      .get(`pokemons?page=${nextPage}`)
      .then((response) => response.data)
      .then((data) => {
        setLoading(true);
        setPokemons(data.data);
        setLoading(false);
        setPage(data.prev_page);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [nextPage]);

  const handleChangePageNext = () => {
    setNextPage(nextPage + 1);
  };

  const handleChangePageDown = () => {
    if (page === null) {
      alert("Você está na primeira página.");
    } else {
      setNextPage(nextPage - 1);
    }
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
      </div>
      <Buttons
        handleNext={handleChangePageNext}
        handlePrevius={handleChangePageDown}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
