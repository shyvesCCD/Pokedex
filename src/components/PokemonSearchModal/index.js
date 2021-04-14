import Modal from "react-modal";
import { Container, Cardzinhos, ContainerCard } from "./styles";

const PokemonSearchModal = ({
  isOpen,
  handleClosedPokemonSearchModal,
  name,
  id,
  height,
  weight,
  image,
  kind,
}) => {
  const types = kind.split(";");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClosedPokemonSearchModal}
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
      </Container>
    </Modal>
  );
};

export default PokemonSearchModal;
