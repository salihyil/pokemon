import React from "react";
import { useSelector } from "react-redux";

import "./styles.css";
import "../../assets/colors.css";
import Pokeball from "../../assets/pokeball.png";
import Bgpokecoll from "../../assets/bgpokecoll.png";
import { Link } from "react-router-dom";

const CardList = () => {
  const { results, nextPageLoading, nextPageNoMoreMsg } = useSelector(
    (state) => state.pokeData
  );

  return (
    <>
      <section className="card-container">
        {results.map((result, i) => {
          const typeName = result.types[0].type.name;

          return (
            <div className={`card-item ${typeName}`} key={i}>
              <Link to={result.name}>
                <div className={`card-top ${typeName}`}>
                  <img
                    className="card-image"
                    src={result.sprites.other.dream_world.front_default}
                    alt={result.typeName}
                  />

                  <img className="pokeball" src={Pokeball} alt="pokeball" />
                  <img
                    className="pokeball-color"
                    src={Bgpokecoll}
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
              </Link>
            </div>
          );
        })}
      </section>
      {nextPageLoading && (
        <div className="nextPageLoading">Next Page Loading...</div>
      )}
      {nextPageNoMoreMsg && (
        <div className="nextPageNoMoreMsg">{nextPageNoMoreMsg}</div>
      )}
    </>
  );
};

export default CardList;
