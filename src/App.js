import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
    pageSize = 6;
    apiKey = process.env.REACT_APP_NEWS_API_KEY;
    state = {
        progress: 0,
    };

    setProgress = (progress) => {
        this.setState({ progress: progress });
    };

    render() {
        return (
            <div className="App">
                <Router>
                    <NavBar />
                    <LoadingBar
                        color="#f11946"
                        progress={this.state.progress}
                        height={3}
                    />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    pageSize={this.pageSize}
                                    country={"in"}
                                    category={"general"}
                                    apikey={this.apiKey}
                                />
                            }
                        ></Route>
                        <Route exact path="/about" element={<About />}></Route>
                        <Route
                            exact
                            path="/business"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    key={"business"}
                                    pageSize={this.pageSize}
                                    country={"in"}
                                    category={"business"}
                                    apikey={this.apiKey}
                                />
                            }
                        ></Route>
                        <Route
                            exact
                            path="/entertainment"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    key={"entertainment"}
                                    pageSize={this.pageSize}
                                    country={"in"}
                                    category={"entertainment"}
                                    apikey={this.apiKey}
                                />
                            }
                        ></Route>
                        <Route
                            exact
                            path="/general"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    key={"general"}
                                    pageSize={this.pageSize}
                                    country={"in"}
                                    category={"general"}
                                    apikey={this.apiKey}
                                />
                            }
                        ></Route>
                        <Route
                            exact
                            path="/health"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    key={"health"}
                                    pageSize={this.pageSize}
                                    country={"in"}
                                    category={"health"}
                                    apikey={this.apiKey}
                                />
                            }
                        ></Route>
                        <Route
                            exact
                            path="/science"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    key={"science"}
                                    pageSize={this.pageSize}
                                    country={"in"}
                                    category={"science"}
                                    apikey={this.apiKey}
                                />
                            }
                        ></Route>
                        <Route
                            exact
                            path="/sports"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    key={"sports"}
                                    pageSize={this.pageSize}
                                    country={"in"}
                                    category={"sports"}
                                    apikey={this.apiKey}
                                />
                            }
                        ></Route>
                        <Route
                            exact
                            path="/technology"
                            element={
                                <News
                                    setProgress={this.setProgress}
                                    key={"technology"}
                                    pageSize={this.pageSize}
                                    country={"in"}
                                    category={"technology"}
                                    apikey={this.apiKey}
                                />
                            }
                        ></Route>
                    </Routes>
                </Router>
            </div>
        );
    }
}
