import React, { useState, useEffect } from "react";

import "./Stats.scss";

import NumberFormat from "react-number-format";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

function Stats() {
  const [globalStats, setGlobalStats] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [error, setError] = useState();

  const { mode } = useTheme();

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/global")
      .then((response) => response.json())
      .then((data) => {
        setGlobalStats(data.data);
        setIsFetched(true);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="app__home">
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className="app__home-heading"
      >
        <h1 className={`app__home-header ${mode}`} id="Statistiken">
          <span>// </span>Globale Krypto-Statistiken
        </h1>

        <div></div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__home-stats"
      >
        <div className={`app__home-card ${mode}`}>
          <h3>Krypto-Marktkapitalisierung</h3>
          <p className="p-text">
            {isFetched ? (
              <NumberFormat
                thousandsGroupStyle="thousand"
                value={globalStats.total_market_cap.usd.toFixed(2)}
                decimalSeparator="."
                displayType="text"
                type="text"
                thousandSeparator={true}
                allowNegative={true}
              />
            ) : (
              "Ermittle ..."
            )}
            $
          </p>
          <p
            className={
              globalStats.market_cap_change_percentage_24h_usd > 0
                ? "green m-bold"
                : "red m-bold"
            }
          >
            {isFetched
              ? globalStats.market_cap_change_percentage_24h_usd.toFixed(2)
              : "Ermittle ..."}
            % <span> in den letzten 24h</span>
          </p>{" "}
        </div>
        <div className={`app__home-card ${mode}`}>
          <h3>24-Stunden-Volumen</h3>
          <p className="p-text">
            {isFetched ? (
              <NumberFormat
                thousandsGroupStyle="thousand"
                value={globalStats.total_volume.usd.toFixed(2)}
                decimalSeparator="."
                displayType="text"
                type="text"
                thousandSeparator={true}
                allowNegative={true}
              />
            ) : (
              "Ermittle ..."
            )}
            $
          </p>
          <p className="none">.</p>
        </div>
        <div className={`app__home-card ${mode}`}>
          <h3>
            BTC Marktkapitalisierungs-
            <br />
            dominanz
          </h3>
          <p className="p-text turkis">
            {isFetched
              ? globalStats.market_cap_percentage.btc.toFixed(2)
              : "Ermittle ..."}
            %
          </p>
          <p className="none">.</p>
        </div>
        <div className={`app__home-card ${mode}`}>
          <h3>Anzahl Kryptowährungen</h3>
          <p></p>
          <p className="p-text">
            {isFetched ? globalStats.active_cryptocurrencies : "Ermittle ..."}
          </p>
          <p className="none">.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Stats;
