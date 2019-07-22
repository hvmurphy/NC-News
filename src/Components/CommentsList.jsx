import React, { Component } from "react";
import * as api from "../utils/api";
import Votes from "./Votes";
import moment from "moment";

class CommentsList extends Component {
  state = {
    commentToBeDeleted: 0
  };
  render() {
    const { comments, username } = this.props;
    return (
      <div className="commentslist">
        <h3>Comments:</h3>
        <ul>
          {comments.map(comment => {
            if (username === comment.author) {
              return (
                <li key={comment.comment_id} className="comment">
                  <p>{comment.body}</p>
                  <p className="author">
                    Author: {comment.author}{" "}
                    <span>Posted: {moment(comment.created_at).calendar()}</span>
                  </p>
                  <form onSubmit={this.handleDelete}>
                    <button
                      type="submit"
                      id="commentToBeDeleted"
                      value={comment.comment_id}
                      onClick={this.handleOnClick}
                    >
                      Delete Comment
                    </button>
                    <Votes
                      votes={comment.votes}
                      id={comment.comment_id}
                      section="comments"
                    />
                  </form>
                </li>
              );
            } else {
              return (
                <li key={comment.comment_id} className="comment">
                  <p>{comment.body}</p>
                  <p className="author">
                    Author: {comment.author}{" "}
                    <span>Posted: {moment(comment.created_at).calendar()}</span>
                  </p>
                  <Votes
                    votes={comment.votes}
                    id={comment.comment_id}
                    section="comments"
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }

  handleOnClick = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleDelete = event => {
    event.preventDefault();
    const { commentToBeDeleted } = this.state;
    api.deleteComment(commentToBeDeleted).then(() => {
      this.props.fetchComments();
    });
  };
}

export default CommentsList;
