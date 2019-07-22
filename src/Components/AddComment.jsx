import React, { Component } from "react";
import * as api from "../utils/api";

class AddComment extends Component {
  state = {
    body: "",
    username: this.props.username,
    commentErr: ""
  };
  render() {
    console.log(this.state);
    return (
      <div className="addComment">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="body">Add Comment: </label>
          <br />
          <textarea
            rows="7"
            type="text"
            id="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Post</button>
        </form>
        <p className="commentErr">{this.state.commentErr}</p>
      </div>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value, commentErr: "" });
  };

  handleSubmit = event => {
    event.preventDefault();
    const comment = this.state;
    const { article_id } = this.props;
    if (comment.body.length >= 1) {
      api.postComment(article_id, comment).then(comment => {
        this.props.updateComments(comment);
      });
      this.setState({ body: "" });
    } else {
      this.setState({ commentErr: "Invalid comment!" });
    }
  };
}

export default AddComment;
