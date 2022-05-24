import React from "react";
import { useSelector } from "react-redux";

import "./styles.css";
import "./color.css";

const Card = () => {
  const { results } = useSelector((state) => state.pokeData);

  return (
    <>
      {results.map((result) => (
        <div
          className={`card-item ${result.types[0].type.name}`}
          key={result.name}
        >
          <div className={`card-top ${result.types[0].type.name}`}>
            <img
              className="card-image"
              src={result.sprites.other.dream_world.front_default}
              alt={result.name}
            />
          </div>

          <div className="card-bottom">
            <small>#0{result.id}</small>
            <h3>{result.name}</h3>
            <div>
              <div>
                <small>Type: {result.types[0].type.name}</small>
              </div>
              <div>
                <small>Weight: {result.weight}</small>
              </div>
              <div>
                <small>Height: {result.height}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
