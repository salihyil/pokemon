import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import Header from "../Header";

import {
  loaderSpeed,
  loadingBarColor,
  loadingBarHeight,
  onLoaderFinishedNumber,
  transitionTime,
} from "./constants";
import "./styles.css";

const SharedLayout = () => {
  const { count } = useSelector((state) => state.pokeData);

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

      <div className="container">
        <Header />

        <div className="wrapper-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
