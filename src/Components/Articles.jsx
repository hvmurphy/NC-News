import React, { Component } from "react";
import * as api from "../utils/api";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div>
        <ul>
          {articles.map(article => {
            return <li key={article.article_id}>{article.title}</li>;
          })}
        </ul>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchArticles();
  };

  fetchArticles = () => {
    const { topic } = this.props;
    console.log(topic);
    api.getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    const newArticles = this.state !== prevState;
  };
}

export default Articles;
