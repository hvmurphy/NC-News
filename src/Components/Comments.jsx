import React, { Component } from "react";
import * as api from "../utils/api";

class Comments extends Component {
  state = {
    comments: [],
    username: "jessjelly",
    commentToBeDeleted: 0
  };
  render() {
    const { comments, username } = this.state;
    return (
      <div className="comments">
        <h3>Comments:</h3>
        <ul>
          {comments.map(comment => {
            if (username === comment.author) {
              return (
                <li key={comment.comment_id}>
                  <p>{comment.body}</p>
                  <p>Author: {comment.author}</p>
                  <h4>Votes: {comment.votes}</h4>
                  <form onSubmit={this.handleDelete}>
                    <button
                      type="submit"
                      id="commentToBeDeleted"
                      value={comment.comment_id}
                      onClick={this.handleOnClick}
                    >
                      Delete Comment
                    </button>
                  </form>
                </li>
              );
            } else {
              return (
                <li key={comment.comment_id}>
                  <p>{comment.body}</p>
                  <p>Author: {comment.author}</p>
                  <h4>Votes: {comment.votes}</h4>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = () => {
    const { article_id } = this.props;
    api.getComments(article_id).then(comments => this.setState({ comments }));
  };

  handleOnClick = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleDelete = event => {
    event.preventDefault();
    const { commentToBeDeleted } = this.state;
    api.deleteComment(commentToBeDeleted);
  };
}

export default Comments;
