import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

class Articles extends Component {
  render() {
    return (
      <div>
        <ArticleCard topic={this.props.topic} />
      </div>
    );
  }
}

export default Articles;
