import { Container, Title } from "./styles";
import { GlobalStyle } from "../../style/global";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const NotFound = () => {
  return (
    <>
      <Container>
        <Title>404</Title>
        <Title>Está pagina não existe.</Title>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "1.5rem",
            color: "#F9F9F9",
            marginTop: "1.5rem",
          }}
        >
          <FiHome
            style={{
              marginRight: "1rem",
            }}
          />
          Volta para a home.
        </Link>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default NotFound;
