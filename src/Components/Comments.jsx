import React, { Component } from "react";
import * as api from "../utils/api";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return (
      <div className="comments">
        <h3>Comments:</h3>
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.comment_id}>
                <p>{comment.body}</p>
                <p>Author: {comment.author}</p>
                <h4>Votes: {comment.votes}</h4>
              </li>
            );
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
}

export default Comments;
