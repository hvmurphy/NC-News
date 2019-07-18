import React from "react";
import { Link } from "@reach/router";

const Error = props => {
  return (
    <div className="error">
      {console.log(props)}
      <h1>Sorry, no can do!</h1>
      {props.location && props.location.state && (
        <p>{props.location.state.message}</p>
      )}

      <Link to="/">
        <button>Take me back! </button>
      </Link>
    </div>
  );
};

export default Error;
