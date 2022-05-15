import React from "react";

import "./Home.scss";

function Home() {
  return (
    <div className="app__home">
      <div className="app__home-heading">
        <h1 className="app__home-header">
          <span>// </span>Globale Krypto-Statistiken
        </h1>
        <div></div>
      </div>
      <div className="app__home-stats">
        <div className="app__home-card">
          <h3>Krypto-Marktkapitalisierung</h3>
          <p>1.345.263.799.136 $</p>
          <p>1.1%</p>
        </div>
        <div className="app__home-card">
          <h3>24-Stunden-Volumen</h3>
          <p>1.345.263.799.136 $</p>
          <p>1.1%</p>
        </div>
        <div className="app__home-card">
          <h3>
            BTC <br />
            Marktkapitalisierungsdominanz
          </h3>
          <p>43,42 %</p>
        </div>
        <div className="app__home-card">
          <h3>Anzahl Kryptowährungen</h3>
          <p></p>
          <p>13600</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
