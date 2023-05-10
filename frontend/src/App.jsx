import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import PersonnalScreen from "@pages/PersonnalScreen";
import SentSMS from "@pages/SentSMS";
import MessageScreen from "@pages/MessageScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pscollect" element={<PersonnalScreen />} />
        <Route path="sentsms" element={<SentSMS />} />
        <Route path="ABC123" element={<MessageScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
