import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";
import Main from "../../components/Main";
import { netxPageRequest } from "../../store/pokemonData/slice";

import "./styles.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const { pageNumber} = useSelector(
    (state) => state.pokeData
  );
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const windowHeight = scrollHeight - clientHeight;
      const scroll = scrollTop / windowHeight;

     

      if (scrollTop + clientHeight === scrollHeight) {
        dispatch(netxPageRequest(pageNumber));
      }

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <div className="container">
      <div id="progressBarContainer">
        <div
          id="progressBar"
          style={{
            transform: `scale(${scroll}, 1)`,
            opacity: `${scroll}`,
            transition: "all 0s ease-in-out",
          }}
        />
      </div>

      <Header />

      <Main />
      {/*  <footer
        style={{
          width: "100%",
          height: "400px",
          backgroundColor: "red",
        }}
      >
        <div>Footer Alanı</div>
      </footer> */}
    </div>
  );
};

export default HomePage;
