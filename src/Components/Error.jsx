import React from "react";

const Error = () => {
  return (
    <div>
      <h1>Sorry!</h1>
      {this.props.location && this.props.location.state && (
        <p>{this.props.location.state.message}</p>
      )}
    </div>
  );
};

export default Error;