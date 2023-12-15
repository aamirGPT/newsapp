import React, { Component } from "react";
import NewsItem from "./NewsItem";
import placeholder from "../images/placeholder.png";

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loadings: false,
            page: 1,
        };
    }

    async componentDidMount() {
        // Lifecycle Method It runs after render method is called.
        let url =
            "https://newsapi.org/v2/top-headlines?country=in&apiKey=afc5d809c17d4e55864f78ea149ddbd0&pageSize=18";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=afc5d809c17d4e55864f78ea149ddbd0&page=${
            this.state.page - 1
        }&pageSize=18`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
        });
    };
    handleNextClick = async () => {
        if ( this.state.page + 1 > Math.ceil(this.state.totalResults / 18)) {
            
        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=afc5d809c17d4e55864f78ea149ddbd0&page=${
                this.state.page + 1
            }&pageSize=18`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
            });
        }
    };

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsMonkey - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.title}>
                                <NewsItem
                                    title={
                                        element.title
                                            ? element.title.slice(0, 40)
                                            : element.title
                                    }
                                    description={
                                        element.description
                                            ? element.description.slice(0, 80)
                                            : element.description
                                    }
                                    imageURL={
                                        element.urlToImage
                                            ? element.urlToImage
                                            : placeholder
                                    }
                                    newsURL={element.url}
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
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}
