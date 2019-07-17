import React, { Component } from "react";
import { Link } from "@reach/router";

class ArticleCard extends Component {
  render() {
    const { articles } = this.props;
    return (
      <div>
        <ul>
          {articles.map(article => {
            return (
              <li key={article.article_id} className="article">
                <Link to={`/article/${article.article_id}`}>
                  {article.title}
                </Link>
                Comment Count: {article.comment_count}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default ArticleCard;
