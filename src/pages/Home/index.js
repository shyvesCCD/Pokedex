import Header from "../../components/Header";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import Buttons from "../../components/Buttons";
import { GlobalStyle } from "../../style/global";
import Modal from "react-modal";
import LoginModal from "../../components/LoginModal";
import ClipLoader from "react-spinners/ClipLoader";
import RegisterModal from "../../components/RegisterModal";
import { UserContext } from "../../UserContext";

Modal.setAppElement("#root");

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [page, setPage] = useState(0);
  const [pageNext, setPageNext] = useState(0);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [user, setUser] = useState("");
  const [pokemonsFavoritados, setPokemonsFavoritados] = useState([]);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleClosedModal = () => {
    setModal(false);
  };

  const handleOpenRegisterModal = () => {
    setModalRegister(true);
  };

  const handleClosedRegisterModal = () => {
    setModalRegister(false);
  };

  useEffect(() => {
    setLoading(true);
    api
      .get(`pokemons?page=${nextPage}`)
      .then((response) => {
        setPokemons(response.data.data);
        setPage(response.data.prev_page);
        setPageNext(response.data.next_page);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
    if (!user) {
      return;
    } else {
      api
        .get(`users/${user}`)
        .then((response) => setPokemonsFavoritados(response.data.pokemons));
    }
  }, [nextPage, user]);

  const handleChangePageNext = () => {
    if (pageNext != null) {
      setNextPage(nextPage + 1);
    } else {
      alert("Você está na última página.");
    }
  };

  const handleChangePageDown = () => {
    if (page === null) {
      alert("Você está na primeira página.");
    } else {
      setNextPage(nextPage - 1);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header
        handleOpenModal={handleOpenModal}
        handleOpenRegisterModal={handleOpenRegisterModal}
        pokemonsFavoritados={pokemonsFavoritados}
        setPokemonsFavoritados={setPokemonsFavoritados}
      />
      {loading ? (
        <div className="loading-screen">
          <ClipLoader color={"#F9F9F9"} loading={loading} size={50} />
        </div>
      ) : (
        <>
          <LoginModal isOpen={modal} handleClosedModal={handleClosedModal} />
          <RegisterModal
            isOpen={modalRegister}
            handleClosedRegisterModal={handleClosedRegisterModal}
          />
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
                  pokemonsFavoritados={pokemonsFavoritados}
                  setPokemonsFavoritados={setPokemonsFavoritados}
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
    </UserContext.Provider>
  );
};

export default Home;
