import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Pokeball from "../../assets/pokeball.png";
import PokeballColor from "../../assets/pokeball-color.png";

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
    <>
      <div>
        <button onClick={handleBack}>Back</button>

        {results.map((result, i) => {
          const typeName = result.types[0].type.name;

          return (
            <div className={`card-item ${typeName}`} key={i}>
              <a href={result.name}>
                <div className={`card-top ${typeName}`}>
                  <img
                    className="card-image"
                    src={result.sprites.other.dream_world.front_default}
                    alt={result.typeName}
                  />

                  <img className="pokeball" src={Pokeball} alt="pokeball" />
                  <img
                    className="pokeball-color"
                    src={PokeballColor}
                    alt="PokeballColor"
                    width="150"
                    height="150"
                  />
                </div>
                <div className="card-bottom">
                  <small>#0{result.id}</small>
                  <h3>{result.name}</h3>
                  <div>
                    <div>
                      <small>Type: {typeName}</small>
                    </div>
                    <div>
                      <small>Weight: {result.weight}</small>
                    </div>
                    <div>
                      <small>Height: {result.height}</small>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AboutPage;
