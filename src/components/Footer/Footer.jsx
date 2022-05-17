import React from "react";

import "./Footer.scss";
import logo from "../../images/logo_400x140.png";
import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.div
      whileInView={{ y: [40, 0], opacity: [0, 1] }}
      transition={{ duration: 0.65 }}
      className="app__footer"
    >
      <img src={logo} alt="logo" />
      <p>Created by dkostka.dev &copy; {year}</p>
    </motion.div>
  );
}

export default Footer;
