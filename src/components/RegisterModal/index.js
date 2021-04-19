import { useState } from "react" 
import Modal from "react-modal"
import { Container } from "./styles"
import { api } from "../../service/api"


const RegisterModal = ({isOpen, handleClosedRegisterModal}) => {
    const [value, setValue] = useState("");
    const [user, setUser] = useState("")
const handleSubmit = (event) => {
    event.preventDefault()
    if (value === "") {
        alert("Não existe usuário sem nome")
    }
    else {
      api
          .post("users", {username:value})
          .then((response) => { 
              console.log("Usuário criado")
              setUser(value)
              console.log(user)
              handleClosedRegisterModal()

          })
          .catch((error) => alert("Não foi possível criar o usuário"))

    }
}
    
return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClosedRegisterModal}
      overlayClassName="modal-login"
      className="modal-login-content"
    >
      <Container>
          <h1>Registro de Usuário</h1>
        <input
            type="text"
            value={value}
            placeholder="Ex: gmeyer"
            onChange={(event) => {setValue(event.target.value)}}
        />
        <button onClick={handleSubmit} >Registrar</button> 

      </Container>
    </Modal>
  );
    }

export default RegisterModal;