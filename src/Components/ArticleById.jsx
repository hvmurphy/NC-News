import React, { Component } from "react";
import * as api from "../utils/api";

class ArticleById extends Component {
  state = { article: [] };
  render() {
    const { article } = this.state;
    return (
      <div>
        <h2>{article.title}</h2>
        <h3>
          Author: {article.author} <br />
          Topic: {article.topic}
        </h3>
        <p>{article.body}</p>
        <h4>Votes: {article.votes}</h4>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchArticleByID();
  };

  fetchArticleByID = () => {
    const { article_id } = this.props;
    api.getArticleByID(article_id).then(article => this.setState({ article }));
  };
}

export default ArticleById;
