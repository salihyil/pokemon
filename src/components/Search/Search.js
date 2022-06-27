import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokeActions } from "../../store/pokemonData/slice";

import "./styles.css";

const Search = () => {
  const dispatch = useDispatch();
  const { error, loading, pageNumber } = useSelector((state) => state.pokeData);

  useEffect(() => {
    dispatch(pokeActions.pokemonAllDataRequest());
  }, [dispatch]);

  useEffect(() => {
    let progressBarHandler = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (Math.round(scrollTop) + clientHeight >= scrollHeight) {
        dispatch(pokeActions.netxPageRequest(pageNumber));
      }
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  }, [dispatch, pageNumber]);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      dispatch(pokeActions.pokemonDataRequest(e.target.value));
    } else {
      dispatch(pokeActions.pokemonAllDataRequest());
    }
  };

  return (
    <section className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Pokemon Ara..."
        onChange={handleSearch}
      />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </section>
  );
};

export default Search;
