import { useContext, useEffect } from "react";
import Modal from "react-modal";
import { Container, Cardzinhos, ContainerCard } from "./styles";
import { FiStar } from "react-icons/fi";
import { api } from "../../service/api";
import { UserContext } from "../../UserContext";

const PokemonModal = ({
  isOpen,
  handleClosedPokemonModal,
  name,
  id,
  height,
  weight,
  image,
  kind,
  pokemonsFavoritados,
}) => {
  const types = kind.split(";");
  const { user } = useContext(UserContext);

  const handleStarred = () => {
    // api.get(`users/${user}`).then((response) => {
    /*
        A gente consegue favoritar um pokemon clicando no botão de favoritar, quando ativado o handleStarred
        da um post e meu user é atualizado. Porém quando este pokemon já estiver favoritado eu quero desfavoritar
        o mesmo.
      */
    // });
    api
      .post(`users/${user}/starred/${name}`)
      .then((response) => alert("Pokemon favoritado com sucesso"))
      .catch((err) => {
        api.delete(`users/${user}/starred/${name}`);
        alert("Pokemon deletado dos favoritos com sucesso!");
      });
  };

  useEffect(() => {
    console.log("pokemonsFavoritados foi alterado.");
  }, [user]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClosedPokemonModal}
      overlayClassName="modal-pokemon"
      className="modal-pokemon-content"
    >
      <Container>
        <h1>
          #{String(id).padStart(3, "0")},{" "}
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h1>
        <img src={image} alt="Imagem do pokemon" />
        <h4>
          Esse pokemon se chama {name.charAt(0).toUpperCase() + name.slice(1)},
          seu peso é de {weight}
          kg e sua altura é de {height}m.
        </h4>
        <ContainerCard>
          {types.map((type) => (
            <Cardzinhos key={Math.random()} type={type}>
              {type}
            </Cardzinhos>
          ))}
        </ContainerCard>
        {user ? (
          <button type="button" onClick={handleStarred}>
            {pokemonsFavoritados?.some((pokemon) => pokemon.id === id) ? (
              <FiStar style={{ color: "yellow" }} />
            ) : (
              <FiStar style={{ color: "black" }} />
            )}
          </button>
        ) : (
          <></>
        )}
      </Container>
    </Modal>
  );
};

export default PokemonModal;
