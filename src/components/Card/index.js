import { Container, Title, Cardzinhos, Image } from "./styles";

const Cards = ({ name, image, kind, loading }) => {
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
        <Container types={types[0]}>
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
