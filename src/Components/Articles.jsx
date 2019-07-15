import React, { Component } from "react";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return <div className="articles">Some articles here</div>;
  }
}

export default Articles;
