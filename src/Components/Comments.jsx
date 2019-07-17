import React, { Component } from "react";
import * as api from "../utils/api";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class Comments extends Component {
  state = {
    comments: [],
    username: "jessjelly"
  };
  render() {
    const { comments, username } = this.state;
    return (
      <div className="comments">
        <AddComment
          article_id={this.props.article_id}
          updateComments={this.updateComments}
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
    const { comments } = this.state;
    this.setState({ comments: [newComment, ...comments] });
  };
}

export default Comments;
