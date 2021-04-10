import { useState, useEffect } from "react";
import Modal from "react-modal";
import { Container } from "./styles";
import { api } from "../../service/api";

const LoginModal = ({ isOpen, handleClosedModal }) => {
  const [value, setValue] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState("");

  const handleSubmit = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    api
      .get(`users/${value}`)
      .then((response) => {
        setUser(response.data.user.username);
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [user, value]);

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
          onChange={(event) => handleSubmit(event)}
        />
        <button onClick={handleSubmit}>Logar</button>
      </Container>
    </Modal>
  );
};

export default LoginModal;
