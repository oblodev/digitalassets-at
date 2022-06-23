import React, { useState, useEffect } from "react";
import "./News.scss";

import axios from "axios";
import NewsImg from "../../images/News.png";
import { motion } from "framer-motion";
import moment from "moment";
import "moment/locale/de";
import { useTheme } from "../../hooks/useTheme";

moment.locale("de");

function News() {
  const [germanNews, setGermanNews] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const { mode } = useTheme();

  const headers = {
    "x-api-key": process.env.REACT_APP_NEWS_API_KEY,
  };

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await axios(process.env.REACT_APP_NEWS_API, {
        headers,
      });

      setGermanNews(data.articles);
      setIsFetched(true);
    };

    fetchNews();
  }, []);

  return (
    <div className="app__news">
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className="app__news-heading"
      >
        <h2 className={`app__news-header ${mode}`} id="News">
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
              <div className={`news-card ${mode}`}>
                <div className="news-head">
                  <img
                    src={news?.media || NewsImg}
                    alt="news-image"
                    className="news-image"
                  />
                  <h3 key={news._id}>{news.title}</h3>
                </div>
                <p>{news.excerpt.substring(0, 120)} ...</p>
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
              <div className={`news-card ${mode}`}>
                <div className="news-head">
                  <img
                    src={news?.media || NewsImg}
                    alt="news-image"
                    className="news-image"
                  />
                  <h3 key={news._id}>{news.title}</h3>
                </div>
                <p>{news.excerpt.substring(0, 120)} ...</p>
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
