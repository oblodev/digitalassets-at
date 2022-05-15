import React, { useState, useEffect } from "react";
import "./CryptoTable.scss";

import axios from "axios";
import Table from "react-bootstrap/Table";
import NumberFormat from "react-number-format";

function CryptoTable() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );

      setCryptos(data);
      console.log(data);
    };

    fetchCryptos();
  }, []);

  return (
    <Table hover className="app__crypto-table">
      <thead>
        <tr className="table-head-row">
          <th>#</th>
          <th>Kryptowährung</th>
          <th>Kurs</th>
          <th>Change 24h</th>
          <th>Change 7d</th>
          <th>Volumen 24h</th>
          <th>Marktkapitalisierung</th>
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
                  : crypto.current_price.toFixed(4)}{" "}
                $
              </td>
              <td
                className={
                  crypto.price_change_percentage_24h > 0 ? "green" : "red"
                }
              >
                {crypto.price_change_percentage_24h.toFixed(1)} %
              </td>
              <td>
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
  );
}

export default CryptoTable;
