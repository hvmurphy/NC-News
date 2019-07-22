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
    username: "jessjelly",
    users: []
  };
  render() {
    const { topics, username, users } = this.state;
    return (
      <div className="App">
        <Header
          users={users}
          updateUser={this.updateUser}
          username={username}
        />
        <Nav topics={topics} />
        <Router className="main">
          <Articles path="/" users={users} />
          <Articles path="/articles/:topic" users={users} />
          <ArticlePage
            username={username}
            path="/article/:article_id"
            users={users}
          />
          <Error default path="/error" />
        </Router>
        <Footer />
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchTopics();
    this.fetchUsers();
  };

  fetchTopics = () => {
    api.getTopics().then(topics => this.setState({ topics }));
  };

  fetchUsers = () => {
    api.getUsers().then(users => this.setState({ users }));
  };

  updateUser = username => {
    this.setState({ username });
  };
}

export default App;
