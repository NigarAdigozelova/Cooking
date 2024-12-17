import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"


const MainRoot = () => {
  return (
    <div>
      <Navbar/>
      <Outlet /> {/* This renders nested routes */}
      <Footer/>
    </div>
  );
};

export default MainRoot;
