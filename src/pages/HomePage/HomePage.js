import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from "react-top-loading-bar";

import Header from "../../components/Header";
import Main from "../../components/Main";
import { netxPageRequest } from "../../store/pokemonData/slice";
import {
  loaderSpeed,
  loadingBarColor,
  loadingBarHeight,
  onLoaderFinishedNumber,
  transitionTime,
} from "./constants";

import "./styles.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const { pageNumber, count } = useSelector((state) => state.pokeData);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let progressBarHandler = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const windowHeight = scrollHeight - clientHeight;
      const scroll = scrollTop / windowHeight;

      console.log(" scrollTop ", scrollTop);
      console.log("clientHeight", clientHeight);
      console.log("scrollTop + clientHeight", scrollTop + clientHeight);
      console.log("scrollHeight", scrollHeight);

      if (scrollTop + clientHeight === scrollHeight) {
        dispatch(netxPageRequest(pageNumber));
      }

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  }, [dispatch, pageNumber]);

  return (
    <>
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
      <LoadingBar
        color={loadingBarColor}
        height={loadingBarHeight}
        progress={count}
        onLoaderFinished={onLoaderFinishedNumber}
        transitionTime={transitionTime}
        loaderSpeed={loaderSpeed}
      />

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
    </>
  );
};

export default HomePage;
