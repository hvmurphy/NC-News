import React, { Component } from "react";
import * as api from "../utils/api";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    const { username, article_id } = this.props;
    return (
      <div className="comments">
        <AddComment
          article_id={article_id}
          updateComments={this.updateComments}
          username={username}
        />
        <CommentsList
          comments={comments}
          username={username}
          article_id={article_id}
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
