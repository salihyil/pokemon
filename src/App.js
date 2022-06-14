import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage";
import SharedLayout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path=":pokeName" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
