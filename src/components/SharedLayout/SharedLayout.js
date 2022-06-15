import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import Header from "../Header";

import { netxPageRequest } from "../../store/pokemonData/slice";
import {
  loaderSpeed,
  loadingBarColor,
  loadingBarHeight,
  onLoaderFinishedNumber,
  transitionTime,
} from "./constants";
import "./styles.css";

const SharedLayout = () => {
  const dispatch = useDispatch();
  const { pageNumber, count } = useSelector((state) => state.pokeData);

  useEffect(() => {
    let progressBarHandler = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (Math.round(scrollTop) + clientHeight === scrollHeight) {
        dispatch(netxPageRequest(pageNumber));
      }
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  }, [dispatch, pageNumber]);

  return (
    <>
      <LoadingBar
        color={loadingBarColor}
        height={loadingBarHeight}
        progress={count}
        onLoaderFinished={onLoaderFinishedNumber}
        transitionTime={transitionTime}
        loaderSpeed={loaderSpeed}
      />

      <div className="wrapper">
        <Header />

        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
