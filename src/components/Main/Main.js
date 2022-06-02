import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  pokemonDataRequest,
  pokemonAllDataRequest,
} from "../../store/pokemonData/slice";

import CardList from "../../components/CardList";
import "./styles.css";

const Main = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.pokeData);

  useEffect(() => {
    dispatch(pokemonAllDataRequest());
  }, [dispatch]);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      dispatch(pokemonDataRequest(e.target.value));
    } else {
      dispatch(pokemonAllDataRequest());
    }
  };

  return (
    <main>
      <div className="main-container">
        <input
          className="search-input"
          type="text"
          placeholder="Pokemon Ara..."
          onChange={handleSearch}
        />

        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}

        <CardList />

        {loading && <div>loading</div>}
      </div>
    </main>
  );
};

export default Main;
