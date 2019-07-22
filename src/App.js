import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";
import * as api from "./utils/api";
import ArticlePage from "./Components/ArticlePage";
import Error from "./Components/Error";

class App extends Component {
  state = {
    topics: [],
    username: "jessjelly"
  };
  render() {
    const { topics, username } = this.state;
    return (
      <div className="App">
        <Header username={username} />
        <Nav topics={topics} />
        <Router className="main">
          <Articles path="/" />
          <Articles path="/articles/:topic" />
          <ArticlePage username={username} path="/article/:article_id" />
          <Error default path="/error" />
        </Router>
        <Footer />
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchTopics();
  };

  fetchTopics = () => {
    api.getTopics().then(topics => this.setState({ topics }));
  };
}

export default App;
