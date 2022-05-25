import React from "react";
import { useSelector } from "react-redux";

import "./styles.css";
import "./color.css";

const Card = () => {
  const { results } = useSelector((state) => state.pokeData);

  return (
    <>
      {results.map((result, i) => {
        const name = result.types[0].type.name;

        return (
          <div className={`card-item ${name}`} key={i}>
            <div className={`card-top ${name}`}>
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
                  <small>Type: {name}</small>
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
        );
      })}
    </>
  );
};

export default Card;
