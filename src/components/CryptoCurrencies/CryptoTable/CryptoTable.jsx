import React, { useState, useEffect } from "react";
import "./CryptoTable.scss";

import axios from "axios";
import Table from "react-bootstrap/Table";
import NumberFormat from "react-number-format";

function CryptoTable() {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    const fetchCryptos = async () => {
      const { data } = await axios(process.env.REACT_APP_CRYPTO_API);

      setCryptos(data);
    };
    fetchCryptos();
    setInterval(() => {
      fetchCryptos();
    }, 60000);
  }, []);

  return (
    <div className="app__crypto-table-wrap">
      <Table hover responsive className="noWrap">
        <thead>
          <tr className="table-head-row">
            <th>#</th>
            <th>Kryptowährung</th>
            <th>Kurs</th>
            <th>Kurs 1h</th>
            <th className="ds">Kurs 24h</th>
            <th className="ds maxK">Kurs 7d</th>
            <th className="ds">Volumen 24h</th>
            <th>MarketCap</th>
          </tr>
        </thead>
        <tbody>
          {cryptos &&
            cryptos.map((crypto) => (
              <tr key={crypto.id}>
                <td>{crypto.market_cap_rank}</td>
                <td className="crypto-name">
                  <img
                    src={crypto.image}
                    alt="crypto-logo"
                    className="crypto-logo"
                  />
                  {crypto.name}{" "}
                </td>
                <td>
                  {crypto.current_price > 1
                    ? crypto.current_price.toFixed(2)
                    : crypto.current_price.toFixed(4)}
                  $
                </td>
                <td
                  className={
                    crypto.price_change_percentage_24h > 0 ? "green" : "red"
                  }
                >
                  {crypto.price_change_percentage_1h_in_currency.toFixed(2)}
                </td>
                <td
                  className={
                    crypto.price_change_percentage_24h > 0
                      ? "green ds"
                      : "red ds"
                  }
                >
                  {crypto.price_change_percentage_24h.toFixed(2)} %
                </td>
                <td
                  className={
                    crypto.price_change_percentage_7d_in_currency > 0
                      ? "green ds maxK"
                      : "red ds maxK"
                  }
                >
                  {crypto.price_change_percentage_7d_in_currency.toFixed(2)}%
                </td>
                <td className="ds">
                  {
                    <NumberFormat
                      thousandsGroupStyle="thousand"
                      value={crypto.total_volume}
                      decimalSeparator="."
                      displayType="text"
                      type="text"
                      thousandSeparator={true}
                      allowNegative={true}
                    />
                  }
                  $
                </td>
                <td>
                  {
                    <NumberFormat
                      thousandsGroupStyle="thousand"
                      value={crypto.market_cap}
                      decimalSeparator="."
                      displayType="text"
                      type="text"
                      thousandSeparator={true}
                      allowNegative={true}
                    />
                  }
                  $
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CryptoTable;
