import React from "react";
import "./Navbar.scss";
import logo from "../../images/logo_400x140.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        {["Kryptowährungen", "News"].map((item) => (
          <li key={`link-${item}`}>
            <div></div>
            <a href={`/#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
