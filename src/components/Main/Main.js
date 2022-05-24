import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  pokemonDataRequest,
  pokemonAllDataRequest,
} from "../../store/pokemonData/slice";

import Card from "../../components/Card";
import "./styles.css";

const Main = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.pokeData);

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

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="card-container">
            <Card />
          </div>
        )}
        {error ? <p>{error}</p> : ""}
      </div>
    </main>
  );
};

export default Main;
