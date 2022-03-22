import React from "react";
import { Routes, Route } from "react-router-dom";
import Body from "./pages/Body";
import Home from "./pages/Home";
import Rank from "./pages/Rank";
import Track from "./pages/Track";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:rank" element={<Rank />} />
      <Route path="/:body" element={<Body />} />
      <Route path="/:track" element={<Track />} />
    </Routes>
  );
}

export default App;
