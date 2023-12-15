import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, description, imageURL, newsURL } = this.props;
        return (
            <div className="my-3 newsitembody">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
