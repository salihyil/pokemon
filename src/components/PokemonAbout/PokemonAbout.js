import React from "react";
import { motion } from "framer-motion";

const PokemonAbout = ({ result }) => {
  return (
    <div className="div1-about-container">
      <motion.div animate={{ x: 20 }} transition={{ duration: 1 }}>
        <h3>
          Species:
          <span className="font-span">{" " + result.species.name}</span>
        </h3>
        <h3>
          Height: <span className="font-span">{result.height}</span>
        </h3>
        <h3>
          Weight: <span className="font-span">{result.weight}</span>
        </h3>
        <h3>
          Abilities:
          {result.abilities.map((ability, i) => {
            return (
              <span className="font-span" key={i}>
                {" " + ability.ability.name + ", "}
              </span>
            );
          })}
        </h3>
        <h3>
          Held items:
          {result.held_items.map((item, i) => {
            return (
              <span className="font-span" key={i}>
                {" " + item.item.name + ", "}
              </span>
            );
          })}
        </h3>
      </motion.div>
    </div>
  );
};

export default PokemonAbout;
