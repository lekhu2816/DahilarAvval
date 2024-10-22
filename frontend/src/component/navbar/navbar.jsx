import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import imgLogo from "../../assets/imgLogo.png";
import Dropdown from "../dropdown/dropdown";
const Navbar = () => {
  const navigate=useNavigate();
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
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="explore">
            Explore
            <div className="dropdown-item">
              <Dropdown></Dropdown>
            </div>
          </li>
          <li id="about">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li id="contact">
            <NavLink to={"/moreInfo"}>More</NavLink>
          </li>
        </ul>
      </div>
      <div className="section-left">
      <div className="weather-info">
        <h1>27°C</h1>
        <p>Clear {icon}</p>
      </div>
      <button className="donate-button">Donate</button>
      <button className="login-button" onClick={()=>navigate('/login')}>Login</button>
      </div>

    </div>
  );
};

export default Navbar;
