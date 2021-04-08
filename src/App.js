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
  // const handleChangePage = () => {
  //   api.get(`${nextPage}`).then((response) => {
  //     setNextPage(response.data.next_page);
  //   });
  // };

  useEffect(() => {
    api
      .get(`${nextPage}`)
      .then((response) => {
        setLoading(true);
        setPokemons(response.data.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [nextPage]);

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
        {/* <button onClick={() => handleChangePage}>Próxima página</button> */}
      </div>
    </>
  );
}

export default App;
