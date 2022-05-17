import React from "react";

import "./Footer.scss";
import logo from "../../images/logo_400x140.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="app__footer">
      <img src={logo} alt="logo" />
      <p>Created by dkostka.dev &copy; {year}</p>
    </div>
  );
}

export default Footer;
