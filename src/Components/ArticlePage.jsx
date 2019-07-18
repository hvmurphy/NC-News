import React, { Component } from "react";
import Comments from "./Comments";
import ArticleText from "./ArticleText";

class ArticlePage extends Component {
  state = {
    article: []
  };
  render() {
    return (
      <div className="ArticlePage">
        <ArticleText article_id={this.props.article_id} />

        <Comments article_id={this.props.article_id} />
      </div>
    );
  }
}

export default ArticlePage;
