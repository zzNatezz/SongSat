import React from "react";
import SideBar from "./SideBar/SideBar";
import Home from "./Pages/Home/Home";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homePage-container">
        <SideBar />
        <Home />
    </div>
  );
}

export default HomePage;
