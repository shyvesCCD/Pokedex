import Card from "../../components/Card";
import { FiHome } from "react-icons/fi";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { GlobalStyle } from "../../style/global";
import Modal from "react-modal";
import ClipLoader from "react-spinners/ClipLoader";
import { Title } from "../../components/Header/styles";
import { Introducion, Button } from "./styles";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const User = () => {
  const [pokemons, setPokemons] = useState([]);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const userLogado = localStorage.getItem("user");

  useEffect(() => {
    setLoading(true);
    api.get(`users/${userLogado}`).then((response) => {
      setPokemons(response.data.pokemons);
      console.log(response);
      setUser(response.data.user.username);
      setLoading(false);
    });
  }, [userLogado]);

  return (
    <>
      <Title>
        Seja Bem-vindo {user.charAt(0).toUpperCase() + user.slice(1)}.
      </Title>
      <Introducion>Aqui temos os seus pokemons favoritos!</Introducion>

      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#FFF",
          fontSize: "1.25rem",
        }}
      >
        <Button type="button">
          <FiHome
            style={{
              marginRight: "1rem",
            }}
          />
          Retornar para a Home
        </Button>
      </Link>

      {loading ? (
        <div className="loading-screen">
          <ClipLoader color={"#F9F9F9"} loading={loading} size={50} />
        </div>
      ) : (
        <>
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
        </>
      )}
      <GlobalStyle />
    </>
  );
};

export default User;
