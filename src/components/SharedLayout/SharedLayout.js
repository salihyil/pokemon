import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { motion } from "framer-motion";

import Header from "../Header";
import { pageMotion } from "./motions";

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
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageMotion}
    >
      <LoadingBar
        color={loadingBarColor}
        height={loadingBarHeight}
        progress={count}
        onLoaderFinished={onLoaderFinishedNumber}
        transitionTime={transitionTime}
        loaderSpeed={loaderSpeed}
      />

      <Header />

      <Outlet />
    </motion.div>
  );
};

export default SharedLayout;
