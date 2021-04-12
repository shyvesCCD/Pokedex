import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --grass: #78C850;
    --water: #6890F0;
    --fire: #F08030;
    --normal: #A8A878;
    --electric: #F8D030;
    --ice: #98D8D8;
    --poison: #A040A0;
    --fighting: #C03028;
    --flying: #A890F0;
    --psychic: #F85888;
    --bug: #A8B820;
    --rock: #B8A038;
    --ghost: #705898;
    --dark: #705848;
    --dragon: #7038F8;
    --steel: #B8B8D0;
    --fairy: #F0B6BC;
    --ground: #E0C068;
    background-color: #181820;
    min-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  .Container-Content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .Container-left {
    display: flex;
    flex-direction: column;
  }

  .Container-Loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-login {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-login-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 25rem;
    background-color: #b8c6db;
    padding: 3rem;
    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
    min-height: 25rem;
    position: relative;
    border-radius: 0.5rem;
  }

  .modal-pokemon {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-pokemon-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 25rem;
    background-color: #181820;
    padding: 3rem;
    min-height: 25rem;
    position: relative;
    border-radius: 0.5rem;
  }

  .loading-screen {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
