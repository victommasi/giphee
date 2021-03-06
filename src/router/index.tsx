import React from "react";
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to ="/home" />}/>
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default Router;