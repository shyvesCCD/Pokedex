import { Container, Title, Cardzinhos, Image } from "./styles";

const Cards = ({ name, image, height, weight, kind }) => {
  console.log(name, image, height, weight, kind);

  return (
    <>
      <Container>
        <Title>{name}</Title>
        <Cardzinhos>{kind}</Cardzinhos>
        <Cardzinhos>{kind}</Cardzinhos>
      </Container>
      <Image src={image} alt="Foto do bichano" />
    </>
  );
};

export default Cards;
