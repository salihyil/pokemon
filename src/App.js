import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage";
import SharedLayout from "./components/SharedLayout";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":pokeName" element={<AboutPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
