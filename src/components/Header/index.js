import { useState, useContext } from "react";
import {
  Button,
  Title,
  Form,
  Input,
  Container,
  ButtonSearch,
  Introducion,
  Button2,
} from "./styles";
import searchImg from "../../assets/search.svg";
import PokemonSearchModal from "../PokemonSearchModal";
import { api } from "../../service/api";
import { FiArrowRight, FiLogIn, FiUserPlus, FiLogOut } from "react-icons/fi";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";

const object = {
  name: "",
  image_url: "a",
  height: 19,
  weight: 10,
  kind: "glass;asd",
  id: Math.random(),
  key: Math.random(),
};

const Header = ({ handleOpenModal, handleOpenRegisterModal, pokemonsFavoritados }) => {
  const [value, setValue] = useState("");
  const [pokemon, setPokemon] = useState(object);
  const [modalSearchPokemon, setModalPokemonSearch] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleLogOut = () => {
    setUser("");
    localStorage.removeItem("user");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      alert("Ainda não existe um pokemon sem nome, hehe.");
    } else {
      api
        .get(`pokemons/${value}`)
        .then((response) => {
          if (response.data == null) {
            setValue("");
            alert("Pokemon Invalido");
          } else {
            setValue("");
            setPokemon(response.data);
            handleOpenPokemonSearchModal();
          }
        })
        .catch((err) => {
          alert("Pokemon Invalido");
          console.error(err);
        });
    }
  };

  const handleOpenPokemonSearchModal = () => {
    setModalPokemonSearch(true);
  };

  const handleClosedPokemonSearchModal = () => {
    setModalPokemonSearch(false);
  };

  return (
    <>
      <Title>Pokedex</Title>
      <Container>
        {user ? (
          <>
            <Introducion>
              Olá, {user.charAt(0).toUpperCase() + user.slice(1)}!
            </Introducion>
            <Button onClick={handleLogOut}>
              <FiLogOut style={{ marginRight: "1rem" }} />
              Deslogar
            </Button>
            <Link
              to="/user"
              style={{
                textDecoration: "none",
                color: "#FFF",
                fontSize: "1.25rem",
                maxWidth: "20.5rem",
              }}
            >
              <Button2 type="button">
                Perfil
                <FiArrowRight
                  style={{
                    marginLeft: "1rem",
                  }}
                />
              </Button2>
            </Link>
          </>
        ) : (
          <>
            <Button type="button" onClick={handleOpenModal}>
              <FiLogIn style={{ marginRight: "1rem" }} />
              Logar
            </Button>
            <Button type="button" onClick={handleOpenRegisterModal}>
              <FiUserPlus style={{ marginRight: "1rem" }} />
              Registrar
            </Button>
          </>
        )}
        <Form onSubmit={handleSubmit}>
          <img src={searchImg} alt="Imagem de Busca" />
          <Input
            value={value}
            onChange={(event) => setValue(event.target.value.toLowerCase())}
            placeholder="Pesquise o pokemon"
          ></Input>
          <ButtonSearch>Search</ButtonSearch>
        </Form>
        <PokemonSearchModal
          isOpen={modalSearchPokemon}
          handleClosedPokemonSearchModal={handleClosedPokemonSearchModal}
          name={pokemon.name}
          image={pokemon.image_url}
          height={pokemon.height}
          weight={pokemon.weight}
          kind={pokemon.kind}
          key={pokemon.id}
          id={pokemon.id}
          pokemonsFavoritados={pokemonsFavoritados}
        />
      </Container>
    </>
  );
};

export default Header;
