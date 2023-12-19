import React, { Component } from "react";
import NewsItem from "./NewsItem";
import placeholder from "../images/placeholder.png";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: "general",
    };
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
        };
        document.title = `NewsMonkey - ${
            this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)
        }`;
    }
    async updateNews() {
        this.props.setProgress(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(75);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updateNews();
    }
    handlePrevClick = async () => {
        await this.setState({
            page: this.state.page - 1,
        });
        this.updateNews();
    };
    handleNextClick = async () => {
        await this.setState({
            page: this.state.page + 1,
        });
        this.updateNews();
    };
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page + 1}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        });
    };

    render() {
        return (
            <>
                <h1 className="text-center my-4">
                    NewsMonkey - Top{" "}
                    {this.props.category.charAt(0).toUpperCase() +
                        this.props.category.slice(1)}{" "}
                    Headlines
                </h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={
                        this.state.articles.length <= this.state.totalResults
                    }
                    loader={this.state.loading && <Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element, index) => {
                                return (
                                    <div
                                        className="col-md-4"
                                        key={index}
                                    >
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
    }
}
