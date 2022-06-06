import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./styles.css";
import "./color.css";
import Pokeball from "../../assets/pokeball.png";
import PokeballColor from "../../assets/pokeball-color.png";
import { netxPageRequest } from "../../store/pokemonData/slice";

const CardList = () => {
  const listInnerRef = useRef();
  const dispatch = useDispatch();

  const { results, pageNumber, nextPageLoading } = useSelector(
    (state) => state.pokeData
  );
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

      const windowHeight = scrollHeight - clientHeight;
      const scroll = `${scrollTop / windowHeight}`;

      setScroll(scroll);

      if (scrollTop + clientHeight === scrollHeight) {
        dispatch(netxPageRequest(pageNumber));
      }
    }
  };

  return (
    <>
      <div
        className="card-container scroll-container"
        onScroll={onScroll}
        ref={listInnerRef}
      >
        <div id="progressBarContainer">
          <div
            id="progressBar"
            style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}
          />
        </div>

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
        {nextPageLoading && (
          <div className="nextPageLoading">Next Page Loading...</div>
        )}
      </div>
    </>
  );
};

export default CardList;
