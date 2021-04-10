import { Container, Title, Cardzinhos, Image } from "./styles";

const Cards = ({ name, image, height, weight, kind, loading }) => {
  if (loading) {
    return (
      <div className="Container-Loading">
        <h2>Loading...</h2>
      </div>
    );
  } else {
    const types = kind.split(";");
    return (
      <>
        <Container>
          <div className="Container-left">
            <Title>{name}</Title>
            {types.map((type) => (
              <Cardzinhos>{type}</Cardzinhos>
            ))}
          </div>
          <Image src={image} alt="Foto do bichano" />
        </Container>
      </>
    );
  }
};

export default Cards;
