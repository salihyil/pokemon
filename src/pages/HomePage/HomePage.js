import React from "react";
import { useSelector } from "react-redux";

import CardList from "../../components/CardList";
import Search from "../../components/Search";
import "./styles.css";

const HomePage = () => {
  const { results } = useSelector((state) => state.pokeData);
  return (
    <main
      className={`${
        results.length === 1 ? "main-container-single" : "main-container"
      }`}
    >
      <Search />
      <CardList />
    </main>
  );
};

export default HomePage;
