import React, { Component } from "react";
import NewsItem from "./NewsItem";
import placeholder from "../images/placeholder.png";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


export default class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 12,
        category: "general",
    };
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            apikey: "afc5d809c17d4e55864f78ea149ddbd0",
            articles: [],
            loading: false,
            page: 1,
        };
    }

    async componentDidMount() {
        // Lifecycle Method It runs after render method is called.
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apikey}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.state.apikey}&page=${
            this.state.page - 1
            }&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false,
        });
    };
    handleNextClick = async () => {
        if (
            !(
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
            )
        ) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.state.apikey}&page=${
                this.state.page + 1
                }&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false,
            });
        }
    };

    render() {
        return (
            <div className="container my-3 px-4">
                <h1 className="text-center my-4">NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading &&
                        this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.title}>
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
                                        author={element.author? element.author : "Unknown"}
                                        date={element.publishedAt}
                                    />
                                </div>
                            );
                        })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handlePrevClick}
                        disabled={this.state.page <= 1}
                    >
                        &larr; Prev
                    </button>
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handleNextClick}
                        disabled={
                            this.state.page + 1 >
                            Math.ceil(
                                this.state.totalResults / this.props.pageSize
                            )
                        }
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}
