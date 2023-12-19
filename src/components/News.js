import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import placeholder from "../images/placeholder.png";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const updateNews = async () => {
        props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(75);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    useEffect(() => {
        document.title = `NewsMonkey - ${capitalize(props.category)}`;
        updateNews(); // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${
            props.country
        }&page=${page + 1}&category=${props.category}&apiKey=${
            props.apikey
        }&pageSize=${props.pageSize}`;
        setPage(page + 1);
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: "30px" }}>
                NewsMonkey - Top {capitalize(props.category)} Headlines
            </h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length <= totalResults}
                loader={loading && <Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <NewsItem
                                        title={
                                            element.title
                                                ? element.title.slice(0, 70)
                                                : element.title
                                        }
                                        description={
                                            element.description
                                                ? element.description.slice(
                                                      0,
                                                      150
                                                  )
                                                : element.description
                                        }
                                        imageURL={
                                            element.urlToImage
                                                ? element.urlToImage
                                                : placeholder
                                        }
                                        newsURL={element.url}
                                        author={
                                            element.author
                                                ? element.author
                                                : "Unknown"
                                        }
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};
News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
};
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};
export default News;
