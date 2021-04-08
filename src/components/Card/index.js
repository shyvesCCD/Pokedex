import { Container, Title, Cardzinhos, Image } from "./styles";

const Cards = ({ name, image, height, weight, kind }) => {
  console.log(name, image, height, weight, kind);

  return (
    <>
      <Container>
        <div className="Container-left">
          <Title>{name}</Title>
          <Cardzinhos>{kind}</Cardzinhos>
          <Cardzinhos>{kind}</Cardzinhos>
        </div>
        <Image src={image} alt="Foto do bichano" />
      </Container>
    </>
  );
};

export default Cards;
