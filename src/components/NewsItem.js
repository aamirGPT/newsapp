import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, description, imageURL, newsURL, author, date } =
            this.props;
        return (
            <div className="my-3 newsitembody">
                <div className="card">
                    <img src={imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <small className="text-muted">
                            Last updated by {author} on {" "}
                            {new Date(date).getDate()}-
                            {new Date(date).getMonth()}-
                            {new Date(date).getFullYear()}
                        </small>
                        <div className="card-footer d-flex justify-content-between align-items-center mt-2">
                            <a
                                href={newsURL}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-sm btn-dark"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
