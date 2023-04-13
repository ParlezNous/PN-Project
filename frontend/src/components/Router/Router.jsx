import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "@pages/Home";
import PersonnalScreen from "@pages/PersonnalScreen";

const Router = () => {
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/baba" element={<PersonnalScreen />} />
    </Routes>
  </BrowserRouter>;
};

export default Router;
