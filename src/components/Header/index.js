import { Button, Title } from "./styles";

const Header = ({ handleOpenModal }) => {
  return (
    <>
      <Title>Pokedex</Title>
      <Button type="button" onClick={handleOpenModal}>
        Logar
      </Button>
    </>
  );
};

export default Header;
