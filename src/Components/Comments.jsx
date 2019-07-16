import React, { Component } from "react";
import * as api from "../utils/api";

class Comments extends Component {
  state = {
    comments: [
      {
        comment_id: 20,
        votes: 0,
        created_at: "2017-08-06T19:33:51.940Z",
        author: "happyamy2016",
        body:
          "Libero explicabo aperiam esse quae. Dolores in ipsum vitae incidunt. Magnam ullam nihil voluptas enim veritatis et nobis architecto."
      },
      {
        comment_id: 84,
        votes: 0,
        created_at: "2017-06-21T03:05:41.598Z",
        author: "grumpy19",
        body:
          "Modi cum quo maxime sunt quia doloribus consequatur recusandae. Quam temporibus est non dolorem. Rerum dolorem nulla sed nam repellendus doloribus non accusantium. Id beatae est et a."
      }
    ]
  };
  render() {
    const { comments } = this.state;
    return (
      <div>
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
