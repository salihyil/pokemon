import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { pokemonDataRequest } from "../../store/pokemonData/slice";
import "././styles.css";

const AboutPage = () => {
  const { pokeName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.pokeData);

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(pokemonDataRequest(pokeName));
  }, [dispatch, pokeName]);

  return (
    <main>
      <button onClick={handleBack}>Back</button>

      {results.map((result, i) => {
        console.log("result:", result);
        return (
          <div key={i}>
            <h1>{result.name}</h1>
            <img src={result.sprites.front_default} alt={result.name} />
          </div>
        );
      })}
    </main>
  );
};

export default AboutPage;
