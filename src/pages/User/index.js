import Header from "../../components/Header";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import Buttons from "../../components/Buttons";
import { GlobalStyle } from "../../style/global";
import Modal from "react-modal";
import LoginModal from "../../components/LoginModal";
import ClipLoader from "react-spinners/ClipLoader";
import RegisterModal from "../../components/RegisterModal"


Modal.setAppElement("#root");

const Usuario = () => {
    const [pokemons, setPokemons] = useState([])
    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(false);

  useEffect(() => {
      api
      .get("users/mcpoze")
      .then((response) => { 
          setPokemons(response.data.pokemons)
          console.log(response)
          setUser(response.data.user.username)
        })
  }
  
  ,[]) 



  return (
    <>
      
      <h1>{user}</h1>
      {loading ? (
        <div className="loading-screen">
          <ClipLoader color={"#F9F9F9"} loading={loading} size={50} />
        </div>
      ) : (
        <>
          
          
          <div className="Container-Content">
            {pokemons.map((pokemon) => (
              <>
                <Card
                  name={pokemon.name}
                  image={pokemon.image_url}
                  kind={pokemon.kind}
                  key={pokemon.id}
                  id={pokemon.id}
                  height={pokemon.height}
                  weight={pokemon.weight}
                />
              </>
            ))}
          </div>
         {/* <Buttons
            handleNext={handleChangePageNext}
            handlePrevius={handleChangePageDown}
          /> */}
        </>
    
      )}
      <GlobalStyle />
    </>
  );
};

export default Usuario;
