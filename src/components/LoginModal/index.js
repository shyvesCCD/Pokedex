import { useState, useContext } from "react";
import Modal from "react-modal";
import { Container } from "./styles";
import { api } from "../../service/api";
import { FiLogIn } from "react-icons/fi";
import { UserContext } from "../../UserContext";

const LoginModal = ({ isOpen, handleClosedModal }) => {
  const [value, setValue] = useState("");
  const userContext = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "") {
      alert("Escreva o nome de usuário");
    } else {
      api
        .get(`users/${value}`)
        .then((response) => {
          userContext.setUser(response.data.user.username);
        })
        .catch((error) => alert("O usuário não existe"));
    }
  };

  console.log(userContext);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClosedModal}
      overlayClassName="modal-login"
      className="modal-login-content"
    >
      <Container>
        <h1>Nome de usuário</h1>
        <input
          type="text"
          value={value}
          placeholder="Ex: gmeyer"
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button onClick={handleSubmit}>
          <FiLogIn style={{ marginRight: "1rem" }} />
          Logar
        </button>
      </Container>
    </Modal>
  );
};

export default LoginModal;
