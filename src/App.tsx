import React, { JSX } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favoritos";
import Notification from "./components/notification"; 

export default function App(): JSX.Element {
  return (
    <> 
      <NavBar />
      <Notification />   {}
      <main style={{ maxWidth: 900, margin: "20px auto", padding: "0 16px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </main>
    </>
  );
}
