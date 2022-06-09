import React from "react";

import "./styles.css";
import { pokemonURL } from "./constants";
import pokeball from "../../assets/result.svg";

const Header = () => {
  return (
    <header className="header-container">
      <img src={pokeball} alt="PokemonBall" />
      <img src={pokemonURL} alt="logo" />
      <img src={pokeball} alt="PokemonBall" />
    </header>
  );
};

export default Header;
