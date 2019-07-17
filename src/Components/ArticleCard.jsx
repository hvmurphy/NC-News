import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class ArticleCard extends Component {
  state = {
    articles: []
  };
  render() {
    const { topic } = this.props;
    const { articles } = this.state;
    return (
      <div>
        <ul>
          <h2>{topic ? `Articles on ${topic}` : "All Articles"}</h2>
          {articles.map(article => {
            return (
              <li key={article.article_id} className="article">
                <Link to={`/article/${article.article_id}`}>
                  {article.title}
                </Link>
              </li>
            );
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
    api.getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    const newArticles = this.props.topic !== prevProps.topic;
    if (newArticles) {
      this.fetchArticles();
    }
  };
}
export default ArticleCard;
