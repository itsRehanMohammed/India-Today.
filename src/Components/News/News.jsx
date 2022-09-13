// import("dotenv").config();
import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import "./news.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../Loading/Loading";

const News = ({ pageSize, category, setProgress }) => {
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [News, setNews] = useState([""]);
  const [totalResult, setTotalResult] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    setProgress(10);
    const country = "in";
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = ` https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}&page=${page}`;
    const app = await fetch(url);
    setProgress(30);
    const data = await app.json();
    setProgress(50);
    const articles = data.articles;
    setTotalResult(data.totalResults);
    setNews(articles);
    setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  const fetchMoreData = async () => {
    setLoading(true);
    setpage(page + 1);
    const country = "in";
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = ` https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}&page=${page}`;
    const app = await fetch(url);
    const data = await app.json();
    const articles = data.articles;
    setNews(News.concat(articles));
    setTotalResult(data.totalResults + pageSize);
    setLoading(false);
  };

  return (
    <>
      ({" "}
      <div className="container">
        <h1 style={{ textAlign: "center" }}>
          Latest <span>{category} </span> News By Rehan
        </h1>
        {loading && <Loading />}
        <InfiniteScroll
          dataLength={News.length}
          next={fetchMoreData}
          hasMore={News.length !== totalResult}
          loader={<Loading />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="news-overlay mt-2">
            {News.map((element) => {
              return (
                <NewsItems
                  title={element.title}
                  description={element.description}
                  image={element.urlToImage}
                  url={element.url}
                  date={element.publishedAt}
                  Author={element.author}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
      )
    </>
  );
};

export default News;
