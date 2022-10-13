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

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await axios(
        "https://cryptopanic.com/api/v1/posts/?auth_token=8ecbb6f240ef822527cce301817f98f73dc55353&regions=de&public=true&metadata=true"
      );

      console.log(data.results);
      setGermanNews(data.results);
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
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className={`news-card ${mode}`}>
                <div className="news-head">
                  <img
                    src={news?.metadata.image || NewsImg}
                    alt="news-image"
                    className="news-image"
                  />
                  <h3 key={news.id}>{news.title}</h3>
                </div>
                <p>{news.metadata.description.substring(0, 120)}</p>

                <div className="news-infos">
                  <p className="news-rights">{news.source.domain}</p>
                  <p className="news-time">
                    {moment(news.at).startOf("hour").fromNow()}
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
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className={`news-card ${mode}`}>
                <div className="news-head">
                  <img
                    src={news?.metadata.image || NewsImg}
                    alt="news-image"
                    className="news-image"
                  />
                  <h3 key={news.id}>{news.title}</h3>
                </div>

                <div className="news-infos">
                  <p className="news-rights">{news.source.domain}</p>
                  <p className="news-time">
                    {moment(news.published_at).startOf("hour").fromNow()}
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
