import React, { Component } from "react";
import { Link } from "@reach/router";
import Votes from "./Votes";

class ArticleCard extends Component {
  render() {
    const { articles } = this.props;
    return (
      <ul className="articleList">
        {articles.map(article => {
          return (
            <li key={article.article_id} className="articleCard">
              <p className="topic">{article.topic}</p>
              <Link to={`/article/${article.article_id}`}>{article.title}</Link>
              <p className="author"> Author: {article.author}</p>
              <Votes
                votes={article.votes}
                id={article.article_id}
                section="articles"
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ArticleCard;
