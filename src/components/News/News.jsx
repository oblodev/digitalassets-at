import React, { useState, useEffect } from "react";
import "./News.scss";
import axios from "axios";

import NewsImg from "../../images/News.png";
import { motion } from "framer-motion";

function News() {
  const [germanNews, setGermanNews] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_NEWS_API)
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
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className="app__news-heading"
      >
        <h2 className="app__news-header">
          <span>// </span>Aktuelle Krypto-News
        </h2>
        <div></div>
      </motion.div>
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className="app__news-show"
      >
        {germanNews &&
          germanNews.slice(0, 4).map((news) => (
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-card">
                <div className="news-head">
                  <img
                    src={news?.metadata?.image || NewsImg}
                    alt="news-image"
                    className="news-image"
                  />
                  <h3 key={news.id}>{news.title}</h3>
                </div>
                <p>{news.metadata.description.substring(0, 120)}</p>
              </div>
            </a>
          ))}
      </motion.div>
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className="app__news-show"
      >
        {germanNews &&
          germanNews.slice(5, 9).map((news) => (
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-card">
                <div className="news-head">
                  <img
                    src={news?.metadata?.image || NewsImg}
                    alt="news-image"
                    className="news-image"
                  />
                  <h3 key={news.id}>{news.title}</h3>
                </div>
                <p>{`${news.metadata.description.substring(0, 100)} ...`}</p>
              </div>
            </a>
          ))}
      </motion.div>
    </div>
  );
}

export default News;
