import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import imgLogo from "../../assets/imgLogo.png";
import Dropdown from "../dropdown/dropdown";
const Navbar = () => {
  const weatherIcons = {
    Clear: "☀️",
    Rain: "🌧️",
    Clouds: "☁️",
    Snow: "❄️",
    Thunderstorm: "⛈️",
    Drizzle: "🌦️",
  };
  const [icon, setIcon] = useState("🌍");
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <img src={imgLogo} alt="logo" />
        </Link>
      </div>
      <div className="nav-links">
        <ul className="links">
          <li id="home">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="explore">
            Explore
            <div className="dropdown-item">
              <Dropdown></Dropdown>
            </div>
          </li>
          <li id="about">
            <Link to={"/about"}>About</Link>
          </li>
          <li id="contact">
            <Link to={"/moreInfo"}>More</Link>
          </li>
        </ul>
      </div>
      <div className="weather-info">
        <h1>27°C</h1>
        <p>Clear {icon}</p>
      </div>
    </div>
  );
};

export default Navbar;
