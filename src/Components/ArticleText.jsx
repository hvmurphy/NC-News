import React, { Component } from "react";
import * as api from "../utils/api";
import { navigate } from "@reach/router";

class ArticleText extends Component {
  state = {
    article: []
  };
  render() {
    const { article } = this.state;
    return (
      <div className="articleText">
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
    api
      .getArticleByID(article_id)
      .then(article => this.setState({ article }))
      .catch(err => {
        navigate(`/error`, {
          state: { message: err.msg },
          replace: true
        });
      });
  };
}

export default ArticleText;
