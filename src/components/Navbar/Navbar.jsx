import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

// styles
import "./Navbar.scss";
// images
import logo from "../../images/logo_400x140.png";
import logoLight from "../../images/DA_logo_light.png";
import { HashLink } from "react-router-hash-link";

// icons
import { BiBrightnessHalf } from "react-icons/bi";

function Navbar() {
  const { changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };
  console.log(mode);

  return (
    <div className={`app__navbar ${mode}`}>
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={mode === "dark" ? logoLight : logo} alt="logo" />
        </Link>
      </div>
      <div className="app__navbar-link-mode-wrapper">
        <ul className="app__navbar-links">
          {["Statistiken", "Kryptowährungen", "News"].map((item) => (
            <li key={`link-${item}`}>
              <div></div>
              <HashLink smooth to={`/#${item}`} className={`${mode}`}>
                {item}
              </HashLink>
            </li>
          ))}
        </ul>
        <div className="app__navbar-mode">
          <BiBrightnessHalf
            className="app__navbar-mode-icon"
            style={{
              filter: mode === "light" ? "invert(20%)" : "invert(100%)",
            }}
            onClick={toggleMode}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
