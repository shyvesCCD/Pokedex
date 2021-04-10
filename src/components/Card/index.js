import { Container, Title, Cardzinhos, Image } from "./styles";

const Cards = ({ name, image, kind, loading, id }) => {
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
            <Title>#{String(id).padStart(3, "0")}</Title>
            {types.map((type) => (
              <Cardzinhos key={Math.random()} type={type}>
                {type}
              </Cardzinhos>
            ))}
          </div>
          <Image src={image} alt="Foto do bichano" />
        </Container>
      </>
    );
  }
};

export default Cards;
