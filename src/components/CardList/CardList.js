import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./styles.css";
import "../../assets/colors.css";
import Pokeball from "../../assets/pokeball.png";
import Bgpokecoll from "../../assets/bgpokecoll.png";

const CardList = () => {
  const { results, nextPageLoading, nextPageNoMoreMsg } = useSelector(
    (state) => state.pokeData
  );
 

  return (
    <>
      <section
        className={`${
          results.length === 1 ? "card-container-single" : "card-container"
        } `}
      >
        {results.map((result, i) => {
          const typeName = result.types[0].type.name;

          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
                rotate: 360,
              }}
              className={`card-item ${typeName}`}
              key={i}
            >
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
            </motion.div>
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
