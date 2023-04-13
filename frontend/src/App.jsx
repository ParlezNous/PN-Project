import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import PersonnalScreen from "@pages/PersonnalScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pscollect" element={<PersonnalScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
