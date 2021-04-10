import { useState } from "react";
import Modal from "react-modal";
import { Container } from "./styles";

const LoginModal = ({ isOpen, handleClosedModal }) => {
  const [value, setValue] = useState("");

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
          placeholder="Ex: mcpoze"
          onChange={(event) => setValue(event.target.value)}
        />
        <button>Logar</button>
      </Container>
    </Modal>
  );
};

export default LoginModal;
