import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { api } from "./service/api";
import Buttons from "./components/Buttons";
import { GlobalStyle } from "./style/global";
import Modal from "react-modal";
import LoginModal from "./components/LoginModal";
import ClipLoader from "react-spinners/ClipLoader";

Modal.setAppElement("#root");

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleClosedModal = () => {
    setModal(false);
  };

  useEffect(() => {
    setLoading(true);
    api
      .get(`pokemons?page=${nextPage}`)
      .then((response) => {
        setPokemons(response.data.data);
        setPage(response.data.prev_page);
        setLoading(false);
        console.log(response.data);
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
      {loading ? (
        <div className="loading-screen">
          <ClipLoader color={"#F9F9F9"} loading={loading} size={50} />
        </div>
      ) : (
        <>
          <LoginModal isOpen={modal} handleClosedModal={handleClosedModal} />
          <div className="Container-Content">
            {pokemons.map((pokemon) => (
              <>
                <Card
                  name={pokemon.name}
                  image={pokemon.image_url}
                  kind={pokemon.kind}
                  key={pokemon.id}
                  id={pokemon.id}
                  height={pokemon.height}
                  weight={pokemon.weight}
                />
              </>
            ))}
          </div>
          <Buttons
            handleNext={handleChangePageNext}
            handlePrevius={handleChangePageDown}
          />
        </>
      )}
      <GlobalStyle />
    </>
  );
};

export default App;
