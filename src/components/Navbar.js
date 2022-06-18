import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="navbar-complete">
        <div className="logo">
        <img className="walmart-logo" src="//i5.walmartimages.com/dfw/63fd9f59-c77f/d2561c95-39b7-41df-955d-a2c29aadaad7/v1/bc03e9340a228bf9371431c31016cf6a.png" alt="" class="logo"></img>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/sign-out">contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;