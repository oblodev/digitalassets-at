import React from "react";

import "./CryptoCurrencies.scss";
import CryptoTable from "./CryptoTable/CryptoTable";

function CryptoCurrencies() {
  return (
    <div className="app__crypto" id="Kryptowährungen">
      <div className="app__crypto-heading">
        <h1 className="app__crypto-header">
          <span>// </span>Die 10 besten Kryptowährungen nach
          Marktkapitalisierung
        </h1>
        <div className="app__crypto-more">
          <a href="#">Mehr ...</a>
        </div>
      </div>
      <div>
        <CryptoTable />
      </div>
    </div>
  );
}

export default CryptoCurrencies;
