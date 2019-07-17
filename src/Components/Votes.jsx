import React, { Component } from "react";
import * as api from "../utils/api";

class Votes extends Component {
  state = { voteChange: 0 };
  render() {
    const { votes } = this.props;
    return (
      <div>
        <button onClick={() => this.vote(1)}> + </button>
        <p>Votes: {votes + this.state.voteChange}</p>
        <button onClick={() => this.vote(-1)}>- </button>
      </div>
    );
  }
  vote = increment => {
    const { id, section } = this.props;
    api.vote(id, increment, section);
    this.setState(
      state => (state.voteChange = this.state.voteChange + increment)
    );
  };
}
export default Votes;
