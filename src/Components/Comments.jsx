import React, { Component } from "react";
import * as api from "../utils/api";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class Comments extends Component {
  state = {
    comments: [],
    username: "jessjelly"
    // commentToBeDeleted: 0
  };
  render() {
    const { comments, username } = this.state;
    return (
      <div className="comments">
        <AddComment
          article_id={this.props.article_id}
          fetchComments={this.fetchComments}
        />
        <CommentsList
          comments={comments}
          username={username}
          article_id={this.props.article_id}
          fetchComments={this.fetchComments}
        />
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

  updateComments = newComment => {
    const { comments } = this.State;
  };
}

export default Comments;
