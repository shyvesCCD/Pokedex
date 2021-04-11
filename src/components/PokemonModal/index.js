import Modal from "react-modal";
import { Container, Cardzinhos, ContainerCard } from "./styles";

const PokemonModal = ({
  isOpen,
  handleClosedPokemonModal,
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
          Esse pokemon de id #{String(id).padStart(3, "0")} se chama{" "}
          {name.charAt(0).toUpperCase() + name.slice(1)}, seu peso é de {weight}
          kg e sua altura de {height}m.
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

export default PokemonModal;
