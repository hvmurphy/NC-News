import React, { Component } from "react";
import * as api from "../utils/api";

class AddComment extends Component {
  state = {
    username: "jessjelly",
    body: ""
  };
  render() {
    return (
      <div className="addComment">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="body">Add Comment: </label>
          <input
            type="text"
            id="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const comment = this.state;
    const { article_id } = this.props;
    api.postComment(article_id, comment).then(comment => {
      this.props.updateComments(comment);
    });
    this.setState({ body: "" });
  };
}

export default AddComment;
