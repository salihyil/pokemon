import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { pokeActions } from "../../store/pokemonData/slice";
import "././styles.css";
import "../../assets/colors.css";

import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import Pokeball from "../../assets/pokeball.png";

import PokemonAbout from "../../components/PokemonAbout";

const AboutPage = () => {
  const { pokeName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.pokeData);
  const imgMotion = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: 100, transition: { duration: 1 } },
  };
  const [show, setShow] = useState({
    div1About: false,
    div2Stats: false,
    div3Evol: false,
    div4Chart: false,
  });

  useEffect(() => {
    dispatch(pokeActions.pokemonDataRequest(pokeName));
  }, [dispatch, pokeName]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <main className="about-container font-color">
        {results.map((result, i) => {
          const typeName = result.types[0].type.name;

          return (
            <div key={i}>
              <header className={`about-header-container ${typeName}`}>
                <div className="about-header-left">
                  <div className="mb-1">
                    <ArrowLeft className="arrow-left" onClick={handleBack} />
                  </div>
                  <div className="mb-1">
                    <h3>#0{result.id}</h3>
                  </div>
                  <h2 className="mb-1">{result.name}</h2>
                  <div className="mb-1 ">
                    <motion.div animate={{ y: 100 }} />

                    {result.types.map((types, i) => {
                      return (
                        <span key={i} className="bg-span mr-1">
                          {types.type.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="about-header-right">
                  Exp-{result.base_experience}
                </div>

                <div className="about-header-mid">
                  <img
                    className="pokeball bg-img"
                    src={Pokeball}
                    alt="pokeball"
                  />
                  <motion.img
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={imgMotion}
                    className="about-poke-image poke-position"
                    src={result.sprites.other.dream_world.front_default}
                    alt={`${result.name}-img`}
                  />
                </div>
              </header>

              <main className="about-main">
                <div className="ball-container">
                  <div
                    onClick={() => setShow({ div1About: true })}
                    className="h-4 w-4 mr-3 bg-image"
                  >
                    <h4 className="h4-position">About</h4>
                  </div>
                  <div
                    onClick={() => setShow({ div2Stats: true })}
                    className="h-4 w-4 mr-3 bg-image"
                  >
                    <h4 className="h4-position">Stats</h4>
                  </div>
                  <div
                    onClick={() => setShow({ div3Evol: true })}
                    className="h-4 w-4 mr-3 bg-image"
                  >
                    <h4 className="h4-position">Evol</h4>
                  </div>
                  <div
                    onClick={() => setShow({ div4Chart: true })}
                    className="h-4 w-4 mr-3 bg-image"
                  >
                    <h4 className="h4-position">Chart</h4>
                  </div>
                </div>
                {show.div1About ? <PokemonAbout result={result} /> : ""}
                {show.div2Stats ? <div>Stats</div> : ""}
                {show.div3Evol ? <div>Evol</div> : ""}
                {show.div4Chart ? <div>Chart</div> : ""}
              </main>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default AboutPage;
