import { Container, Title, Cardzinhos, Image, ContainerImage } from "./styles";
import { useState } from "react";
import PokemonModal from "../PokemonModal";
const Cards = ({
  name,
  image,
  kind,
  id,
  height,
  weight,
  pokemonsFavoritados,
  setPokemonsFavoritados,
}) => {
  const [modalPokemon, setPokemonModal] = useState(false);

  const handleOpenPokemonModal = () => {
    setPokemonModal(true);
  };

  const handleClosedPokemonModal = () => {
    setPokemonModal(false);
  };

  const types = kind.split(";");

  return (
    <>
      <Container types={types[0]} onClick={handleOpenPokemonModal}>
        <div className="Container-left">
          <Title>{name.charAt(0).toUpperCase() + name.slice(1)}</Title>
          <Title>#{String(id).padStart(3, "0")}</Title>
          {types.map((type) => (
            <Cardzinhos key={Math.random()} type={type}>
              {type}
            </Cardzinhos>
          ))}
        </div>
        <ContainerImage>
          <Image src={image} alt="Foto do bichano" />
        </ContainerImage>
      </Container>
      <PokemonModal
        isOpen={modalPokemon}
        handleClosedPokemonModal={handleClosedPokemonModal}
        name={name}
        image={image}
        height={height}
        weight={weight}
        kind={kind}
        key={id}
        id={id}
        pokemonsFavoritados={pokemonsFavoritados}
        setPokemonsFavoritados={setPokemonsFavoritados}
      />
    </>
  );
};

export default Cards;
