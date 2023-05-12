import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import PersonnalScreen from "@pages/PersonnalScreen";
import SentSMS from "@pages/SentSMS";
import MessageScreen from "@pages/MessageScreen";
import BoHome from "@pages/Admin/BoHome";
import BoMessageScreen from "@pages/Admin/BoMessageScreen";
import BoProfilUsers from "@pages/Admin/BoProfilUsers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pscollect" element={<PersonnalScreen />} />
        <Route path="sentsms" element={<SentSMS />} />
        <Route path="ABC123" element={<MessageScreen />} />
        <Route path="/admin" element={<BoHome />} />
        <Route path="/admin/message" element={<BoMessageScreen />} />
        <Route path="profil" element={<BoProfilUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
