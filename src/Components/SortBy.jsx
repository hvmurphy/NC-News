import React, { Component } from "react";
import * as api from "../utils/api";

class SortBy extends Component {
  state = { sortby: "" };
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        Sort By:
        <button type="submit" value="date" onClick={this.handleOnClick}>
          Date
        </button>
        <button
          type="submit"
          value="comment_count"
          onClick={this.handleOnClick}
        >
          Comment Count
        </button>
        <button type="submit" value="votes" onClick={this.handleOnClick}>
          Vote Count
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
