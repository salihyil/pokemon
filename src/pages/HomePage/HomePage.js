import React from "react";

import CardList from "../../components/CardList";
import Search from "../../components/Search";
import "./styles.css";

const HomePage = () => {
  return (
    <main className="main-container">
      <Search />
      <CardList />
    </main>
  );
};

export default HomePage;
