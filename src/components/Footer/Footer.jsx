import React from "react";

import "./Footer.scss";
import logo from "../../images/logo_400x140.png";
import logoLight from "../../images/DA_logo_light.png";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

function Footer() {
  const year = new Date().getFullYear();
  const { mode } = useTheme();
  return (
    <motion.div
      whileInView={{ y: [40, 0], opacity: [0, 1] }}
      transition={{ duration: 0.65 }}
      className="app__footer"
    >
      <img src={mode === "light" ? logo : logoLight} alt="logo" />
      <p className={mode}>
        Created by{" "}
        <a href="https://dkostka.dev" className={mode}>
          dkostka.dev
        </a>{" "}
        &copy; {year}
      </p>
    </motion.div>
  );
}

export default Footer;
