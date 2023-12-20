import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";

const App = () => {
    const pageSize = 6;
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        alert(
            `This App's API will ONLY work on a localhost and I have used dummy static data as backup  for vercel, netlify, etc. hosting websites.
            Thus, it will not categories the news`
        );
    }, []);

    return (
        <div className="App">
            <Router>
                <NavBar />
                <LoadingBar color="#f11946" progress={progress} height={3} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <News
                                setProgress={setProgress}
                                pageSize={pageSize}
                                country={"in"}
                                category={"general"}
                                apikey={apiKey}
                            />
                        }
                    ></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route
                        exact
                        path="/business"
                        element={
                            <News
                                setProgress={setProgress}
                                key={"business"}
                                pageSize={pageSize}
                                country={"in"}
                                category={"business"}
                                apikey={apiKey}
                            />
                        }
                    ></Route>
                    <Route
                        exact
                        path="/entertainment"
                        element={
                            <News
                                setProgress={setProgress}
                                key={"entertainment"}
                                pageSize={pageSize}
                                country={"in"}
                                category={"entertainment"}
                                apikey={apiKey}
                            />
                        }
                    ></Route>
                    <Route
                        exact
                        path="/general"
                        element={
                            <News
                                setProgress={setProgress}
                                key={"general"}
                                pageSize={pageSize}
                                country={"in"}
                                category={"general"}
                                apikey={apiKey}
                            />
                        }
                    ></Route>
                    <Route
                        exact
                        path="/health"
                        element={
                            <News
                                setProgress={setProgress}
                                key={"health"}
                                pageSize={pageSize}
                                country={"in"}
                                category={"health"}
                                apikey={apiKey}
                            />
                        }
                    ></Route>
                    <Route
                        exact
                        path="/science"
                        element={
                            <News
                                setProgress={setProgress}
                                key={"science"}
                                pageSize={pageSize}
                                country={"in"}
                                category={"science"}
                                apikey={apiKey}
                            />
                        }
                    ></Route>
                    <Route
                        exact
                        path="/sports"
                        element={
                            <News
                                setProgress={setProgress}
                                key={"sports"}
                                pageSize={pageSize}
                                country={"in"}
                                category={"sports"}
                                apikey={apiKey}
                            />
                        }
                    ></Route>
                    <Route
                        exact
                        path="/technology"
                        element={
                            <News
                                setProgress={setProgress}
                                key={"technology"}
                                pageSize={pageSize}
                                country={"in"}
                                category={"technology"}
                                apikey={apiKey}
                            />
                        }
                    ></Route>
                </Routes>
            </Router>
        </div>
    );
};
export default App;
