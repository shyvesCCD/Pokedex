import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { api } from "./service/api";
import Buttons from "./components/Buttons";
import { GlobalStyle } from "./style/global";
import Modal from "react-modal";
import LoginModal from "./components/LoginModal";

Modal.setAppElement("#root");

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleClosedModal = () => {
    setModal(false);
  };

  useEffect(() => {
    api
      .get(`pokemons?page=${nextPage}`)
      .then((response) => {
        setLoading(true);
        setPokemons(response.data.data);
        setLoading(false);
        setPage(response.data.prev_page);
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
      <Header handleOpenModal={handleOpenModal} />
      <LoginModal isOpen={modal} handleClosedModal={handleClosedModal} />
      <div className="Container-Content">
        {pokemons.map((pokemon) => (
          <Card
            name={pokemon.name}
            image={pokemon.image_url}
            height={pokemon.height}
            weight={pokemon.weight}
            kind={pokemon.kind}
            key={pokemon.id}
            id={pokemon.id}
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
};

export default App;
