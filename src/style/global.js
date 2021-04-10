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
  }

  * {
    margin: 0;
    padding: 0;
    font-family: "Zilla Slab", serif;
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

  .Container-Button {
  }
`;