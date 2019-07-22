import React, { Component } from "react";
import * as api from "../utils/api";

class Votes extends Component {
  state = { voteChange: 0, upDisabled: false, downDisabled: false };
  render() {
    const { votes } = this.props;
    return (
      <div className="votes">
        <button
          disabled={this.state.downDisabled}
          onClick={() => this.vote(-1)}
        >
          -
        </button>
        <p> Votes: {votes + this.state.voteChange}</p>
        <button disabled={this.state.upDisabled} onClick={() => this.vote(1)}>
          +
        </button>
      </div>
    );
  }
  vote = increment => {
    const { id, section } = this.props;
    api.vote(id, increment, section);
    this.setState(
      state => (state.voteChange = this.state.voteChange + increment)
    );
    if (increment < 1) {
      this.setState({ downDisabled: true, upDisabled: false });
    } else {
      this.setState({ upDisabled: true, downDisabled: false });
    }
  };
}
export default Votes;
