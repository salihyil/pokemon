import React from "react";

import "./styles.css";
import {pokemonURL} from './constants'

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div>1</div>

        <img
          src={pokemonURL}
          alt="logo"
        />

        <div>2</div>
      </div>
    </header>
  );
};

export default Header;
