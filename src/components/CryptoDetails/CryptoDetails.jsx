import React, { useState, useEffect } from "react";

import "./CryptoDetails.scss";

import { useParams } from "react-router-dom";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Markup } from "interweave";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

function CryptoDetails() {
  const { coinId } = useParams();
  const [cryptoData, setCryptoData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sparklineData, setSparklineData] = useState([]);
  const { mode } = useTheme();

  const headers = {
    "X-RapidAPI-Key": process.env.REACT_APP_CRYPTO_API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  };

  useEffect(() => {
    const fetchCryptoData = async () => {
      const { data } = await axios(
        `https://coinranking1.p.rapidapi.com/coin/${coinId}`,
        {
          headers,
        }
      );
      setCryptoData(data.data.coin);
      setIsFetched(true);
      setSparklineData(data.data.coin.sparkline);
      setIsLoaded(true);
      console.log(data.data.coin);
    };

    fetchCryptoData();
  }, []);

  return (
    <div className={`cryptodetails ${mode}`}>
      {isFetched ? (
        <div className="cryptodetails__wrapper">
          <div className="cryptodetails__infos">
            <motion.div
              className="cryptodetails__title"
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <h3>
                <span style={{ color: cryptoData.color }}>// </span>
                {cryptoData.name} - ({cryptoData.symbol})
              </h3>
              <img src={cryptoData.iconUrl} alt="crypto-logo" />
            </motion.div>
            <motion.div
              className="cryptodetails__facts"
              whileInView={{ y: [80, 0], opacity: [0, 1] }}
              transition={{ duration: 0.95 }}
            >
              <p key={cryptoData.uuid}>
                ATH:{" "}
                <span>
                  {" "}
                  {parseFloat(cryptoData.allTimeHigh.price).toFixed(2)}$
                </span>
              </p>
              <p>
                Kurs 24h:{" "}
                <span className={cryptoData.change > 0 ? "green " : "red "}>
                  {" "}
                  {cryptoData.change}%
                </span>
              </p>

              <p>
                Kurs: <span> {parseFloat(cryptoData.price).toFixed(2)}$</span>
              </p>
            </motion.div>
            <motion.div
              whileInView={{ y: [80, 0], opacity: [0, 1] }}
              transition={{ duration: 1.05 }}
            >
              {isLoaded ? (
                <Sparklines data={sparklineData}>
                  <SparklinesLine color={cryptoData.color} />
                </Sparklines>
              ) : (
                "Loading ..."
              )}
            </motion.div>
            <motion.div
              className="cryptodetails__desc"
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1.65 }}
            >
              <Markup content={cryptoData.description} />
            </motion.div>
          </div>
          <div className="cryptodetails__footer">
            <p>
              Webseite:{" "}
              <a
                href={cryptoData.websiteUrl}
                style={{ color: cryptoData.color, fontWeight: 600 }}
                target="_blank"
                rel="noreferrer"
              >
                {cryptoData.websiteUrl}
              </a>
            </p>
          </div>
        </div>
      ) : (
        "Is Loading ..."
      )}
    </div>
  );
}

export default CryptoDetails;
