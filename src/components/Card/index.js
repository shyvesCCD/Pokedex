import { Container, Title, Cardzinhos, Image } from "./styles";

const Cards = ({ name, image, height, weight, kind, loading }) => {
  if (loading) {
    return (
      <div className="Container-Loading">
        <h2>Loading...</h2>
      </div>
    );
  } else {
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
  }
};

export default Cards;
