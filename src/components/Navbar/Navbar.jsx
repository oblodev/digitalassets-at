import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import logo from "../../images/logo_400x140.png";

function Navbar() {
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["Kryptowährungen", "News"].map((item) => (
          <li className="" key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
