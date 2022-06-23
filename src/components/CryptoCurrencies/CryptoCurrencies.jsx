import React from "react";
import { Link } from "react-router-dom";
import "./CryptoCurrencies.scss";
import CryptoTable from "./CryptoTable/CryptoTable";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

function CryptoCurrencies() {
  const { mode } = useTheme();
  return (
    <div className="app__crypto">
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className="app__crypto-heading"
      >
        <h1 className={`app__crypto-header ${mode}`} id="Kryptowährungen">
          <span>// </span>Die 10 besten Kryptowährungen nach
          Marktkapitalisierung
        </h1>
        <div className={`app__crypto-more `}>
          <Link to="/kryptowaehrungen" className={mode}>
            Mehr Kryptos
          </Link>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
      >
        <CryptoTable />
      </motion.div>
    </div>
  );
}

export default CryptoCurrencies;
