import React, { useState, useEffect } from "react";
import "./Cryptos.scss";

import axios from "axios";
import NumberFormat from "react-number-format";
import { motion } from "framer-motion";

function Cryptos() {
  const [cryptos, setCryptos] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [error, setError] = useState();
  const headers = {
    "X-RapidAPI-Key": "965544b128msh602fdb4437bf366p1faec3jsnd3773b9075b7",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  };

  useEffect(() => {
    const fetchCryptos = async () => {
      const { data } = await axios(process.env.REACT_APP_CRYPTOSITE_API, {
        headers,
      });

      setCryptos(data.data.coins);
      setIsFetched(true);
      console.log(data.data.coins);
    };

    fetchCryptos();
  }, []);

  return (
    <div className="cryptos">
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.55 }}
      >
        <h2>
          <span>//</span> Kryptowährungen
        </h2>
      </motion.div>

      <motion.div
        className="cryptos__wrapper"
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 1.15 }}
      >
        {isFetched &&
          cryptos.map((crypto) => (
            <div className="cryptos__card">
              <div className="cryptos__title">
                <h3>
                  <span className="violett">//</span> {crypto.name}
                </h3>
                <img
                  src={crypto.iconUrl}
                  alt="crypto-logo"
                  className="cryptos__logo"
                />
              </div>
              <div className="cryptos__info">
                <p>
                  Postition: <span className="m-bold">{crypto.rank}</span>
                </p>
                <p>
                  Kürzel: <span className="m-bold">{crypto.symbol}</span>
                </p>
                <p>
                  MarketCap:{" "}
                  <span className="m-bold">
                    {
                      <NumberFormat
                        thousandsGroupStyle="thousand"
                        value={crypto.marketCap}
                        decimalSeparator="."
                        displayType="text"
                        type="text"
                        thousandSeparator={true}
                        allowNegative={true}
                      />
                    }
                    $
                  </span>
                </p>
                <p>
                  Kurs 24h:{" "}
                  <span
                    className={
                      crypto.change > 0 ? "green ds m-bold" : "red ds m-bold"
                    }
                  >
                    {crypto.change}%
                  </span>
                </p>
              </div>
              <div className="cryptos__btn">
                <button className="cryptos-btn">Mehr info ...</button>
              </div>
            </div>
          ))}
      </motion.div>
    </div>
  );
}

export default Cryptos;
