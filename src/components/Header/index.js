import { Title } from "./styles";

const Header = ({ handleOpenModal }) => {
  return (
    <>
      <Title>Pokedex</Title>
      <button type="button" onClick={handleOpenModal}>
        Logar
      </button>
    </>
  );
};

export default Header;
