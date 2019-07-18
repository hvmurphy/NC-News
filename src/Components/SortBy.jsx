import React, { Component } from "react";
import * as api from "../utils/api";

class SortBy extends Component {
  state = { sortby: "" };
  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="sort">
        Sort By:
        <button type="submit" value="date" onClick={this.handleOnClick}>
          Most Recent
        </button>
        <button
          type="submit"
          value="comment_count"
          onClick={this.handleOnClick}
        >
          Most Commented
        </button>
        <button type="submit" value="votes" onClick={this.handleOnClick}>
          Most Popular
        </button>
      </form>
    );
  }
  handleOnClick = event => {
    const sortby = event.target.value;
    this.setState({ sortby });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    const { sortby } = this.state;
    const { topic } = this.props;
    if (sortby === "date") {
      this.props.fetchArticles();
    } else {
      api.getSortedArticles(topic, sortby).then(sortedArticles => {
        this.props.sortArticles(sortedArticles);
      });
    }
  };
}

export default SortBy;
