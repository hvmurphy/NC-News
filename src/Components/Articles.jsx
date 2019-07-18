import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./ArticleCard";
import SortBy from "./SortBy";
import { navigate } from "@reach/router";

class Articles extends Component {
  state = { articles: [] };
  render() {
    const { articles } = this.state;
    const { topic } = this.props;
    return (
      <div className="articlesPage">
        <h2>{topic ? `Articles on ${topic}` : "All Articles"}</h2>
        <SortBy
          fetchArticles={this.fetchArticles}
          sortArticles={this.sortArticles}
          topic={topic}
        />

        <ArticleCard topic={topic} articles={articles} />
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchArticles();
  };

  fetchArticles = () => {
    const { topic } = this.props;
    api
      .getArticles(topic)
      .then(articles => {
        this.setState({ articles });
      })
      .catch(err => {
        navigate(`/error`, {
          state: { message: "Cannot find articles on requested topic" },
          replace: true
        });
      });
  };

  sortArticles = articles => {
    const sortedArticles = articles;
    this.setState({ articles: sortedArticles });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const newArticles = this.props.topic !== prevProps.topic;
    if (newArticles) {
      this.fetchArticles();
    }
  };
}

export default Articles;
