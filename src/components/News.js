import React, { Component } from "react";
import NewsItem from "./NewsItem";
import placeholder from "../images/placeholder.png";

export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loadings: false,
        };
    }

    async componentDidMount() {
        // Lifecycle Method It runs after render method is called.
        let url =
            "https://newsapi.org/v2/top-headlines?country=in&apiKey=afc5d809c17d4e55864f78ea149ddbd0";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });
    }

    render() {
        return (
            <div className="container my-3">
                {/* NewsAPI Key: afc5d809c17d4e55864f78ea149ddbd0 */}
                <h2>NewsMonkey - Top Headlines</h2>
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
            </div>
        );
    }
}
