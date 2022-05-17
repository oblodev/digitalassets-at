import React from "react";

import "./CryptoCurrencies.scss";
import CryptoTable from "./CryptoTable/CryptoTable";
import { motion } from "framer-motion";

function CryptoCurrencies() {
  return (
    <div className="app__crypto" id="Kryptowährungen">
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className="app__crypto-heading"
      >
        <h1 className="app__crypto-header">
          <span>// </span>Die 10 besten Kryptowährungen nach
          Marktkapitalisierung
        </h1>
        <div className="app__crypto-more">
          <a href="#">Mehr ...</a>
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
