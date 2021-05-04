import { Container, Button } from "./styles";

const Buttons = ({ handleNext, handlePrevius }) => {
  return (
    <Container>
      <Button onClick={handlePrevius}>Voltar página</Button>
        <Button onClick={handleNext}>Próxima página</Button>
    </Container>
  );
};

export default Buttons;
