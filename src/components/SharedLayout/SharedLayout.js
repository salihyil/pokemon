import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { motion } from "framer-motion";

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
  const pageMotion = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: 100, transition: { duration: 1 } },
  };

  return (
    <motion.div>
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
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageMotion}
          >
            <Outlet />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SharedLayout;
