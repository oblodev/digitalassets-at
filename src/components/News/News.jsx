import React, { useState, useEffect } from "react";
import "./News.scss";
import axios from "axios";

import letsgo from "../../images/letsgo.jpg";

function News() {
  const [germanNews, setGermanNews] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(
      "https://cryptopanic.com/api/v1/posts/?auth_token=8ecbb6f240ef822527cce301817f98f73dc55353&regions=de&metadata=true"
    )
      .then((response) => response.json())
      .then((data) => {
        setGermanNews(data.results);
        setIsFetched(true);
        console.log(data.results);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="app__news" id="News">
      <div className="app__news-heading">
        <h2 className="app__news-header">
          <span>// </span>Aktuelle Krypto-News
        </h2>
        <div></div>
      </div>
      <div className="app__news-show">
        {germanNews &&
          germanNews.slice(0, 4).map((news) => (
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-card">
                <div className="news-head">
                  <img
                    src={news?.metadata?.image || letsgo}
                    alt="news-image"
                    className="news-image"
                  />
                  <h3 key={news.id}>{news.title}</h3>
                </div>

                {news.metadata.description.substring(0, 120)}
              </div>
            </a>
          ))}
      </div>
      <div className="app__news-show">
        {germanNews &&
          germanNews.slice(5, 9).map((news) => (
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-card">
                <div className="news-head">
                  <img
                    src={news?.metadata?.image || letsgo}
                    alt="news-image"
                    className="news-image"
                  />
                  <h3 key={news.id}>{news.title}</h3>
                </div>
                <p>{`${news.metadata.description.substring(0, 100)} ...`}</p>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}

export default News;
