import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="card my-4" style={{ maxWidth: "50rem" }}>
                <div className="card-body">
                    <h5 className="card-title">NewsMonkey</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                        A react app to display news fetched from NewsAPI
                    </h6>
                    <p className="card-text">
                        This project includes: <br />1) Responsive Design using
                        Bootstrap 5. <br />2) NPM's top loading bar. <br />3) NPM's infinite
                        scroll. <br />4) NewsAPI to fetch data. be
                        <br />5) if the API get's
                        exhausted, a set of demo data is provided for the app to
                        be demonstrated. <br />6) The NewsAPI is not available outside
                        a localhost.
                    </p>
                    <Link
                        to="https://master--newsmonkey-aamir-react.netlify.app/"
                        className="card-link"
                        target="_blank"
                    >
                        Hosted Link
                    </Link>
                    <Link
                        to="https://github.com/aamirGPT/newsapp"
                        className="card-link"
                        target="_blank"
                    >
                        Source Code
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default About;
