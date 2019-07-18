import React, { Component } from "react";
import * as api from "../utils/api";
import { navigate } from "@reach/router";
import Votes from "./Votes";

class ArticleText extends Component {
  state = {
    article: []
  };
  render() {
    const { article } = this.state;
    return (
      <div className="articleText">
        <p className="topic">{article.topic} </p>
        <h2>{article.title}</h2>
        <p className="author">
          Author: {article.author} <span>Posted: {article.created_at}</span>
        </p>

        <p className="body">{article.body}</p>
        <Votes
          votes={article.votes}
          id={article.article_id}
          section="articles"
        />
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
          state: { message: "Article does not exist" },
          replace: true
        });
      });
  };
}

export default ArticleText;
