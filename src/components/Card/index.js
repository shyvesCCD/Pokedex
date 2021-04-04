import { Container, Title, Cardzinhos } from "./styles";

const Cards = ({ pok }) => {
  console.log(pok);

  return (
    <Container>
      <Title>{pok}</Title>
      <Cardzinhos>Grass</Cardzinhos>
      <Cardzinhos>Poison</Cardzinhos>{" "}
    </Container>
  );
};

export default Cards;
