import React, { useState, useEffect } from "react";
import "./News.scss";

import NewsImg from "../../images/News.png";
import { motion } from "framer-motion";
import moment from "moment";
import "moment/locale/de";

moment.locale("de");

function News() {
  const [germanNews, setGermanNews] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [error, setError] = useState();
  const headers = {
    "x-api-key": "6GvgKwdR4S-mYcnnNGVBZIafwzEbMEKZ9fgBpNuT8Bs",
  };

  const params = { q: "krypto", lang: "de", sort_by: "relevancy", page: "1" };

  useEffect(() => {
    fetch(process.env.REACT_APP_NEWS_API, {
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setGermanNews(data.articles);
        setIsFetched(true);
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
        {isFetched &&
          germanNews.slice(0, 4).map((news) => (
            <a href={news.link} target="_blank" rel="noreferrer">
              <div className="news-card">
                <div className="news-head">
                  <img
                    src={news?.media || NewsImg}
                    alt="news-image"
                    className="news-image"
                  />
                  <h3 key={news._id}>{news.title}</h3>
                </div>
                <p>{news.excerpt.substring(0, 140)} ...</p>
                <div className="news-infos">
                  <p className="news-rights">{news.rights}</p>
                  <p className="news-time">
                    {moment(news.published_date).startOf("ss").fromNow()}
                  </p>
                </div>
              </div>
            </a>
          ))}
      </motion.div>
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className="app__news-show"
      >
        {isFetched &&
          germanNews.slice(5, 9).map((news) => (
            <a href={news.link} target="_blank" rel="noreferrer">
              <div className="news-card">
                <div className="news-head">
                  <img
                    src={news?.media || NewsImg}
                    alt="news-image"
                    className="news-image"
                  />
                  <h3 key={news._id}>{news.title}</h3>
                </div>
                <p>{news.excerpt.substring(0, 140)} ...</p>
                <div className="news-infos">
                  <p className="news-rights">{news.rights}</p>
                  <p className="news-time">
                    {moment(news.published_date).startOf("ss").fromNow()}
                  </p>
                </div>
              </div>
            </a>
          ))}
      </motion.div>
    </div>
  );
}

export default News;
